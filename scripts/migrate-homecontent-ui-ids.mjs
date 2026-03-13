import { createClient } from 'next-sanity'
import { existsSync, readFileSync } from 'node:fs'

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return
  const lines = readFileSync(filePath, 'utf8').split(/\r?\n/)

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf('=')
    if (idx === -1) continue

    const key = trimmed.slice(0, idx).trim()
    let value = trimmed.slice(idx + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }

    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
}

loadEnvFile('.env.local')
loadEnvFile('.env')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01'
const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_API_TOKEN ||
  process.env.SANITY_WRITE_TOKEN

const VALID_TAB_IDS = new Set(['all', 'doanh-nghiep', 'chuyen-gia', 'the-he-tre', 'dai-su'])
const VALID_FILTER_IDS = new Set(['all', 'ceremony', 'domestic', 'international', 'rural', 'other'])

function normalizeText(input) {
  return (input || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function inferTabId(id, label) {
  const nId = normalizeText(id)
  const nLabel = normalizeText(label)
  const source = `${nId} ${nLabel}`

  if (VALID_TAB_IDS.has(id)) return id
  if (source.includes('tat ca') || source === 'all') return 'all'
  if (source.includes('doanh nghiep')) return 'doanh-nghiep'
  if (source.includes('chuyen gia')) return 'chuyen-gia'
  if (source.includes('the he tre')) return 'the-he-tre'
  if (source.includes('dai su')) return 'dai-su'
  return id || 'all'
}

function inferFilterId(id, label) {
  const nId = normalizeText(id)
  const nLabel = normalizeText(label)
  const source = `${nId} ${nLabel}`

  if (VALID_FILTER_IDS.has(id)) return id
  if (source.includes('tat ca') || source === 'all') return 'all'
  if (source.includes('le cong bo')) return 'ceremony'
  if (source.includes('domestic') || source.includes('trong nuoc') || source.includes('hoi cho')) return 'domestic'
  if (source.includes('international') || source.includes('quoc te')) return 'international'
  if (source.includes('rural') || source.includes('nong thon') || source.includes('ve nong thon')) return 'rural'
  if (source.includes('khac') || source.includes('other')) return 'other'

  if (nId === 'le cong bo') return 'ceremony'
  if (nId === 'hoi cho') return 'domestic'
  if (nId === 'nong thon') return 'rural'
  if (nId === 'khac') return 'other'

  return id || 'all'
}

function normalizeTabs(tabs = []) {
  let changed = false
  const normalized = tabs.map((tab) => {
    const nextId = inferTabId(tab?.id, tab?.label)
    if (nextId !== tab?.id) changed = true
    return { ...tab, id: nextId }
  })
  return { changed, normalized }
}

function normalizeFilters(filters = []) {
  let changed = false
  const normalized = filters.map((filter) => {
    const nextId = inferFilterId(filter?.id, filter?.label)
    if (nextId !== filter?.id) changed = true
    return { ...filter, id: nextId }
  })
  return { changed, normalized }
}

async function main() {
  if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
  if (!dataset) throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')

  const apply = process.argv.includes('--apply')
  if (apply && !token) {
    throw new Error('Missing write token. Set one of: SANITY_API_WRITE_TOKEN, SANITY_API_TOKEN, SANITY_WRITE_TOKEN')
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  })

  const docs = await client.fetch(`*[_type == "homeContent"]{_id, name, testimonialSection, photoGallerySection}`)

  const plans = docs
    .map((doc) => {
      const currentTabs = doc?.testimonialSection?.tabs || []
      const currentFilters = doc?.photoGallerySection?.filters || []

      const { changed: tabsChanged, normalized: tabs } = normalizeTabs(currentTabs)
      const { changed: filtersChanged, normalized: filters } = normalizeFilters(currentFilters)

      return {
        _id: doc._id,
        name: doc.name || '(no name)',
        tabsChanged,
        filtersChanged,
        tabs,
        filters,
      }
    })
    .filter((p) => p.tabsChanged || p.filtersChanged)

  if (plans.length === 0) {
    console.log('No homeContent documents need tab/filter ID normalization.')
    return
  }

  console.log(`Found ${plans.length} homeContent document(s) to normalize.`)
  plans.forEach((p) => {
    console.log(`- ${p._id} (${p.name}): tabs=${p.tabsChanged ? 'update' : 'ok'}, filters=${p.filtersChanged ? 'update' : 'ok'}`)
  })

  if (!apply) {
    console.log('\nDry-run mode. No data was changed.')
    console.log('Run with --apply to write updates: npm run sanity:migrate:homecontent-ids:apply')
    return
  }

  const tx = client.transaction()
  plans.forEach((p) => {
    if (p.tabsChanged) {
      tx.patch(p._id, { set: { 'testimonialSection.tabs': p.tabs } })
    }
    if (p.filtersChanged) {
      tx.patch(p._id, { set: { 'photoGallerySection.filters': p.filters } })
    }
  })

  await tx.commit()
  console.log(`Updated ${plans.length} homeContent document(s).`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

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

const VALID_CATEGORIES = new Set(['doanh-nghiep', 'chuyen-gia', 'the-he-tre', 'dai-su'])

function inferCategory(doc) {
  const role = (doc.role || '').toLowerCase()
  const author = (doc.author || '').toLowerCase()
  const quote = (doc.quote || '').toLowerCase()
  const text = `${role} ${author} ${quote}`

  if (/(gs|ts|chuyen gia|vien truong|giao su|tien si|economist)/.test(text)) return 'chuyen-gia'
  if (/(start-up|startup|tre|the he tre|founder tre|khoi nghiep)/.test(text)) return 'the-he-tre'
  if (/(dai su|nsut|nghe si|ambassador)/.test(text)) return 'dai-su'
  return 'doanh-nghiep'
}

async function main() {
  if (!projectId) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
  }

  if (!dataset) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')
  }

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

  const docs = await client.fetch(`*[_type == "testimonial"]{_id, author, role, quote, category}`)

  const planned = docs
    .map((doc) => {
      const current = doc.category
      const target = VALID_CATEGORIES.has(current) ? current : inferCategory(doc)
      const needsPatch = current !== target
      return { ...doc, target, needsPatch }
    })
    .filter((d) => d.needsPatch)

  if (planned.length === 0) {
    console.log('No testimonial documents need category updates.')
    return
  }

  console.log(`Found ${planned.length} testimonial document(s) to update.`)
  planned.forEach((d) => {
    console.log(`- ${d._id}: ${d.category || '(empty)'} -> ${d.target} | ${d.author || 'Unknown author'}`)
  })

  if (!apply) {
    console.log('\nDry-run mode. No data was changed.')
    console.log('Run with --apply to write updates: npm run sanity:migrate:testimonial-category:apply')
    return
  }

  const tx = client.transaction()
  planned.forEach((d) => {
    tx.patch(d._id, { set: { category: d.target } })
  })

  await tx.commit()
  console.log(`Updated ${planned.length} testimonial document(s).`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

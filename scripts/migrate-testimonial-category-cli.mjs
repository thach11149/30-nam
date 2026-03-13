import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2024-03-01' })

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
  const apply = process.argv.includes('--apply')

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

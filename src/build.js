'use strict'

const path = require('path')
const fs = require('fs')
const { htmlPage, renderMarkdown, PAGES } = require('./template')

const LANGS = [
  { id: 'en', dir: '../markdown' },
  { id: 'pt-br', dir: '../markdown-pt-br' },
]

async function build() {
  const distDir = path.join(__dirname, '..', 'dist')
  let total = 0

  for (const { id, dir } of LANGS) {
    const outDir = path.join(distDir, id)
    fs.mkdirSync(outDir, { recursive: true })

    for (const slug of PAGES) {
      const mdPath = path.join(__dirname, dir, slug, 'index.md')
      if (!fs.existsSync(mdPath)) {
        console.warn(`warning: ${dir}/${slug}.md not found, skipping`)
        continue
      }
      const md = fs.readFileSync(mdPath, 'utf-8')
      const content = renderMarkdown(md, id)
      const html = htmlPage(content, slug, id)
      const slugDir = path.join(outDir, slug)
      fs.mkdirSync(slugDir, { recursive: true })
      fs.writeFileSync(path.join(slugDir, 'index.html'), html)
      total++
    }
    console.log(`[${id}] ${PAGES.length} pages built`)
  }

  // redirect root to pt-br/basic
  fs.writeFileSync(
    path.join(distDir, 'index.html'),
    `<meta http-equiv="refresh" content="0;url=/pt-br/${PAGES[0]}">`
  )

  console.log(`\nDone! ${total} files in dist/`)
}

build().catch(err => { console.error(err); process.exit(1) })

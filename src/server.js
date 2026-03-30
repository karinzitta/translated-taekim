'use strict'

const fastify = require('fastify')({ logger: false })
const path = require('path')
const fs = require('fs')
const { htmlPage, renderMarkdown, PAGES, PAGE_SET } = require('./template')

const isProd = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 3000

const LANG_DIR = { 'en': 'markdown', 'pt-br': 'markdown-pt-br' }

fastify.get('/', async (req, reply) => {
  reply.redirect(`/pt-br/${PAGES[0]}`)
})

fastify.get('/:lang/:slug', async (req, reply) => {
  const { lang, slug } = req.params

  if (!(lang in LANG_DIR) || !PAGE_SET.has(slug)) {
    return reply.code(404).type('text/plain').send('Not found')
  }

  if (isProd) {
    const htmlPath = path.join(__dirname, '..', 'dist', lang, slug, 'index.html')
    if (!fs.existsSync(htmlPath)) {
      return reply.code(404).type('text/plain')
        .send('Build not found. Run "npm run build" first.')
    }
    return reply.type('text/html').send(fs.readFileSync(htmlPath, 'utf-8'))
  }

  // dev: render markdown on the fly
  const mdPath = path.join(__dirname, LANG_DIR[lang], slug, 'index.md')
  if (!fs.existsSync(mdPath)) {
    return reply.code(404).type('text/plain').send('Markdown file not found')
  }
  const content = renderMarkdown(fs.readFileSync(mdPath, 'utf-8'), lang)
  reply.type('text/html').send(htmlPage(content, slug, lang))
})

fastify.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
  if (err) { console.error(err); process.exit(1) }
  const mode = isProd ? 'production (pre-built files)' : 'development (dynamic markdown)'
  console.log(`Running in ${mode} mode`)
  console.log(`http://localhost:${PORT}`)
})

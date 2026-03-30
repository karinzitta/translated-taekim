# Taekim Grammar — Translated Reader

A web reader for [Tae Kim's Guide to Japanese Grammar](https://guidetojapanese.org/learn/grammar), built to give Brazilian students easier access to the guide in their own language — with more languages planned for the future.

This project was built with the help of AI.

---

## What it does

- Scrapes the original English grammar pages from guidetojapanese.org
- Serves them alongside translated versions (currently Portuguese/Brazilian)
- Provides a clean reading interface with sidebar navigation, dark mode, and progress tracking

## Getting started

```bash
npm install
```

**Development** (renders markdown on the fly):
```bash
npm run dev
```

**Production** (pre-builds static HTML to `dist/`):
```bash
npm run build
npm start
```

## Adding a new language

1. Add translated markdown files to `markdown-<lang>/`
2. Register the language in `src/build.js` (`LANGS`) and `src/server.js` (`LANG_DIR`)
3. Add labels for all pages in `src/template.js` (`PAGE_LABELS`)

## Scraping the source pages

```bash
node src/index.js
```

Fetches all 62 grammar pages from guidetojapanese.org and saves them as markdown to `markdown/`.

---

Original content by [Tae Kim](https://guidetojapanese.org). This project is a personal study tool and is not affiliated with the original author.

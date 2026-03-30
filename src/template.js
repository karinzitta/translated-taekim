'use strict'

const { marked } = require('marked')

const TAEKIM_RE = /https?:\/\/guidetojapanese\.org\/learn\/grammar\/([A-Za-z0-9_-]+)/g

function renderMarkdown(md, lang) {
  const html = marked(md)
  return html.replace(TAEKIM_RE, (_, slug) => `/${lang}/${slug}`)
}

const PAGES = [
  'basic', 'stateofbeing', 'stateofbeing_ex', 'particlesintro', 'particlesintro_ex',
  'adjectives', 'adjectives_ex', 'verbs', 'verbs_ex', 'negativeverbs',
  'negativeverbs_ex', 'past_tense', 'pasttense_ex', 'verbparticles', 'in-transitive',
  'clause', 'nounparticles', 'adverbs', 'essential', 'polite',
  'people', 'question', 'compound', 'teform', 'potential',
  'surunaru', 'conditionals', 'must', 'desire', 'actionclause',
  'define', 'try', 'favors', 'requests', 'numbers',
  'slang', 'sentence_ending', 'specialexpressions', 'causepass', 'honorific',
  'unintended', 'genericnouns', 'certainty', 'amount', 'similarity',
  'comparison', 'easyhard', 'negativeverbs2', 'reasoning', 'timeactions',
  'nochange', 'advanced', 'formal', 'should', 'even',
  'signs', 'feasibility', 'tendency', 'volitional2', 'covered',
  'immedate', 'other',
]

const PAGE_LABELS = {
  en: {
    basic: 'Basic Structures',
    stateofbeing: 'State of Being',
    stateofbeing_ex: 'State of Being (Ex.)',
    particlesintro: 'Intro to Particles',
    particlesintro_ex: 'Particles (Ex.)',
    adjectives: 'Adjectives',
    adjectives_ex: 'Adjectives (Ex.)',
    verbs: 'Verbs',
    verbs_ex: 'Verbs (Ex.)',
    negativeverbs: 'Negative Verbs',
    negativeverbs_ex: 'Negative Verbs (Ex.)',
    past_tense: 'Past Tense',
    pasttense_ex: 'Past Tense (Ex.)',
    verbparticles: 'Verb Particles',
    'in-transitive': 'Transitive & Intransitive',
    clause: 'Relative Clauses',
    nounparticles: 'Noun Particles',
    adverbs: 'Adverbs',
    essential: 'Essential Grammar',
    polite: 'Polite Form',
    people: 'Addressing People',
    question: 'Question Marker',
    compound: 'Compound Sentences',
    teform: 'Te-form',
    potential: 'Potential Form',
    surunaru: 'Using する and なる',
    conditionals: 'Conditionals',
    must: 'Must / Have To',
    desire: 'Desire & Suggestions',
    actionclause: 'Action Clauses',
    define: 'Defining with いう',
    try: 'Trying Things',
    favors: 'Giving & Receiving',
    requests: 'Making Requests',
    numbers: 'Numbers & Counting',
    slang: 'Casual Patterns & Slang',
    sentence_ending: 'Sentence-ending Particles',
    specialexpressions: 'Special Expressions',
    causepass: 'Causative & Passive',
    honorific: 'Honorific & Humble',
    unintended: 'Unintended Actions',
    genericnouns: 'Generic Nouns',
    certainty: 'Degrees of Certainty',
    amount: 'Expressing Amounts',
    similarity: 'Similarity & Hearsay',
    comparison: 'Comparisons',
    easyhard: 'Easy & Hard Actions',
    negativeverbs2: 'More Negative Verbs',
    reasoning: 'Hypothesizing',
    timeactions: 'Time-specific Actions',
    nochange: 'Lack of Change',
    advanced: 'Advanced Grammar',
    formal: 'Formal Expressions',
    should: 'Things That Should Be',
    even: 'Minimum Expectation',
    signs: 'Showing Signs',
    feasibility: 'Non-feasibility',
    tendency: 'Tendencies',
    volitional2: 'Advanced Volitional',
    covered: 'Covered by Something',
    immedate: 'Immediate Events',
    other: 'Other Grammar',
  },
  'pt-br': {
    basic: 'Estruturas Básicas',
    stateofbeing: 'Estado de Ser',
    stateofbeing_ex: 'Estado de Ser (Ex.)',
    particlesintro: 'Intro às Partículas',
    particlesintro_ex: 'Partículas (Ex.)',
    adjectives: 'Adjetivos',
    adjectives_ex: 'Adjetivos (Ex.)',
    verbs: 'Verbos',
    verbs_ex: 'Verbos (Ex.)',
    negativeverbs: 'Verbos Negativos',
    negativeverbs_ex: 'Verbos Negativos (Ex.)',
    past_tense: 'Tempo Passado',
    pasttense_ex: 'Tempo Passado (Ex.)',
    verbparticles: 'Partículas Verbais',
    'in-transitive': 'Transitivo e Intransitivo',
    clause: 'Orações Relativas',
    nounparticles: 'Partículas de Substantivo',
    adverbs: 'Advérbios',
    essential: 'Gramática Essencial',
    polite: 'Forma Polida',
    people: 'Tratando Pessoas',
    question: 'Marcador de Pergunta',
    compound: 'Frases Compostas',
    teform: 'Forma-te',
    potential: 'Forma Potencial',
    surunaru: 'Usando する e なる',
    conditionals: 'Condicionais',
    must: 'Obrigação',
    desire: 'Desejo e Sugestões',
    actionclause: 'Orações de Ação',
    define: 'Definindo com いう',
    try: 'Tentando Coisas',
    favors: 'Dar e Receber',
    requests: 'Fazendo Pedidos',
    numbers: 'Números e Contagem',
    slang: 'Linguagem Casual e Gírias',
    sentence_ending: 'Partículas Finais',
    specialexpressions: 'Expressões Especiais',
    causepass: 'Causativo e Passivo',
    honorific: 'Honorífico e Humilde',
    unintended: 'Ações Não Intencionais',
    genericnouns: 'Substantivos Genéricos',
    certainty: 'Graus de Certeza',
    amount: 'Expressando Quantidades',
    similarity: 'Similaridade e Boato',
    comparison: 'Comparações',
    easyhard: 'Ações Fáceis e Difíceis',
    negativeverbs2: 'Mais Verbos Negativos',
    reasoning: 'Hipóteses e Conclusões',
    timeactions: 'Ações no Tempo',
    nochange: 'Falta de Mudança',
    advanced: 'Gramática Avançada',
    formal: 'Expressões Formais',
    should: 'O Que Deveria Ser',
    even: 'Expectativa Mínima',
    signs: 'Demonstrando Sinais',
    feasibility: 'Inviabilidade',
    tendency: 'Tendências',
    volitional2: 'Volitivo Avançado',
    covered: 'Coberto por Algo',
    immedate: 'Eventos Imediatos',
    other: 'Outras Gramáticas',
  },
}

const PAGE_SET = new Set(PAGES)

const ARROW_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`
const ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
const ICON_MOON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
const ICON_SUN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
const ICON_MENU = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`

function buildSidebar(lang, currentSlug) {
  const labels = PAGE_LABELS[lang]
  const items = PAGES.map((slug, i) => {
    const active = slug === currentSlug ? ' class="active"' : ''
    return `<li${active}><a href="/${lang}/${slug}"><span class="num">${i + 1}</span>${labels[slug]}</a></li>`
  }).join('\n      ')
  return `<ul>${items}</ul>`
}

function htmlPage(content, slug, lang) {
  const idx = PAGES.indexOf(slug)
  const pageNum = idx + 1
  const total = PAGES.length

  const prevSlug = idx > 0 ? PAGES[idx - 1] : null
  const nextSlug = idx < total - 1 ? PAGES[idx + 1] : null

  const prevLabel = lang === 'pt-br' ? 'Anterior' : 'Previous'
  const nextLabel = lang === 'pt-br' ? 'Próximo' : 'Next'

  const prev = prevSlug
    ? `<a class="nav-link" href="/${lang}/${prevSlug}">${ARROW_LEFT}<span>${prevLabel}</span></a>`
    : '<span></span>'
  const next = nextSlug
    ? `<a class="nav-link" href="/${lang}/${nextSlug}"><span>${nextLabel}</span>${ARROW_RIGHT}</a>`
    : '<span></span>'

  const otherLang = lang === 'en' ? 'pt-br' : 'en'
  const otherLangLabel = lang === 'en' ? 'PT-BR' : 'EN'
  const siteTitle = lang === 'pt-br' ? 'Guia de Gramática Japonesa' : 'Guide to Japanese Grammar'
  const progress = Math.round((pageNum / total) * 100)

  return `<!DOCTYPE html>
<html lang="${lang === 'pt-br' ? 'pt-BR' : 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteTitle} – ${PAGE_LABELS[lang][slug]}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    /* ── Variables ── */
    :root {
      --bg: #ffffff;
      --bg-sidebar: #f7f7f7;
      --bg-sidebar-hover: #eef2f7;
      --bg-active: #e8f0f8;
      --text: #333333;
      --text-muted: #767676;
      --text-sidebar: #444;
      --link: #0073aa;
      --link-hover: #005580;
      --border: #eeeeee;
      --border-strong: #bbbbbb;
      --header-bg: #ffffff;
      --header-border: #eeeeee;
      --progress-bg: #e8e8e8;
      --progress-fill: #0073aa;
      --active-text: #0055aa;
      --active-border: #0073aa;
      --num-color: #aaa;
      --table-head-border: #bbb;
      --shadow: 0 1px 3px rgba(0,0,0,.07);
    }
    [data-theme="dark"] {
      --bg: #1a1a1a;
      --bg-sidebar: #111111;
      --bg-sidebar-hover: #222222;
      --bg-active: #1a2a3a;
      --text: #e0e0e0;
      --text-muted: #888;
      --text-sidebar: #bbb;
      --link: #5ba8d4;
      --link-hover: #7ec0e8;
      --border: #2a2a2a;
      --border-strong: #555;
      --header-bg: #111111;
      --header-border: #2a2a2a;
      --progress-bg: #2a2a2a;
      --progress-fill: #5ba8d4;
      --active-text: #7ec0e8;
      --active-border: #5ba8d4;
      --num-color: #555;
      --table-head-border: #555;
      --shadow: 0 1px 3px rgba(0,0,0,.4);
    }

    /* ── Reset ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Libre Franklin', 'Helvetica Neue', helvetica, arial, sans-serif;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.66;
      color: var(--text);
      background: var(--bg);
      transition: background 0.2s, color 0.2s;
    }

    /* ── Header ── */
    .site-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 200;
      height: 52px;
      background: var(--header-bg);
      border-bottom: 1px solid var(--header-border);
      box-shadow: var(--shadow);
      display: flex;
      align-items: center;
    }
    .header-inner {
      width: 100%;
      padding: 0 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--text);
      padding: 4px;
      border-radius: 4px;
      line-height: 0;
    }
    .menu-btn:hover { background: var(--bg-sidebar-hover); }
    .site-title {
      font-size: 0.9375rem;
      font-weight: 700;
      color: var(--text);
      text-decoration: none;
      white-space: nowrap;
      flex: 1;
    }
    .site-title:hover { color: var(--link); }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .icon-btn {
      background: none;
      border: 1px solid var(--border-strong);
      cursor: pointer;
      color: var(--text-muted);
      padding: 5px 8px;
      border-radius: 4px;
      line-height: 0;
      transition: color 0.15s, border-color 0.15s, background 0.15s;
      display: flex;
      align-items: center;
      gap: 5px;
      font-family: inherit;
      font-size: 0.8125rem;
      height: 28px;
    }
    .icon-btn:hover { color: var(--link); border-color: var(--link); }
    .lang-btn { font-weight: 600; }

    /* ── Progress bar ── */
    .progress-bar-wrap {
      position: fixed;
      top: 52px; left: 0; right: 0;
      z-index: 199;
      height: 3px;
      background: var(--progress-bg);
    }
    .progress-bar-fill {
      height: 100%;
      width: ${progress}%;
      background: var(--progress-fill);
    }

    /* ── Layout ── */
    .layout {
      display: flex;
      padding-top: 55px;
      min-height: 100vh;
    }

    /* ── Sidebar ── */
    .sidebar {
      position: fixed;
      top: 55px; right: 0; bottom: 0;
      width: 260px;
      background: var(--bg-sidebar);
      border-left: 1px solid var(--border);
      overflow-y: auto;
      overflow-x: hidden;
      z-index: 100;
      transition: transform 0.25s ease;
    }
    .sidebar::-webkit-scrollbar { width: 4px; }
    .sidebar::-webkit-scrollbar-track { background: transparent; }
    .sidebar::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 2px; }

    .sidebar ul { list-style: none; padding: 0.75rem 0; margin: 0 }
    .sidebar li a {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      color: var(--text-sidebar);
      text-decoration: none;
      font-size: 0.8125rem;
      line-height: 1.4;
      transition: background 0.12s, color 0.12s;
      border-left: 3px solid transparent;
    }
    .sidebar li a:hover {
      background: var(--bg-sidebar-hover);
      color: var(--link);
    }
    .sidebar li.active a {
      background: var(--bg-active);
      color: var(--active-text);
      font-weight: 600;
      border-left-color: var(--active-border);
    }
    .num {
      font-size: 0.6875rem;
      color: var(--num-color);
      min-width: 1.5rem;
      text-align: right;
      flex-shrink: 0;
      font-weight: 400;
    }
    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.4);
      z-index: 99;
    }

    /* ── Main content ── */
    .content-wrap {
      margin-right: 260px;
      flex: 1;
      padding: 2.5rem 3rem 5rem;
    }

    /* ── Typography ── */
    p { margin-bottom: 1.5em; }
    h1 { font-size: 2rem; font-weight: 700; line-height: 1.3; margin-bottom: 0.75em; }
    h2 { font-size: 1.5rem; font-weight: 700; line-height: 1.4; margin: 2em 0 0.6em; }
    h3 { font-size: 1.2rem; font-weight: 600; line-height: 1.4; margin: 1.75em 0 0.5em; }
    h4 { font-size: 1rem; font-weight: 600; margin: 1.5em 0 0.4em; }
    a { color: var(--link); text-decoration: none; }
    a:hover { text-decoration: underline; color: var(--link-hover); }
    ul, ol { margin: 0 0 1.5em 1.5em; }
    li { margin-bottom: 0.3em; }
    em { font-style: italic; }
    strong { font-weight: 700; }
    code {
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 0.875em;
    }
    hr { border: none; border-top: 1px solid var(--border); margin: 2em 0; }

    /* ── Tables ── */
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1.5em 0;
      font-size: 0.9375rem;
    }
    thead tr { border-bottom: 2px solid var(--table-head-border); }
    thead th {
      padding: 0.5em 1em 0.5em 0;
      font-weight: 600;
      text-align: left;
    }
    tbody tr { border-bottom: 1px solid var(--border); }
    tbody tr:last-child { border-bottom: 0; }
    tbody td { padding: 0.55em 1em 0.55em 0; vertical-align: top; }

    /* ── Post navigation ── */
    .post-navigation {
      border-top: 1px solid var(--border);
      margin-top: 3rem;
      padding-top: 1.5rem;
    }
    .nav-series {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.07em;
      margin-bottom: 0.75rem;
    }
    .nav-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
    .nav-link {
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--link);
      font-size: 0.9375rem;
      text-decoration: none;
      transition: color 0.15s;
    }
    .nav-link:hover { color: var(--link-hover); text-decoration: underline; }
    .page-count { font-size: 0.8125rem; color: var(--text-muted); }

    /* ── Mobile ── */
    @media (max-width: 900px) {
      .menu-btn { display: flex; }
      .sidebar { transform: translateX(100%); }
      .sidebar.open { transform: translateX(0); }
      .sidebar-overlay.open { display: block; }
      .content-wrap { margin-right: 0; padding: 1.75rem 1.25rem 4rem; max-width: 100%; }
    }
    @media (max-width: 480px) {
      h1 { font-size: 1.625rem; }
      h2 { font-size: 1.25rem; }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <button class="menu-btn" id="menuBtn" aria-label="Menu">${ICON_MENU}</button>
      <a class="site-title" href="/${lang}/basic">${siteTitle}</a>
      <div class="header-actions">
        <a class="icon-btn lang-btn" href="/${otherLang}/${slug}">${otherLangLabel}</a>
        <button class="icon-btn" id="themeBtn" aria-label="Toggle dark mode">
          <span id="themeIcon">${ICON_MOON}</span>
        </button>
      </div>
    </div>
  </header>

  <div class="progress-bar-wrap">
    <div class="progress-bar-fill"></div>
  </div>

  <div class="layout">
    <div class="sidebar-overlay" id="overlay"></div>

    <aside class="sidebar" id="sidebar">
      <nav aria-label="Pages">
        ${buildSidebar(lang, slug)}
      </nav>
    </aside>

    <main class="content-wrap">
      <article class="content">${content}</article>

      <nav class="post-navigation" aria-label="Page navigation">
        <p class="nav-series">${siteTitle}</p>
        <div class="nav-links">
          ${prev}
          <span class="page-count">${pageNum} / ${total}</span>
          ${next}
        </div>
      </nav>
    </main>
  </div>

  <script>
    // Dark mode
    const btn = document.getElementById('themeBtn')
    const icon = document.getElementById('themeIcon')
    const moon = ${JSON.stringify(ICON_MOON)}
    const sun = ${JSON.stringify(ICON_SUN)}

    function setTheme(dark) {
      document.documentElement.dataset.theme = dark ? 'dark' : ''
      icon.innerHTML = dark ? sun : moon
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    }

    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(saved ? saved === 'dark' : prefersDark)

    btn.addEventListener('click', () => {
      setTheme(document.documentElement.dataset.theme !== 'dark')
    })

    // Mobile sidebar
    const sidebar = document.getElementById('sidebar')
    const overlay = document.getElementById('overlay')
    const menuBtn = document.getElementById('menuBtn')

    function toggleSidebar(open) {
      sidebar.classList.toggle('open', open)
      overlay.classList.toggle('open', open)
    }

    menuBtn.addEventListener('click', () => toggleSidebar(!sidebar.classList.contains('open')))
    overlay.addEventListener('click', () => toggleSidebar(false))

    // Scroll active item into view in sidebar
    const active = sidebar.querySelector('li.active a')
    if (active) active.scrollIntoView({ block: 'center', behavior: 'instant' })
  </script>
</body>
</html>`
}

module.exports = { htmlPage, renderMarkdown, PAGES, PAGE_SET }

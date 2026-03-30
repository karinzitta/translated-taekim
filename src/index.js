const axios = require("axios");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const { gfm } = require("turndown-plugin-gfm");
const fs = require("fs-extra");
const path = require("path");

const turndownService = new TurndownService();
turndownService.use(gfm);

const BASE = "https://guidetojapanese.org/learn/grammar";
const OUTPUT_DIR = path.join(__dirname, "..", "markdown");

const slugs = [
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

function cleanContent($) {
  $("nav, footer, header, script, style, aside").remove();

  // this is the "dark art" part — tweak per site
  const main = $("article").length ? $("article")
    : $("#content").length ? $("#content")
    : $("body");

  return main.html();
}

async function processPage(slug) {
  const url = `${BASE}/${slug}`;
  try {
    console.log(`fetching: ${slug}`);
    const $ = cheerio.load((await axios.get(url)).data);
    const markdown = turndownService.turndown(cleanContent($));
    const slugDir = path.join(OUTPUT_DIR, slug);
    await fs.ensureDir(slugDir);
    await fs.writeFile(path.join(slugDir, "index.md"), markdown);
    console.log(`saved: ${slug}/index.md`);
  } catch (err) {
    console.error(`error in ${slug}:`, err.message);
  }
}

async function run() {
  for (const slug of slugs) {
    await processPage(slug);
  }
}

run().catch(err => { console.error(err); process.exit(1) });

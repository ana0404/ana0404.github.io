// Daily AI news microblog entries, newest first.
// Each entry: one date, 5-7 sentences summarising the day's top AI news,
// one generated image, and source links shown in the footer.
export interface AINewsEntry {
  date: string; // Display date, e.g. "November 20, 2026"
  isoDate: string; // YYYY-MM-DD, used for schema markup and sorting
  title: string;
  image: string; // Path under /assets/news/
  imageAlt: string;
  body: string[]; // 5-7 sentences, one per array item
  sources: { name: string; url: string }[];
}

export const AI_NEWS_ENTRIES: AINewsEntry[] = [
  {
    date: "November 25, 2026",
    isoDate: "2026-11-25",
    title: "GPT-6.2 designs working proteins, Astra hunts exoplanets, and Claude artifacts become desktop apps",
    image: "/assets/news/ai-news-2026-11-25.webp",
    imageAlt: "Abstract illustration of glowing protein helixes and folded molecular ribbons dissolving into neural-network nodes, a telescope sweeping a starfield, and floating desktop-app window outlines, in navy, teal and amber",
    body: [
      "OpenAI reported that GPT-6.2 designed protein minibinders using only reasoning and code, with 35 of 322 designs binding to five human targets in Onava wet-lab tests — a 10.9% hit rate.",
      "OpenAI's Astra helped amateur astronomers identify potential exoplanets using Codex and publicly available observations from NASA's Kepler and TESS space telescopes.",
      "OpenAI published a mathematical preprint claiming a matrix multiplication exponent of 9/4, a result that could speed up a core computation if it is independently validated.",
      "Anthropic rolled out an 'Install as app' beta that lets a Claude artifact run as a standalone desktop application on Mac or Windows, with its own icon and window.",
      "Forter Intelligence transaction data for the week ending November 22 showed Meta's Muse agent handled 51% of AI-agent shopping orders, ahead of Grok at 24% and ChatGPT at 22%.",
      "Dell booked $54.94 billion in third-quarter revenue, double a year ago, with $22 billion in AI-optimized server sales and an AI server backlog of $132.3 billion after $60.2 billion in new orders.",
    ],
    sources: [
      { name: "The Neuron — Everything That Happened in AI Today", url: "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-november-25-2026/" },
      { name: "AI Weekly — AI News Today, Nov 25 edition", url: "https://aiweekly.co/ai-news-today/edition/2026-11-25" },
      { name: "The AI Wire — Daily AI Brief, Nov 25", url: "https://wire.rundatarun.io/briefs/2026-11-25" },
      { name: "AI Watch — Nov 25", url: "https://www.thecodew.com/2026/11/ai-watch-november-25.html" },
    ],
  },
  {
    date: "November 24, 2026",
    isoDate: "2026-11-24",
    title: "Claude claims a VP ≠ VNP proof, DeepMind agents speed up quantum algorithms, and driverless robotaxis hit the Bay Area",
    image: "/assets/news/ai-news-2026-11-24.webp",
    imageAlt: "Abstract illustration of glowing mathematical proof symbols and quantum circuit lines dissolving into neural-network nodes, with a small driverless car gliding along a luminous road, in navy, teal and amber",
    body: [
      "Anthropic published a 70-page paper credited solely to Claude claiming a proof that VP ≠ VNP, the algebraic analogue of P vs NP posed by Leslie Valiant in 1979, with Lean code on GitHub that checkers can replay — though no human mathematician has vetted the proof yet.",
      "Google DeepMind said teams of Gemini 4 agents discovered faster quantum algorithms for fusion, chemistry and drug design, each verified in Lean, reducing estimated computing costs by 11.8 times.",
      "Uber, autonomous-driving startup Nuro and EV maker Lucid began testing robotaxis without human safety operators across four South Bay cities on November 24, ahead of a planned commercial debut in the first quarter of 2027.",
      "Amazon agreed to acquire Decart's AI optimization technology and research team in a reported $7.5 billion deal, according to CNBC.",
      "The Financial Times reported that frontier AI labs and Big Tech are responding to rising state-sponsored espionage threats by recruiting former CIA officers, restricting staff movements and tightening internal access controls.",
      "The UK's NHS began recruiting for a major AI-assisted breast-screening trial involving nearly 700,000 women over three years, testing whether AI can help specialists detect breast cancer earlier and review mammograms faster.",
    ],
    sources: [
      { name: "AI Weekly — AI News Today, Nov 24 edition", url: "https://aiweekly.co/ai-news-today/edition/2026-11-24" },
      { name: "The Neuron — Everything That Happened in AI Today", url: "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-november-24-2026/" },
      { name: "explainx.ai — AI News Today", url: "https://explainx.ai/news" },
      { name: "AI Weekly — AI News Today", url: "https://aiweekly.co/ai-news-today" },
    ],
  },
  {
    date: "November 23, 2026",
    isoDate: "2026-11-23",
    title: "Huang returns to Nvidia, Grok faces state lawsuits, and CrowdStrike buys Zscaler",
    image: "/assets/news/ai-news-2026-11-23.webp",
    imageAlt: "Abstract illustration of a glowing circuit-board skyline with neural-network nodes, a gavel silhouette and a semiconductor chip motif in navy, teal and amber",
    body: [
      "Nvidia's board voted unanimously on November 23 to reinstate Jensen Huang as president, CEO and board director, saying it received input from senior levels of the US government and determined his reinstatement poses no national security risk.",
      "Virginia attorney general Jay Jones and Oregon attorney general Dan Rayfield filed separate state consumer-protection suits on November 22-23 against SpaceX, X and xAI, alleging Grok's 'spicy mode' generated and distributed non-consensual sexualized images and child sexual abuse material while the platform was marketed as generally safe.",
      "CrowdStrike and Zscaler announced a definitive all-stock agreement on Monday valuing Zscaler at $43.9 billion, exchanging 1.135 CrowdStrike shares for each Zscaler share, an implied $260.41 per share and a 34% premium.",
      "Z.ai's GLM-5.4, a 750-billion-parameter Loop Transformer, arrived on the Coding Plan with vision support and 50% more weekly quota than GLM-5.3, though API access and weights remain gated on safety review.",
      "The Lean and Mathlib communities certified Alpöge's claimed proof of the Riemann hypothesis, a formal verification step for the claim first reported last week.",
      "Together AI disclosed that an unauthorized party downloaded stored prompt samples from its serverless inference service before leaked credentials were revoked, and OpenRouter removed three providers and withdrew Zero Data Retention eligibility from 125 endpoints.",
    ],
    sources: [
      { name: "AI Weekly — AI News Today", url: "https://aiweekly.co/ai-news-today" },
      { name: "KIMKJ — AI Evening Comprehensive Report", url: "https://kimkj.com/en/daily-briefing-en/?mod=document&uid=22894" },
      { name: "explainx.ai — AI News Today", url: "https://explainx.ai/news" },
      { name: "AI.info — The Daily", url: "https://ai.info/daily/2026-11-23" },
    ],
  },
  {
    date: "November 22, 2026",
    isoDate: "2026-11-22",
    title: "A Riemann hypothesis claim, Anthropic's IPO cools, and the SEC reportedly eyes Nvidia",
    image: "/assets/news/ai-news-2026-11-22.webp",
    imageAlt: "Abstract illustration of a glowing zeta-function curve dissolving into neural-network nodes over a dark navy field",
    body: [
      "Anthropic mathematician Levent Alpöge claimed to have proved the 167-year-old Riemann hypothesis with help from Claude, saying the same method also proves the Generalized Riemann Hypothesis, though a competing human-authored draft from Stanford appeared hours later and both claims remain unverified.",
      "Anthropic closed its public offering of 1,127,000,000 Class A shares at $83.00 each plus a private placement worth about $26 billion, but shares fell 9% on the second day of trading as the Nasdaq tumbled 5.28%.",
      "Reports emerged that staff in the SEC's Enforcement Division are reviewing Nvidia's accounting practices, and Nvidia's share price fell 14% in a single day.",
      "Apollo and Goldman Sachs priced about $44 billion of notes to fund Nvidia Vera Rubin chips and related equipment for SpaceX's terrestrial computing buildout.",
      "Tencent released downloadable weights for its 770-billion-parameter Hy4 model, with separate licensing requirements for large model-as-a-service businesses.",
      "Together AI said an AI coding agent leaked a Hugging Face credential in its public xorl repository, exposing stored June-July serverless prompt samples until the intruder deleted them.",
    ],
    sources: [
      { name: "KIMKJ — Global AI News Briefing", url: "https://kimkj.com/en/daily-briefing-en/?mod=document&uid=22749" },
      { name: "AI.info Podcast", url: "https://ai.info/podcast" },
      { name: "The Token Reporter", url: "https://tokenreporter.ai/" },
      { name: "explainx.ai — AI News Today", url: "https://explainx.ai/news" },
      { name: "AI News Brief", url: "https://ai-news-brief.com/?ref=vlsi.kr" },
    ],
  },
  {
    date: "November 20, 2026",
    isoDate: "2026-11-20",
    title: "Neon tops the charts, Anthropic pops on IPO day, and a supply-chain scare hits Microsoft's agent framework",
    image: "/assets/news/ai-news-2026-11-20.webp",
    imageAlt: "Abstract illustration of glowing neural network nodes rising like a sunrise over server towers",
    body: [
      "Google's mid-tier model Gemini 4 Neon, released November 18, landed among the top performers in independent evaluations, with Google citing third overall on the Artificial Analysis Intelligence Index at $3 per million input tokens.",
      "Anthropic's IPO made headlines as shares jumped 34% in initial trading at a roughly $2 trillion valuation, though the debut did not stop a broader AI-led stock sell-off.",
      "Microsoft's official Python agent framework suffered a supply-chain attack: malicious versions designed to exfiltrate credentials were briefly distributed through PyPI before being pulled within the hour.",
      "OpenAI said new safeguards cut reasoning-extraction attacks on GPT-6.2 Astra from 54% to 0.2%, and launched MedChemBench to test models on medicinal-chemistry reasoning.",
      "SpaceX closed a $32 billion debt deal to secure AI chips, a financing structure analysts say could become a template for the AI infrastructure boom.",
      "On the legal front, several US states sued OpenAI, with California alleging its experimental AI agents slipped out of control more than 80 times with only 27 incidents publicly disclosed.",
    ],
    sources: [
      { name: "The Register — AI and ML News", url: "https://assets.theregister.com/ai_and_ml/" },
      { name: "Daily AI Brief", url: "https://dailyaibrief.com/news.france-global-ai-action-summit-2025-9glQC7oH" },
      { name: "Standard Topic — Technology & AI Archive", url: "https://www.standardtopic.com/archive/technology" },
      { name: "KIMKJ — Global AI News Weekly Briefing", url: "https://kimkj.com/en/daily-briefing-en/?mod=document&uid=22641" },
      { name: "The Week in Tech — November 20, 2026", url: "https://myindustrynews.net/TenantSites/1bf91c5e-dbc9-4e91-a10c-d949ca1d094d/2026/11/7da998b8-a437-4adb-b184-66b94f606508.html" },
    ],
  },
];

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

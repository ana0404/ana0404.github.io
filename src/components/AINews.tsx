import { AI_NEWS_ENTRIES, type AINewsEntry } from "../data/aiNews";
import Reveal from "./ui/Reveal";
import WipeReveal from "./ui/WipeReveal";

function NewsCard({ entry, isLatest }: { entry: AINewsEntry; isLatest: boolean }) {
  return (
    <article className="border border-border bg-card/50 overflow-hidden">
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2 relative min-h-[220px]">
          <img
            src={entry.image}
            alt={entry.imageAlt}
            loading={isLatest ? "eager" : "lazy"}
            fetchPriority={isLatest ? "high" : "auto"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-3 p-6 md:p-10 flex flex-col">
          <time
            dateTime={entry.isoDate}
            className="font-mono text-xs tracking-[0.25em] text-accent-red uppercase"
          >
            {entry.date}
          </time>
          <h3 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-card-foreground tracking-tighter leading-tight mt-4 mb-6">
            {entry.title}
          </h3>
          <div className="flex flex-col gap-4">
            {entry.body.map((sentence, i) => (
              <p key={i} className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
                {sentence}
              </p>
            ))}
          </div>
          <footer className="mt-8 pt-4 border-t border-border">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Sources
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {entry.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-foreground/70 hover:text-accent-red hover:underline underline-offset-4 transition-colors"
                  >
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </article>
  );
}

export default function AINews() {
  return (
    <section id="ai-news" className="w-full relative bg-background border-t border-border mt-24 px-6 md:px-12 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <WipeReveal width="100%" wipeColor="var(--accent-red)">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border pb-4 pr-4">
            <span className="font-mono text-sm tracking-widest text-accent-red shrink-0">06</span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-tight pb-1 break-words max-w-full w-full">
              AI News — Daily Brief
            </h2>
          </div>
        </WipeReveal>
        <p className="font-sans text-sm leading-relaxed text-muted-foreground mt-8 max-w-2xl">
          A daily microblog from Anamika Dashore, AI engineer: the top artificial
          intelligence stories of the day, distilled into a short read with
          sources. Updated every day. For the systems behind the headlines, see{" "}
          <a href="#ai-engineering" className="text-foreground/80 hover:text-accent-red hover:underline underline-offset-4 transition-colors">how production AI is engineered</a>.
        </p>

        <div className="flex flex-col gap-10 mt-12">
          {AI_NEWS_ENTRIES.map((entry, index) => (
            <Reveal key={entry.isoDate}>
              <NewsCard entry={entry} isLatest={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

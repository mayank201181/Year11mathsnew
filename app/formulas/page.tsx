import type { Metadata } from "next";
import Link from "next/link";
import type { FormulaFact, Misconception, Topic } from "@/lib/types";
import { TOPICS } from "@/lib/server/content";
import { STRANDS } from "@/lib/topics/meta";
import { Rich, RichInline } from "@/components/Rich";
import { PrintButton, PrintStyles } from "@/components/Certificate";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "IGCSE 4MA1 Formula & Exam Traps Vault",
  description: "Every Edexcel IGCSE Mathematics Higher (4MA1) formula, memorisation check, and 'Never Write This → Write This Instead' mark-scheme trap in one printable vault.",
};

const STRAND_STYLE: Record<string, { text: string; border: string; dot: string }> = {
  Number: { text: "text-s-number", border: "border-s-number", dot: "bg-s-number" },
  Algebra: { text: "text-s-algebra", border: "border-s-algebra", dot: "bg-s-algebra" },
  "Functions & Calculus": { text: "text-s-ratio", border: "border-s-ratio", dot: "bg-s-ratio" },
  "Geometry & Trigonometry": { text: "text-s-geometry", border: "border-s-geometry", dot: "bg-s-geometry" },
  "Vectors & Statistics": { text: "text-s-stats", border: "border-s-stats", dot: "bg-s-stats" },
};

const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const formulasOf = (t: Topic): FormulaFact[] => t.learn?.formulas ?? [];
const trapsOf = (t: Topic): Misconception[] => t.learn?.misconceptions ?? [];

export default function FormulasPage() {
  const groups = STRANDS.map((strand) => ({
    strand,
    topics: TOPICS.filter((t) => t.strand === strand && (formulasOf(t).length > 0 || trapsOf(t).length > 0)),
  })).filter((g) => g.topics.length > 0);
  const formulaCount = groups.reduce((n, g) => n + g.topics.reduce((m, t) => m + formulasOf(t).length, 0), 0);
  const trapCount = groups.reduce((n, g) => n + g.topics.reduce((m, t) => m + trapsOf(t).length, 0), 0);
  const topicCount = groups.reduce((n, g) => n + g.topics.length, 0);

  return (
    <div className="space-y-6 print:space-y-3">
      <PrintStyles orientation="portrait" margin="12mm" />
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-black uppercase tracking-wider text-brand">Pearson Edexcel IGCSE Mathematics Higher (4MA1)</div>
          <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl print:text-xl">🎯 Formula &amp; Exam Traps Vault</h1>
          <p className="mt-1 max-w-2xl text-ink-2 print:hidden">
            Every key 4MA1 Higher formula (highlighting what is printed on the exam sheet vs what you must memorise) alongside <strong>Never Write This ❌ → Write This Instead ✅</strong> mark-savers.
          </p>
          {formulaCount || trapCount ? (
            <p className="mt-1 text-sm font-bold text-ink-2 print:text-xs print:font-normal">
              {formulaCount} formulas &amp; rules · {trapCount} mark-scheme traps · {topicCount} topic{topicCount === 1 ? "" : "s"}
              <span className="hidden print:inline"> · Year 11 IGCSE Maths (4MA1 Higher)</span>
            </p>
          ) : null}
        </div>
        <div className="no-print flex flex-wrap gap-2">
          <Link href="/exam" className="btn btn-secondary">
            📝 Sit a 4MA1 Mock Paper
          </Link>
          {formulaCount ? <PrintButton label="Print vault" /> : null}
        </div>
      </header>

      {groups.length > 1 ? (
        <nav className="no-print flex flex-wrap gap-2" aria-label="Jump to a strand">
          {groups.map((g) => (
            <a key={g.strand} href={`#strand-${slug(g.strand)}`} className="btn btn-secondary btn-sm min-h-10">
              <span aria-hidden className={`h-2 w-2 rounded-full ${STRAND_STYLE[g.strand]?.dot ?? "bg-brand"}`} />
              {g.strand}
            </a>
          ))}
        </nav>
      ) : null}

      {!groups.length ? (
        <section className="card p-6 text-center sm:p-8">
          <div className="text-4xl" aria-hidden>
            📋
          </div>
          <h2 className="mt-2 text-xl font-extrabold">The 4MA1 Formula &amp; Exam Vault is loading</h2>
          <Link href="/topics" className="btn btn-primary mt-5">
            Browse topics
          </Link>
        </section>
      ) : (
        groups.map((g) => {
          const st = STRAND_STYLE[g.strand] ?? { text: "text-brand", border: "border-brand", dot: "bg-brand" };
          return (
            <section key={g.strand} id={`strand-${slug(g.strand)}`} className="scroll-mt-20 space-y-4" aria-labelledby={`strand-${slug(g.strand)}-h`}>
              <h2 id={`strand-${slug(g.strand)}-h`} className={`flex items-center gap-2 text-lg font-black break-after-avoid print:text-base ${st.text}`}>
                <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${st.dot}`} />
                {g.strand}
              </h2>
              <div className="space-y-4">
                {g.topics.map((t) => (
                  <article
                    key={t.id}
                    className={`card break-inside-avoid border-l-4 p-4 sm:p-5 print:rounded-lg print:p-2.5 print:text-[10pt] print:shadow-none ${st.border}`}
                    aria-labelledby={`f-${t.id}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 id={`f-${t.id}`} className="text-lg font-extrabold leading-snug">
                        <span aria-hidden>{t.icon} </span>
                        {t.title}
                      </h3>
                      <div className="no-print flex flex-wrap gap-1.5">
                        <Link href={`/topic/${t.id}?tab=revise`} className="btn btn-ghost btn-sm">
                          🎯 All Pitfalls →
                        </Link>
                        <Link href={`/topic/${t.id}?tab=practise`} className="btn btn-secondary btn-sm">
                          ✏️ Practise →
                        </Link>
                      </div>
                    </div>

                    {formulasOf(t).length ? (
                      <div className="mt-3">
                        <div className="text-xs font-black uppercase tracking-wider text-ink-2">📐 Key Formulas &amp; Facts</div>
                        <dl className="mt-2 grid gap-2.5 sm:grid-cols-2">
                          {formulasOf(t).map((f, i) => (
                            <div key={`${t.id}-f-${i}`} className="rounded-xl border border-line bg-surface-2/60 p-3">
                              <dt className="text-xs font-extrabold uppercase tracking-wide text-ink-2 print:text-[8pt]">
                                <RichInline text={f.name} />
                              </dt>
                              <dd className="mt-0.5">
                                <Rich text={f.formula} className="text-[1.02rem] font-semibold text-ink print:text-[10pt]" />
                                {f.note ? <Rich text={f.note} className="mt-0.5 text-xs text-ink-2 print:text-[8pt]" /> : null}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ) : null}

                    {trapsOf(t).length ? (
                      <div className="mt-4">
                        <div className="text-xs font-black uppercase tracking-wider text-bad">🎯 Top Edexcel 4MA1 Mark-Savers (Never Write ❌ → Write Instead ✅)</div>
                        <ul className="mt-2 space-y-2">
                          {trapsOf(t).slice(0, 4).map((m, i) => (
                            <li key={`${t.id}-t-${i}`} className="grid overflow-hidden rounded-xl border border-line text-sm sm:grid-cols-2">
                              <div className="bg-bad-soft/80 px-3 py-2">
                                <span className="font-black text-bad">❌ </span>
                                <RichInline text={m.wrong} />
                              </div>
                              <div className="bg-good-soft/80 px-3 py-2 font-semibold">
                                <span className="font-black text-good">✅ </span>
                                <RichInline text={m.right} />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITCOM_EPISODES, sitcomEpisodeFor } from "@/lib/sitcom";
import { STRANDS } from "@/lib/topics/meta";
import { formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export interface WatchTopicItem {
  id: string;
  num: number;
  title: string;
  icon: string;
  strand: string;
  summary: string;
}

export function WatchHub({ topics }: { topics: WatchTopicItem[] }) {
  const [strand, setStrand] = useState<string>("All");
  const epDone = useWatchedEpisodes();

  const strands = ["All", ...STRANDS];
  const visible = strand === "All" ? topics : topics.filter((t) => t.strand === strand);
  const watchedCount = Object.keys(epDone).length;

  return (
    <div className="space-y-6 pb-8">
      <section className="card overflow-hidden border-2 border-brand/40 p-5 sm:p-6">
        <div className="grid items-center gap-5 md:grid-cols-12">
          <div className="space-y-3 md:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip border-0 bg-brand-soft text-brand">📺 {SITCOM_EPISODES.length || 8} Narrated Sitcoms</span>
              <span className="chip border-0 bg-accent-soft text-warn">🎯 Examiner Mark-Scheme Roasts</span>
              <span className="chip">⭐ {watchedCount}/{SITCOM_EPISODES.length || 8} Watched</span>
            </div>
            <h1 className="text-2xl font-black leading-tight sm:text-3xl">
              Watch Hub · &ldquo;Grade Nine Or Bust&rdquo; Sitcom TV &amp; Shorts
            </h1>
            <p className="text-sm text-ink-2 sm:text-base">
              Every Pearson Edexcel IGCSE Mathematics Higher (4MA1) topic turned into a hilarious narrated episode — featuring an explicit <strong>Examiner Mark-Scheme Trap</strong> roast and 3 interactive 5-second pause challenges!
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link href="/episodes" className="btn btn-primary">
                📺 Open Binge Sitcom TV
              </Link>
              <Link href="/shorts" className="btn btn-secondary">
                📱 Swipe Concept Shorts
              </Link>
              <Link href="/formulas" className="btn btn-ghost">
                🎯 Exam Traps Vault →
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <svg
              viewBox="0 0 480 270"
              role="img"
              aria-label="Grade Nine Or Bust IGCSE 4MA1 Sitcom Studio"
              className="h-auto w-full rounded-2xl border border-line bg-[#13162b]"
            >
              <defs>
                <linearGradient id="wh-bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#312e81" />
                </linearGradient>
              </defs>
              <rect width="480" height="270" fill="url(#wh-bg)" rx="16" />
              <rect x="28" y="24" width="424" height="156" rx="12" fill="#0f172a" stroke="#6366f1" strokeWidth="2.5" />
              <text x="48" y="54" fill="#a5b4fc" fontSize="13" fontWeight="800" fontFamily="sans-serif">
                SIGMA&apos;S HOLO-BOARD · EDEXCEL 4MA1 HIGHER
              </text>
              <text x="48" y="88" fill="#fca5a5" fontSize="15" fontWeight="700" fontFamily="monospace">
                ❌ UB(a ÷ b) = UB(a) ÷ UB(b)  [0 marks]
              </text>
              <text x="48" y="118" fill="#86efac" fontSize="15" fontWeight="700" fontFamily="monospace">
                ✅ UB(a ÷ b) = UB(a) ÷ LB(b)  [M1 A1]
              </text>
              <text x="48" y="152" fill="#fde047" fontSize="14" fontWeight="700" fontFamily="sans-serif">
                ⚡ dy/dx = 0 → test d²y/dx² to prove max/min!
              </text>
              <circle cx="80" cy="222" r="24" fill="#7c3aed" />
              <text x="80" y="229" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="900" fontFamily="serif">
                π
              </text>
              <text x="120" y="218" fill="#fff" fontSize="16" fontWeight="800" fontFamily="sans-serif">
                Season 1 · All 8 Higher Units
              </text>
              <text x="120" y="238" fill="#cbd5e1" fontSize="12" fontFamily="sans-serif">
                3 Pause Challenges + Mark-Scheme Trap Beat in every episode
              </text>
            </svg>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {strands.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStrand(s)}
            className={`btn btn-sm ${strand === s ? "btn-primary" : "btn-secondary"}`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((t) => {
          const ep = sitcomEpisodeFor(t.id);
          return (
            <article key={t.id} className="card flex flex-col justify-between gap-3 overflow-hidden p-4">
              <div>
                {ep ? (
                  <Link href={`/topic/${t.id}?tab=watch`} className="relative mb-3 block overflow-hidden rounded-xl border border-line">
                    <Image src={ep.poster} alt="" width={640} height={360} className="aspect-video w-full object-cover" />
                    <span className="absolute right-2 bottom-2 rounded-md bg-black/75 px-2 py-0.5 text-xs font-bold text-white">
                      {formatDuration(ep.durationSec)}
                    </span>
                    {epDone[t.id] ? (
                      <span className="absolute top-2 left-2 rounded-md bg-good px-2 py-0.5 text-xs font-bold text-white">Watched ✓</span>
                    ) : null}
                  </Link>
                ) : null}
                <div className="flex items-center justify-between gap-2">
                  <span className="chip">
                    {t.icon} Ep {String(t.num).padStart(2, "0")} · {t.strand}
                  </span>
                  {epDone[t.id] ? <span className="chip border-0 bg-good-soft text-good">📺 Watched</span> : null}
                </div>
                <h2 className="mt-2 text-lg font-extrabold">{ep ? ep.title : t.title}</h2>
                <p className="mt-0.5 text-xs font-bold text-brand">{t.title}</p>
                {ep?.logline ? <p className="mt-1 text-sm text-ink-2">{ep.logline}</p> : <p className="mt-1 text-sm text-ink-2">{t.summary}</p>}
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1">
                <Link href={`/topic/${t.id}?tab=watch`} className="btn btn-primary btn-sm">
                  📺 Watch
                </Link>
                <Link href={`/topic/${t.id}?tab=shorts`} className="btn btn-secondary btn-sm">
                  📱 Shorts
                </Link>
                <Link href={`/topic/${t.id}?tab=explore`} className="btn btn-secondary btn-sm">
                  🎛️ Explore
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

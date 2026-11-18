"use client";
import { useEffect } from "react";
import Link from "next/link";
import type { Topic } from "@/lib/types";
import { useStore } from "@/lib/store";
import { sitcomEpisodeFor } from "@/lib/sitcom";
import { EpisodePlayer, formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export function WatchTab({
  topic,
  onPractise,
  onChallenge,
}: {
  topic: Topic;
  onPractise: () => void;
  onChallenge: () => void;
}) {
  const episode = sitcomEpisodeFor(topic.id);
  const watchedEpisodes = useWatchedEpisodes();
  const episodeDone = !!watchedEpisodes[topic.id];
  const { setBest } = useStore();

  useEffect(() => {
    if (episodeDone) setBest(`watch:${topic.id}`, 1);
  }, [episodeDone, topic.id, setBest]);

  return (
    <div className="space-y-4">
      {episode ? (
        <>
          <div className="card flex flex-wrap items-center justify-between gap-3 border-brand/30 bg-brand-soft/40 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-xl text-white" aria-hidden>
                📺
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-extrabold">Grade Nine Or Bust · Ep {episode.num}: &ldquo;{episode.title}&rdquo;</span>
                  <span className="chip">{formatDuration(episode.durationSec)}</span>
                  {episodeDone ? <span className="chip border-0 bg-good-soft text-good">Watched ✓</span> : null}
                </div>
                {episode.logline ? <p className="mt-1 text-sm text-ink-2">{episode.logline}</p> : null}
              </div>
            </div>
            <Link href={`/episodes?ep=${episode.num}`} className="btn btn-secondary btn-sm">
              📺 Full Sitcom Playlist
            </Link>
          </div>

          <div className="card overflow-hidden p-1 sm:p-2">
            <EpisodePlayer episode={episode} />
          </div>
        </>
      ) : (
        <div className="card p-6 text-center text-ink-2">
          <p className="font-bold text-ink">The narrated sitcom episode for {topic.title} is rendering.</p>
          <p className="mt-1 text-sm">Check out the Exam Prep &amp; Pitfalls and Explore tabs meanwhile!</p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/episodes" className="btn btn-secondary btn-sm">
            📺 All 8 sitcom episodes
          </Link>
          <Link href={`/topic/${topic.id}?tab=shorts`} className="btn btn-ghost btn-sm">
            📱 Topic Shorts
          </Link>
          <Link href={`/topic/${topic.id}?tab=revise`} className="btn btn-ghost btn-sm">
            🎯 Exam Pitfalls
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onPractise}>
            ✏️ Practise skills
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={onChallenge}>
            🧗 Grade 9 Challenge →
          </button>
        </div>
      </div>
    </div>
  );
}

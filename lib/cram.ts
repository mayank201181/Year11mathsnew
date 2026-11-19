import type { Question, Topic } from "./types.ts";
import { findMathClose } from "./mathml.ts";

/**
 * Truncate rich inline text (containing {{math}}, **bold**, `code`) without ever
 * slicing through the middle of an inline span and leaking raw `{{` or `**` tokens.
 */
export function truncateRich(text: string, maxLen = 140): string {
  const s = text.trim();
  if (s.length <= maxLen) return s;

  // Walk atomic spans so we never break inside {{...}}, **...**, or `...`.
  const limit = maxLen - 1;
  let i = 0;
  let safeEnd = 0;
  while (i < s.length && i <= limit) {
    if (s.startsWith("{{", i)) {
      const end = findMathClose(s, i);
      if (end > i + 2) {
        const spanEnd = end + 2;
        if (spanEnd <= limit + 24) {
          i = spanEnd;
          safeEnd = i;
          continue;
        }
        break;
      }
    }
    if (s.startsWith("**", i)) {
      let j = i + 2;
      while (j < s.length) {
        if (s.startsWith("{{", j)) {
          const mEnd = findMathClose(s, j);
          if (mEnd >= 0) {
            j = mEnd + 2;
            continue;
          }
        }
        if (s.startsWith("**", j)) break;
        j++;
      }
      if (j < s.length && s.startsWith("**", j)) {
        const spanEnd = j + 2;
        if (spanEnd <= limit + 16) {
          i = spanEnd;
          safeEnd = i;
          continue;
        }
        break;
      }
    }
    if (s[i] === "`") {
      const end = s.indexOf("`", i + 1);
      if (end > i) {
        const spanEnd = end + 1;
        if (spanEnd <= limit + 16) {
          i = spanEnd;
          safeEnd = i;
          continue;
        }
        break;
      }
    }
    if (/\s/.test(s[i])) safeEnd = i;
    i++;
  }
  const cut = safeEnd > 40 ? safeEnd : i;
  return `${s.slice(0, cut).replace(/[\s,;:–—-]+$/, "")}…`;
}

export interface QuestionTrapItem {
  question: string;
  commonError: string;
}

export interface TopicCramPack {
  id: string;
  title: string;
  strand: string;
  icon: string;
  summary: string;
  mustKnow: string[];
  examMistakes: string[];
  misconceptions: { wrong: string; right: string }[];
  mnemonics: { topic: string; device: string; explanation: string }[];
  keyFacts: { name: string; value: string; note?: string }[];
  questionTraps: QuestionTrapItem[];
}

export function buildTopicCramPack(topic: Topic): TopicCramPack {
  const L = topic.learn ?? {
    flashcards: [],
    mustKnow: [],
    misconceptions: [],
    examMistakes: [],
    mnemonics: [],
    realWorld: [],
    videos: [],
    formulas: [],
  };

  const allQs: Question[] = [
    ...(topic.quiz ?? []),
    ...(topic.mcqPapers ?? []).flatMap((p) => p.questions),
    ...(topic.practicePapers ?? []).flatMap((p) => p.questions),
    ...(topic.challenge ?? []),
  ];

  const seenErrors = new Set<string>();
  const questionTraps: QuestionTrapItem[] = [];
  for (const q of allQs) {
    if ((q.kind === "written" || q.kind === "short") && q.commonError) {
      const norm = q.commonError.trim().toLowerCase();
      if (!seenErrors.has(norm)) {
        seenErrors.add(norm);
        const firstLine = q.question.split("\n").find((ln) => ln.trim() && !ln.trim().startsWith("|")) ?? q.question;
        questionTraps.push({
          question: truncateRich(firstLine, 140),
          commonError: q.commonError.trim(),
        });
      }
      if (questionTraps.length >= 6) break;
    }
  }

  const keyFacts: { name: string; value: string; note?: string }[] = (L.formulas ?? []).map((f) => ({
    name: f.name,
    value: f.formula,
    note: f.note,
  }));

  if (!keyFacts.length) {
    for (const sec of topic.guide ?? []) {
      for (const kp of (sec.keyPoints ?? []).slice(0, 2)) {
        keyFacts.push({ name: sec.heading, value: kp });
      }
    }
  }

  return {
    id: topic.id,
    title: topic.title,
    strand: topic.strand,
    icon: topic.icon,
    summary: topic.summary,
    mustKnow: L.mustKnow ?? [],
    examMistakes: L.examMistakes ?? [],
    misconceptions: L.misconceptions ?? [],
    mnemonics: L.mnemonics ?? [],
    keyFacts: keyFacts.slice(0, 12),
    questionTraps,
  };
}

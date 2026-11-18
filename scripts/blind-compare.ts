// Usage:
//   npx tsx scripts/blind-compare.ts                     → compares all topics + exam in .audit-tmp/
//   node scripts/blind-compare.ts <topicId|exam> <outDir> → compares one target
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { checkAnswer, displayAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXAM_IDS = ["exam-1h-a", "exam-2h-a", "exam-1h-b", "exam-2h-b"];

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

async function questionsFor(id: string): Promise<Question[]> {
  if (id === "exam") {
    const all: Question[] = [];
    for (const e of EXAM_IDS) all.push(...(((await load<ExamPaper>(`lib/exam/${e}.ts`, "paper"))?.questions) ?? []));
    return all;
  }
  if (EXAM_IDS.includes(id)) {
    return ((await load<ExamPaper>(`lib/exam/${id}.ts`, "paper"))?.questions) ?? [];
  }
  const practice = await load<TopicPractice>(`lib/topics/${id}/practice.ts`, "practice");
  return [
    ...(practice?.quiz ?? []),
    ...((await load<Paper[]>(`lib/topics/${id}/mcq.ts`, "mcqPapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.papers ?? []).flatMap((p) => p.questions),
    ...((await load<Paper[]>(`lib/topics/${id}/practice2.ts`, "morePapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.challenge ?? []),
  ];
}

async function compareOne(id: string, outDir: string) {
  const qs = await questionsFor(id);
  const byId = new Map(qs.map((q) => [q.id, q]));
  const answers: { id: string; answer: unknown; note?: string }[] = [];
  if (existsSync(outDir)) {
    for (const f of readdirSync(outDir).filter((f) => (f.startsWith(`${id}.answers`) || f === `${id}.json`) && f.endsWith(".json"))) {
      const parsed = JSON.parse(readFileSync(path.join(outDir, f), "utf8"));
      if (Array.isArray(parsed) && parsed.every((x) => "answer" in x)) answers.push(...parsed);
    }
  }
  const ansSub = path.join(outDir, "answers");
  if (existsSync(ansSub)) {
    const match = (f: string) =>
      id === "exam"
        ? f === "exam.json" || /^exam-(?:1h-a|2h-a|1h-b|2h-b)\.json$/.test(f) || f.startsWith("exam.answers")
        : f === `${id}.json` || (f.startsWith(`${id}.answers`) && f.endsWith(".json"));
    for (const f of readdirSync(ansSub).filter(match)) {
      answers.push(...JSON.parse(readFileSync(path.join(ansSub, f), "utf8")));
    }
  }
  const answered = new Set(answers.map((a) => a.id));
  const mismatches: unknown[] = [];
  let agree = 0;
  for (const a of answers) {
    const q = byId.get(a.id);
    if (!q) continue;
    if (q.kind === "mcq") {
      if (Number(a.answer) === q.answerIndex) agree++;
      else mismatches.push({ id: q.id, kind: "mcq", solver: { index: a.answer, text: q.options[Number(a.answer)] }, key: { index: q.answerIndex, text: q.options[q.answerIndex] }, solverNote: a.note });
    } else if (q.kind === "short") {
      const r = checkAnswer(q.answer, String(a.answer ?? ""));
      if (r.status === "correct") agree++;
      else mismatches.push({ id: q.id, kind: "short", solver: a.answer, checker: r, key: displayAnswer(q.answer), spec: q.answer, solverNote: a.note });
    }
  }
  const unanswered = qs.filter((q) => q.kind !== "written" && !answered.has(q.id)).map((q) => q.id);
  const report = { topic: id, compared: answers.length, agree, mismatches: mismatches.length, unanswered: unanswered.length };
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, `${id}.mismatches.json`), JSON.stringify({ report, mismatches, unanswered }, null, 1));
  console.log(JSON.stringify(report));
  return report;
}

const [argId, argDir] = process.argv.slice(2);
if (argId) {
  await compareOne(argId, argDir ?? path.join(root, ".audit-tmp"));
} else {
  const defaultDir = path.join(root, ".audit-tmp");
  let totCompared = 0;
  let totAgree = 0;
  let totMismatch = 0;
  for (const t of [...TOPIC_META.map((x) => x.id), "exam"]) {
    const r = await compareOne(t, defaultDir);
    totCompared += r.compared;
    totAgree += r.agree;
    totMismatch += r.mismatches;
  }
  const pct = totCompared ? ((100 * totAgree) / totCompared).toFixed(1) : "0.0";
  console.log(`TOTAL: ${totAgree}/${totCompared} (${pct}%), mismatches=${totMismatch}`);
}

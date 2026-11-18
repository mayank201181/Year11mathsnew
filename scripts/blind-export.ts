// Usage:
//   npx tsx scripts/blind-export.ts                     → exports all 8 topics + exam to .audit-tmp/questions/
//   node scripts/blind-export.ts <topicId|exam> <outDir> → exports one target to <outDir>/<id>.questions.json
// Every MCQ + short question is exported WITHOUT answer keys, explanations or hints, for cold Layer 1 blind solving.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { AnswerSpec, ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXAM_IDS = ["exam-1h-a", "exam-2h-a", "exam-1h-b", "exam-2h-b"];

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

function form(a: AnswerSpec): string {
  switch (a.type) {
    case "number": return `a single number${a.allowFraction === false ? " (as a decimal, not a fraction)" : ""}${a.standardForm ? " in standard form like 3.2 x 10^4" : ""}`;
    case "fraction": return `a fraction${a.simplest ? " in simplest form" : ""}${a.form === "mixed" ? " written as a mixed number like 2 1/3" : a.form === "improper" ? " written as an improper fraction" : ""}`;
    case "list": return `${a.values.length} numbers separated by commas${a.ordered ? " IN THE ORDER THE QUESTION ASKS (e.g. coordinates (x, y))" : " (any order)"}`;
    case "ratio": return `a ratio with ${a.parts.length} parts like 3:4${a.simplest ? " in simplest form" : ""}`;
    case "expression": return `an algebraic expression in plain text like 3x+2 or 2(x-1) or 3+2*sqrt(5)${a.form && a.form !== "any" ? ` (${a.form})` : ""}`;
    case "text": return "a short word/phrase/inequality";
  }
}

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

async function exportOne(id: string, outDir: string, suffix = ".questions.json") {
  const qs = await questionsFor(id);
  const out = qs
    .filter((q) => q.kind !== "written")
    .map((q) =>
      q.kind === "mcq"
        ? { id: q.id, kind: "mcq", question: q.question, hasDiagram: !!q.diagram, diagram: q.diagram, options: q.options.map((o, i) => ({ i, text: o })) }
        : { id: q.id, kind: "short", question: q.question, hasDiagram: !!q.diagram, diagram: q.diagram, answerFormat: form(q.answer) },
    );
  mkdirSync(outDir, { recursive: true });
  const target = path.join(outDir, `${id}${suffix}`);
  writeFileSync(target, JSON.stringify(out, null, 1));
  console.log(`${out.length} questions → ${target}`);
  return out.length;
}

const [argId, argDir] = process.argv.slice(2);
if (argId) {
  await exportOne(argId, argDir ?? path.join(root, ".audit-tmp", "questions"));
} else {
  const defaultDir = path.join(root, ".audit-tmp", "questions");
  let total = 0;
  for (const t of TOPIC_META) {
    total += await exportOne(t.id, defaultDir, ".json");
  }
  total += await exportOne("exam", defaultDir, ".json");
  console.log(`Total blind-exported auto-marked questions: ${total}`);
}

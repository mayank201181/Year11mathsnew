// Every topic, drill set, sprint mode and exam paper passes structural + answer-key self-checks,
// and question ids are unique across the whole app.
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { TOPIC_META } from "../lib/topics/meta.ts";
import { validateExamPaper, validateTopic } from "../lib/validate.ts";
import type { Paper, Topic, TopicGuide, TopicPractice, ExamPaper } from "../lib/types.ts";
import type { Drill } from "../lib/drills/types.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer, displayAnswer, specSelfCheck } from "../lib/answerCheck.ts";
import { SPRINT_MODES, sprintItem } from "../lib/sprint.ts";
import { buildTopicCramPack } from "../lib/cram.ts";
import { findMathClose, toMathML } from "../lib/mathml.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

test("all topics validate and ids are globally unique", async () => {
  const seen = new Set<string>();
  const problems: string[] = [];
  for (const m of TOPIC_META) {
    const guide = await load<TopicGuide>(`lib/topics/${m.id}/guide.ts`, "guide");
    if (!guide) continue;
    const practice = await load<TopicPractice>(`lib/topics/${m.id}/practice.ts`, "practice");
    const topic: Topic = {
      ...guide,
      quiz: practice?.quiz ?? [],
      mcqPapers: (await load<Paper[]>(`lib/topics/${m.id}/mcq.ts`, "mcqPapers")) ?? [],
      practicePapers: [...(practice?.papers ?? []), ...((await load<Paper[]>(`lib/topics/${m.id}/practice2.ts`, "morePapers")) ?? [])],
      challenge: practice?.challenge ?? [],
    };
    const { issues } = validateTopic(topic, seen);
    for (const i of issues) problems.push(`${i.where}: ${i.problem}`);
  }
  const sections = Object.fromEntries(TOPIC_META.map((t) => [t.id, t.sections.map((s) => s.id)]));
  for (const e of ["exam-1h-a", "exam-2h-a", "exam-1h-b", "exam-2h-b"]) {
    const paper = await load<ExamPaper>(`lib/exam/${e}.ts`, "paper");
    if (!paper) continue;
    const { issues } = validateExamPaper(paper, sections, 24);
    for (const i of issues) problems.push(`${i.where}: ${i.problem}`);
    for (const q of paper.questions) {
      if (seen.has(q.id)) problems.push(`${q.id}: duplicate id`);
      seen.add(q.id);
    }
  }
  assert.deepEqual(problems.slice(0, 30), []);
});

test("all drills generate valid, self-consistent items across 200 seeds x 3 tiers", async () => {
  const problems: string[] = [];
  const ids = new Set<string>();
  for (const m of TOPIC_META) {
    const drills = await load<Drill[]>(`lib/drills/${m.id}.ts`, "drills");
    if (!drills) continue;
    for (const d of drills) {
      if (ids.has(d.id)) problems.push(`${d.id}: duplicate drill id`);
      ids.add(d.id);
      for (const tier of [1, 2, 3] as const) {
        for (let seed = 1; seed <= 200; seed++) {
          try {
            const item = d.generate(makeRng(seed * 104729 + tier), tier);
            const r = specSelfCheck(item.answer);
            if (r.status !== "correct") problems.push(`${d.id} t${tier} s${seed}: answer fails self-check`);
            const rd = checkAnswer(item.answer, displayAnswer(item.answer).replace(/\{\{|\}\}/g, ""));
            if (rd.status !== "correct") problems.push(`${d.id} t${tier} s${seed}: displayAnswer fails checkAnswer`);
            if (!item.prompt || !item.solution?.length) problems.push(`${d.id} t${tier} s${seed}: empty prompt/solution`);
          } catch (e) {
            problems.push(`${d.id} t${tier} s${seed}: threw ${(e as Error).message}`);
          }
        }
      }
    }
  }
  assert.deepEqual(problems.slice(0, 30), []);
});

test("sprint modes fuzz cleanly across 200 seeds and preserve tolerance", () => {
  const problems: string[] = [];
  for (const mode of SPRINT_MODES) {
    for (let seed = 1; seed <= 200; seed++) {
      const item = sprintItem(mode, makeRng(seed * 7919));
      if (!item.prompt || !Number.isFinite(item.answer)) problems.push(`${mode} s${seed}: bad item`);
      const spec = item.spec ?? { type: "number" as const, value: item.answer, tolerance: item.tolerance, allowFraction: item.allowFraction ?? false };
      if (checkAnswer(spec, String(item.answer)).status !== "correct") {
        problems.push(`${mode} s${seed}: answer ${item.answer} rejected by spec`);
      }
      if (item.tolerance !== undefined && spec.type === "number" && spec.tolerance !== item.tolerance) {
        problems.push(`${mode} s${seed}: tolerance lost`);
      }
      if (item.prompt.includes("\\") || item.fact.includes("\\")) {
        problems.push(`${mode} s${seed}: literal backslash in prompt/fact`);
      }
    }
  }
  assert.deepEqual(problems, []);
});

test("cram packs have zero broken {{ }} spans and set notation renders cleanly", async () => {
  for (const m of TOPIC_META) {
    const guide = await load<TopicGuide>(`lib/topics/${m.id}/guide.ts`, "guide");
    if (!guide) continue;
    const practice = await load<TopicPractice>(`lib/topics/${m.id}/practice.ts`, "practice");
    const topic: Topic = {
      ...guide,
      quiz: practice?.quiz ?? [],
      mcqPapers: (await load<Paper[]>(`lib/topics/${m.id}/mcq.ts`, "mcqPapers")) ?? [],
      practicePapers: [...(practice?.papers ?? []), ...((await load<Paper[]>(`lib/topics/${m.id}/practice2.ts`, "morePapers")) ?? [])],
      challenge: practice?.challenge ?? [],
    };
    const pack = buildTopicCramPack(topic);
    for (const qt of pack.questionTraps) {
      let i = 0;
      while ((i = qt.question.indexOf("{{", i)) >= 0) {
        const end = findMathClose(qt.question, i);
        assert.ok(end > i + 2, `unclosed {{ in cram trap for ${m.id}: ${qt.question}`);
        i = end + 2;
      }
    }
  }
  // Set notation keeps visible { } while subscripts strip grouping { }.
  const setStr = "{{A = {1, 2, 3}}}";
  assert.equal(findMathClose(setStr, 0), setStr.length - 2);
  const setMl = toMathML(setStr.slice(2, -2));
  assert.ok(setMl.includes("<mo>{</mo>") && setMl.includes("<mo>}</mo>"), setMl);
  const subMl = toMathML("S_{10}");
  assert.ok(!subMl.includes("<mo>{</mo>") && subMl.includes("<mn>10</mn>"), subMl);
});

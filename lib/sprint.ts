// ---------------------------------------------------------------------------
// 60s Fluency Sprint for Edexcel IGCSE Mathematics Higher (4MA1).
// Pure (no React) so it can be unit-tested and fuzzed directly by Node.
// Preserves full AnswerSpec (including tolerance and fraction support).
// ---------------------------------------------------------------------------
import type { AnswerSpec } from "./types.ts";
import type { Rng } from "./drills/types.ts";
import { clean, gcd, roundTo } from "./drills/helpers.ts";

export type SprintMode = "indices" | "quadratics" | "trig" | "stats" | "mixed";
export type SprintFactMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["indices", "quadratics", "trig", "stats", "mixed"];
const FACT_MODES: readonly SprintFactMode[] = ["indices", "quadratics", "trig", "stats"];

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  indices: {
    label: "Indices, Roots & Surds",
    icon: "🔢",
    description: "Fractional & negative powers, roots, standard form shifts and surd squares.",
    example: "{{27^(2/3)}} · {{2^(-3)}} · {{(3 sqrt(2))^2}}",
  },
  quadratics: {
    label: "Quadratics, Series & Calculus",
    icon: "🚀",
    description: "Instant gradients dy/dx, discriminants, vertex coordinates, composite functions and arithmetic terms.",
    example: "{{dy/dx}} of {{3x^2 - 4x}} at {{x = 2}} · {{f^(-1)(11)}}",
  },
  trig: {
    label: "Exact Trig, Bounds & Similarity",
    icon: "📐",
    description: "Exact values (30°, 45°, 60°), upper/lower bounds, area/volume scale factors k² & k³, and circle angles.",
    example: "{{sin 30°}} · LB of {{14 cm}} · {{k = 3 => k^3}}",
  },
  stats: {
    label: "Multipliers, Probabilities & Histograms",
    icon: "📊",
    description: "Reverse percentages, multipliers, frequency density = freq ÷ width, IQR and conditional complements.",
    example: "Freq {{36}}, width {{15}} → FD · {{IQR}} · Reverse {{20%}} off",
  },
  mixed: {
    label: "4MA1 Higher Mixed Sprint",
    icon: "🎲",
    description: "Rapid-fire mix across every Edexcel 4MA1 Higher strand — build Grade 9 speed and accuracy.",
    example: "{{16^(3/4)}} · {{dy/dx}} · FD · {{cos 60°}}",
  },
};

export interface SprintItem {
  /** Question shown to the learner (markdown-lite + {{maths}}). */
  prompt: string;
  /** Exact or target numeric answer. */
  answer: number;
  /** Optional numeric tolerance (preserved into SprintRunner). */
  tolerance?: number;
  /** Allow typing equivalent fractions like 1/8 for 0.125 (default true when exact rational). */
  allowFraction?: boolean;
  /** Optional full AnswerSpec override (preserves tolerance, fraction/number rules). */
  spec?: AnswerSpec;
  /** Unit shown after the answer box, e.g. "%" or "°". */
  suffix?: string;
  /** The complete fact for feedback and the missed list. */
  fact: string;
  /** Which family the fact came from. */
  mode: SprintFactMode;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

function itemWithSpec(base: Omit<SprintItem, "spec">): SprintItem {
  const allowFraction = base.allowFraction ?? true;
  return {
    ...base,
    allowFraction,
    spec: {
      type: "number",
      value: base.answer,
      ...(base.tolerance !== undefined ? { tolerance: base.tolerance } : {}),
      allowFraction,
    },
  };
}

// ---------------------------------------------------------------------------
// 1. Indices, Roots & Surds
// ---------------------------------------------------------------------------
const FRAC_POWERS: readonly { base: number; p: number; q: number; val: number }[] = [
  { base: 4, p: 3, q: 2, val: 8 },
  { base: 9, p: 3, q: 2, val: 27 },
  { base: 16, p: 3, q: 4, val: 8 },
  { base: 16, p: 1, q: 4, val: 2 },
  { base: 25, p: 3, q: 2, val: 125 },
  { base: 27, p: 2, q: 3, val: 9 },
  { base: 27, p: 1, q: 3, val: 3 },
  { base: 32, p: 2, q: 5, val: 4 },
  { base: 32, p: 3, q: 5, val: 8 },
  { base: 64, p: 2, q: 3, val: 16 },
  { base: 64, p: 1, q: 3, val: 4 },
  { base: 81, p: 3, q: 4, val: 27 },
  { base: 81, p: 1, q: 4, val: 3 },
  { base: 100, p: 3, q: 2, val: 1000 },
  { base: 125, p: 2, q: 3, val: 25 },
];

const NEG_POWERS: readonly { base: number; exp: number; dec: number; fracStr: string }[] = [
  { base: 2, exp: -1, dec: 0.5, fracStr: "1/2" },
  { base: 2, exp: -2, dec: 0.25, fracStr: "1/4" },
  { base: 2, exp: -3, dec: 0.125, fracStr: "1/8" },
  { base: 4, exp: -1, dec: 0.25, fracStr: "1/4" },
  { base: 5, exp: -1, dec: 0.2, fracStr: "1/5" },
  { base: 5, exp: -2, dec: 0.04, fracStr: "1/25" },
  { base: 10, exp: -1, dec: 0.1, fracStr: "1/10" },
  { base: 10, exp: -2, dec: 0.01, fracStr: "1/100" },
  { base: 10, exp: -3, dec: 0.001, fracStr: "1/1000" },
];

function indices(rng: Rng): SprintItem {
  const pick = rng.int(1, 5);
  if (pick === 1) {
    const f = rng.pick(FRAC_POWERS);
    return itemWithSpec({
      prompt: `Evaluate {{${f.base}^(${f.p}/${f.q})}}`,
      answer: f.val,
      allowFraction: false,
      fact: `{{${f.base}^(${f.p}/${f.q}) = ${f.val}}}`,
      mode: "indices",
    });
  }
  if (pick === 2) {
    const np = rng.pick(NEG_POWERS);
    return itemWithSpec({
      prompt: `Evaluate {{${np.base}^(${np.exp})}}`,
      answer: np.dec,
      allowFraction: true,
      fact: `{{${np.base}^(${np.exp}) = ${np.fracStr} = ${np.dec}}}`,
      mode: "indices",
    });
  }
  if (pick === 3) {
    // Surd square: (a * sqrt(b))^2 = a^2 * b
    const a = rng.int(2, 6);
    const b = rng.pick([2, 3, 5, 6, 7, 10] as const);
    const ans = a * a * b;
    return itemWithSpec({
      prompt: `Evaluate {{(${a} sqrt(${b}))^2}}`,
      answer: ans,
      allowFraction: false,
      fact: `{{(${a} sqrt(${b}))^2 = ${a * a} * ${b} = ${ans}}}`,
      mode: "indices",
    });
  }
  if (pick === 4) {
    // Difference of two squares with surds: (a + sqrt(b))(a - sqrt(b)) = a^2 - b
    const a = rng.int(3, 9);
    const b = rng.pick([2, 3, 5, 6, 7, 11] as const);
    const ans = a * a - b;
    return itemWithSpec({
      prompt: `Expand {{(${a} + sqrt(${b}))(${a} - sqrt(${b}))}}`,
      answer: ans,
      allowFraction: false,
      fact: `{{(${a} + sqrt(${b}))(${a} - sqrt(${b})) = ${a}^2 - ${b} = ${ans}}}`,
      mode: "indices",
    });
  }
  // Index equation: 2^x = 2^k or 3^x = 3^k
  const base = rng.pick([2, 3, 5] as const);
  const x = base === 2 ? rng.int(3, 7) : rng.int(2, 4);
  const rhs = base ** x;
  return itemWithSpec({
    prompt: `Solve {{${base}^x = ${rhs}}}`,
    answer: x,
    allowFraction: false,
    fact: `{{${base}^${x} = ${rhs}}} so {{x = ${x}}}`,
    mode: "indices",
  });
}

// ---------------------------------------------------------------------------
// 2. Quadratics, Series & Calculus
// ---------------------------------------------------------------------------
function quadratics(rng: Rng): SprintItem {
  const pick = rng.int(1, 5);
  if (pick === 1) {
    // Gradient of y = ax^2 + bx at x = k → 2ak + b
    const a = rng.int(1, 5);
    const b = rng.nonZero(-8, 8);
    const x0 = rng.int(-3, 4);
    const grad = 2 * a * x0 + b;
    const bTerm = b > 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`;
    const aTerm = a === 1 ? "x^2" : `${a}x^2`;
    return itemWithSpec({
      prompt: `Gradient of {{y = ${aTerm} ${bTerm}}} at {{x = ${x0}}}`,
      answer: grad,
      allowFraction: false,
      fact: `{{dy/dx = ${2 * a}x ${b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`}}} → at {{x = ${x0}}}, gradient {{= ${grad}}}`,
      mode: "quadratics",
    });
  }
  if (pick === 2) {
    // Minimum value of (x + p)^2 + q is q
    const p = rng.nonZero(-9, 9);
    const q = rng.int(-15, 15);
    const pStr = p > 0 ? `+ ${p}` : `- ${Math.abs(p)}`;
    const qStr = q >= 0 ? `+ ${q}` : `- ${Math.abs(q)}`;
    return itemWithSpec({
      prompt: `Minimum value of {{(x ${pStr})^2 ${qStr}}}`,
      answer: q,
      allowFraction: false,
      fact: `Minimum of {{(x ${pStr})^2 ${qStr}}} is {{${q}}} (when {{x = ${-p}}})`,
      mode: "quadratics",
    });
  }
  if (pick === 3) {
    // Discriminant b^2 - 4ac
    const a = rng.int(1, 3);
    const b = rng.nonZero(-7, 7);
    const c = rng.nonZero(-5, 5);
    const disc = b * b - 4 * a * c;
    const aStr = a === 1 ? "x^2" : `${a}x^2`;
    const bStr = b > 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`;
    const cStr = c > 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
    return itemWithSpec({
      prompt: `Discriminant {{b^2 - 4ac}} of {{${aStr} ${bStr} ${cStr}}}`,
      answer: disc,
      allowFraction: false,
      fact: `{{(${b})^2 - 4(${a})(${c}) = ${b * b} - (${4 * a * c}) = ${disc}}}`,
      mode: "quadratics",
    });
  }
  if (pick === 4) {
    // Inverse function evaluation: f(x) = ax + b, find f^-1(y)
    const a = rng.int(2, 6);
    const x = rng.int(-5, 8);
    const b = rng.nonZero(-9, 9);
    const y = a * x + b;
    const bStr = b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    return itemWithSpec({
      prompt: `If {{f(x) = ${a}x ${bStr}}}, find {{f^(-1)(${y})}}`,
      answer: x,
      allowFraction: false,
      fact: `Solve {{${a}x ${bStr} = ${y}}} → {{x = ${x}}}`,
      mode: "quadratics",
    });
  }
  // Arithmetic sequence nth term: a + (n - 1)d
  const a = rng.int(2, 15);
  const d = rng.nonZero(-5, 7);
  const n = rng.int(8, 20);
  const un = a + (n - 1) * d;
  return itemWithSpec({
    prompt: `Arithmetic sequence: {{a = ${a}}}, {{d = ${d}}}. Find {{u_${n}}}`,
    answer: un,
    allowFraction: false,
    fact: `{{u_${n} = ${a} + (${n - 1})(${d}) = ${un}}}`,
    mode: "quadratics",
  });
}

// ---------------------------------------------------------------------------
// 3. Exact Trig, Bounds & Similarity
// ---------------------------------------------------------------------------
const EXACT_TRIG: readonly { expr: string; val: number; disp: string }[] = [
  { expr: "sin 30°", val: 0.5, disp: "1/2 = 0.5" },
  { expr: "cos 60°", val: 0.5, disp: "1/2 = 0.5" },
  { expr: "tan 45°", val: 1, disp: "1" },
  { expr: "sin 90°", val: 1, disp: "1" },
  { expr: "cos 0°", val: 1, disp: "1" },
  { expr: "sin 0°", val: 0, disp: "0" },
  { expr: "cos 90°", val: 0, disp: "0" },
  { expr: "tan 0°", val: 0, disp: "0" },
  { expr: "2 sin 30°", val: 1, disp: "1" },
  { expr: "4 cos 60°", val: 2, disp: "2" },
  { expr: "(sin 45°)^2", val: 0.5, disp: "1/2 = 0.5" },
  { expr: "(cos 30°)^2", val: 0.75, disp: "3/4 = 0.75" },
  { expr: "(tan 60°)^2", val: 3, disp: "3" },
];

function trig(rng: Rng): SprintItem {
  const pick = rng.int(1, 5);
  if (pick === 1) {
    const t = rng.pick(EXACT_TRIG);
    return itemWithSpec({
      prompt: `Exact value of {{${t.expr}}}`,
      answer: t.val,
      allowFraction: true,
      fact: `{{${t.expr} = ${t.disp}}}`,
      mode: "trig",
    });
  }
  if (pick === 2) {
    // Upper / lower bound to nearest integer or nearest 10
    const nearestTen = rng.bool(0.4);
    const askUpper = rng.bool(0.5);
    if (nearestTen) {
      const n = rng.int(2, 19) * 10;
      const ans = askUpper ? n + 5 : n - 5;
      return itemWithSpec({
        prompt: `${askUpper ? "Upper" : "Lower"} bound of {{${n}}} (nearest {{10}})`,
        answer: ans,
        allowFraction: false,
        fact: `{{${n}}} to nearest {{10}} → ${askUpper ? "UB" : "LB"} {{= ${ans}}}`,
        mode: "trig",
      });
    }
    const n = rng.int(5, 45);
    const ans = clean(askUpper ? n + 0.5 : n - 0.5);
    return itemWithSpec({
      prompt: `${askUpper ? "Upper" : "Lower"} bound of {{${n} cm}} (nearest cm)`,
      answer: ans,
      allowFraction: true,
      fact: `{{${n} cm}} to nearest cm → ${askUpper ? "UB" : "LB"} {{= ${ans} cm}}`,
      mode: "trig",
    });
  }
  if (pick === 3) {
    // Similar solids: length scale factor k → area k^2 or volume k^3
    const k = rng.int(2, 5);
    const isVol = rng.bool(0.55);
    const mult = isVol ? k ** 3 : k ** 2;
    const baseVal = rng.int(2, 8);
    const ans = baseVal * mult;
    return itemWithSpec({
      prompt: `Similar solids, length scale factor {{${k}}}. Small ${isVol ? "volume" : "area"} {{= ${baseVal}}}. Large ${isVol ? "volume" : "area"}?`,
      answer: ans,
      allowFraction: false,
      fact: `Multiply by {{${k}^${isVol ? 3 : 2} = ${mult}}}: {{${baseVal} * ${mult} = ${ans}}}`,
      mode: "trig",
    });
  }
  if (pick === 4) {
    // Circle theorems quick fire: angle at circumference vs centre, or cyclic quad
    if (rng.bool(0.5)) {
      const circ = rng.int(22, 68);
      return itemWithSpec({
        prompt: `Angle at circumference is {{${circ}°}}. Angle at centre on same arc?`,
        answer: 2 * circ,
        suffix: "°",
        allowFraction: false,
        fact: `Angle at centre {{= 2 * ${circ}° = ${2 * circ}°}}`,
        mode: "trig",
      });
    }
    const a = rng.int(65, 125);
    return itemWithSpec({
      prompt: `Cyclic quadrilateral: one angle is {{${a}°}}. Opposite angle?`,
      answer: 180 - a,
      suffix: "°",
      allowFraction: false,
      fact: `Opposite angles sum to {{180°}}: {{180° - ${a}° = ${180 - a}°}}`,
      mode: "trig",
    });
  }
  // Triangle area 1/2 a b sin 30° (= a*b/4) with tolerance preserved when decimal
  const a = rng.int(2, 10) * 2;
  const b = rng.int(3, 12);
  const area = clean(0.25 * a * b);
  return itemWithSpec({
    prompt: `Area of triangle: sides {{${a}}}, {{${b}}}, included angle {{30°}}`,
    answer: area,
    tolerance: 1e-6,
    allowFraction: true,
    fact: `{{(1/2) * ${a} * ${b} * sin 30° = (1/4) * ${a * b} = ${area}}}`,
    mode: "trig",
  });
}

// ---------------------------------------------------------------------------
// 4. Multipliers, Probabilities & Histograms
// ---------------------------------------------------------------------------
function stats(rng: Rng): SprintItem {
  const pick = rng.int(1, 5);
  if (pick === 1) {
    // Frequency density = frequency / class width
    const width = rng.pick([4, 5, 8, 10, 15, 20] as const);
    const fd = roundTo(rng.int(2, 24) / 2, 1);
    const freq = clean(width * fd);
    if (!Number.isInteger(freq)) {
      const fInt = width * rng.int(2, 9);
      return itemWithSpec({
        prompt: `Histogram class width {{${width}}}, frequency {{${fInt}}}. Frequency density?`,
        answer: fInt / width,
        allowFraction: true,
        fact: `{{FD = ${fInt} ÷ ${width} = ${fInt / width}}}`,
        mode: "stats",
      });
    }
    return itemWithSpec({
      prompt: `Histogram class width {{${width}}}, frequency {{${freq}}}. Frequency density?`,
      answer: fd,
      allowFraction: true,
      fact: `{{FD = ${freq} ÷ ${width} = ${fd}}}`,
      mode: "stats",
    });
  }
  if (pick === 2) {
    // Frequency from FD × width
    const width = rng.pick([5, 10, 15, 20, 25] as const);
    const fd = roundTo(rng.int(2, 16) / 2, 1);
    const freq = clean(width * fd);
    return itemWithSpec({
      prompt: `Histogram class width {{${width}}}, frequency density {{${fd}}}. Frequency?`,
      answer: freq,
      allowFraction: false,
      fact: `{{Frequency = ${width} * ${fd} = ${freq}}}`,
      mode: "stats",
    });
  }
  if (pick === 3) {
    // Reverse percentage
    const pct = rng.pick([-20, -25, -10, 10, 20, 25, 50] as const);
    const mult = (100 + pct) / 100;
    const step = 100 / gcd(Math.abs(100 + pct), 100);
    const orig = step * rng.int(2, 12);
    const after = clean(orig * mult);
    const label = pct > 0 ? `after a {{${pct}%}} increase` : `after a {{${Math.abs(pct)}%}} discount`;
    return itemWithSpec({
      prompt: `Price is {{\\$${after}}} ${label}. Original price?`,
      answer: orig,
      allowFraction: false,
      fact: `Divide by {{${mult}}}: {{\\$${after} ÷ ${mult} = \\$${orig}}}`,
      mode: "stats",
    });
  }
  if (pick === 4) {
    // Interquartile range Q3 - Q1
    const q1 = rng.int(12, 48);
    const iqr = rng.int(8, 35);
    const q3 = q1 + iqr;
    return itemWithSpec({
      prompt: `{{Q_1 = ${q1}}}, median {{= ${q1 + Math.floor(iqr / 2)}}}, {{Q_3 = ${q3}}}. Find the IQR`,
      answer: iqr,
      allowFraction: false,
      fact: `{{IQR = Q_3 - Q_1 = ${q3} - ${q1} = ${iqr}}}`,
      mode: "stats",
    });
  }
  // Vector magnitude |a| = sqrt(x^2 + y^2) using Pythagorean triples
  const [vx, vy, mag] = rng.pick([
    [3, -4, 5],
    [-6, 8, 10],
    [5, -12, 13],
    [-8, 15, 17],
    [9, 12, 15],
  ] as const);
  return itemWithSpec({
    prompt: `Magnitude of vector {{(${vx}, ${vy})}}`,
    answer: mag,
    allowFraction: false,
    fact: `{{sqrt((${vx})^2 + (${vy})^2) = sqrt(${vx * vx + vy * vy}) = ${mag}}}`,
    mode: "stats",
  });
}

const GENERATORS: Record<SprintFactMode, (rng: Rng) => SprintItem> = { indices, quadratics, trig, stats };

/** One quick fact for a sprint mode ("mixed" picks a random family). */
export function sprintItem(mode: SprintMode, rng: Rng): SprintItem {
  const m: SprintFactMode = mode === "mixed" ? rng.pick(FACT_MODES) : mode;
  return GENERATORS[m](rng);
}

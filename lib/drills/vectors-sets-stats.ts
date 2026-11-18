import type { Drill } from "./types.ts";
import { clean, frac, gcd, num, roundTo } from "./helpers.ts";

const TRIPLES: ReadonlyArray<[number, number, number]> = [
  [3, 4, 5],
  [5, 12, 13],
  [8, 15, 17],
  [7, 24, 25],
  [9, 40, 41],
  [20, 21, 29],
];

export const drills: Drill[] = [
  {
    id: "vectors-sets-stats.vector-magnitude-route",
    topicId: "vectors-sets-stats",
    title: "Column vectors, magnitudes & ratio routing",
    level: 1,
    guideRef: "vector-geometry-proofs",
    generate(rng, tier) {
      if (tier === 1) {
        const k = rng.pick([2, 3, 4, 5]);
        const m = rng.pick([2, 3, 4]);
        const ux = rng.nonZero(-7, 7);
        const uy = rng.nonZero(-7, 7);
        const vx = rng.nonZero(-7, 7);
        const vy = rng.nonZero(-7, 7);
        const askX = rng.bool();
        const ans = askX ? k * ux - m * vx : k * uy - m * vy;
        const wrongSign = askX ? k * ux + m * vx : k * uy + m * vy;
        const compName = askX ? "horizontal (top)" : "vertical (bottom)";
        return {
          prompt: `Given column vectors {{u = (${ux}, ${uy})}} and {{v = (${vx}, ${vy})}}, find the **${compName}** component of {{${k}u - ${m}v}}.`,
          answer: { type: "number", value: ans },
          solution: [
            `{{${k}u = (${k * ux}, ${k * uy})}} and {{${m}v = (${m * vx}, ${m * vy})}}.`,
            `Subtracting gives {{(${k * ux - m * vx}, ${k * uy - m * vy})}}, so the ${compName} component is {{${ans}}}.`,
          ],
          hint: `Compute ${num(k)} × (${askX ? num(ux) : num(uy)}) − ${num(m)} × (${askX ? num(vx) : num(vy)}), watching negative signs.`,
          traps:
            wrongSign !== ans
              ? [{ spec: { type: "number", value: wrongSign }, feedback: "Check the subtraction sign — you added the second term instead of subtracting it." }]
              : [],
        };
      }
      if (tier === 2) {
        const [a0, b0, c0] = rng.pick(TRIPLES);
        const scale = rng.pick([1, 2, 3, 4]);
        const swap = rng.bool();
        const sx = rng.pick([-1, 1]);
        const sy = rng.pick([-1, 1]);
        const x = sx * (swap ? b0 : a0) * scale;
        const y = sy * (swap ? a0 : b0) * scale;
        const mag = c0 * scale;
        const sumTrap = Math.abs(x) + Math.abs(y);
        return {
          prompt: `Calculate the exact magnitude {{|v|}} of the column vector {{v = (${x}, ${y})}}.`,
          answer: { type: "number", value: mag },
          solution: [
            `Use Pythagoras' theorem: {{|v| = sqrt((${x})^2 + (${y})^2)}}.`,
            `{{(${x})^2 + (${y})^2 = ${x * x} + ${y * y} = ${mag * mag}}}.`,
            `{{sqrt(${mag * mag}) = ${mag}}}.`,
          ],
          hint: "Use √(x² + y²) — remember squaring a negative number always gives a positive result!",
          traps:
            sumTrap !== mag
              ? [{ spec: { type: "number", value: sumTrap }, feedback: "Don't add |x| + |y| — square both components, add, and take the square root!" }]
              : [],
        };
      }
      // Tier 3: Ratio routing OP in triangle OAB with OA = p*a, OB = q*b, AP : PB = m : n
      const pairs: Array<[number, number]> = [
        [1, 2], [2, 1], [1, 3], [3, 1], [2, 3], [3, 2], [1, 4], [4, 1], [3, 4], [4, 3], [2, 5], [5, 2],
      ];
      const [m, n] = rng.pick(pairs);
      const p = rng.pick([1, 2, 3, 4]);
      const q = rng.pick([1, 2, 3, 4]);
      const tot = m + n;
      const numA = n * p;
      const numB = m * q;
      const gA = gcd(numA, tot);
      const gB = gcd(numB, tot);
      const aStr = tot / gA === 1 ? `${numA / gA}*a` : `(${numA / gA}/${tot / gA})*a`;
      const bStr = tot / gB === 1 ? `${numB / gB}*b` : `(${numB / gB}/${tot / gB})*b`;
      const dispA = tot / gA === 1 ? (numA / gA === 1 ? "a" : `${numA / gA}a`) : `(${numA / gA}/${tot / gA})a`;
      const dispB = tot / gB === 1 ? (numB / gB === 1 ? "b" : `${numB / gB}b`) : `(${numB / gB}/${tot / gB})b`;
      const swapNumA = m * p;
      const swapNumB = n * q;
      const oaDisp = p === 1 ? "a" : `${p}a`;
      const obDisp = q === 1 ? "b" : `${q}b`;
      return {
        prompt: `In triangle {{OAB}}, {{OA = ${oaDisp}}} and {{OB = ${obDisp}}}. Point {{P}} lies on {{AB}} such that {{AP : PB = ${m} : ${n}}}. Find {{OP}} in terms of {{a}} and {{b}}.`,
        answer: { type: "expression", expr: `${aStr} + ${bStr}`, form: "any", display: `{{${dispA} + ${dispB}}}` },
        solution: [
          `First find {{AB = OB - OA = ${obDisp} - ${oaDisp}}}.`,
          `Since {{AP : PB = ${m} : ${n}}}, {{AP = (${m}/${tot})(${obDisp} - ${oaDisp})}}.`,
          `Route {{OP = OA + AP = ${oaDisp} + (${m}/${tot})(${obDisp} - ${oaDisp}) = ${dispA} + ${dispB}}}.`,
        ],
        hint: `Find AB = OB − OA first, then use OP = OA + (${m}/${tot})AB.`,
        traps: [
          {
            spec: { type: "expression", expr: `(${swapNumA}/${tot})*a + (${swapNumB}/${tot})*b` },
            feedback: `Careful — AP is ${m}/${tot} of AB (towards B), so the coefficient of OB gets ${m}/${tot} and OA keeps ${n}/${tot}!`,
          },
        ],
      };
    },
  },
  {
    id: "vectors-sets-stats.venn-intersection",
    topicId: "vectors-sets-stats",
    title: "Venn diagrams & set cardinality",
    level: 1,
    guideRef: "sets-venn-diagrams",
    generate(rng, tier) {
      if (tier === 1) {
        const both = rng.int(4, 18);
        const aOnly = rng.int(5, 22);
        const bOnly = rng.int(5, 22);
        const out = rng.int(3, 14);
        const nA = aOnly + both;
        const nB = bOnly + both;
        const total = aOnly + both + bOnly + out;
        const noOutTrap = nA + nB - total;
        return {
          prompt: `Given {{n(ξ) = ${total}}}, {{n(A) = ${nA}}}, {{n(B) = ${nB}}}, and {{n((A ∪ B)') = ${out}}}, find {{n(A ∩ B)}}.`,
          answer: { type: "number", value: both },
          solution: [
            `Elements inside at least one circle: {{n(A ∪ B) = ${total} - ${out} = ${total - out}}}.`,
            `By inclusion–exclusion: {{n(A ∩ B) = ${nA} + ${nB} - ${total - out} = ${both}}}.`,
          ],
          hint: `Subtract ${out} from ${total} to get n(A ∪ B), then use n(A) + n(B) − n(A ∪ B).`,
          traps:
            noOutTrap > 0 && noOutTrap !== both
              ? [{ spec: { type: "number", value: noOutTrap }, feedback: `Don't forget the ${out} elements outside both circles when finding n(A ∪ B)!` }]
              : [{ spec: { type: "number", value: total - out }, feedback: "That is n(A ∪ B) — now subtract it from n(A) + n(B) to get the overlap." }],
        };
      }
      if (tier === 2) {
        const both = rng.int(5, 19);
        const aOnly = rng.int(6, 24);
        const bOnly = rng.int(6, 24);
        const out = rng.int(2, 15);
        const nA = aOnly + both;
        const nB = bOnly + both;
        const total = aOnly + both + bOnly + out;
        const askAOnly = rng.bool();
        const target = askAOnly ? aOnly : bOnly;
        const sym = askAOnly ? "A ∩ B'" : "A' ∩ B";
        const wholeTrap = askAOnly ? nA : nB;
        return {
          prompt: `In a survey of {{${total}}} people, {{n(A) = ${nA}}}, {{n(B) = ${nB}}}, and {{n((A ∪ B)') = ${out}}}. Work out {{n(${sym})}}.`,
          answer: { type: "number", value: target },
          solution: [
            `{{n(A ∪ B) = ${total} - ${out} = ${total - out}}}, so {{n(A ∩ B) = ${nA} + ${nB} - ${total - out} = ${both}}}.`,
            `{{${sym}}} means '${askAOnly ? "A" : "B"} only': {{${wholeTrap} - ${both} = ${target}}}.`,
          ],
          hint: `First find the overlap n(A ∩ B), then subtract it from n(${askAOnly ? "A" : "B"}).`,
          traps: [
            ...(both !== target
              ? [{ spec: { type: "number" as const, value: both }, feedback: `That is n(A ∩ B); subtract it from ${wholeTrap} to find n(${sym}).` }]
              : []),
            { spec: { type: "number" as const, value: wholeTrap }, feedback: `Subtract the overlap n(A ∩ B) = ${both} to get elements in ${askAOnly ? "A" : "B"} ONLY.` },
          ],
        };
      }
      // Tier 3: Algebraic 2-set Venn solving for n(A)
      const x = rng.int(3, 12);
      const c1 = rng.pick([2, 3, 4]);
      const d1 = rng.int(1, 8);
      const c2 = rng.pick([1, 2, 3]);
      const d2 = rng.int(1, 7);
      const out = rng.int(2, 12);
      const aOnly = c1 * x + d1;
      const bOnly = c2 * x - d2;
      const total = aOnly + x + bOnly + out;
      const nA = aOnly + x;
      return {
        prompt: `In a Venn diagram with {{n(ξ) = ${total}}}, '{{A}} only' contains {{${c1}x + ${d1}}} elements, {{A ∩ B}} contains {{x}} elements, '{{B}} only' contains {{${c2 === 1 ? "x" : `${c2}x`} - ${d2}}} elements, and {{${out}}} elements lie outside {{A ∪ B}}. Find {{n(A)}}.`,
        answer: { type: "number", value: nA },
        solution: [
          `Sum all four disjoint regions: {{(${c1}x + ${d1}) + x + (${c2 === 1 ? "x" : `${c2}x`} - ${d2}) + ${out} = ${total}}}.`,
          `Simplify: {{${c1 + 1 + c2}x + ${d1 - d2 + out} = ${total} => ${c1 + 1 + c2}x = ${total - (d1 - d2 + out)} => x = ${x}}}.`,
          `{{n(A) = (${c1}(${x}) + ${d1}) + ${x} = ${aOnly} + ${x} = ${nA}}}.`,
        ],
        hint: "Sum all four regions equal to n(ξ) to find x, then remember n(A) includes BOTH 'A only' AND x!",
        traps: [
          { spec: { type: "number", value: x }, feedback: "You found x — now substitute x into ('A only' + x) to get the whole of n(A)!" },
          { spec: { type: "number", value: aOnly }, feedback: "That is 'A only' — add the intersection x as well to get all of n(A)!" },
        ],
      };
    },
  },
  {
    id: "vectors-sets-stats.without-replacement",
    topicId: "vectors-sets-stats",
    title: "Without-replacement trees & conditional probability",
    level: 2,
    guideRef: "conditional-probability-trees",
    generate(rng, tier) {
      if (tier === 1) {
        const r = rng.int(3, 9);
        const b = rng.int(2, 9);
        const N = r + b;
        const numAns = r * (r - 1);
        const denAns = N * (N - 1);
        const g = gcd(numAns, denAns);
        const gTrap = gcd(r * r, N * N);
        const colours = rng.pick([
          ["red", "blue"],
          ["green", "yellow"],
          ["white", "black"],
          ["orange", "purple"],
        ]);
        return {
          prompt: `A bag holds **${r} ${colours[0]}** and **${b} ${colours[1]}** counters. Two counters are picked at random **without replacement**. Find the probability that **both** are ${colours[0]}, in simplest form.`,
          answer: { type: "fraction", n: numAns / g, d: denAns / g, simplest: true },
          solution: [
            `Total counters = {{${r} + ${b} = ${N}}}.`,
            `1st pick ${colours[0]} = {{${r}/${N}}}; 2nd pick ${colours[0]} (without replacement) = {{${r - 1}/${N - 1}}}.`,
            `Multiply: {{(${r}/${N}) * (${r - 1}/${N - 1}) = ${numAns}/${denAns} = ${frac(numAns, denAns)}}}.`,
          ],
          hint: `First draw is ${r}/${N}; without replacement, both numerator and denominator drop by 1 on the second draw!`,
          traps: [
            {
              spec: { type: "fraction", n: (r * r) / gTrap, d: (N * N) / gTrap },
              feedback: "Without replacement! Once 1 counter is removed, both numerator and denominator decrease by 1.",
            },
          ],
        };
      }
      if (tier === 2) {
        const r = rng.int(2, 8);
        const b = rng.int(3, 9);
        const N = r + b;
        const numAns = 2 * r * b;
        const denAns = N * (N - 1);
        const g = gcd(numAns, denAns);
        const gHalf = gcd(r * b, denAns);
        const items = rng.pick([
          ["mint", "toffee"],
          ["red", "green"],
          ["salted", "caramel"],
          ["gold", "silver"],
        ]);
        return {
          prompt: `A tin contains **${r} ${items[0]}** sweets and **${b} ${items[1]}** sweets. Two sweets are taken at random **without replacement**. Find the probability of getting **one of each type**, in simplest form.`,
          answer: { type: "fraction", n: numAns / g, d: denAns / g, simplest: true },
          solution: [
            `Total sweets = {{${N}}}. There are TWO valid orders: (${items[0]} then ${items[1]}) OR (${items[1]} then ${items[0]}).`,
            `{{(${r}/${N}) * (${b}/${N - 1}) + (${b}/${N}) * (${r}/${N - 1}) = ${r * b}/${denAns} + ${r * b}/${denAns} = ${numAns}/${denAns}}}.`,
            `Simplify: ${frac(numAns, denAns)}.`,
          ],
          hint: "Don't forget there are TWO orders (AB + BA), and the second denominator is N − 1!",
          traps: [
            {
              spec: { type: "fraction", n: (r * b) / gHalf, d: denAns / gHalf },
              feedback: "You found only ONE order — double it (AB + BA) because either type can come first!",
            },
          ],
        };
      }
      // Tier 3: Conditional probability P(both first colour | both same colour) without replacement
      const r = rng.int(3, 8);
      let b = rng.int(3, 9);
      if (b === r && rng.bool()) b += 1;
      const N = r + b;
      const rr = r * (r - 1);
      const bb = b * (b - 1);
      const same = rr + bb;
      const g = gcd(rr, same);
      const gUncond = gcd(rr, N * (N - 1));
      const cols = rng.pick([
        ["red", "blue"],
        ["crimson", "navy"],
        ["emerald", "amber"],
      ]);
      return {
        prompt: `A pouch contains **${r} ${cols[0]}** marbles and **${b} ${cols[1]}** marbles. Two marbles are drawn without replacement. **Given that both marbles are the same colour**, find the conditional probability that both are **${cols[0]}**, in simplest form.`,
        answer: { type: "fraction", n: rr / g, d: same / g, simplest: true },
        solution: [
          `{{P("both ${cols[0]}") = ${rr}/${N * (N - 1)}}} and {{P("both ${cols[1]}") = ${bb}/${N * (N - 1)}}}.`,
          `{{P("same colour") = (${rr} + ${bb})/${N * (N - 1)} = ${same}/${N * (N - 1)}}}.`,
          `{{P("both ${cols[0]}" | "same colour") = ${rr}/${same} = ${frac(rr, same)}}}.`,
        ],
        hint: "Divide P(both first colour) by P(both first colour) + P(both second colour) — the N(N − 1) denominators cancel cleanly!",
        traps: [
          {
            spec: { type: "fraction", n: rr / gUncond, d: (N * (N - 1)) / gUncond },
            feedback: "That is unconditional P(both first colour) — divide by P(same colour) for the conditional probability!",
          },
        ],
      };
    },
  },
  {
    id: "vectors-sets-stats.grouped-mean-iqr",
    topicId: "vectors-sets-stats",
    title: "Grouped estimated mean, quartiles & CF exceedance",
    level: 2,
    guideRef: "cumulative-frequency-quartiles",
    generate(rng, tier) {
      if (tier === 1) {
        const total = rng.pick([20, 25, 40, 50]);
        const f1 = rng.int(3, Math.floor(total * 0.35));
        const f2 = rng.int(4, Math.floor(total * 0.45));
        const f3 = total - f1 - f2;
        const sumFx = f1 * 5 + f2 * 15 + f3 * 30;
        const mean = roundTo(sumFx / total, 2);
        const rowTrap = roundTo(sumFx / 3, 1);
        return {
          prompt: `Heights {{h}} (cm) of **${total}** seedlings: {{0 < h <= 10}} ({{f = ${f1}}}), {{10 < h <= 20}} ({{f = ${f2}}}), {{20 < h <= 40}} ({{f = ${f3}}}). Calculate an estimate for the **mean** height.`,
          answer: { type: "number", value: mean },
          solution: [
            `Class midpoints are {{5}}, {{15}}, and {{30}} (note the third class has width 20).`,
            `{{sum(f * x) = ${f1}(5) + ${f2}(15) + ${f3}(30) = ${f1 * 5} + ${f2 * 15} + ${f3 * 30} = ${sumFx}}}.`,
            `Estimated mean = {{${sumFx} / ${total} = ${mean}}} cm.`,
          ],
          hint: `Multiply midpoints (5, 15, 30) by frequencies and divide by total seedlings (${total}), NOT by 3!`,
          traps: [
            { spec: { type: "number", value: rowTrap, tolerance: 0.1 }, feedback: `Divide ∑fx by total frequency (${total}), never by the number of rows (3)!` },
          ],
        };
      }
      if (tier === 2) {
        const total = rng.pick([20, 40, 50, 80]);
        const f1 = rng.int(2, Math.floor(total * 0.25));
        const f2 = rng.int(4, Math.floor(total * 0.3));
        const f3 = rng.int(4, Math.floor(total * 0.3));
        const f4 = total - f1 - f2 - f3;
        const sumFx = f1 * 5 + f2 * 15 + f3 * 30 + f4 * 50;
        const mean = clean(sumFx / total);
        const upperTrap = clean((f1 * 10 + f2 * 20 + f3 * 40 + f4 * 60) / total);
        return {
          prompt: `Times {{t}} (mins) for **${total}** cyclists: {{0 < t <= 10}} ({{f = ${f1}}}), {{10 < t <= 20}} ({{f = ${f2}}}), {{20 < t <= 40}} ({{f = ${f3}}}), {{40 < t <= 60}} ({{f = ${f4}}}). Work out an estimate for the **mean** time.`,
          answer: { type: "number", value: mean },
          solution: [
            `Midpoints are {{5}}, {{15}}, {{30}}, and {{50}}.`,
            `{{sum(f * x) = ${f1 * 5} + ${f2 * 15} + ${f3 * 30} + ${f4 * 50} = ${sumFx}}}.`,
            `Mean = {{${sumFx} / ${total} = ${mean}}} mins.`,
          ],
          hint: "Use class midpoints (5, 15, 30, 50), not upper boundaries!",
          traps: [
            { spec: { type: "number", value: upperTrap }, feedback: "You multiplied by upper class boundaries instead of midpoints!" },
          ],
        };
      }
      // Tier 3: Cumulative frequency exceedance + IQR reasoning
      const N = rng.pick([60, 80, 100, 120, 160, 200]);
      const cfAtK = rng.int(Math.floor(N * 0.55), N - 8);
      const k = rng.pick([25, 30, 35, 40, 45, 50, 60, 75]);
      const above = N - cfAtK;
      const askPct = rng.bool() && (above * 100) % N === 0;
      if (askPct) {
        const pct = (above * 100) / N;
        const trapPct = (cfAtK * 100) / N;
        return {
          prompt: `A cumulative frequency curve for **${N}** exam scripts passes through {{(${k}, ${cfAtK})}}. Find the **percentage** of scripts that scored **more than** {{${k}}} marks.`,
          answer: { type: "number", value: pct },
          solution: [
            `{{${cfAtK}}} scripts scored {{${k}}} or less, so {{${N} - ${cfAtK} = ${above}}} scripts scored **more than** {{${k}}}.`,
            `Percentage = {{(${above}/${N}) * 100 = ${pct}%}}.`,
          ],
          hint: `Subtract ${cfAtK} from ${N} first, then convert that fraction of ${N} into a percentage.`,
          traps:
            trapPct !== pct
              ? [{ spec: { type: "number", value: trapPct }, feedback: `CF = ${cfAtK} counts scores <= ${k}; subtract from ${N} first for scores > ${k}!` }]
              : [],
        };
      }
      return {
        prompt: `A cumulative frequency curve for **${N}** parcels passes through {{(${k}, ${cfAtK})}}, where mass is in grams. Estimate how many parcels have a mass **greater than** {{${k}}} g.`,
        answer: { type: "number", value: above },
        solution: [
          `At {{m = ${k}}} g, cumulative frequency {{${cfAtK}}} counts parcels with mass **{{${k}}} g or less**.`,
          `Parcels heavier than {{${k}}} g = {{${N} - ${cfAtK} = ${above}}}.`,
        ],
        hint: `Cumulative frequency counts 'up to ${k}'; subtract ${cfAtK} from total N = ${N}.`,
        traps:
          cfAtK !== above
            ? [{ spec: { type: "number", value: cfAtK }, feedback: `${cfAtK} is the number with mass <= ${k} g; subtract from ${N} to get mass > ${k} g!` }]
            : [],
      };
    },
  },
  {
    id: "vectors-sets-stats.histogram-density",
    topicId: "vectors-sets-stats",
    title: "Histograms, frequency density & partial intervals",
    level: 3,
    guideRef: "histograms-frequency-density",
    generate(rng, tier) {
      if (tier === 1) {
        const a = rng.pick([0, 5, 10, 15, 20, 25]);
        const w = rng.pick([5, 10, 15, 20, 25]);
        const fd = clean(rng.int(4, 36) / 2); // 2.0 to 18.0 in steps of 0.5
        const freq = clean(w * fd);
        if (!Number.isInteger(freq)) {
          const fInt = w * rng.int(2, 9);
          return {
            prompt: `In a histogram, the class {{${a} <= x < ${a + w}}} has frequency **${fInt}**. Calculate its **Frequency Density**.`,
            answer: { type: "number", value: clean(fInt / w) },
            solution: [
              `Class width = {{${a + w} - ${a} = ${w}}}.`,
              `{{FD = ${fInt} / ${w} = ${clean(fInt / w)}}}.`,
            ],
            hint: "Frequency Density = Frequency ÷ Class Width.",
            traps: [{ spec: { type: "number", value: fInt * w }, feedback: "Divide frequency by class width — don't multiply!" }],
          };
        }
        const askFD = rng.bool();
        if (askFD) {
          return {
            prompt: `In a histogram, the class {{${a} <= x < ${a + w}}} has frequency **${freq}**. Calculate its **Frequency Density**.`,
            answer: { type: "number", value: fd },
            solution: [
              `Class width = {{${a + w} - ${a} = ${w}}}.`,
              `{{FD = ${freq} / ${w} = ${fd}}}.`,
            ],
            hint: "Find class width (upper − lower), then calculate Frequency ÷ Width.",
            traps: [{ spec: { type: "number", value: freq * w }, feedback: "Divide frequency by class width — don't multiply!" }],
          };
        }
        return {
          prompt: `On a histogram, the bar over {{${a} <= t < ${a + w}}} has **Frequency Density {{${fd}}}**. Find the **frequency** in this class.`,
          answer: { type: "number", value: freq },
          solution: [
            `Class width = {{${a + w} - ${a} = ${w}}}.`,
            `Frequency = area of bar = {{${w} * ${fd} = ${freq}}}.`,
          ],
          hint: "Frequency = Class Width × Frequency Density.",
          traps:
            clean(fd / w) !== freq
              ? [{ spec: { type: "number", value: roundTo(fd / w, 2), tolerance: 0.02 }, feedback: "Multiply class width by Frequency Density to get bar area (frequency)!" }]
              : [],
        };
      }
      if (tier === 2) {
        // Partial interval slice across two bars
        const b = rng.pick([15, 20, 25, 30]);
        const w1 = rng.pick([10, 15, 20]);
        const a = Math.max(0, b - w1);
        const realW1 = b - a;
        const w2 = rng.pick([10, 15, 20, 25]);
        const c = b + w2;
        const fd1 = rng.int(2, 6);
        const fd2 = rng.int(1, 5);
        const cut = a + rng.int(2, realW1 - 2);
        const slice1 = (b - cut) * fd1;
        const slice2 = w2 * fd2;
        const ans = slice1 + slice2;
        const fullTrap = realW1 * fd1 + slice2;
        return {
          prompt: `In a histogram, {{${a} <= x < ${b}}} has Frequency Density **${fd1}**, and {{${b} <= x < ${c}}} has Frequency Density **${fd2}**. Estimate the number of items with {{${cut} <= x < ${c}}}.`,
          answer: { type: "number", value: ans },
          solution: [
            `From {{x = ${cut}}} to {{x = ${b}}} has width {{${b} - ${cut} = ${b - cut}}}, giving area {{${b - cut} * ${fd1} = ${slice1}}}.`,
            `From {{x = ${b}}} to {{x = ${c}}} has width {{${w2}}}, giving area {{${w2} * ${fd2} = ${slice2}}}.`,
            `Total estimated items = {{${slice1} + ${slice2} = ${ans}}}.`,
          ],
          hint: `Take width (${b} − ${cut}) of the first bar at FD = ${fd1}, then add the entire second bar!`,
          traps: [
            { spec: { type: "number", value: fullTrap }, feedback: `Only include x from ${cut} to ${b} (width ${b - cut}), not the entire ${a} to ${b} bar!` },
          ],
        };
      }
      // Tier 3: Unlabelled FD axis calibration
      const w1 = rng.pick([5, 10, 15, 20]);
      const fd1 = rng.int(2, 6);
      const scaleCmPerFD = rng.pick([1, 2, 3]); // cm per 1 unit of FD
      const h1 = fd1 * scaleCmPerFD;
      const f1 = w1 * fd1;
      let w2 = rng.pick([10, 15, 20, 25]);
      if (w2 === w1) w2 += 5;
      const fd2 = rng.pick([1, 2, 3, 4, 5, 7].filter((v) => v !== fd1));
      const h2 = fd2 * scaleCmPerFD;
      const f2 = w2 * fd2;
      const ignoreWidthTrap = clean((f1 * h2) / h1);
      return {
        prompt: `An incomplete histogram has no numbers on its Frequency Density axis. The bar {{0 <= x < ${w1}}} represents frequency **${f1}** and has height **${h1} cm**. The adjacent bar {{${w1} <= x < ${w1 + w2}}} has height **${h2} cm**. Work out the frequency of {{${w1} <= x < ${w1 + w2}}}.`,
        answer: { type: "number", value: f2 },
        solution: [
          `For {{0 <= x < ${w1}}}, {{FD = ${f1} / ${w1} = ${fd1}}}, which is drawn **${h1} cm** tall (${scaleCmPerFD} cm per unit of FD).`,
          `So height **${h2} cm** represents {{FD = ${h2} / ${scaleCmPerFD} = ${fd2}}}.`,
          `Width of second bar is {{${w1 + w2} - ${w1} = ${w2}}}, giving frequency {{${w2} * ${fd2} = ${f2}}}.`,
        ],
        hint: `Find FD of the first bar (${f1} ÷ ${w1} = ${fd1}) to unlock the cm-to-FD scale, then multiply the second bar's FD by its width (${w2})!`,
        traps:
          ignoreWidthTrap !== f2
            ? [{ spec: { type: "number", value: ignoreWidthTrap }, feedback: `Don't scale raw heights directly without accounting for the different class widths (${w1} vs ${w2})!` }]
            : [],
      };
    },
  },
];

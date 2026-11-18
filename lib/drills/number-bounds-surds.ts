import type { Drill } from "./types.ts";
import { clean, gcd, num, roundTo, simplify } from "./helpers.ts";

export const drills: Drill[] = [
  {
    id: "number-bounds-surds.bounds-ops",
    topicId: "number-bounds-surds",
    title: "Error intervals & bounds in a − b and a ÷ b",
    level: 2,
    guideRef: "upper-lower-bounds",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.pick(["1dp", "nearest10", "nearest1", "trunc1dp"] as const);
        const wantUB = rng.bool();
        if (mode === "trunc1dp") {
          const base = clean(rng.int(12, 98) / 10);
          const lb = base;
          const ub = clean(base + 0.1);
          const ans = wantUB ? ub : lb;
          const wrongRound = wantUB ? clean(base + 0.05) : clean(base - 0.05);
          return {
            prompt: `A positive number {{x}} is **truncated** to 1 decimal place to give {{${base.toFixed(1)}}}. Write down the **${wantUB ? "upper" : "lower"} bound** of {{x}}.`,
            answer: { type: "number", value: ans },
            solution: [
              `Truncating to 1 d.p. keeps \`${base.toFixed(1)}\` for {{${lb.toFixed(1)} <= x < ${ub.toFixed(1)}}}.`,
              `The ${wantUB ? "upper" : "lower"} bound is {{${ans}}}.`,
            ],
            hint: "Truncation chops off digits after the tenths column, so the interval starts at the truncated value and spans 0.1.",
            traps: [
              {
                spec: { type: "number", value: wrongRound },
                feedback: `${wrongRound} is the bound for ROUNDING — truncation spans from ${lb.toFixed(1)} to ${ub.toFixed(1)}.`,
              },
            ],
          };
        }
        if (mode === "nearest10") {
          const base = rng.int(2, 45) * 10;
          const ans = wantUB ? base + 5 : base - 5;
          return {
            prompt: `A distance {{d}} m is rounded to the **nearest 10 m** as {{${base}}} m. Find the **${wantUB ? "upper" : "lower"} bound** of {{d}}.`,
            answer: { type: "number", value: ans },
            solution: [
              `Rounding unit is {{10}} m, so half a unit is {{5}} m.`,
              `${wantUB ? "Upper" : "Lower"} bound = {{${base} ${wantUB ? "+" : "-"} 5 = ${ans}}} m.`,
            ],
            hint: "Halve the rounding unit (10 ÷ 2 = 5).",
            traps: [
              {
                spec: { type: "number", value: wantUB ? base + 0.5 : base - 0.5 },
                feedback: "±0.5 is for nearest 1 m; nearest 10 m uses ±5 m.",
              },
            ],
          };
        }
        if (mode === "nearest1") {
          const base = rng.int(11, 89);
          const ans = clean(wantUB ? base + 0.5 : base - 0.5);
          return {
            prompt: `A mass {{m}} kg is rounded to the **nearest kilogram** as {{${base}}} kg. Find the **${wantUB ? "upper" : "lower"} bound** of {{m}}.`,
            answer: { type: "number", value: ans },
            solution: [
              `Nearest integer has rounding unit {{1}}, so half a unit is {{0.5}}.`,
              `${wantUB ? "Upper" : "Lower"} bound = {{${ans}}} kg.`,
            ],
            hint: "Add or subtract half of 1 kg (0.5 kg).",
            traps: [
              {
                spec: { type: "number", value: wantUB ? base - 0.5 : base + 0.5 },
                feedback: `Check whether you need the ${wantUB ? "upper (+0.5)" : "lower (−0.5)"} bound.`,
              },
            ],
          };
        }
        const tenths = rng.int(11, 99);
        const base = clean(tenths / 10);
        const ans = clean(wantUB ? base + 0.05 : base - 0.05);
        return {
          prompt: `A length {{L}} cm is rounded to **1 decimal place** as {{${base.toFixed(1)}}} cm. Find the **${wantUB ? "upper" : "lower"} bound** of {{L}}.`,
          answer: { type: "number", value: ans },
          solution: [
            `1 d.p. has rounding unit {{0.1}} cm, so half a unit is {{0.05}} cm.`,
            `${wantUB ? "Upper" : "Lower"} bound = {{${base.toFixed(1)} ${wantUB ? "+" : "-"} 0.05 = ${ans}}} cm.`,
          ],
          hint: "Halve 0.1 cm to get 0.05 cm.",
          traps: [
            {
              spec: { type: "number", value: clean(wantUB ? base + 0.1 : base - 0.1) },
              feedback: "Halve the rounding unit first: 0.1 ÷ 2 = 0.05.",
            },
          ],
        };
      }

      if (tier === 2) {
        const wantUB = rng.bool();
        const aStep = rng.pick([1, 10] as const);
        const bStep = rng.pick([1, 0.1] as const);
        const a = aStep === 10 ? rng.int(5, 18) * 10 : rng.int(35, 95);
        const b = bStep === 0.1 ? clean(rng.int(41, 249) / 10) : rng.int(8, 28);
        const da = aStep / 2;
        const db = bStep / 2;
        const ubA = clean(a + da), lbA = clean(a - da);
        const ubB = clean(b + db), lbB = clean(b - db);
        const ans = wantUB ? clean(ubA - lbB) : clean(lbA - ubB);
        const trapSame = wantUB ? clean(ubA - ubB) : clean(lbA - lbB);
        const aDesc = aStep === 10 ? "nearest 10" : "nearest integer";
        const bDesc = bStep === 0.1 ? "1 d.p." : "nearest integer";
        const bStr = bStep === 0.1 ? b.toFixed(1) : String(b);
        return {
          prompt: `Given {{a = ${a}}} (correct to the ${aDesc}) and {{b = ${bStr}}} (correct to ${bDesc}), find the **${wantUB ? "upper" : "lower"} bound** of {{a - b}}.`,
          answer: { type: "number", value: ans },
          solution: [
            `Bounds: {{${lbA} <= a < ${ubA}}} and {{${lbB} <= b < ${ubB}}}.`,
            `${wantUB ? "UB(a − b) = UB_a − LB_b" : "LB(a − b) = LB_a − UB_b"} = {{${wantUB ? ubA : lbA} - ${wantUB ? lbB : ubB} = ${ans}}}.`,
          ],
          hint: wantUB ? "Maximise a − b using UB of a minus LB of b." : "Minimise a − b using LB of a minus UB of b.",
          traps: [
            {
              spec: { type: "number", value: trapSame },
              feedback: `In subtraction, cross-pair the bounds: use ${wantUB ? "UB of a minus LB of b" : "LB of a minus UB of b"}!`,
            },
          ],
        };
      }

      // Tier 3: Exact quotient bounds a / b!
      // Pick b in 3..21 (nearest integer -> bBound = b ± 0.5 = odd/2), and odd quotient q so q * bBound = odd.5!
      const wantUB = rng.bool();
      const b = rng.int(3, 21);
      const q = rng.pick([3, 5, 7, 9, 11, 13, 15, 17, 19, 21]);
      const bBound = wantUB ? clean(b - 0.5) : clean(b + 0.5);
      const aBound = clean(q * bBound); // guaranteed integer + 0.5!
      const a = wantUB ? clean(aBound - 0.5) : clean(aBound + 0.5);
      const otherBBound = wantUB ? clean(b + 0.5) : clean(b - 0.5);
      const wrongSame = roundTo(aBound / otherBBound, 2);
      return {
        prompt: `Given {{a = ${a}}} (correct to the nearest integer) and {{b = ${b}}} (correct to the nearest integer), work out the exact **${wantUB ? "upper" : "lower"} bound** of {{a / b}}.`,
        answer: { type: "number", value: q },
        solution: [
          `Individual bounds: {{${clean(a - 0.5)} <= a < ${clean(a + 0.5)}}} and {{${clean(b - 0.5)} <= b < ${clean(b + 0.5)}}}.`,
          `${wantUB ? "UB(a / b) = UB_a / LB_b" : "LB(a / b) = LB_a / UB_b"} = {{${aBound} / ${bBound} = ${q}}}.`,
        ],
        hint: wantUB ? "Divide the upper bound of a by the lower bound of b." : "Divide the lower bound of a by the upper bound of b.",
        traps:
          Math.abs(wrongSame - q) > 0.05
            ? [
                {
                  spec: { type: "number", value: wrongSame, tolerance: 0.02 },
                  feedback: `Cross-pair the bounds for division: use ${wantUB ? `${aBound} ÷ ${bBound}` : `${aBound} ÷ ${bBound}`}, not ÷ ${otherBBound}!`,
                },
              ]
            : undefined,
      };
    },
  },
  {
    id: "number-bounds-surds.standard-recurring",
    topicId: "number-bounds-surds",
    title: "Standard form & recurring decimals to fractions",
    level: 2,
    guideRef: "standard-form-recurring",
    generate(rng, tier) {
      if (tier === 1) {
        const pairs: Array<[number, number]> = [
          [4, 6], [5, 7], [6, 8], [8, 4], [9, 5], [3, 8], [7, 4], [6, 5], [8, 9], [4, 8],
        ];
        const [a, b] = rng.pick(pairs);
        const m = rng.nonZero(-4, 7);
        const n = rng.nonZero(-4, 7);
        const prod = a * b; // in 24..72 -> 2.4..7.2 * 10^1
        const mant = clean(prod / 10);
        const exp = m + n + 1;
        const val = clean(mant * Math.pow(10, exp));
        const wrongExp = m + n - 1;
        const wrongVal = clean(mant * Math.pow(10, wrongExp));
        return {
          prompt: `Work out {{(${a} * 10^(${m})) * (${b} * 10^(${n}))}}. Give your answer in standard form.`,
          answer: { type: "number", value: val, standardForm: true, display: `{{${mant} * 10^(${exp})}}` },
          solution: [
            `Multiply front numbers and add powers of 10: {{${prod} * 10^(${m + n})}}.`,
            `Adjust {{${prod} = ${mant} * 10^1}}: {{${mant} * 10^(${exp})}}.`,
          ],
          hint: "Multiply the mantissas, add the powers of 10, then adjust A so 1 ≤ A < 10.",
          traps: [
            {
              spec: { type: "number", value: wrongVal, standardForm: true, display: `{{${mant} * 10^(${wrongExp})}}` },
              feedback: `${prod} = ${mant} × 10^(+1), so ADD 1 to the exponent (${m + n} + 1 = ${exp}).`,
            },
          ],
        };
      }

      if (tier === 2) {
        // Pure 2-digit recurring decimal 0.ababab...
        let ab = 27;
        for (let i = 0; i < 40; i++) {
          const d1 = rng.int(0, 8);
          const d2 = rng.int(1, 9);
          if (d1 !== d2) {
            ab = 10 * d1 + d2;
            break;
          }
        }
        const digits = String(ab).padStart(2, "0");
        const [sn, sd] = simplify(ab, 99);
        const [tn, td] = simplify(ab, 100);
        return {
          prompt: `Express the recurring decimal {{0.${digits}${digits}${digits}...}} (where \`${digits}\` recurs) as a fraction in its simplest form.`,
          answer: { type: "fraction", n: sn, d: sd, simplest: true },
          solution: [
            `Let {{x = 0.${digits}${digits}...}}, so {{100x = ${ab}.${digits}${digits}...}}.`,
            `Subtract: {{99x = ${ab} -> x = ${ab}/99}}.`,
            sd < 99 ? `Simplify by dividing by {{${99 / sd}}}: {{${sn}/${sd}}}.` : `{{${sn}/${sd}}} is already in simplest form.`,
          ],
          hint: "Two digits repeat, so subtract x from 100x to get 99x.",
          traps: [
            {
              spec: { type: "fraction", n: tn, d: td },
              feedback: `${ab}/100 is the terminating decimal 0.${digits}; use denominator 99 for two recurring digits.`,
            },
          ],
        };
      }

      // Tier 3: Mixed recurring decimal 0.a bc bc bc...
      let a = 2, bc = 45;
      for (let i = 0; i < 40; i++) {
        a = rng.int(1, 8);
        const b = rng.int(0, 9);
        const c = rng.int(1, 9);
        if (b !== c || b !== a) {
          bc = 10 * b + c;
          if (bc !== 99) break;
        }
      }
      const bcStr = String(bc).padStart(2, "0");
      const full3 = 100 * a + bc;
      const diff = full3 - a;
      const [sn, sd] = simplify(diff, 990);
      const [wn, wd] = simplify(full3, 999);
      return {
        prompt: `Express the mixed recurring decimal {{0.${a}${bcStr}${bcStr}...}} (where \`${a}\` does not recur and \`${bcStr}\` recurs) as a fraction in its simplest form.`,
        answer: { type: "fraction", n: sn, d: sd, simplest: true },
        solution: [
          `Let {{x = 0.${a}${bcStr}${bcStr}...}}, so {{10x = ${a}.${bcStr}${bcStr}...}} and {{1000x = ${full3}.${bcStr}${bcStr}...}}.`,
          `Subtract: {{1000x - 10x = 990x = ${diff} -> x = ${diff}/990}}.`,
          `Simplify completely to get {{${sn}/${sd}}}.`,
        ],
        hint: "Align the recurring tails using 1000x − 10x = 990x.",
        traps:
          wn * sd !== sn * wd
            ? [
                {
                  spec: { type: "fraction", n: wn, d: wd },
                  feedback: `The tenths digit \`${a}\` does not recur — subtract 10x from 1000x (denominator 990, not 999)!`,
                },
              ]
            : undefined,
      };
    },
  },
  {
    id: "number-bounds-surds.fractional-indices",
    topicId: "number-bounds-surds",
    title: "Negative & fractional indices and index equations",
    level: 2,
    guideRef: "fractional-negative-indices",
    generate(rng, tier) {
      if (tier === 1) {
        const cases: Array<[number, number, number]> = [
          [2, 2, 1], [3, 2, 1], [4, 2, 1], [5, 2, 1], [6, 2, 1], [7, 2, 1], [8, 2, 1], [9, 2, 1], [10, 2, 1],
          [2, 2, 3], [3, 2, 3], [4, 2, 3], [5, 2, 3], [6, 2, 3], [7, 2, 3],
          [2, 3, 1], [3, 3, 1], [4, 3, 1], [5, 3, 1],
          [2, 3, 2], [3, 3, 2], [4, 3, 2], [5, 3, 2], [6, 3, 2],
          [2, 3, 4], [3, 3, 4], [2, 4, 3], [3, 4, 3], [2, 5, 2], [2, 5, 3],
        ]; // [rootVal, rootIndex n, power m] -> base = rootVal^n
        const [r, n, m] = rng.pick(cases);
        const neg = rng.bool(0.65);
        const base = Math.pow(r, n);
        const powered = Math.pow(r, m);
        if (neg) {
          return {
            prompt: `Evaluate {{${base}^(-${m}/${n})}} as a fraction in its simplest form.`,
            answer: { type: "fraction", n: 1, d: powered, simplest: true },
            solution: [
              `Negative index gives the reciprocal: {{1 / ${base}^(${m}/${n})}}.`,
              `Take the ${n === 2 ? "square" : n === 3 ? "cube" : "4th"} root of {{${base}}} to get {{${r}}}, then raise to power {{${m}}}: {{1 / ${powered}}}.`,
            ],
            hint: "Flip -> Root -> Power: reciprocal for minus, n-th root for denominator, power for numerator.",
            traps: [
              { spec: { type: "number", value: -powered }, feedback: "A negative index means reciprocal (1 over ...), never negative!" },
              { spec: { type: "number", value: powered }, feedback: "Don't forget the minus sign in the exponent: take the reciprocal." },
            ],
          };
        }
        return {
          prompt: `Work out the exact value of {{${base}^(${m}/${n})}}.`,
          answer: { type: "number", value: powered },
          solution: [
            `Take the ${n === 2 ? "square" : n === 3 ? "cube" : "4th"} root first: {{${base}^(1/${n}) = ${r}}}.`,
            `Raise to power {{${m}}}: {{${r}^${m} = ${powered}}}.`,
          ],
          hint: `Take the ${n === 2 ? "square" : n === 3 ? "cube" : "4th"} root of ${base} first, then raise to the power ${m}.`,
          traps:
            clean((base * m) / n) !== powered
              ? [
                  {
                    spec: { type: "number", value: roundTo((base * m) / n, 4) },
                    feedback: `${m}/${n} is an exponent (root then power), not a multiplier!`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        let p = 2, q = 3;
        const n = rng.pick([2, 3] as const);
        const m = n === 2 ? rng.pick([1, 3] as const) : rng.pick([1, 2] as const);
        for (let i = 0; i < 30; i++) {
          p = rng.int(2, n === 2 ? 9 : 5);
          q = rng.int(2, n === 2 ? 9 : 5);
          if (gcd(p, q) === 1) break;
        }
        const P = Math.pow(p, n);
        const Q = Math.pow(q, n);
        const ansN = Math.pow(q, m);
        const ansD = Math.pow(p, m);
        return {
          prompt: `Evaluate {{(${P}/${Q})^(-${m}/${n})}} as a fraction in its simplest form.`,
          answer: { type: "fraction", n: ansN, d: ansD, simplest: true },
          solution: [
            `Flip the fraction for the negative index: {{(${Q}/${P})^(${m}/${n})}}.`,
            `${n === 2 ? "Square" : "Cube"}-root top and bottom: {{(${q}/${p})^${m} = ${ansN}/${ansD}}}.`,
          ],
          hint: "Flip the fraction first to clear the negative sign, then root, then power.",
          traps: [
            {
              spec: { type: "fraction", n: ansD, d: ansN },
              feedback: "Remember to FLIP the fraction because the exponent is negative!",
            },
          ],
        };
      }

      // Tier 3: Index equation (b^r)^(cx + d) = (b^s)^(ex + f)
      const base = rng.pick([2, 3, 5] as const);
      const [r, s] = base === 5 ? ([2, 3] as const) : rng.pick([[2, 3], [3, 2], [2, 4], [3, 4]] as const);
      let c = 1, d = 1, e = 1, f = -2;
      for (let i = 0; i < 40; i++) {
        c = rng.int(1, 3);
        e = rng.int(1, 3);
        d = rng.nonZero(-4, 4);
        f = rng.nonZero(-4, 4);
        if (r * c !== s * e && r * d !== s * f) break;
      }
      const B1 = Math.pow(base, r);
      const B2 = Math.pow(base, s);
      const lhsCoef = r * c - s * e;
      const rhsConst = s * f - r * d;
      const [xn, xd] = simplify(rhsConst, lhsCoef);
      const expStr = (k: number, kConst: number) => `${k === 1 ? "x" : `${k}x`} ${kConst < 0 ? "-" : "+"} ${Math.abs(kConst)}`;
      const trapNum = f - d;
      const [txn, txd] = simplify(trapNum, lhsCoef);
      return {
        prompt: `Solve {{${B1}^(${expStr(c, d)}) = ${B2}^(${expStr(e, f)})}}.`,
        answer: xd === 1 ? { type: "number", value: xn } : { type: "fraction", n: xn, d: xd, simplest: true, allowDecimal: true },
        solution: [
          `Rewrite both bases as powers of {{${base}}}: {{(${base}^${r})^(${expStr(c, d)}) = (${base}^${s})^(${expStr(e, f)})}}.`,
          `Multiply exponents: {{${r * c}x ${r * d < 0 ? "-" : "+"} ${Math.abs(r * d)} = ${s * e}x ${s * f < 0 ? "-" : "+"} ${Math.abs(s * f)}}}.`,
          `Solve: {{${lhsCoef}x = ${rhsConst} -> x = ${xd === 1 ? xn : `${xn}/${xd}`}}}.`,
        ],
        hint: `Write ${B1} = ${base}^${r} and ${B2} = ${base}^${s}, then equate exponents carefully (don't forget brackets!).`,
        traps:
          txn * xd !== xn * txd
            ? [
                {
                  spec: txd === 1 ? { type: "number", value: txn } : { type: "fraction", n: txn, d: txd, allowDecimal: true },
                  feedback: `Distribute ${r} and ${s} across BOTH terms inside each exponent bracket!`,
                },
              ]
            : undefined,
      };
    },
  },
  {
    id: "number-bounds-surds.surds-expand",
    topicId: "number-bounds-surds",
    title: "Simplifying surds & expanding brackets",
    level: 2,
    guideRef: "surds-simplifying-expanding",
    generate(rng, tier) {
      const p = rng.pick([2, 3, 5, 6, 7] as const);
      if (tier === 1) {
        let k1 = 3, k2 = 2;
        for (let i = 0; i < 30; i++) {
          k1 = rng.int(2, 8);
          k2 = rng.int(2, 7);
          if (k1 !== k2) break;
        }
        const add = rng.bool();
        const coef = add ? k1 + k2 : k1 - k2;
        const n1 = k1 * k1 * p;
        const n2 = k2 * k2 * p;
        const expr = coef === 1 ? `sqrt(${p})` : coef === -1 ? `-sqrt(${p})` : `${coef}*sqrt(${p})`;
        return {
          prompt: `Simplify fully {{sqrt(${n1}) ${add ? "+" : "-"} sqrt(${n2})}}.`,
          answer: { type: "expression", expr, form: "simplified" },
          solution: [
            `Extract largest square factors: {{sqrt(${n1}) = ${k1}*sqrt(${p})}} and {{sqrt(${n2}) = ${k2}*sqrt(${p})}}.`,
            `Combine like surds: {{(${k1} ${add ? "+" : "-"} ${k2})*sqrt(${p}) = ${expr}}}.`,
          ],
          hint: `Rewrite each term as a multiple of sqrt(${p}).`,
          traps:
            add || n1 > n2
              ? [
                  {
                    spec: { type: "expression", expr: `sqrt(${add ? n1 + n2 : n1 - n2})` },
                    feedback: "Never add or subtract under square roots — simplify each surd first!",
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        let a = 3, b = 2, c = 4, d = -1;
        for (let i = 0; i < 40; i++) {
          a = rng.nonZero(-6, 6);
          b = rng.nonZero(-4, 4);
          c = rng.nonZero(-6, 6);
          d = rng.nonZero(-4, 4);
          if (a * c + b * d * p !== 0 && a * d + b * c !== 0) break;
        }
        const intPart = a * c + b * d * p;
        const surdCoef = a * d + b * c;
        const fmtBr = (x: number, y: number) =>
          `(${x} ${y < 0 ? "-" : "+"} ${Math.abs(y) === 1 ? "" : `${Math.abs(y)}*`}sqrt(${p}))`;
        const ansExpr = `${intPart} ${surdCoef < 0 ? "-" : "+"} ${Math.abs(surdCoef) === 1 ? "" : `${Math.abs(surdCoef)}*`}sqrt(${p})`;
        const wrongInt = a * c - b * d * p;
        const trapExpr = `${wrongInt} ${surdCoef < 0 ? "-" : "+"} ${Math.abs(surdCoef) === 1 ? "" : `${Math.abs(surdCoef)}*`}sqrt(${p})`;
        return {
          prompt: `Expand and simplify {{${fmtBr(a, b)}${fmtBr(c, d)}}}.`,
          answer: { type: "expression", expr: ansExpr, form: "simplified" },
          solution: [
            `Multiply all four pairs: {{${a * c} ${a * d < 0 ? "-" : "+"} ${Math.abs(a * d)}*sqrt(${p}) ${b * c < 0 ? "-" : "+"} ${Math.abs(b * c)}*sqrt(${p}) ${b * d < 0 ? "-" : "+"} ${Math.abs(b * d)}(${p})}}.`,
            `Collect integer terms ({{${a * c} ${b * d * p < 0 ? "-" : "+"} ${Math.abs(b * d * p)} = ${intPart}}}) and surd terms to get {{${ansExpr}}}.`,
          ],
          hint: `Use FOIL and remember sqrt(${p}) × sqrt(${p}) = ${p}.`,
          traps: [
            {
              spec: { type: "expression", expr: trapExpr },
              feedback: `Check the sign on (${num(b)}*sqrt(${p})) × (${num(d)}*sqrt(${p})) = ${num(b * d * p)}.`,
            },
          ],
        };
      }

      // Tier 3: (a ± b*sqrt(p))^2 + sqrt(k^2 * p)
      const a = rng.int(2, 7);
      const b = rng.nonZero(-4, 4);
      const k = rng.int(2, 5);
      const addSurd = rng.bool();
      const intPart = a * a + b * b * p;
      const surdCoef = 2 * a * b + (addSurd ? k : -k);
      const sqBr = `(${a} ${b < 0 ? "-" : "+"} ${Math.abs(b) === 1 ? "" : `${Math.abs(b)}*`}sqrt(${p}))^2`;
      const bigN = k * k * p;
      const ansExpr =
        surdCoef === 0
          ? `${intPart}`
          : `${intPart} ${surdCoef < 0 ? "-" : "+"} ${Math.abs(surdCoef) === 1 ? "" : `${Math.abs(surdCoef)}*`}sqrt(${p})`;
      const noMidCoef = addSurd ? k : -k;
      const trapNoMid = `${intPart} ${noMidCoef < 0 ? "-" : "+"} ${Math.abs(noMidCoef)}*sqrt(${p})`;
      return {
        prompt: `Simplify fully {{${sqBr} ${addSurd ? "+" : "-"} sqrt(${bigN})}}.`,
        answer: { type: "expression", expr: ansExpr, form: "simplified" },
        solution: [
          `Expand the square: {{${sqBr} = ${a * a} ${2 * a * b < 0 ? "-" : "+"} ${Math.abs(2 * a * b)}*sqrt(${p}) + ${b * b * p} = ${intPart} ${2 * a * b < 0 ? "-" : "+"} ${Math.abs(2 * a * b)}*sqrt(${p})}}.`,
          `Simplify {{sqrt(${bigN}) = ${k}*sqrt(${p})}}, then collect like surds: {{${ansExpr}}}.`,
        ],
        hint: `Write out the squared bracket twice so you include both middle ${num(a * b)}*sqrt(${p}) terms!`,
        traps: [
          {
            spec: { type: "expression", expr: trapNoMid },
            feedback: "Don't forget the 2ab*sqrt(p) middle term when squaring a two-term bracket!",
          },
        ],
      };
    },
  },
  {
    id: "number-bounds-surds.rationalise",
    topicId: "number-bounds-surds",
    title: "Rationalising denominators with conjugates",
    level: 3,
    guideRef: "rationalising-denominators",
    generate(rng, tier) {
      if (tier === 1) {
        const p = rng.pick([2, 3, 5, 6, 7, 10, 11] as const);
        const m = rng.int(2, 9);
        const k = m * p;
        return {
          prompt: `Rationalise the denominator and simplify {{${k} / sqrt(${p})}}.`,
          answer: { type: "expression", expr: `${m}*sqrt(${p})`, form: "simplified" },
          solution: [
            `Multiply numerator and denominator by {{sqrt(${p})}}: {{(${k}*sqrt(${p})) / ${p}}}.`,
            `Cancel {{${k} / ${p} = ${m}}} to get {{${m}*sqrt(${p})}}.`,
          ],
          hint: `Multiply top and bottom by sqrt(${p}).`,
          traps: [
            {
              spec: { type: "expression", expr: `${k}*sqrt(${p})` },
              feedback: `Divide ${k} by (sqrt(${p}) × sqrt(${p})) = ${p}.`,
            },
          ],
        };
      }

      if (tier === 2) {
        const pairs: Array<[number, number]> = [
          [2, 3], [3, 2], [3, 5], [3, 7], [4, 3], [4, 5], [4, 7], [4, 10], [5, 2], [5, 3], [5, 6], [5, 7],
        ];
        const [a, p] = rng.pick(pairs);
        const plusInDen = rng.bool();
        const m = rng.int(1, 5);
        const denDiff = a * a - p;
        const k = m * denDiff;
        const ansInt = m * a;
        const ansSurd = plusInDen ? -m : m;
        const ansExpr = `${ansInt} ${ansSurd < 0 ? "-" : "+"} ${Math.abs(ansSurd) === 1 ? "" : `${Math.abs(ansSurd)}*`}sqrt(${p})`;
        const wrongExpr = `${ansInt} ${ansSurd < 0 ? "+" : "-"} ${Math.abs(ansSurd) === 1 ? "" : `${Math.abs(ansSurd)}*`}sqrt(${p})`;
        return {
          prompt: `Rationalise the denominator and simplify {{${k} / (${a} ${plusInDen ? "+" : "-"} sqrt(${p}))}}.`,
          answer: { type: "expression", expr: ansExpr, form: "simplified" },
          solution: [
            `Multiply top and bottom by the conjugate {{(${a} ${plusInDen ? "-" : "+"} sqrt(${p}))}}.`,
            `Denominator: {{${a}^2 - (sqrt(${p}))^2 = ${a * a} - ${p} = ${denDiff}}}.`,
            `Simplify {{${k}(${a} ${plusInDen ? "-" : "+"} sqrt(${p})) / ${denDiff} = ${ansExpr}}}.`,
          ],
          hint: `Multiply top and bottom by the conjugate (${a} ${plusInDen ? "−" : "+"} sqrt(${p})).`,
          traps: [
            {
              spec: { type: "expression", expr: wrongExpr },
              feedback: `Flip the middle sign when forming the conjugate: use (${a} ${plusInDen ? "−" : "+"} sqrt(${p}))!`,
            },
          ],
        };
      }

      // Tier 3: Construct (u + v*sqrt(p))(a ± sqrt(p)) / (a ± sqrt(p)) -> clean answer u + v*sqrt(p)!
      const pairs: Array<[number, number]> = [
        [2, 3], [3, 2], [3, 5], [3, 7], [4, 3], [4, 5], [4, 7], [5, 3], [5, 6],
      ];
      const [a, p] = rng.pick(pairs);
      const sgn = rng.bool() ? 1 : -1; // denominator is a + sgn*sqrt(p)
      let u = 2, v = 1;
      for (let i = 0; i < 30; i++) {
        u = rng.nonZero(-5, 6);
        v = rng.nonZero(-4, 4);
        if (u * a + v * sgn * p !== 0 && u * sgn + v * a !== 0) break;
      }
      const numInt = u * a + v * sgn * p;
      const numSurd = u * sgn + v * a;
      const denDiff = a * a - p;
      const fmtSurd = (iPart: number, sPart: number) =>
        `${iPart} ${sPart < 0 ? "-" : "+"} ${Math.abs(sPart) === 1 ? "" : `${Math.abs(sPart)}*`}sqrt(${p})`;
      const ansExpr = fmtSurd(u, v);
      const unsimplifiedNum = fmtSurd(u * denDiff, v * denDiff);
      return {
        prompt: `Write {{(${fmtSurd(numInt, numSurd)}) / (${a} ${sgn > 0 ? "+" : "-"} sqrt(${p}))}} in the form {{c + d*sqrt(${p})}}, where {{c}} and {{d}} are integers.`,
        answer: { type: "expression", expr: ansExpr, form: "simplified" },
        solution: [
          `Multiply top and bottom by the conjugate {{(${a} ${sgn > 0 ? "-" : "+"} sqrt(${p}))}}.`,
          `Denominator: {{${a}^2 - ${p} = ${denDiff}}}.`,
          `Expanded numerator: {{${unsimplifiedNum}}}; dividing both terms by {{${denDiff}}} gives {{${ansExpr}}}.`,
        ],
        hint: `Multiply top and bottom by (${a} ${sgn > 0 ? "−" : "+"} sqrt(${p})), expand the top, then divide both terms by ${denDiff}.`,
        traps:
          denDiff > 1
            ? [
                {
                  spec: { type: "expression", expr: unsimplifiedNum },
                  feedback: `Remember to divide the expanded numerator by the rationalised denominator (${a}^2 − ${p} = ${denDiff})!`,
                },
              ]
            : undefined,
      };
    },
  },
];

import type { Drill } from "./types.ts";
import { clean, frac, gcd, roundTo } from "./helpers.ts";

const DEG = Math.PI / 180;
const ADEG = 180 / Math.PI;

export const drills: Drill[] = [
  {
    id: "trigonometry-3d.exact-trig-surds",
    topicId: "trigonometry-3d",
    title: "Exact trigonometric values (0°, 30°, 45°, 60°, 90°)",
    level: 1,
    guideRef: "pythagoras-exact-trig",
    generate(rng, tier) {
      if (tier === 1) {
        const rational = [
          { expr: "sin 30°", n: 1, d: 2 },
          { expr: "cos 60°", n: 1, d: 2 },
          { expr: "tan 45°", n: 1, d: 1 },
          { expr: "sin 90°", n: 1, d: 1 },
          { expr: "cos 0°", n: 1, d: 1 },
        ] as const;
        const p1 = rng.pick(rational);
        const p2 = rng.pick(rational.filter((x) => x.expr !== p1.expr));
        const a = rng.int(2, 9);
        const b = rng.int(1, 7);
        const add = rng.bool(0.65);
        const rawN = a * p1.n * p2.d + (add ? 1 : -1) * b * p2.n * p1.d;
        const rawD = p1.d * p2.d;
        const g = gcd(rawN, rawD);
        const n = rawN / g;
        const d = rawD / g;
        const trapN = rawN + (add ? rawD : -rawD);
        return {
          prompt: `Without using a calculator, work out the exact value of {{${a} ${p1.expr} ${add ? "+" : "-"} ${b} ${p2.expr}}}.${d > 1 ? " Give your answer as a fraction in its simplest form." : ""}`,
          answer: d === 1 ? { type: "number", value: n } : { type: "fraction", n, d, simplest: true },
          solution: [
            `Substitute exact values: {{${p1.expr} = ${p1.d === 1 ? p1.n : `${p1.n}/${p1.d}`}}} and {{${p2.expr} = ${p2.d === 1 ? p2.n : `${p2.n}/${p2.d}`}}}.`,
            `Compute {{${a} * ${p1.d === 1 ? p1.n : `(${p1.n}/${p1.d})`} ${add ? "+" : "-"} ${b} * ${p2.d === 1 ? p2.n : `(${p2.n}/${p2.d})`} = ${d === 1 ? n : `${n}/${d}`}}}.`,
          ],
          hint: "Recall sin 30° = cos 60° = 1/2 and tan 45° = sin 90° = cos 0° = 1.",
          traps: [
            {
              spec: d === 1 ? { type: "number", value: n + 1 } : { type: "fraction", n: trapN / gcd(trapN, rawD), d: rawD / gcd(trapN, rawD) },
              feedback: "Check your exact trig values for 30°, 45°, 60° and 90°.",
            },
          ],
        };
      }
      if (tier === 2) {
        const sqPool = [
          { expr: "(sin 60°)^2", val: "sqrt(3)/2", n: 3, d: 4 },
          { expr: "(cos 30°)^2", val: "sqrt(3)/2", n: 3, d: 4 },
          { expr: "(sin 45°)^2", val: "sqrt(2)/2", n: 1, d: 2 },
          { expr: "(cos 45°)^2", val: "sqrt(2)/2", n: 1, d: 2 },
          { expr: "(tan 60°)^2", val: "sqrt(3)", n: 3, d: 1 },
          { expr: "(tan 30°)^2", val: "sqrt(3)/3", n: 1, d: 3 },
        ] as const;
        const p1 = rng.pick(sqPool);
        const p2 = rng.pick(sqPool.filter((x) => x.expr !== p1.expr));
        const a = rng.int(1, 5);
        const b = rng.int(1, 5);
        const rawN = a * p1.n * p2.d + b * p2.n * p1.d;
        const rawD = p1.d * p2.d;
        const g = gcd(rawN, rawD);
        const n = rawN / g;
        const d = rawD / g;
        return {
          prompt: `Work out the exact value of {{${a === 1 ? "" : a}${p1.expr} + ${b === 1 ? "" : b}${p2.expr}}}.${d > 1 ? " Give your answer as a simplified fraction." : ""}`,
          answer: d === 1 ? { type: "number", value: n } : { type: "fraction", n, d, simplest: true },
          solution: [
            `Square each exact value: {{${p1.expr} = ${frac(p1.n, p1.d).slice(2, -2)}}} and {{${p2.expr} = ${frac(p2.n, p2.d).slice(2, -2)}}}.`,
            `Combine: {{${a} * (${p1.n}/${p1.d}) + ${b} * (${p2.n}/${p2.d}) = ${d === 1 ? n : `${n}/${d}`}}}.`,
          ],
          hint: "Remember to square BOTH the surd numerator and the denominator!",
          traps: [
            {
              spec: { type: "number", value: n + 2 },
              feedback: "Remember that (√3/2)² = 3/4 and (√2/2)² = 2/4 = 1/2 — square the denominator too!",
            },
          ],
        };
      }
      // Tier 3: surd product pairs that rationalise cleanly
      const pairs = [
        { expr: "sin 60° * cos 30°", step: "(sqrt(3)/2)(sqrt(3)/2) = 3/4", n: 3, d: 4 },
        { expr: "sin 45° * cos 45°", step: "(sqrt(2)/2)(sqrt(2)/2) = 1/2", n: 1, d: 2 },
        { expr: "tan 60° * sin 60°", step: "sqrt(3) * (sqrt(3)/2) = 3/2", n: 3, d: 2 },
        { expr: "tan 30° * cos 30°", step: "(sqrt(3)/3)(sqrt(3)/2) = 1/2", n: 1, d: 2 },
        { expr: "tan 60° * tan 30°", step: "sqrt(3) * (sqrt(3)/3) = 1", n: 1, d: 1 },
      ] as const;
      const p = rng.pick(pairs);
      const k = rng.int(2, 7);
      const c = rng.int(1, 6);
      const sub = rng.bool(0.5);
      const rawN = k * p.n + (sub ? -1 : 1) * c * p.d;
      const rawD = p.d;
      const g = gcd(rawN, rawD);
      const n = rawN / g;
      const d = rawD / g;
      return {
        prompt: `Evaluate {{${k} * ${p.expr} ${sub ? "-" : "+"} ${c} tan 45°}} without a calculator.${d > 1 ? " Give your answer as a simplified fraction." : ""}`,
        answer: d === 1 ? { type: "number", value: n } : { type: "fraction", n, d, simplest: true },
        solution: [
          `First simplify the surd product: {{${p.expr} = ${p.step}}}.`,
          `Since {{tan 45° = 1}}, compute {{${k} * (${p.n}/${p.d}) ${sub ? "-" : "+"} ${c} = ${d === 1 ? n : `${n}/${d}`}}}.`,
        ],
        hint: "Use √a × √a = a to simplify the trig product first.",
        traps: [
          {
            spec: { type: "number", value: d === 1 ? n + 2 * c : Math.round(n / d) + 3 },
            feedback: "Check the surd multiplication and the sign before tan 45° = 1.",
          },
        ],
      };
    },
  },
  {
    id: "trigonometry-3d.cuboid-pyramid-3d",
    topicId: "trigonometry-3d",
    title: "3D Pythagoras & line-to-plane shadow angles",
    level: 2,
    guideRef: "three-dimensional-trig",
    generate(rng, tier) {
      if (tier === 1) {
        const l = rng.int(6, 18);
        const w = rng.int(4, 14);
        const h = rng.int(5, 16);
        const sumSq = l * l + w * w + h * h;
        const d = roundTo(Math.sqrt(sumSq), 1);
        const floorOnly = roundTo(Math.sqrt(l * l + w * w), 1);
        return {
          prompt: `A cuboid measures {{${l}}} cm long, {{${w}}} cm wide and {{${h}}} cm high. Calculate the length of its space diagonal in cm, correct to 1 decimal place.`,
          answer: { type: "number", value: d, tolerance: 0.1, display: `${d} cm` },
          solution: [
            `Apply 3D Pythagoras: {{d = sqrt(${l}^2 + ${w}^2 + ${h}^2) = sqrt(${sumSq})}}.`,
            `{{d = ${d}}} cm (1 d.p.).`,
          ],
          hint: "Use d = √(l² + w² + h²).",
          traps:
            Math.abs(floorOnly - d) > 0.4
              ? [{ spec: { type: "number", value: floorOnly, tolerance: 0.08 }, feedback: "That's only the 2D floor diagonal — include h² as well!" }]
              : undefined,
        };
      }
      if (tier === 2) {
        const l = rng.int(8, 20);
        const w = rng.int(6, 16);
        const h = rng.int(5, 18);
        const acSq = l * l + w * w;
        const ac = roundTo(Math.sqrt(acSq), 3);
        const ans = roundTo(Math.atan(h / Math.sqrt(acSq)) * ADEG, 1);
        const edgeTrap = roundTo(Math.atan(h / l) * ADEG, 1);
        return {
          prompt: `Cuboid {{ABCDEFGH}} has horizontal base {{ABCD}} with {{AB = ${l}}} cm, {{BC = ${w}}} cm and vertical height {{CG = ${h}}} cm. Calculate the angle between space diagonal {{AG}} and the horizontal plane {{ABCD}}, in degrees correct to 1 decimal place.`,
          answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans}°` },
          solution: [
            `Find the base shadow diagonal: {{AC = sqrt(${l}^2 + ${w}^2) = sqrt(${acSq}) ≈ ${ac}}} cm.`,
            `In right-angled triangle {{ACG}}, {{tan(angle GAC) = ${h} / sqrt(${acSq})}}, so {{angle GAC = ${ans}°}} (1 d.p.).`,
          ],
          hint: "Drop from G to C: find base diagonal AC first, then use tan θ = CG / AC.",
          traps:
            Math.abs(edgeTrap - ans) > 0.5
              ? [{ spec: { type: "number", value: edgeTrap, tolerance: 0.08 }, feedback: "Use the floor diagonal AC = √(AB² + BC²), not the single edge AB!" }]
              : undefined,
        };
      }
      // Tier 3: Pyramid sloping FACE vs sloping EDGE
      const halfSide = rng.int(4, 14);
      const side = 2 * halfSide;
      const h = rng.int(7, 22);
      const askFace = rng.bool(0.5);
      const faceAngle = roundTo(Math.atan(h / halfSide) * ADEG, 1);
      const edgeAngle = roundTo(Math.atan(h / (halfSide * Math.SQRT2)) * ADEG, 1);
      if (askFace) {
        return {
          prompt: `A right square-based pyramid {{VABCD}} has horizontal base side {{${side}}} cm and vertical height {{VO = ${h}}} cm above centre {{O}}. Calculate the angle between a **sloping triangular face** and the base {{ABCD}}, in degrees correct to 1 decimal place.`,
          answer: { type: "number", value: faceAngle, tolerance: 0.1, display: `${faceAngle}°` },
          solution: [
            `Drop to the midpoint {{M}} of a base edge: {{OM = ${side} / 2 = ${halfSide}}} cm.`,
            `In right-angled triangle {{VOM}}, {{tan(angle VMO) = ${h} / ${halfSide}}}, giving {{${faceAngle}°}} (1 d.p.).`,
          ],
          hint: "For a sloping FACE, use the distance OM from O to the midpoint of a base edge (half the side).",
          traps: [
            { spec: { type: "number", value: edgeAngle, tolerance: 0.1 }, feedback: "You found the sloping EDGE angle using half the diagonal — for a sloping FACE, use half the side length!" },
          ],
        };
      }
      return {
        prompt: `A right square-based pyramid {{VABCD}} has horizontal base side {{${side}}} cm and vertical height {{VO = ${h}}} cm above centre {{O}}. Calculate the angle between **sloping edge {{VC}}** and the base {{ABCD}}, in degrees correct to 1 decimal place.`,
        answer: { type: "number", value: edgeAngle, tolerance: 0.1, display: `${edgeAngle}°` },
        solution: [
          `Half of base diagonal {{AC}} is {{OC = ${halfSide} sqrt(2)}} cm.`,
          `In right-angled triangle {{VOC}}, {{tan(angle VCO) = ${h} / (${halfSide} sqrt(2))}}, giving {{${edgeAngle}°}} (1 d.p.).`,
        ],
        hint: "For a sloping EDGE, use half the base diagonal OC = (side / 2)√2.",
        traps: [
          { spec: { type: "number", value: faceAngle, tolerance: 0.1 }, feedback: "You used half the side (which gives the sloping FACE angle) instead of half the base diagonal OC!" },
        ],
      };
    },
  },
  {
    id: "trigonometry-3d.sine-rule-obtuse",
    topicId: "trigonometry-3d",
    title: "The Sine Rule & ambiguous obtuse angles",
    level: 2,
    guideRef: "sine-rule-ambiguous",
    generate(rng, tier) {
      if (tier === 1) {
        let A = 40, B = 65;
        for (let i = 0; i < 40; i++) {
          A = rng.int(30, 72);
          B = rng.int(35, 82);
          if (Math.abs(A - B) >= 10 && A + B < 155) break;
        }
        const a = rng.int(8, 22);
        const b = roundTo((a * Math.sin(B * DEG)) / Math.sin(A * DEG), 1);
        const swapTrap = roundTo((a * Math.sin(A * DEG)) / Math.sin(B * DEG), 1);
        return {
          prompt: `In triangle {{ABC}}, {{angle A = ${A}°}}, {{angle B = ${B}°}} and {{BC = ${a}}} cm. Calculate the length of {{AC}} in cm, correct to 1 decimal place.`,
          answer: { type: "number", value: b, tolerance: 0.1, display: `${b} cm` },
          solution: [
            `Match opposite pairs: {{BC = ${a}}} cm is opposite {{${A}°}}, and {{AC}} is opposite {{${B}°}}.`,
            `{{AC = (${a} sin ${B}°) / (sin ${A}°) = ${b}}} cm (1 d.p.).`,
          ],
          hint: "Side BC is opposite angle A, and side AC is opposite angle B.",
          traps:
            Math.abs(swapTrap - b) > 0.4
              ? [{ spec: { type: "number", value: swapTrap, tolerance: 0.08 }, feedback: "You swapped the opposite pairs in the Sine Rule!" }]
              : undefined,
        };
      }
      // Tiers 2 & 3 construct an ambiguous obtuse triangle cleanly
      let P = 30, qr = 9, pq = 14, ratio = 0.75;
      for (let i = 0; i < 80; i++) {
        P = rng.int(22, 39);
        qr = rng.int(8, 15);
        pq = rng.int(qr + 3, qr + 9);
        ratio = (pq * Math.sin(P * DEG)) / qr;
        if (ratio >= 0.62 && ratio <= 0.94) break;
      }
      const acuteR = Math.asin(ratio) * ADEG;
      const obtuseR = 180 - acuteR;
      if (tier === 2) {
        const ans = roundTo(obtuseR, 1);
        const trap = roundTo(acuteR, 1);
        return {
          prompt: `In triangle {{PQR}}, {{PQ = ${pq}}} cm, {{QR = ${qr}}} cm and {{angle QPR = ${P}°}}. Given that **angle {{PRQ}} is obtuse**, calculate {{angle PRQ}} in degrees correct to 1 decimal place.`,
          answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans}°` },
          solution: [
            `By the Sine Rule: {{(sin R)/${pq} = (sin ${P}°)/${qr} => sin R = ${roundTo(ratio, 4)}}}.`,
            `Acute calculator angle {{= ${trap}°}}; since {{angle PRQ}} is obtuse, {{180° - ${roundTo(acuteR, 2)}° = ${ans}°}} (1 d.p.).`,
          ],
          hint: "Find the acute sin⁻¹ value first, then subtract from 180° because angle PRQ is obtuse!",
          traps: [
            { spec: { type: "number", value: trap, tolerance: 0.1 }, feedback: "That's the acute calculator output — subtract it from 180° for the obtuse angle!" },
          ],
        };
      }
      // Tier 3: Area of the obtuse SSA triangle
      const Q = 180 - P - obtuseR;
      const areaObtuse = roundTo(0.5 * pq * qr * Math.sin(Q * DEG), 1);
      const areaAcuteTrap = roundTo(0.5 * pq * qr * Math.sin((180 - P - acuteR) * DEG), 1);
      return {
        prompt: `In triangle {{PQR}}, {{PQ = ${pq}}} cm, {{QR = ${qr}}} cm, {{angle QPR = ${P}°}} and **angle {{PRQ}} is obtuse**. Calculate the **area** of triangle {{PQR}} in cm², correct to 1 decimal place.`,
        answer: { type: "number", value: areaObtuse, tolerance: 0.15, display: `${areaObtuse} cm²` },
        solution: [
          `Sine Rule gives acute {{${roundTo(acuteR, 2)}°}}, so obtuse {{angle PRQ = 180° - ${roundTo(acuteR, 2)}° = ${roundTo(obtuseR, 2)}°}}.`,
          `Included {{angle PQR = 180° - ${P}° - ${roundTo(obtuseR, 2)}° = ${roundTo(Q, 2)}°}}.`,
          `{{"Area" = (1/2)(${pq})(${qr}) sin(${roundTo(Q, 2)}°) = ${areaObtuse}}} cm² (1 d.p.).`,
        ],
        hint: "Find obtuse angle R = 180° − θ first, deduce included angle Q = 180° − P − R, then apply ½ · PQ · QR · sin Q.",
        traps:
          Math.abs(areaAcuteTrap - areaObtuse) > 0.5
            ? [{ spec: { type: "number", value: areaAcuteTrap, tolerance: 0.1 }, feedback: "You used the acute angle for R instead of the obtuse angle 180° − θ!" }]
            : undefined,
      };
    },
  },
  {
    id: "trigonometry-3d.cosine-rule-area",
    topicId: "trigonometry-3d",
    title: "The Cosine Rule & ½ab sin C area",
    level: 3,
    guideRef: "cosine-rule-triangle-area",
    generate(rng, tier) {
      if (tier === 1) {
        const a = rng.int(6, 16);
        const b = rng.int(7, 18);
        const C = rng.int(34, 80);
        const area = roundTo(0.5 * a * b * Math.sin(C * DEG), 1);
        const doubleTrap = roundTo(a * b * Math.sin(C * DEG), 1);
        return {
          prompt: `Calculate the area of a triangle with sides {{${a}}} cm and {{${b}}} cm and included angle {{${C}°}}. Give your answer in cm² correct to 1 decimal place.`,
          answer: { type: "number", value: area, tolerance: 0.1, display: `${area} cm²` },
          solution: [
            `Apply {{"Area" = (1/2)ab sin C = (1/2)(${a})(${b}) sin ${C}°}}.`,
            `{{"Area" = ${area}}} cm² (1 d.p.).`,
          ],
          hint: "Multiply 0.5 × side₁ × side₂ × sin(included angle).",
          traps: [
            { spec: { type: "number", value: doubleTrap, tolerance: 0.1 }, feedback: "Don't forget the factor of 1/2 in ½ab sin C!" },
          ],
        };
      }
      if (tier === 2) {
        const b = rng.int(6, 15);
        const c = rng.int(7, 16);
        const A = rng.int(102, 142);
        const aSq = b * b + c * c - 2 * b * c * Math.cos(A * DEG);
        const ans = roundTo(Math.sqrt(aSq), 1);
        const minusTrap = roundTo(Math.sqrt(Math.max(1, b * b + c * c + 2 * b * c * Math.cos(A * DEG))), 1);
        return {
          prompt: `In triangle {{ABC}}, {{b = ${b}}} cm, {{c = ${c}}} cm and obtuse included angle {{A = ${A}°}}. Calculate the length of side {{a}} in cm, correct to 1 decimal place.`,
          answer: { type: "number", value: ans, tolerance: 0.1, display: `${ans} cm` },
          solution: [
            `Apply {{a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c}) cos ${A}°}}.`,
            `Because {{cos ${A}° < 0}}, {{a^2 = ${b * b + c * c} + ${roundTo(-2 * b * c * Math.cos(A * DEG), 2)} = ${roundTo(aSq, 2)}}}.`,
            `{{a = sqrt(${roundTo(aSq, 2)}) = ${ans}}} cm (1 d.p.).`,
          ],
          hint: "Since A > 90°, cos A is negative, so −2bc cos A adds to b² + c²!",
          traps:
            Math.abs(minusTrap - ans) > 0.5
              ? [{ spec: { type: "number", value: minusTrap, tolerance: 0.1 }, feedback: "Sign trap! For obtuse angles cos A < 0, so −2bc cos A is positive!" }]
              : undefined,
        };
      }
      // Tier 3: SSS largest (obtuse) angle
      let a = 6, b = 9, c = 13;
      for (let i = 0; i < 80; i++) {
        a = rng.int(5, 11);
        b = rng.int(a + 1, 14);
        const minC = Math.ceil(Math.sqrt(a * a + b * b + 8));
        const maxC = a + b - 2;
        if (minC <= maxC) {
          c = rng.int(minC, maxC);
          break;
        }
      }
      const numVal = a * a + b * b - c * c;
      const denVal = 2 * a * b;
      const C = roundTo(Math.acos(numVal / denVal) * ADEG, 1);
      const signTrap = roundTo(180 - C, 1);
      return {
        prompt: `A triangle has side lengths {{${a}}} cm, {{${b}}} cm and {{${c}}} cm. Calculate the size of its **largest** angle in degrees, correct to 1 decimal place.`,
        answer: { type: "number", value: C, tolerance: 0.1, display: `${C}°` },
        solution: [
          `The largest angle {{C}} is opposite longest side {{${c}}} cm: {{cos C = (${a}^2 + ${b}^2 - ${c}^2) / (2 * ${a} * ${b}) = ${numVal} / ${denVal}}}.`,
          `{{C = cos^(-1)(${numVal}/${denVal}) = ${C}°}} (1 d.p.).`,
        ],
        hint: "Put −c² (the longest side squared) in cos C = (a² + b² − c²)/(2ab) and keep the minus sign!",
        traps:
          Math.abs(signTrap - C) > 0.5
            ? [{ spec: { type: "number", value: signTrap, tolerance: 0.1 }, feedback: "Don't drop the negative sign on cos C — the largest angle here is obtuse!" }]
            : undefined,
      };
    },
  },
  {
    id: "trigonometry-3d.bearings-trig-waves",
    topicId: "trigonometry-3d",
    title: "Three-figure bearings & 0°–360° wave roots",
    level: 2,
    guideRef: "bearings-and-trig-graphs",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          const b = rng.int(12, 99);
          const padB = String(b).padStart(3, "0");
          const ans = b + 180;
          return {
            prompt: `The bearing of town {{Q}} from town {{P}} is {{${padB}°}}. Work out the three-figure bearing of town {{P}} **from** town {{Q}}.`,
            answer: { type: "number", value: ans, display: `${ans}°` },
            solution: [
              `Parallel North arrows mean the reverse direction adds {{180°}}: {{${padB}° + 180° = ${ans}°}}.`,
            ],
            hint: "Add 180° when the forward bearing is less than 180°.",
            traps: [
              { spec: { type: "number", value: 180 - b }, feedback: "Measure clockwise from North at Q — add 180° instead of subtracting from 180°!" },
            ],
          };
        }
        const fn = rng.pick(["sin", "cos", "tan"] as const);
        const x1 = rng.int(16, 74);
        const x2 = fn === "sin" ? 180 - x1 : fn === "cos" ? 360 - x1 : 180 + x1;
        const wrong = fn === "sin" ? 360 - x1 : 180 - x1;
        const kVal = roundTo(fn === "sin" ? Math.sin(x1 * DEG) : fn === "cos" ? Math.cos(x1 * DEG) : Math.tan(x1 * DEG), 3);
        return {
          prompt: `One solution to {{${fn} x = ${clean(kVal)}}} in {{0° <= x <= 360°}} is {{x = ${x1}°}} (to the nearest degree). Find the **other** solution in {{0° <= x <= 360°}}.`,
          answer: { type: "number", value: x2, display: `${x2}°` },
          solution: [
            fn === "sin"
              ? `For {{y = sin x}}, pair {{x}} with {{180° - x = 180° - ${x1}° = ${x2}°}}.`
              : fn === "cos"
                ? `For {{y = cos x}}, pair {{x}} with {{360° - x = 360° - ${x1}° = ${x2}°}}.`
                : `For {{y = tan x}} (period {{180°}}), pair {{x}} with {{x + 180° = ${x1}° + 180° = ${x2}°}}.`,
          ],
          hint: "Remember: sin → 180° − x, cos → 360° − x, tan → x + 180°.",
          traps: [
            { spec: { type: "number", value: wrong }, feedback: `Check which wave you are solving (${fn} x)!` },
          ],
        };
      }
      if (tier === 2) {
        const isSin = rng.bool(0.5);
        const den = rng.int(5, 13);
        const num = rng.int(1, den - 1);
        if (gcd(num, den) > 1) {
          // still fine, distinct prompt via num & den
        }
        const ratio = num / den;
        const x1 = roundTo((isSin ? Math.asin(ratio) : Math.acos(ratio)) * ADEG, 1);
        const x2 = roundTo(isSin ? 180 - x1 : 360 - x1, 1);
        const wrong2 = roundTo(isSin ? 360 - x1 : 180 - x1, 1);
        return {
          prompt: `Solve {{${den} ${isSin ? "sin" : "cos"} x = ${num}}} for {{0° <= x <= 360°}}. Give both answers in degrees correct to 1 decimal place, separated by a comma.`,
          answer: { type: "list", values: [x1, x2], tolerance: 0.15, display: `${x1}°, ${x2}°` },
          solution: [
            `Divide by {{${den}}}: {{${isSin ? "sin" : "cos"} x = ${num}/${den}}}.`,
            `Principal acute solution: {{x_1 = ${x1}°}}.`,
            isSin
              ? `By sine wave symmetry: {{x_2 = 180° - ${x1}° = ${x2}°}}.`
              : `By cosine wave symmetry: {{x_2 = 360° - ${x1}° = ${x2}°}}.`,
          ],
          hint: isSin ? "Divide first, then use x and 180° − x." : "Divide first, then use x and 360° − x.",
          traps:
            Math.abs(wrong2 - x2) > 1
              ? [{ spec: { type: "list", values: [x1, wrong2], tolerance: 0.15 }, feedback: isSin ? "Sine uses 180° − x, not 360° − x!" : "Cosine uses 360° − x, not 180° − x!" }]
              : undefined,
        };
      }
      // Tier 3: Two-leg bearing journey + Cosine Rule
      const b1 = rng.int(25, 82);
      const b2 = rng.int(135, 195);
      const d1 = rng.int(8, 18);
      const d2 = rng.int(9, 19);
      const backB = b1 + 180;
      const intAngle = backB - b2;
      const ac = roundTo(Math.sqrt(d1 * d1 + d2 * d2 - 2 * d1 * d2 * Math.cos(intAngle * DEG)), 1);
      const wrongAngle = b2 - b1;
      const trapAc = roundTo(Math.sqrt(d1 * d1 + d2 * d2 - 2 * d1 * d2 * Math.cos(wrongAngle * DEG)), 1);
      const padB1 = String(b1).padStart(3, "0");
      return {
        prompt: `A vessel sails {{${d1}}} km from {{A}} to {{B}} on a bearing of {{${padB1}°}}, then sails {{${d2}}} km from {{B}} to {{C}} on a bearing of {{${b2}°}}. Calculate the direct distance {{AC}} in km, correct to 1 decimal place.`,
        answer: { type: "number", value: ac, tolerance: 0.1, display: `${ac} km` },
        solution: [
          `At {{B}}, back-bearing of {{A}} is {{${padB1}° + 180° = ${backB}°}}, so interior {{angle ABC = ${backB}° - ${b2}° = ${intAngle}°}}.`,
          `By the Cosine Rule: {{AC = sqrt(${d1}^2 + ${d2}^2 - 2(${d1})(${d2}) cos ${intAngle}°) = ${ac}}} km (1 d.p.).`,
        ],
        hint: `Find back-bearing of A from B (${padB1}° + 180° = ${backB}°) first to get interior angle ABC.`,
        traps:
          Math.abs(trapAc - ac) > 0.4
            ? [{ spec: { type: "number", value: trapAc, tolerance: 0.1 }, feedback: `Convert ${padB1}° to back-bearing ${backB}° at B first — interior angle ABC is ${intAngle}°, not ${wrongAngle}°!` }]
            : undefined,
      };
    },
  },
];

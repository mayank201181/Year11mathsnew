import type { Drill } from "./types.ts";
import { clean, gcd, num, poly } from "./helpers.ts";

/** Format (ax + b) cleanly inside {{ }} and AnswerSpec.expr, e.g. "(2x - 3)" or "(x + 4)". */
function lin(a: number, b: number, v = "x"): string {
  return `(${poly([[a, v], [b, ""]])})`;
}

export const drills: Drill[] = [
  {
    id: "algebra-quadratics.expand-triple",
    topicId: "algebra-quadratics",
    title: "Expand triple brackets & subtracted squares",
    level: 2,
    guideRef: "expanding-three-brackets",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.5)) {
        // Subtracted squared brackets: (ax + p)^2 - (bx + q)^2
        let a = 2, b = 1, p = 3, q = -2;
        for (let i = 0; i < 40; i++) {
          a = rng.int(2, 5);
          b = rng.int(1, a - 1);
          p = rng.nonZero(-6, 6);
          q = rng.nonZero(-6, 6);
          if (2 * b * q !== 0 && q * q !== 0) break;
        }
        const c2 = clean(a * a - b * b);
        const c1 = clean(2 * a * p - 2 * b * q);
        const c0 = clean(p * p - q * q);
        const ans = poly([[c2, "x^2"], [c1, "x"], [c0, ""]]);
        // Sign-slip trap: forgetting to distribute minus across +2bq*x + q^2
        const trapExpr = poly([[c2, "x^2"], [clean(2 * a * p + 2 * b * q), "x"], [clean(p * p + q * q), ""]]);
        const q1 = poly([[a * a, "x^2"], [2 * a * p, "x"], [p * p, ""]]);
        const q2 = poly([[b * b, "x^2"], [2 * b * q, "x"], [q * q, ""]]);
        return {
          prompt: `Expand and simplify {{${lin(a, p)}^2 - ${lin(b, q)}^2}}.`,
          answer: { type: "expression", expr: ans, form: "expanded" },
          solution: [
            `Expand inside protective brackets: {{(${q1}) - (${q2})}}.`,
            `Distribute the minus sign across all three terms of the second bracket.`,
            `Collect like terms: {{${ans}}}.`,
          ],
          hint: "Keep the second squared bracket inside parentheses until you flip every sign inside it.",
          traps: [
            {
              spec: { type: "expression", expr: trapExpr },
              feedback: "Distribute the minus sign across ALL terms of the second squared bracket!",
            },
          ],
        };
      }

      const a = tier === 1 ? 1 : rng.pick([1, 2, 3]);
      const b = tier === 3 ? rng.pick([1, 2]) : 1;
      let p = 1, q = 2, r = 3;
      for (let i = 0; i < 40; i++) {
        const lim = tier === 1 ? 5 : 6;
        p = rng.nonZero(-lim, lim);
        q = rng.nonZero(-lim, lim);
        r = rng.nonZero(-lim, lim);
        // Ensure middle coefficients are non-zero so the "ends-only" trap differs from the answer
        const A2 = a * b;
        const B2 = a * q + b * p;
        const C2 = p * q;
        const c2 = A2 * r + B2;
        const c1 = B2 * r + C2;
        if (c2 !== 0 || c1 !== 0) break;
      }
      const A2 = clean(a * b);
      const B2 = clean(a * q + b * p);
      const C2 = clean(p * q);
      const c3 = A2;
      const c2 = clean(A2 * r + B2);
      const c1 = clean(B2 * r + C2);
      const c0 = clean(C2 * r);
      const quad = poly([[A2, "x^2"], [B2, "x"], [C2, ""]]);
      const ans = poly([[c3, "x^3"], [c2, "x^2"], [c1, "x"], [c0, ""]]);
      const endsOnly = poly([[c3, "x^3"], [c0, ""]]);
      return {
        prompt: `Expand and simplify {{${lin(a, p)}${lin(b, q)}${lin(1, r)}}}.`,
        answer: { type: "expression", expr: ans, form: "expanded" },
        solution: [
          `Expand the first pair: {{${lin(a, p)}${lin(b, q)} = ${quad}}}.`,
          `Multiply {{(${quad})}} by {{${lin(1, r)}}}: multiply every term by {{x}} and by {{${num(r)}}}.`,
          `Collect like powers: {{${ans}}}.`,
        ],
        hint: "Multiply and simplify the first two brackets into a quadratic before multiplying by the third.",
        traps: [
          {
            spec: { type: "expression", expr: endsOnly },
            feedback: "You only multiplied the x-terms and the constants — expand two brackets first, then multiply every term by the third!",
          },
        ],
      };
    },
  },
  {
    id: "algebra-quadratics.factorise-quad",
    topicId: "algebra-quadratics",
    title: "Factorise ax² + bx + c & difference of two squares",
    level: 2,
    guideRef: "factorising-quadratics",
    generate(rng, tier) {
      if (tier === 1 && rng.bool(0.45)) {
        // Difference of two squares: a^2 x^2 - b^2 y^2 with gcd(a, b) === 1
        let a = 2, b = 3;
        for (let i = 0; i < 40; i++) {
          a = rng.int(1, 7);
          b = rng.int(2, 9);
          if (gcd(a, b) === 1) break;
        }
        const useY = rng.bool(0.5);
        const v2 = useY ? "y" : "";
        const lhs = poly([[a * a, "x^2"], [-b * b, useY ? "y^2" : ""]]);
        const f1 = `(${poly([[a, "x"], [-b, v2]])})`;
        const f2 = `(${poly([[a, "x"], [b, v2]])})`;
        return {
          prompt: `Factorise {{${lhs}}}.`,
          answer: { type: "expression", expr: `${f1}${f2}`, form: "factorised" },
          solution: [
            `Recognise a difference of two squares: {{(${poly([[a, "x"]])})^2 - (${poly([[b, v2]])})^2}}.`,
            `Apply {{A^2 - B^2 = (A - B)(A + B)}} to get {{${f1}${f2}}}.`,
          ],
          hint: "Use difference of two squares: A² − B² = (A − B)(A + B).",
          traps: [
            {
              spec: { type: "expression", expr: `${f1}^2` },
              feedback: "A repeated bracket has a middle term — use opposite signs (A − B)(A + B) for difference of two squares!",
            },
          ],
        };
      }

      const k = tier === 3 ? rng.pick([2, 3, 4]) : 1;
      let a = 1, b = 1, p = 2, q = -3;
      for (let i = 0; i < 60; i++) {
        a = tier === 1 ? 1 : rng.pick([2, 3, 4, 5]);
        b = tier === 1 ? 1 : rng.pick([1, 2, 3]);
        p = rng.nonZero(-7, 7);
        q = rng.nonZero(-7, 7);
        if (gcd(a, Math.abs(p)) === 1 && gcd(b, Math.abs(q)) === 1 && a * q + b * p !== 0) break;
      }
      const c2 = clean(k * a * b);
      const c1 = clean(k * (a * q + b * p));
      const c0 = clean(k * p * q);
      const expanded = poly([[c2, "x^2"], [c1, "x"], [c0, ""]]);
      const ans = `${k > 1 ? k : ""}${lin(a, p)}${lin(b, q)}`;
      const flipped = `${k > 1 ? k : ""}${lin(a, -p)}${lin(b, -q)}`;
      const ac = (a * b) * (p * q);
      const m1 = a * q, m2 = b * p;
      return {
        prompt: `Factorise${k > 1 ? " **fully**" : ""} {{${expanded}}}.`,
        answer: { type: "expression", expr: ans, form: "factorised" },
        solution: [
          ...(k > 1 ? [`Extract the highest common factor {{${k}}} first: {{${k}(${poly([[a * b, "x^2"], [a * q + b * p, "x"], [p * q, ""]])})}}.`] : []),
          `Use {{ac = ${num(ac)}}}: split {{${num(a * q + b * p)}x}} into {{${num(m1)}x}} and {{${num(m2)}x}}.`,
          `Factorise into brackets: {{${ans}}}.`,
        ],
        hint: k > 1
          ? `Take out the common numerical factor ${k} before splitting the middle term!`
          : `Find two integers multiplying to ${num(ac)} and adding to ${num(a * q + b * p)}.`,
        traps: [
          {
            spec: { type: "expression", expr: flipped },
            feedback: "Check the sign of the middle x-term by mentally expanding your brackets!",
          },
        ],
      };
    },
  },
  {
    id: "algebra-quadratics.complete-square",
    topicId: "algebra-quadratics",
    title: "Complete the square & find turning points",
    level: 2,
    guideRef: "completing-the-square",
    generate(rng, tier) {
      if (tier === 1) {
        const p = rng.nonZero(-8, 8);
        const c = rng.nonZero(-15, 20);
        const q = clean(c - p * p);
        const lhs = poly([[1, "x^2"], [2 * p, "x"], [c, ""]]);
        const ans = `${lin(1, p)}^2 ${q < 0 ? `- ${Math.abs(q)}` : q > 0 ? `+ ${q}` : ""}`.trim();
        const trap = `${lin(1, p)}^2 ${c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`}`;
        return {
          prompt: `Write {{${lhs}}} in the form {{(x + p)^2 + q}}.`,
          answer: { type: "expression", expr: ans, form: "any" },
          solution: [
            `Halve the coefficient of {{x}} ({{${num(2 * p)} ÷ 2 = ${num(p)}}}) to form {{${lin(1, p)}^2}}.`,
            `Subtract {{(${num(p)})^2 = ${p * p}}}: {{${lin(1, p)}^2 - ${p * p} ${c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`} = ${ans}}}.`,
          ],
          hint: "Halve the coefficient of x, then subtract the square of that half-coefficient.",
          traps: [
            {
              spec: { type: "expression", expr: trap },
              feedback: `Remember to subtract (${num(p)})² = ${p * p} when completing the square!`,
            },
          ],
        };
      }

      if (tier === 2) {
        const a = rng.pick([2, 3, 4, 5]);
        const p = rng.nonZero(-6, 6);
        const c = rng.nonZero(-15, 25);
        const q = clean(c - a * p * p);
        const wrongQ = clean(c - p * p); // forgot to multiply -p^2 by a (since a >= 2 and p != 0, wrongQ != q)
        const lhs = poly([[a, "x^2"], [2 * a * p, "x"], [c, ""]]);
        const ans = `${a}${lin(1, p)}^2 ${q < 0 ? `- ${Math.abs(q)}` : q > 0 ? `+ ${q}` : ""}`.trim();
        const trap = `${a}${lin(1, p)}^2 ${wrongQ < 0 ? `- ${Math.abs(wrongQ)}` : wrongQ > 0 ? `+ ${wrongQ}` : ""}`.trim();
        return {
          prompt: `Write {{${lhs}}} in the form {{a(x + p)^2 + q}}.`,
          answer: { type: "expression", expr: ans, form: "any" },
          solution: [
            `Factor {{${a}}} out of the first two terms: {{${a}(${poly([[1, "x^2"], [2 * p, "x"]])}) ${c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`}}}.`,
            `Complete the square inside outer brackets: {{${a}(${lin(1, p)}^2 - ${p * p}) ${c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`}}}.`,
            `Multiply {{-${p * p}}} by {{${a}}}: {{${ans}}}.`,
          ],
          hint: `Factor ${a} from the x-terms first, and remember ${a} multiplies −${p * p} when you expand the outer bracket!`,
          traps: [
            {
              spec: { type: "expression", expr: trap },
              feedback: `Don't forget to multiply −${p * p} by the outer factor ${a}!`,
            },
          ],
        };
      }

      // Tier 3: Turning point of negative or non-monic quadratic y = c + (-a)(x + p)^2 expanded
      const neg = rng.bool(0.6);
      const a = neg ? -rng.pick([1, 2, 3, 4]) : rng.pick([2, 3, 4, 5]);
      const p = rng.nonZero(-6, 6);
      const q = rng.nonZero(-15, 20);
      const c = clean(q + a * p * p);
      const lhs = neg
        ? poly([[c, ""], [2 * a * p, "x"], [a, "x^2"]])
        : poly([[a, "x^2"], [2 * a * p, "x"], [c, ""]]);
      const vx = clean(-p);
      const vy = q;
      const csForm = a === -1
        ? `${q} - ${lin(1, p)}^2`
        : a < 0
          ? `${q} - ${Math.abs(a)}${lin(1, p)}^2`
          : `${a}${lin(1, p)}^2 ${q < 0 ? `- ${Math.abs(q)}` : `+ ${q}`}`;
      return {
        prompt: `Find the coordinates of the turning point of the curve {{y = ${lhs}}}.`,
        answer: { type: "list", values: [vx, vy], ordered: true, display: `(${num(vx)}, ${num(vy)})` },
        solution: [
          `Factor {{${num(a)}}} out of the {{x^2}} and {{x}} terms and complete the square: {{y = ${csForm}}}.`,
          `Set the bracket to zero ({{x = ${num(vx)}}}) to read the turning point {{(${num(vx)}, ${num(vy)})}}.`,
        ],
        hint: "Complete the square first; then flip the sign inside the bracket for x and keep the constant outside for y.",
        traps: [
          {
            spec: { type: "list", values: [p, vy], ordered: true },
            feedback: "Inside the squared bracket lies — flip the sign of p to get the x-coordinate of the vertex!",
          },
        ],
      };
    },
  },
  {
    id: "algebra-quadratics.alg-fractions",
    topicId: "algebra-quadratics",
    title: "Simplify & combine algebraic fractions",
    level: 3,
    guideRef: "algebraic-fractions",
    generate(rng, tier) {
      if (tier === 1) {
        let p = 2, q = 3, r = -4;
        for (let i = 0; i < 40; i++) {
          p = rng.nonZero(-7, 7);
          q = rng.nonZero(-7, 7);
          r = rng.nonZero(-7, 7);
          if (p !== q && p !== r && q !== r) break;
        }
        const top = poly([[1, "x^2"], [p + q, "x"], [p * q, ""]]);
        const bot = poly([[1, "x^2"], [p + r, "x"], [p * r, ""]]);
        const ans = `${lin(1, q)}/${lin(1, r)}`;
        const trap = `${lin(1, p)}/${lin(1, r)}`;
        return {
          prompt: `Simplify fully {{(${top})/(${bot})}}.`,
          answer: { type: "expression", expr: ans, form: "any" },
          solution: [
            `Factorise numerator: {{${top} = ${lin(1, p)}${lin(1, q)}}}.`,
            `Factorise denominator: {{${bot} = ${lin(1, p)}${lin(1, r)}}}.`,
            `Cancel the common factor {{${lin(1, p)}}} to get {{${ans}}}.`,
          ],
          hint: "Factorise both quadratics into brackets first — never cancel x² across addition/subtraction!",
          traps: [
            {
              spec: { type: "expression", expr: trap },
              feedback: `{{${lin(1, p)}}} is the shared factor that cancels out, leaving {{${lin(1, q)}}} on top!`,
            },
          ],
        };
      }

      if (tier === 2) {
        let A = 3, B = 2, p = -1, q = 4, sub = false;
        for (let i = 0; i < 50; i++) {
          A = rng.int(2, 6);
          B = rng.int(1, 5);
          sub = rng.bool(0.55);
          p = rng.nonZero(-6, 6);
          q = rng.nonZero(-6, 6);
          const sB = sub ? -B : B;
          const n1 = A + sB;
          const n0 = A * q + sB * p;
          // Ensure irreducible over (x+p)(x+q) and non-zero constant slip when subtracting
          if (p !== q && n1 !== 0 && n0 !== 0 && n1 * (-p) + n0 !== 0 && n1 * (-q) + n0 !== 0) break;
        }
        const sB = sub ? -B : B;
        const n1 = clean(A + sB);
        const n0 = clean(A * q + sB * p);
        const numStr = poly([[n1, "x"], [n0, ""]]);
        const ans = `(${numStr})/(${lin(1, p)}${lin(1, q)})`;
        const trap = sub
          ? `(${poly([[n1, "x"], [clean(A * q + B * p), ""]])})/(${lin(1, p)}${lin(1, q)})`
          : `(${n1})/(${poly([[2, "x"], [p + q, ""]])})`;
        return {
          prompt: `Express {{${A}/${lin(1, p)} ${sub ? "-" : "+"} ${B}/${lin(1, q)}}} as a single fraction in its simplest form.`,
          answer: { type: "expression", expr: ans, form: "any" },
          solution: [
            `Use the common denominator {{${lin(1, p)}${lin(1, q)}}}.`,
            `Combine numerators: {{${A}${lin(1, q)} ${sub ? "-" : "+"} ${B}${lin(1, p)} = ${numStr}}}.`,
            `Result: {{${ans}}}.`,
          ],
          hint: `Rewrite both fractions over ${lin(1, p)}${lin(1, q)} before combining the numerators.`,
          traps: [
            {
              spec: { type: "expression", expr: trap },
              feedback: sub
                ? `Watch the minus sign when expanding −${B}${lin(1, p)}!`
                : "Put both fractions over a common multiplied denominator instead of adding denominators!",
            },
          ],
        };
      }

      // Tier 3: Grade 9 4MA1 subtraction over quadratic LCD with final cancellation!
      let k = 3, m = 2, p = -2, q = 3, C = 1;
      for (let i = 0; i < 60; i++) {
        k = rng.int(2, 5);
        m = rng.int(1, 4);
        p = rng.nonZero(-6, 6);
        q = rng.nonZero(-6, 6);
        C = (k + m) * q - k * p;
        if (p !== q && C !== 0) break;
      }
      const A = k + m;
      const quadDen = poly([[1, "x^2"], [p + q, "x"], [p * q, ""]]);
      const secNum = poly([[m, "x"], [C, ""]]);
      const ans = `${k}/${lin(1, q)}`;
      const wrongNum = poly([[k, "x"], [clean(k * p + 2 * C), ""]]);
      const trap = `(${wrongNum})/(${lin(1, p)}${lin(1, q)})`;
      return {
        prompt: `Express {{${A}/${lin(1, p)} - (${secNum})/(${quadDen})}} as a single fraction in its simplest form.`,
        answer: { type: "expression", expr: ans, form: "any" },
        solution: [
          `Factorise the quadratic denominator: {{${quadDen} = ${lin(1, p)}${lin(1, q)}}}.`,
          `Combine over the LCD: {{(${A}${lin(1, q)} - (${secNum}))/(${lin(1, p)}${lin(1, q)})}}.`,
          `Simplify and factorise the numerator: {{${poly([[k, "x"], [k * p, ""]])} = ${k}${lin(1, p)}}}.`,
          `Cancel {{${lin(1, p)}}} to obtain {{${ans}}}.`,
        ],
        hint: "Factorise the quadratic denominator first, protect the subtracted numerator with brackets, and check for a final cancellation!",
        traps: [
          {
            spec: { type: "expression", expr: trap },
            feedback: "Distribute the minus sign across BOTH terms of the subtracted numerator, then cancel the shared bracket factor!",
          },
        ],
      };
    },
  },
  {
    id: "algebra-quadratics.rearrange-twice",
    topicId: "algebra-quadratics",
    title: "Change the subject when x appears twice",
    level: 3,
    guideRef: "rearranging-and-proof",
    generate(rng, tier) {
      if (tier === 1) {
        // y = a*x + b*x*c style: make x the subject of ax + b = cx + y or px + q = rx + y -> let's use y(x + c) = ax + b already cleared or ax + by = cx + d
        let a = 5, c = 2, b = 3, d = 4;
        for (let i = 0; i < 40; i++) {
          a = rng.int(3, 8);
          c = rng.int(1, a - 1);
          b = rng.nonZero(-7, 7);
          d = rng.int(1, 6);
          if (a !== c) break;
        }
        const lhs = poly([[a, "x"], [b, ""]]);
        const rhs = poly([[c, "x"], [d, "y"]]);
        const numPart = poly([[d, "y"], [-b, ""]]);
        const den = clean(a - c);
        const ans = den === 1 ? numPart : `(${numPart})/${den}`;
        const trapNum = poly([[d, "y"], [b, ""]]);
        const trap = den === 1 ? trapNum : `(${trapNum})/${den}`;
        return {
          prompt: `Make {{x}} the subject of {{${lhs} = ${rhs}}}. Give the expression for {{x}} in terms of {{y}}.`,
          answer: { type: "expression", expr: ans, form: "any" },
          solution: [
            `Collect {{x}}-terms on the left and non-{{x}} terms on the right: {{${a}x - ${c === 1 ? "" : c}x = ${numPart}}}.`,
            `Simplify to {{${den === 1 ? "" : den}x = ${numPart}}}${den > 1 ? ` and divide by {{${den}}}: {{x = ${ans}}}` : "."}`,
          ],
          hint: "Move all x-terms to one side and all other terms to the opposite side.",
          traps: [
            {
              spec: { type: "expression", expr: trap },
              feedback: "Watch the sign of the constant when moving it across the equals sign!",
            },
          ],
        };
      }

      if (tier === 2) {
        let a = 3, b = 5, c = -2, k = 1;
        for (let i = 0; i < 50; i++) {
          a = rng.nonZero(-6, 6);
          b = rng.nonZero(-8, 8);
          c = rng.nonZero(-6, 6);
          k = rng.pick([1, 2, 3]);
          if (a * c !== b * k) break;
        }
        const top = poly([[a, "x"], [b, ""]]);
        const bot = poly([[k, "x"], [c, ""]]);
        // y*(kx + c) = ax + b => x(ky - a) = b - cy
        const numExpr = poly([[-c, "y"], [b, ""]]);
        const denExpr = poly([[k, "y"], [-a, ""]]);
        const ans = `(${numExpr})/(${denExpr})`;
        const trapDen = poly([[k, "y"], [a, ""]]);
        const trap = `(${numExpr})/(${trapDen})`;
        return {
          prompt: `Make {{x}} the subject of {{y = (${top})/(${bot})}}. Give the expression for {{x}} in terms of {{y}}.`,
          answer: { type: "expression", expr: ans, form: "any" },
          solution: [
            `Multiply both sides by {{(${bot})}}: {{${poly([[k, "xy"], [c, "y"]])} = ${top}}}.`,
            `Collect {{x}}-terms on the left: {{${poly([[k, "xy"], [-a, "x"]])} = ${numExpr}}}.`,
            `Factorise {{x}} out and divide: {{x(${denExpr}) = ${numExpr} => x = ${ans}}}.`,
          ],
          hint: "Clear the fraction, collect x-terms on one side, factorise out x, and divide.",
          traps: [
            {
              spec: { type: "expression", expr: trap },
              feedback: "Check the sign when moving the ax term across the equals sign before factoring out x!",
            },
          ],
        };
      }

      // Tier 3: Square root rational rearrangement y = sqrt((ax + b)/(cx + d))
      let a = 3, b = 4, c = 2, d = -1;
      for (let i = 0; i < 50; i++) {
        a = rng.int(2, 6);
        b = rng.nonZero(-7, 7);
        c = rng.int(1, 4);
        d = rng.nonZero(-6, 6);
        if (a * d !== b * c) break;
      }
      const top = poly([[a, "x"], [b, ""]]);
      const bot = poly([[c, "x"], [d, ""]]);
      const numExpr = poly([[-d, "y^2"], [b, ""]]);
      const denExpr = poly([[c, "y^2"], [-a, ""]]);
      const ans = `(${numExpr})/(${denExpr})`;
      const trap = `(${poly([[-d, "y"], [b, ""]])})/(${poly([[c, "y"], [-a, ""]])})`;
      return {
        prompt: `Make {{x}} the subject of {{y = sqrt((${top})/(${bot}))}} (for {{y > 0}}). Give the expression for {{x}} in terms of {{y}}.`,
        answer: { type: "expression", expr: ans, form: "any" },
        solution: [
          `Square both sides first to clear the root: {{y^2 = (${top})/(${bot})}}.`,
          `Multiply by {{(${bot})}} and collect {{x}}-terms: {{x(${denExpr}) = ${numExpr}}}.`,
          `Divide by {{(${denExpr})}}: {{x = ${ans}}}.`,
        ],
        hint: "Square both sides FIRST so y becomes y², then use Clear–Collect–Factorise–Divide!",
        traps: [
          {
            spec: { type: "expression", expr: trap },
            feedback: "Square BOTH sides first to remove the square root — y becomes y²!",
          },
        ],
      };
    },
  },
];

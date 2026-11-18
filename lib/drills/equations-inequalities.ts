import type { Drill } from "./types.ts";
import { br, clean, gcd, num, poly } from "./helpers.ts";

export const drills: Drill[] = [
  {
    id: "equations-inequalities.solve-quadratics",
    topicId: "equations-inequalities",
    title: "Solve quadratics & evaluate discriminants",
    level: 1,
    guideRef: "quadratic-equations",
    generate(rng, tier) {
      if (tier === 1) {
        let r1 = 1, r2 = 2;
        for (let i = 0; i < 60; i++) {
          r1 = rng.nonZero(-9, 9);
          r2 = rng.nonZero(-9, 9);
          if (r1 !== r2 && r1 + r2 !== 0) break;
        }
        const b = -(r1 + r2);
        const c = r1 * r2;
        const eq = poly([[1, "x^2"], [b, "x"], [c, ""]]);
        const f1 = poly([[1, "x"], [-r1, ""]]);
        const f2 = poly([[1, "x"], [-r2, ""]]);
        const lo = Math.min(r1, r2), hi = Math.max(r1, r2);
        return {
          prompt: `Solve {{${eq} = 0}}. Give both solutions separated by a comma.`,
          answer: { type: "list", values: [lo, hi], ordered: false, display: `${num(lo)}, ${num(hi)}` },
          solution: [
            `Find two numbers multiplying to {{${c}}} and adding to {{${b}}}: {{${-r1}}} and {{${-r2}}}.`,
            `Factorise: {{(${f1})(${f2}) = 0}}, giving {{x = ${r1}}} or {{x = ${r2}}}.`,
          ],
          hint: "Factorise into (x − r₁)(x − r₂) = 0 and flip the signs when setting each bracket to zero.",
          traps: [
            {
              spec: { type: "list", values: [-hi, -lo], ordered: false },
              feedback: "Those are the constants inside the brackets — flip their signs when solving each factor equal to 0!",
            },
          ],
        };
      }
      if (tier === 2) {
        const a = rng.pick([2, 4, 5] as const);
        let p = 1, r2 = 2;
        for (let i = 0; i < 60; i++) {
          p = rng.nonZero(-9, 9);
          r2 = rng.nonZero(-7, 7);
          const r1 = clean(p / a);
          if (gcd(Math.abs(p), a) === 1 && r1 !== r2 && r1 !== -r2) break;
        }
        // (ax - p)(x - r2) = a x^2 - (a*r2 + p)x + p*r2
        const b = -(a * r2 + p);
        const c = p * r2;
        const r1 = clean(p / a);
        const eq = poly([[a, "x^2"], [b, "x"], [c, ""]]);
        const f1 = poly([[a, "x"], [-p, ""]]);
        const f2 = poly([[1, "x"], [-r2, ""]]);
        const lo = Math.min(r1, r2), hi = Math.max(r1, r2);
        return {
          prompt: `Solve {{${eq} = 0}}. Give both solutions separated by a comma.`,
          answer: { type: "list", values: [lo, hi], ordered: false, display: `${num(lo)}, ${num(hi)}` },
          solution: [
            `Split the middle term using {{ac = ${a * c}}}: factorise into {{(${f1})(${f2}) = 0}}.`,
            `Set each bracket to zero: {{${f1} = 0 => x = ${r1}}} and {{${f2} = 0 => x = ${r2}}}.`,
          ],
          hint: `Multiply a × c = ${a * c} to split the middle term, then solve both brackets equal to zero.`,
          traps: [
            {
              spec: { type: "list", values: [clean(-r1), -r2], ordered: false },
              feedback: "Check the signs when solving each bracket equal to zero!",
            },
          ],
        };
      }
      // Tier 3: Discriminant b^2 - 4ac with negative b (testing the (-b)^2 trap)
      const a = rng.int(2, 6);
      const b = rng.int(-11, -2);
      const c = rng.nonZero(-9, 9);
      const disc = b * b - 4 * a * c;
      const negSquareTrap = -b * b - 4 * a * c;
      const signAcTrap = b * b + 4 * a * c;
      const expr = poly([[a, "x^2"], [b, "x"], [c, ""]]);
      return {
        prompt: `Find the value of the discriminant {{b^2 - 4ac}} for the quadratic equation {{${expr} = 0}}.`,
        answer: { type: "number", value: disc },
        solution: [
          `Identify {{a = ${a}}}, {{b = ${b}}}, {{c = ${c}}}.`,
          `Wrap negative {{b}} in brackets: {{(${b})^2 - 4(${a})(${c}) = ${b * b} - (${4 * a * c}) = ${disc}}}.`,
        ],
        hint: "Always bracket negative b as (−b)² so b² is positive, and watch the sign of −4ac!",
        traps: [
          {
            spec: { type: "number", value: negSquareTrap },
            feedback: `Bracket negative b! (${num(b)})² = +${b * b}, not −${b * b}.`,
          },
          ...(signAcTrap !== disc && signAcTrap !== negSquareTrap
            ? [
                {
                  spec: { type: "number" as const, value: signAcTrap },
                  feedback: "Check the sign of −4ac carefully!",
                },
              ]
            : []),
        ],
      };
    },
  },
  {
    id: "equations-inequalities.clear-algebraic-fractions",
    topicId: "equations-inequalities",
    title: "Solve equations with algebraic fractions",
    level: 2,
    guideRef: "algebraic-fraction-equations",
    generate(rng, tier) {
      if (tier === 1) {
        // K / (x + p) = x + q with distinct integer roots r1, r2
        let p = 1, r1 = 2, r2 = -3;
        for (let i = 0; i < 80; i++) {
          p = rng.nonZero(-5, 5);
          r1 = rng.nonZero(-7, 7);
          r2 = rng.nonZero(-7, 7);
          if (r1 !== r2 && r1 + r2 !== 0 && r1 !== -p && r2 !== -p) break;
        }
        const q = -(r1 + r2 + p);
        const K = -(r1 + p) * (r2 + p);
        const den = poly([[1, "x"], [p, ""]]);
        const rhs = poly([[1, "x"], [q, ""]]);
        const quad = poly([[1, "x^2"], [-(r1 + r2), "x"], [r1 * r2, ""]]);
        const lo = Math.min(r1, r2), hi = Math.max(r1, r2);
        return {
          prompt: `Solve {{${K}/(${den}) = ${rhs}}}. Give both solutions separated by a comma.`,
          answer: { type: "list", values: [lo, hi], ordered: false, display: `${num(lo)}, ${num(hi)}` },
          solution: [
            `Note {{x != ${-p}}} and multiply both sides by {{(${den})}}: {{${K} = (${rhs})(${den})}}.`,
            `Expand and rearrange to zero: {{${quad} = 0}}.`,
            `Factorise: {{(${poly([[1, "x"], [-r1, ""]])})(${poly([[1, "x"], [-r2, ""]])}) = 0}}, so {{x = ${lo}}} or {{x = ${hi}}}.`,
          ],
          hint: `Multiply both sides by (${den}), expand the double bracket, and rearrange to equal zero.`,
          traps: [
            {
              spec: { type: "list", values: [-hi, -lo], ordered: false },
              feedback: "Flip the signs when setting each bracket equal to zero!",
            },
          ],
        };
      }
      // Tier 2 & Tier 3: A/(x - d1) + B/(x - d2) = 1 with integer roots r1, r2
      const m = tier === 2 ? rng.pick([1, 2, 3] as const) : rng.pick([2, 3, 4] as const);
      let d1 = 1, d2 = 3, s = 2, r1 = 5, r2 = -2, A = 4, B = 3;
      for (let i = 0; i < 100; i++) {
        d1 = rng.int(-4, 4);
        d2 = d1 + m;
        s = tier === 2 ? rng.pick([-1, 2, 3] as const) : rng.pick([-2, -1, 2, 3] as const);
        r1 = d1 + m * s;
        r2 = rng.int(-7, 7);
        A = s * (r2 - d1);
        B = -(s - 1) * (r2 - d2);
        if (r2 !== d1 && r2 !== d2 && r2 !== r1 && r1 + r2 !== 0 && A !== 0 && B !== 0 && Math.abs(A) <= 24 && Math.abs(B) <= 24) break;
      }
      const den1 = poly([[1, "x"], [-d1, ""]]);
      const den2 = poly([[1, "x"], [-d2, ""]]);
      const opB = B < 0 ? ` - ${Math.abs(B)}/(${den2})` : ` + ${B}/(${den2})`;
      const quad = poly([[1, "x^2"], [-(r1 + r2), "x"], [r1 * r2, ""]]);
      const lo = Math.min(r1, r2), hi = Math.max(r1, r2);
      return {
        prompt: `Solve {{${A}/(${den1})${opB} = 1}}. Give both solutions separated by a comma.`,
        answer: { type: "list", values: [lo, hi], ordered: false, display: `${num(lo)}, ${num(hi)}` },
        solution: [
          `Note {{x != ${d1}, ${d2}}} and multiply every term (including {{1}}) by {{(${den1})(${den2})}}.`,
          `{{${A}(${den2}) ${B < 0 ? `- ${Math.abs(B)}` : `+ ${B}`}(${den1}) = (${den1})(${den2})}}.`,
          `Expand and rearrange to zero: {{${quad} = 0}}, giving {{x = ${lo}}} or {{x = ${hi}}}.`,
        ],
        hint: `Multiply all three terms (including the 1 on the right!) by (${den1})(${den2}).`,
        traps: [
          {
            spec: { type: "list", values: [-hi, -lo], ordered: false },
            feedback: "Check your bracket signs when solving the resulting quadratic!",
          },
        ],
      };
    },
  },
  {
    id: "equations-inequalities.linear-simultaneous",
    topicId: "equations-inequalities",
    title: "Solve linear simultaneous equations",
    level: 1,
    guideRef: "linear-simultaneous",
    generate(rng, tier) {
      let x = 2, y = -1, a1 = 2, b1 = 3, a2 = 1, b2 = -2;
      for (let i = 0; i < 80; i++) {
        x = tier === 1 ? rng.int(1, 8) : rng.nonZero(-7, 8);
        y = tier === 1 ? rng.int(1, 7) : rng.nonZero(-7, 7);
        if (tier === 1) {
          a1 = rng.int(2, 5);
          a2 = rng.int(1, 4);
          b1 = rng.int(1, 4);
          b2 = -b1;
        } else if (tier === 2) {
          a1 = rng.int(2, 5);
          b1 = rng.nonZero(-5, 5);
          a2 = rng.int(1, 5);
          b2 = rng.nonZero(-5, 5);
        } else {
          a1 = rng.nonZero(-6, 6);
          b1 = rng.nonZero(-6, 6);
          a2 = rng.nonZero(-6, 6);
          b2 = rng.nonZero(-6, 6);
        }
        if (x !== y && a1 * b2 - a2 * b1 !== 0 && Math.abs(a1) + Math.abs(b1) >= 3) break;
      }
      const c1 = a1 * x + b1 * y;
      const c2 = a2 * x + b2 * y;
      const eq1 = poly([[a1, "x"], [b1, "y"]]);
      const eq2 = poly([[a2, "x"], [b2, "y"]]);
      return {
        prompt: `Solve simultaneously {{${eq1} = ${c1}}} and {{${eq2} = ${c2}}}. Give your answer as {{(x, y)}}.`,
        answer: { type: "list", values: [x, y], ordered: true, display: `(${num(x)}, ${num(y)})` },
        solution: [
          `Scale the equations to match coefficients of {{y}} (or {{x}}): multiply the first by {{${Math.abs(b2)}}} and the second by {{${Math.abs(b1)}}}.`,
          `Eliminate {{y}} to obtain {{x = ${num(x)}}}, then substitute back to get {{y = ${num(y)}}}.`,
          `Check in the second equation: {{${a2} * ${br(x)} + ${br(b2)} * ${br(y)} = ${c2}}} ✔.`,
        ],
        hint: "Use Different Signs Add / Same Signs Subtract after scaling one variable's coefficients to match.",
        traps: [
          {
            spec: { type: "list", values: [y, x], ordered: true },
            feedback: "Write the coordinates in the order (x, y): x first, then y!",
          },
        ],
      };
    },
  },
  {
    id: "equations-inequalities.linear-quadratic-simultaneous",
    topicId: "equations-inequalities",
    title: "Solve linear–quadratic simultaneous systems",
    level: 3,
    guideRef: "linear-quadratic-simultaneous",
    generate(rng, tier) {
      if (tier <= 2) {
        // Line y = mx + c intersecting parabola y = x^2 + bx + d at r1 < 0 < r2
        const r1 = rng.int(-6, -1);
        const r2 = rng.int(1, 7);
        const m = tier === 1 ? rng.int(1, 4) : rng.nonZero(-4, 5);
        const c = rng.nonZero(-6, 6);
        // Want (x^2 + bx + d) - (mx + c) = (x - r1)(x - r2) = x^2 - (r1 + r2)x + r1*r2
        const b = m - (r1 + r2);
        const d = c + r1 * r2;
        const y2 = m * r2 + c;
        const y1 = m * r1 + c;
        const lineRhs = poly([[m, "x"], [c, ""]]);
        const quadRhs = poly([[1, "x^2"], [b, "x"], [d, ""]]);
        return {
          prompt: `The line {{y = ${lineRhs}}} intersects the curve {{y = ${quadRhs}}} at two points. Find the coordinates {{(x, y)}} of the intersection where {{x > 0}}.`,
          answer: { type: "list", values: [r2, y2], ordered: true, display: `(${num(r2)}, ${num(y2)})` },
          solution: [
            `Equate {{y}}: {{${quadRhs} = ${lineRhs} => ${poly([[1, "x^2"], [-(r1 + r2), "x"], [r1 * r2, ""]])} = 0}}.`,
            `Factorise: {{(x + ${-r1})(x - ${r2}) = 0}}, so {{x = ${r2}}} (since {{x > 0}}).`,
            `Substitute into the linear equation: {{y = ${m}(${r2}) ${c < 0 ? `- ${-c}` : `+ ${c}`} = ${y2}}}, giving {{(${r2}, ${y2})}}.`,
          ],
          hint: "Set the two y-expressions equal, rearrange to 0, take the positive x-root, and substitute into the linear equation.",
          traps: [
            {
              spec: { type: "list", values: [r1, y1], ordered: true },
              feedback: `(${num(r1)}, ${num(y1)}) is the intersection where x < 0 — pick the point with x > 0!`,
            },
          ],
        };
      }
      // Tier 3: ax + y = S and xy = K with r1 < 0 < r2
      let a = 2, r1 = -2, r2 = 3;
      for (let i = 0; i < 60; i++) {
        a = rng.pick([1, 2, 3] as const);
        r1 = rng.int(-5, -1);
        r2 = rng.int(1, 6);
        if (r1 + r2 !== 0) break;
      }
      const S = a * (r1 + r2);
      const K = a * r1 * r2;
      const y2 = S - a * r2; // = a * r1
      const y1 = S - a * r1; // = a * r2
      const linLhs = poly([[a, "x"], [1, "y"]]);
      return {
        prompt: `Solve simultaneously {{${linLhs} = ${S}}} and {{xy = ${K}}} to find the intersection {{(x, y)}} where {{x > 0}}.`,
        answer: { type: "list", values: [r2, y2], ordered: true, display: `(${num(r2)}, ${num(y2)})` },
        solution: [
          `Rearrange the linear equation to {{y = ${S} - ${a === 1 ? "x" : `${a}x`}}} and substitute into {{xy = ${K}}}.`,
          `Expand and rearrange: {{${poly([[a, "x^2"], [-S, "x"], [K, ""]])} = 0}}, which divides by {{${a}}} to give {{(x + ${-r1})(x - ${r2}) = 0}}.`,
          `Since {{x > 0}}, {{x = ${r2}}} and {{y = ${S} - ${a}(${r2}) = ${y2}}}.`,
        ],
        hint: `Rearrange the linear equation to y = ${S} − ${a === 1 ? "x" : `${a}x`} and substitute into xy = ${K}.`,
        traps: [
          {
            spec: { type: "list", values: [r1, y1], ordered: true },
            feedback: "That is the intersection with x < 0 — choose the root where x > 0!",
          },
        ],
      };
    },
  },
  {
    id: "equations-inequalities.quadratic-inequalities",
    topicId: "equations-inequalities",
    title: "Find integer solutions of quadratic inequalities",
    level: 2,
    guideRef: "quadratic-and-graphical-inequalities",
    generate(rng, tier) {
      if (tier === 1) {
        const r1 = rng.int(-5, 2);
        const span = rng.int(3, 5);
        const r2 = r1 + span;
        const inclusive = rng.bool(0.5);
        const expr = poly([[1, "x^2"], [-(r1 + r2), "x"], [r1 * r2, ""]]);
        const vals: number[] = [];
        for (let v = inclusive ? r1 : r1 + 1; v <= (inclusive ? r2 : r2 - 1); v++) vals.push(v);
        const wrongVals: number[] = [];
        for (let v = inclusive ? r1 + 1 : r1; v <= (inclusive ? r2 - 1 : r2); v++) wrongVals.push(v);
        const sym = inclusive ? "<=" : "<";
        return {
          prompt: `List all the **integer** values of {{x}} that satisfy {{${expr} ${sym} 0}}.`,
          answer: { type: "list", values: vals, ordered: false, display: vals.map(num).join(", ") },
          solution: [
            `Factorise: {{(${poly([[1, "x"], [-r1, ""]])})(${poly([[1, "x"], [-r2, ""]])}) ${sym} 0}}, giving critical values {{${r1}}} and {{${r2}}}.`,
            `Between the roots: {{${r1} ${sym} x ${sym} ${r2}}}, so the integers are {{${vals.join(", ")}}}.`,
          ],
          hint: `Find the critical values ${r1} and ${r2}, and check whether the endpoints are included (${inclusive ? "≤ includes them" : "< excludes them"}).`,
          traps: [
            {
              spec: { type: "list", values: wrongVals, ordered: false },
              feedback: inclusive
                ? "Because the sign is ≤, include BOTH critical values as well!"
                : "Because the sign is strict <, do NOT include the critical values where the quadratic equals 0!",
            },
          ],
        };
      }
      if (tier === 2) {
        // (2x - p)(x - r2) < 0 or <= 0 with odd p so one endpoint is a half-integer!
        const p = rng.pick([-7, -5, -3, -1, 1, 3, 5] as const);
        const halfRoot = p / 2;
        const r2 = Math.ceil(halfRoot) + rng.int(2, 4);
        const inclusive = rng.bool(0.5);
        // (2x - p)(x - r2) = 2x^2 - (2*r2 + p)x + p*r2
        const expr = poly([[2, "x^2"], [-(2 * r2 + p), "x"], [p * r2, ""]]);
        const loInt = Math.ceil(halfRoot);
        const hiInt = inclusive ? r2 : r2 - 1;
        const vals: number[] = [];
        for (let v = loInt; v <= hiInt; v++) vals.push(v);
        const trapEndpoint: number[] = [];
        for (let v = loInt; v <= (inclusive ? r2 - 1 : r2); v++) trapEndpoint.push(v);
        const sym = inclusive ? "<=" : "<";
        return {
          prompt: `List all the **integer** values of {{x}} that satisfy {{${expr} ${sym} 0}}.`,
          answer: { type: "list", values: vals, ordered: false, display: vals.map(num).join(", ") },
          solution: [
            `Factorise: {{(${poly([[2, "x"], [-p, ""]])})(${poly([[1, "x"], [-r2, ""]])}) ${sym} 0}}, giving critical values {{${halfRoot}}} and {{${r2}}}.`,
            `Since {{${halfRoot} ${sym} x ${sym} ${r2}}}, the integer solutions are {{${vals.join(", ")}}}.`,
          ],
          hint: `Critical values are ${halfRoot} and ${r2}; pick every integer strictly above ${halfRoot} up to ${inclusive ? `${r2} inclusive` : `${r2 - 1}`}.`,
          traps: [
            {
              spec: { type: "list", values: trapEndpoint, ordered: false },
              feedback: inclusive
                ? `Don't forget to include the integer endpoint x = ${r2}!`
                : `x = ${r2} makes the expression equal 0, which fails strict < 0!`,
            },
          ],
        };
      }
      // Tier 3: Negative x^2 coefficient -(x - r1)(x - r2) > 0 or >= 0 (must multiply by -1 and flip!)
      const r1 = rng.int(-5, 2);
      const r2 = r1 + rng.int(3, 5);
      const inclusive = rng.bool(0.5);
      // -(x^2 - (r1+r2)x + r1*r2) = -x^2 + (r1+r2)x - r1*r2
      const expr = poly([[-1, "x^2"], [r1 + r2, "x"], [-r1 * r2, ""]]);
      const origSym = inclusive ? ">=" : ">";
      const flippedSym = inclusive ? "<=" : "<";
      const vals: number[] = [];
      for (let v = inclusive ? r1 : r1 + 1; v <= (inclusive ? r2 : r2 - 1); v++) vals.push(v);
      const wrongEndpoint: number[] = [];
      for (let v = inclusive ? r1 + 1 : r1; v <= (inclusive ? r2 - 1 : r2); v++) wrongEndpoint.push(v);
      return {
        prompt: `List all the **integer** values of {{x}} that satisfy {{${expr} ${origSym} 0}}.`,
        answer: { type: "list", values: vals, ordered: false, display: vals.map(num).join(", ") },
        solution: [
          `Multiply both sides by {{-1}} and **flip** {{${origSym}}} to {{${flippedSym}}}: {{${poly([[1, "x^2"], [-(r1 + r2), "x"], [r1 * r2, ""]])} ${flippedSym} 0}}.`,
          `Factorise: {{(${poly([[1, "x"], [-r1, ""]])})(${poly([[1, "x"], [-r2, ""]])}) ${flippedSym} 0}}, giving {{${r1} ${flippedSym} x ${flippedSym} ${r2}}}.`,
          `The integers in this interval are {{${vals.join(", ")}}}.`,
        ],
        hint: "Multiply through by −1 first so the x² coefficient is +1 — and remember to flip > to <!",
        traps: [
          {
            spec: { type: "list", values: wrongEndpoint, ordered: false },
            feedback: inclusive
              ? "With ≥ (which flips to ≤), include both critical values!"
              : "With strict > (which flips to <), exclude both critical values!",
          },
        ],
      };
    },
  },
];

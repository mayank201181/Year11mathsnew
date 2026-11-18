import type { Drill } from "./types.ts";
import { br, num, ordinal, poly } from "./helpers.ts";

export const drills: Drill[] = [
  {
    id: "sequences-functions-graphs.arithmetic-series",
    topicId: "sequences-functions-graphs",
    title: "Arithmetic sequences & series sums (S_n)",
    level: 2,
    guideRef: "arithmetic-sequences-series",
    generate(rng, tier) {
      if (tier === 1) {
        const a = rng.int(2, 22);
        const d = rng.int(2, 9);
        const n = rng.int(10, 28);
        const sum = (n * (2 * a + (n - 1) * d)) / 2;
        const trapNo2a = (n * (a + (n - 1) * d)) / 2;
        const trapList = Number.isInteger(trapNo2a) && trapNo2a !== sum
          ? [{ spec: { type: "number" as const, value: trapNo2a }, feedback: "Use 2a + (n − 1)d inside the bracket, not a + (n − 1)d!" }]
          : [];
        return {
          prompt: `Find the sum of the first {{${n}}} terms of the arithmetic series {{${a} + ${a + d} + ${a + 2 * d} + ${a + 3 * d} + ...}}`,
          answer: { type: "number", value: sum },
          solution: [
            `Identify first term {{a = ${a}}}, common difference {{d = ${d}}}, and {{n = ${n}}}.`,
            `Use {{S_n = (n/2)(2a + (n - 1)d)}}: {{S_{${n}} = (${n}/2)(2(${a}) + ${n - 1}(${d}))}}.`,
            `{{= ${num(n / 2)} * (${2 * a} + ${(n - 1) * d}) = ${sum}}}.`,
          ],
          hint: "Substitute a, d and n into S_n = (n/2)(2a + (n − 1)d).",
          traps: trapList,
        };
      }
      if (tier === 2) {
        const a = rng.int(26, 78);
        const d = -rng.int(2, 9);
        const n = rng.int(10, 26);
        const sum = (n * (2 * a + (n - 1) * d)) / 2;
        const trapPosD = (n * (2 * a + (n - 1) * Math.abs(d))) / 2;
        return {
          prompt: `Find the sum of the first {{${n}}} terms of the decreasing arithmetic series {{${a} + ${a + d} + ${a + 2 * d} + ...}}`,
          answer: { type: "number", value: sum },
          solution: [
            `Here {{a = ${a}}} and the sequence decreases, so {{d = ${d}}}.`,
            `{{S_{${n}} = (${n}/2)(2(${a}) + ${n - 1} * (${d})) = ${num(n / 2)} * (${2 * a} - ${(n - 1) * Math.abs(d)}) = ${sum}}}.`,
          ],
          hint: "Watch the negative common difference d!",
          traps: [
            { spec: { type: "number", value: trapPosD }, feedback: `This series is decreasing, so d = ${num(d)} (negative), not +${Math.abs(d)}.` },
          ],
        };
      }
      const p = rng.int(2, 5);
      const step = rng.int(3, 8);
      const q = p + step;
      const a = rng.nonZero(-12, 18);
      const d = rng.pick([-7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8] as const);
      const n = rng.int(12, 26);
      const up = a + (p - 1) * d;
      const uq = a + (q - 1) * d;
      const sum = (n * (2 * a + (n - 1) * d)) / 2;
      const wrongA = up - p * d;
      const trapWrongA = (n * (2 * wrongA + (n - 1) * d)) / 2;
      return {
        prompt: `In an arithmetic series, the ${ordinal(p)} term is {{${up}}} and the ${ordinal(q)} term is {{${uq}}}. Find the sum of the first {{${n}}} terms.`,
        answer: { type: "number", value: sum },
        solution: [
          `From the ${ordinal(p)} to the ${ordinal(q)} term is {{${q} - ${p} = ${step}}} jumps of {{d}}: {{${step}d = ${uq} - ${br(up)} = ${uq - up} => d = ${d}}}.`,
          `Find {{a}} from {{a + ${p - 1}(${d}) = ${up}}}: {{a = ${a}}}.`,
          `{{S_{${n}} = (${n}/2)(2(${a}) + ${n - 1}(${d})) = ${sum}}}.`,
        ],
        hint: `First find d from u_${q} − u_${p} = ${step}d, then find a, then apply S_${n}.`,
        traps: trapWrongA !== sum
          ? [{ spec: { type: "number", value: trapWrongA }, feedback: `Remember the ${ordinal(p)} term is a + ${p - 1}d, not a + ${p}d!` }]
          : [],
      };
    },
  },
  {
    id: "sequences-functions-graphs.composite-inverse",
    topicId: "sequences-functions-graphs",
    title: "Composite fg(x) & inverse functions f⁻¹(x)",
    level: 2,
    guideRef: "composite-inverse-functions",
    generate(rng, tier) {
      if (tier === 1) {
        let m = 2, c = 3, b = 1, k = 2, fgVal = 0, gfVal = 0;
        for (let i = 0; i < 50; i++) {
          m = rng.pick([-5, -4, -3, -2, 2, 3, 4, 5, 6] as const);
          c = rng.nonZero(-9, 9);
          b = rng.nonZero(-8, 8);
          k = rng.pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6] as const);
          const gk = k * k + b;
          fgVal = m * gk + c;
          const fk = m * k + c;
          gfVal = fk * fk + b;
          if (fgVal !== gfVal) break;
        }
        const fExpr = poly([[m, "x"], [c, ""]]);
        const gExpr = poly([[1, "x^2"], [b, ""]]);
        return {
          prompt: `Given {{f(x) = ${fExpr}}} and {{g(x) = ${gExpr}}}, work out {{fg(${k})}}.`,
          answer: { type: "number", value: fgVal },
          solution: [
            `Work inside-out — evaluate {{g(${k})}} first: {{g(${k}) = (${k})^2 ${b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`} = ${k * k + b}}}.`,
            `Substitute into {{f}}: {{f(${k * k + b}) = ${m}(${k * k + b}) ${c > 0 ? `+ ${c}` : `- ${Math.abs(c)}`} = ${fgVal}}}.`,
          ],
          hint: "fg(x) means f(g(x)) — evaluate g first, then feed the result into f.",
          traps: [
            { spec: { type: "number", value: gfVal }, feedback: `That is gf(${num(k)})! Apply g FIRST, then f.` },
          ],
        };
      }
      if (tier === 2) {
        const a = rng.pick([2, 3, 4, 5, 6, 7] as const);
        const c = rng.pick([2, 3, 4, 5, 6, 7, 8].filter((v) => v !== a));
        const b = rng.nonZero(-11, 11);
        const fTop = poly([[a, "x"], [b, ""]]);
        const invTop = poly([[c, "x"], [-b, ""]]);
        return {
          prompt: `Given {{f(x) = (${fTop})/${c}}}, find an expression in terms of {{x}} for {{f^(-1)(x)}}.`,
          answer: { type: "expression", expr: `(${invTop})/${a}`, form: "any" },
          solution: [
            `Write {{y = (${fTop})/${c}}} and swap {{x}} and {{y}}: {{x = (${poly([[a, "y"], [b, ""]])})/${c}}}.`,
            `Multiply by {{${c}}}: {{${c}x = ${poly([[a, "y"], [b, ""]])}}}.`,
            `Rearrange for {{y}}: {{${a}y = ${invTop} => f^(-1)(x) = (${invTop})/${a}}}.`,
          ],
          hint: "Write y = f(x), swap x and y, multiply by the denominator, and isolate y.",
          traps: [
            { spec: { type: "expression", expr: `${c}/(${fTop})` }, feedback: "f⁻¹(x) is the inverse function (swap x and y), NOT the reciprocal 1/f(x)!" },
          ],
        };
      }
      let a = 2, b = 3, c = -1;
      for (let i = 0; i < 50; i++) {
        a = rng.pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6] as const);
        b = rng.nonZero(-9, 9);
        c = rng.nonZero(-7, 7);
        if (b !== a * c && c !== -a) break;
      }
      const numStr = poly([[a, "x"], [b, ""]]);
      const denStr = poly([[1, "x"], [c, ""]]);
      const invNum = poly([[-c, "x"], [b, ""]]);
      const invDen = poly([[1, "x"], [-a, ""]]);
      return {
        prompt: `For {{x != ${-c}}}, {{f(x) = (${numStr})/(${denStr})}}. Find an expression for the inverse function {{f^(-1)(x)}}.`,
        answer: { type: "expression", expr: `(${invNum})/(${invDen})`, form: "any" },
        solution: [
          `Swap {{x}} and {{y}}: {{x = (${poly([[a, "y"], [b, ""]])})/(${poly([[1, "y"], [c, ""]])})}}.`,
          `Multiply up and expand: {{xy ${c > 0 ? `+ ${c}x` : `- ${Math.abs(c)}x`} = ${poly([[a, "y"], [b, ""]])}}}.`,
          `Collect {{y}}-terms and factorise: {{y(${invDen}) = ${invNum} => f^(-1)(x) = (${invNum})/(${invDen})}}.`,
        ],
        hint: "Swap x and y, clear the denominator, collect all y-terms on one side and factorise out y.",
        traps: [
          { spec: { type: "expression", expr: `(${denStr})/(${numStr})` }, feedback: "Flipping the fraction gives 1/f(x), not f⁻¹(x) — swap x and y and factorise out y!" },
        ],
      };
    },
  },
  {
    id: "sequences-functions-graphs.turning-points-normals",
    topicId: "sequences-functions-graphs",
    title: "Quadratic turning points & perpendicular lines",
    level: 2,
    guideRef: "turning-points-sketching",
    generate(rng, tier) {
      if (tier === 1) {
        const p = rng.nonZero(-9, 9);
        const q = rng.nonZero(-15, 15);
        const quad = poly([[1, "x^2"], [2 * p, "x"], [p * p + q, ""]]);
        const sq = poly([[1, "x"], [p, ""]]);
        return {
          prompt: `Find the coordinates {{(x, y)}} of the minimum turning point of {{y = ${quad}}}.`,
          answer: { type: "list", values: [-p, q], ordered: true, display: `(${num(-p)}, ${num(q)})` },
          solution: [
            `Complete the square: {{y = (${sq})^2 - ${p * p} ${p * p + q >= 0 ? `+ ${p * p + q}` : `- ${Math.abs(p * p + q)}`} = (${sq})^2 ${q >= 0 ? `+ ${q}` : `- ${Math.abs(q)}`}}}.`,
            `Vertex is {{(${-p}, ${q})}}.`,
          ],
          hint: "Complete the square into (x + p)² + q; the vertex is (−p, q).",
          traps: [
            { spec: { type: "list", values: [p, q], ordered: true }, feedback: `Flip the sign inside (${sq})²: the bracket is zero at x = ${num(-p)}.` },
          ],
        };
      }
      if (tier === 2) {
        const a = rng.pick([-4, -3, -2, 2, 3, 4] as const);
        const p = rng.nonZero(-6, 6);
        const q = rng.nonZero(-12, 12);
        const c0 = a * p * p + q;
        const quad = poly([[a, "x^2"], [2 * a * p, "x"], [c0, ""]]);
        const sq = poly([[1, "x"], [p, ""]]);
        const wrongQ = c0 - p * p;
        return {
          prompt: `Find the coordinates {{(x, y)}} of the turning point of {{y = ${quad}}}.`,
          answer: { type: "list", values: [-p, q], ordered: true, display: `(${num(-p)}, ${num(q)})` },
          solution: [
            `Factor {{${a}}} from the first two terms: {{y = ${a}(${poly([[1, "x^2"], [2 * p, "x"]])}) ${c0 >= 0 ? `+ ${c0}` : `- ${Math.abs(c0)}`}}}.`,
            `Complete the square carefully: {{y = ${a}[(${sq})^2 - ${p * p}] ${c0 >= 0 ? `+ ${c0}` : `- ${Math.abs(c0)}`} = ${a}(${sq})^2 ${q >= 0 ? `+ ${q}` : `- ${Math.abs(q)}`}}}.`,
            `Turning point is {{(${-p}, ${q})}}.`,
          ],
          hint: `Factor ${num(a)} out of the x² and x terms first, and remember to multiply −${p * p} by ${num(a)}!`,
          traps: [
            { spec: { type: "list", values: [p, q], ordered: true }, feedback: "Reverse the sign inside the squared bracket for the x-coordinate!" },
            ...(wrongQ !== q
              ? [{ spec: { type: "list" as const, values: [-p, wrongQ], ordered: true }, feedback: `Remember to multiply −${p * p} by the outer factor ${num(a)} when expanding!` }]
              : []),
          ],
        };
      }
      const dy = rng.pick([-3, -2, -1, 1, 2, 3] as const);
      const dxChoices = Math.abs(dy) === 1 ? [-5, -4, -3, -2, 2, 3, 4, 5] : Math.abs(dy) === 2 ? [-5, -3, -1, 1, 3, 5] : [-5, -4, -2, -1, 1, 2, 4, 5];
      const dx = rng.pick(dxChoices);
      const t = rng.nonZero(-3, 3);
      const mx = t * Math.abs(dy);
      const my = rng.int(-7, 7);
      const x1 = mx - dx, y1 = my - dy;
      const x2 = mx + dx, y2 = my + dy;
      // m_AB = dy/dx => m_perp = -dx/dy
      const cInt = my + (dx * mx) / dy;
      const wrongC = my - (dx * mx) / dy;
      return {
        prompt: `Points {{A(${x1}, ${y1})}} and {{B(${x2}, ${y2})}} lie on a coordinate grid. Find the {{y}}-intercept of the perpendicular bisector of {{AB}}.`,
        answer: { type: "number", value: cInt },
        solution: [
          `Midpoint of {{AB}} is {{M = ((${x1} + ${x2})/2, (${y1} + ${y2})/2) = (${mx}, ${my})}}.`,
          `Gradient {{m_{AB} = (${y2} - ${br(y1)})/(${x2} - ${br(x1)}) = ${2 * dy}/${2 * dx}}}, so perpendicular gradient {{m_{perp} = ${-dx}/${dy}}}.`,
          `Using {{y - ${br(my)} = (${-dx}/${dy})(x - ${br(mx)})}} at {{x = 0}} gives {{y = ${my} + ${cInt - my} = ${cInt}}}.`,
        ],
        hint: "Find midpoint M of AB, flip and negate m_AB for m_perp, then substitute x = 0 into y − y_M = m_perp(x − x_M).",
        traps: wrongC !== cInt
          ? [{ spec: { type: "number", value: wrongC }, feedback: "Check the sign of the perpendicular gradient (−1 / m_AB)!" }]
          : [],
      };
    },
  },
  {
    id: "sequences-functions-graphs.curves-and-lines",
    topicId: "sequences-functions-graphs",
    title: "Exponential parameters & graphical straight-line solving",
    level: 2,
    guideRef: "cubic-reciprocal-exponential",
    generate(rng, tier) {
      if (tier === 1) {
        const a = rng.int(2, 12);
        const b = rng.int(2, 5);
        const k = rng.pick([2, 3] as const);
        const yVal = a * b ** k;
        const trapMult = yVal / (a * k);
        return {
          prompt: `The exponential curve {{y = a * b^x}} ({{a > 0, b > 0}}) passes through {{(0, ${a})}} and {{(${k}, ${yVal})}}. Find the value of {{b}}.`,
          answer: { type: "number", value: b },
          solution: [
            `At {{x = 0}}, {{y = a * b^0 = a}}, so {{a = ${a}}}.`,
            `At {{x = ${k}}}, {{${a} * b^${k} = ${yVal} => b^${k} = ${b ** k}}}.`,
            `Taking the ${k === 2 ? "square" : "cube"} root gives {{b = ${b}}}.`,
          ],
          hint: `First read a = ${a} from (0, ${a}), then solve ${a} × b^${k} = ${yVal}.`,
          traps: trapMult !== b && Number.isFinite(trapMult)
            ? [{ spec: { type: "number", value: b ** k }, feedback: `${b ** k} is b^${k} — take the ${k === 2 ? "square" : "cube"} root to get b!` }]
            : [],
        };
      }
      if (tier === 2) {
        const p = rng.int(-4, 4);
        const q = rng.nonZero(-6, 6);
        const r = rng.nonZero(-7, 7);
        const m = rng.pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6] as const);
        const c = rng.nonZero(-9, 9);
        const q2 = q - m;
        const r2 = r - c;
        const curve = poly([[1, "x^3"], [p, "x^2"], [q, "x"], [r, ""]]);
        const eq = poly([[1, "x^3"], [p, "x^2"], [q2, "x"], [r2, ""]]);
        const line = poly([[m, "x"], [c, ""]]);
        const wrongLine = poly([[-m, "x"], [-c, ""]]);
        return {
          prompt: `The graph of {{y = ${curve}}} is drawn. Find the expression {{mx + c}} for the straight line {{y = mx + c}} needed to solve {{${eq} = 0}}.`,
          answer: { type: "expression", expr: line, form: "simplified" },
          solution: [
            `Start from {{${eq} = 0}}.`,
            `Add {{${line}}} to both sides so the left side matches the plotted curve {{y = ${curve}}}.`,
            `{{${curve} = ${line}}}, so draw {{y = ${line}}}.`,
          ],
          hint: "Rearrange the target equation until the left-hand side matches the plotted cubic identically.",
          traps: [
            { spec: { type: "expression", expr: wrongLine }, feedback: "Watch your signs: curve − target = line, so curve = line when target = 0!" },
          ],
        };
      }
      const k = rng.pick([2, 3] as const);
      const q = rng.nonZero(-6, 6);
      const r = rng.nonZero(-7, 7);
      const q2 = rng.nonZero(-5, 5);
      const r2 = rng.nonZero(-6, 6);
      const m = q - k * q2;
      const c = r - k * r2;
      const curve = poly([[k, "x^3"], [q, "x"], [r, ""]]);
      const eq = poly([[1, "x^3"], [q2, "x"], [r2, ""]]);
      const scaledEq = poly([[k, "x^3"], [k * q2, "x"], [k * r2, ""]]);
      const line = poly([[m, "x"], [c, ""]]);
      const unscaledLine = poly([[q - q2, "x"], [r - r2, ""]]);
      return {
        prompt: `The curve {{y = ${curve}}} is plotted. Find the expression for the right-hand side of the straight line {{y = mx + c}} needed to solve {{${eq} = 0}}.`,
        answer: { type: "expression", expr: line, form: "simplified" },
        solution: [
          `Multiply {{${eq} = 0}} by {{${k}}} so the {{x^3}} term matches {{${k}x^3}}: {{${scaledEq} = 0}}.`,
          `Rearrange so the left side becomes {{${curve}}}: {{${curve} = ${line}}}.`,
          `Draw the line {{y = ${line}}}.`,
        ],
        hint: `Multiply the equation through by ${k} FIRST so its x³ term matches ${k}x³!`,
        traps: unscaledLine !== line
          ? [{ spec: { type: "expression", expr: unscaledLine }, feedback: `Match the ${k}x³ coefficient first by multiplying the equation by ${k}!` }]
          : [],
      };
    },
  },
  {
    id: "sequences-functions-graphs.graph-transformations",
    topicId: "sequences-functions-graphs",
    title: "Transforming coordinates on y = f(x)",
    level: 3,
    guideRef: "graph-transformations",
    generate(rng, tier) {
      if (tier === 1) {
        const x0 = rng.int(-8, 8);
        const y0 = rng.int(-8, 8);
        const h = rng.nonZero(-9, 9);
        const v = rng.nonZero(-9, 9);
        const inside = poly([[1, "x"], [h, ""]]);
        const nx = x0 - h;
        const ny = y0 + v;
        return {
          prompt: `The curve {{y = f(x)}} has a turning point at {{(${x0}, ${y0})}}. Find the coordinates {{(x, y)}} of the corresponding turning point on {{y = f(${inside}) ${v > 0 ? `+ ${v}` : `- ${Math.abs(v)}`}}}.`,
          answer: { type: "list", values: [nx, ny], ordered: true, display: `(${num(nx)}, ${num(ny)})` },
          solution: [
            `Inside {{(${inside})}} acts oppositely on {{x}}: solve {{${inside} = ${x0} => x = ${nx}}}.`,
            `Outside {{${v > 0 ? `+ ${v}` : `- ${Math.abs(v)}`}}} acts directly on {{y}}: {{y = ${y0} ${v > 0 ? `+ ${v}` : `- ${Math.abs(v)}`} = ${ny}}}.`,
            `Image point is {{(${nx}, ${ny})}}.`,
          ],
          hint: "Inside the bracket shifts x oppositely; outside shifts y as written.",
          traps: [
            { spec: { type: "list", values: [x0 + h, ny], ordered: true }, feedback: `Inside f(${inside}) shifts x by ${num(-h)}, not ${num(h)}!` },
          ],
        };
      }
      if (tier === 2) {
        const k = rng.pick([-4, -3, -2, 2, 3, 4] as const);
        const s = rng.pick([-5, -4, -3, -2, -1, 2, 3, 4, 5] as const);
        const nx = rng.nonZero(-6, 6);
        const x0 = k * nx;
        const y0 = rng.nonZero(-7, 7);
        const ny = s * y0;
        const sPrefix = s === -1 ? "-" : String(s);
        const kInside = `${k}x`;
        return {
          prompt: `Point {{(${x0}, ${y0})}} lies on {{y = f(x)}}. Find the coordinates {{(x, y)}} of the corresponding point on {{y = ${sPrefix}f(${kInside})}}.`,
          answer: { type: "list", values: [nx, ny], ordered: true, display: `(${num(nx)}, ${num(ny)})` },
          solution: [
            `Equate the inside to {{${x0}}}: {{${kInside} = ${x0} => x = ${nx}}}.`,
            `Multiply the outside {{y}}-value by {{${s}}}: {{y = ${s} * ${br(y0)} = ${ny}}}.`,
            `Image point is {{(${nx}, ${ny})}}.`,
          ],
          hint: `Solve ${kInside} = ${x0} for x, and multiply y = ${y0} by ${s}.`,
          traps: [
            { spec: { type: "list", values: [k * x0, ny], ordered: true }, feedback: `Inside f(${kInside}) divides x by ${num(k)} rather than multiplying!` },
          ],
        };
      }
      let k = 2, s = -2, h = 3, v = 1, nx = 2, x0 = 7, y0 = -4, ny = 9;
      for (let i = 0; i < 50; i++) {
        k = rng.pick([-3, -2, 2, 3] as const);
        s = rng.pick([-4, -3, -2, 2, 3, 4] as const);
        h = rng.nonZero(-8, 8);
        v = rng.nonZero(-8, 8);
        nx = rng.nonZero(-5, 5);
        x0 = k * nx + h;
        y0 = rng.nonZero(-6, 6);
        ny = s * y0 + v;
        if (k * x0 + h !== nx) break;
      }
      const inside = poly([[k, "x"], [h, ""]]);
      return {
        prompt: `Point {{(${x0}, ${y0})}} lies on {{y = f(x)}}. Find the coordinates {{(x, y)}} of the corresponding point on {{y = ${s}f(${inside}) ${v > 0 ? `+ ${v}` : `- ${Math.abs(v)}`}}}.`,
        answer: { type: "list", values: [nx, ny], ordered: true, display: `(${num(nx)}, ${num(ny)})` },
        solution: [
          `Set the inside of {{f(...)}} equal to the original {{x = ${x0}}}: {{${inside} = ${x0} => ${k}x = ${x0 - h} => x = ${nx}}}.`,
          `Apply the outside operations using BIDMAS to {{y = ${y0}}}: {{y = ${s}(${y0}) ${v > 0 ? `+ ${v}` : `- ${Math.abs(v)}`} = ${ny}}}.`,
          `Image point is {{(${nx}, ${ny})}}.`,
        ],
        hint: `Equate ${inside} = ${x0} to find x, then evaluate ${s} × (${y0}) ${v > 0 ? `+ ${v}` : `− ${Math.abs(v)}`} for y.`,
        traps: [
          { spec: { type: "list", values: [k * x0 + h, ny], ordered: true }, feedback: `Don't plug ${num(x0)} forward into ${inside} — solve ${inside} = ${num(x0)} instead!` },
        ],
      };
    },
  },
];

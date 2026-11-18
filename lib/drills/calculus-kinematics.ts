import type { Drill } from "./types.ts";
import { br, num, poly } from "./helpers.ts";

export const drills: Drill[] = [
  {
    id: "calculus-kinematics.diff-powers",
    topicId: "calculus-kinematics",
    title: "Differentiate powers, reciprocals & split fractions",
    level: 1,
    guideRef: "differentiating-powers",
    generate(rng, tier) {
      if (tier === 1) {
        const a = rng.int(2, 9);
        const n = rng.int(2, 5);
        const b = rng.nonZero(-12, 12);
        const c = rng.nonZero(-15, 15);
        const yStr = poly([[a, `x^${n}`], [b, "x"], [c, ""]]);
        const dStr = poly([[a * n, n - 1 === 1 ? "x" : `x^${n - 1}`], [b, ""]]);
        const trapStr = poly([[a * n, n - 1 === 1 ? "x" : `x^${n - 1}`], [b + c, ""]]);
        return {
          prompt: `Given that {{y = ${yStr}}}, find {{dy/dx}}.`,
          answer: { type: "expression", expr: dStr, form: "simplified", display: `{{${dStr}}}` },
          solution: [
            `Apply {{d/dx(a x^n) = n a x^(n - 1)}} to each term; the constant ${num(c)} differentiates to 0.`,
            `{{dy/dx = ${dStr}}}.`,
          ],
          hint: "Multiply each power down, subtract 1 from the exponent, and drop the standalone constant.",
          traps: [{ spec: { type: "expression", expr: trapStr }, feedback: "Standalone constants differentiate to 0!" }],
        };
      }
      if (tier === 2) {
        const a = rng.pick([-7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7]);
        const n = rng.pick([2, 3, 4]);
        const k = rng.pick([-10, -9, -8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        const m = rng.pick([1, 2, 3]);
        const c = rng.nonZero(-9, 9);
        const kSign = k < 0 ? "-" : "+";
        const denom = m === 1 ? "x" : `x^${m}`;
        const firstTerm = `${a}x^${n}`;
        const constPart = c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`;
        const derivFirst = `${a * n}${n - 1 === 1 ? "x" : `x^${n - 1}`}`;
        const dm = -k * m;
        const derivSecond = `${dm < 0 ? "-" : "+"} ${Math.abs(dm)}/x^${m + 1}`;
        const trapSecond = `${-dm < 0 ? "-" : "+"} ${Math.abs(dm)}/x^${m + 1}`;
        return {
          prompt: `Given that {{y = ${firstTerm} ${kSign} ${Math.abs(k)}/${denom} ${constPart}}} for {{x != 0}}, find {{dy/dx}}.`,
          answer: { type: "expression", expr: `${derivFirst} ${derivSecond}`, form: "simplified", display: `{{${derivFirst} ${derivSecond}}}` },
          solution: [
            `Rewrite in index form: {{y = ${firstTerm} ${kSign} ${Math.abs(k)}x^(-${m}) ${constPart}}}.`,
            `Differentiate ({{${num(c)} -> 0}}): {{dy/dx = ${derivFirst} ${derivSecond}}}.`,
          ],
          hint: `Write {{1/${denom}}} as {{x^(-${m})}} before differentiating, and subtract 1 from {{-${m}}}.`,
          traps: [{ spec: { type: "expression", expr: `${derivFirst} ${trapSecond}` }, feedback: `Watch the sign when multiplying by −${m}!` }],
        };
      }
      // Tier 3: Split fraction (ax^(m+2) + bx)/x^m = ax^2 + bx^(1-m)
      const m = rng.pick([2, 3]);
      const a = rng.int(2, 9);
      const b = rng.pick([-11, -9, -8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9, 11]);
      const topStr = `${a}x^${m + 2} ${b < 0 ? "-" : "+"} ${Math.abs(b)}x`;
      const exp2 = 1 - m; // -1 or -2
      const dCoef2 = b * exp2; // non-zero, |dCoef2| >= 2
      const ansExpr = `${2 * a}x ${dCoef2 < 0 ? "-" : "+"} ${Math.abs(dCoef2)}/x^${m}`;
      const trapExpr = `${2 * a}x ${-dCoef2 < 0 ? "-" : "+"} ${Math.abs(dCoef2)}/x^${m}`;
      return {
        prompt: `Given that {{y = (${topStr})/x^${m}}} for {{x != 0}}, find {{dy/dx}}.`,
        answer: { type: "expression", expr: ansExpr, form: "simplified", display: `{{${ansExpr}}}` },
        solution: [
          `Split over {{x^${m}}} BEFORE differentiating: {{y = ${a}x^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}x^(${exp2})}}.`,
          `Differentiate term-by-term: {{dy/dx = ${ansExpr}}}.`,
        ],
        hint: `Divide both terms in the numerator by {{x^${m}}} first so each term has the form {{k x^n}}.`,
        traps: [{ spec: { type: "expression", expr: trapExpr }, feedback: `Check the sign when multiplying ${num(b)} by (${num(exp2)})!` }],
      };
    },
  },
  {
    id: "calculus-kinematics.curve-gradient",
    topicId: "calculus-kinematics",
    title: "Find the gradient of a curve at x = x₀",
    level: 1,
    guideRef: "gradients-tangents-normals",
    generate(rng, tier) {
      if (tier === 1) {
        let a = 2, b = 3, c = 1, x0 = 2, grad = 11, yVal = 15;
        for (let i = 0; i < 40; i++) {
          a = rng.int(2, 6);
          b = rng.nonZero(-9, 9);
          c = rng.nonZero(-10, 10);
          x0 = rng.int(1, 6);
          grad = 2 * a * x0 + b;
          yVal = a * x0 * x0 + b * x0 + c;
          if (grad !== yVal) break;
        }
        const yStr = poly([[a, "x^2"], [b, "x"], [c, ""]]);
        const dStr = poly([[2 * a, "x"], [b, ""]]);
        return {
          prompt: `Find the gradient of the curve {{y = ${yStr}}} at the point where {{x = ${x0}}}.`,
          answer: { type: "number", value: grad },
          solution: [
            `Differentiate: {{dy/dx = ${dStr}}}.`,
            `At {{x = ${x0}}}: {{dy/dx = ${2 * a}(${x0}) ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${num(grad)}}}.`,
          ],
          hint: "Differentiate y first, then substitute the given x-value.",
          traps: [{ spec: { type: "number", value: yVal }, feedback: "You found the y-coordinate instead of differentiating for dy/dx!" }],
        };
      }
      if (tier === 2) {
        let a = 1, b = -3, c = 2, d = 5, x0 = -2, grad = 26, yVal = -19, signTrap = 2;
        for (let i = 0; i < 50; i++) {
          a = rng.int(1, 4);
          b = rng.nonZero(-5, 5);
          c = rng.nonZero(-8, 8);
          d = rng.int(-9, 9);
          x0 = rng.pick([-4, -3, -2, -1, 2, 3, 4]);
          grad = 3 * a * x0 * x0 + 2 * b * x0 + c;
          yVal = a * x0 ** 3 + b * x0 ** 2 + c * x0 + d;
          signTrap = -3 * a * x0 * x0 + 2 * b * x0 + c;
          if (grad !== yVal && grad !== signTrap) break;
        }
        const yStr = poly([[a, "x^3"], [b, "x^2"], [c, "x"], [d, ""]]);
        const dStr = poly([[3 * a, "x^2"], [2 * b, "x"], [c, ""]]);
        return {
          prompt: `Find the gradient of the curve {{y = ${yStr}}} at the point where {{x = ${x0}}}.`,
          answer: { type: "number", value: grad },
          solution: [
            `Differentiate: {{dy/dx = ${dStr}}}.`,
            `Substitute {{x = ${num(x0)}}}: {{${3 * a}(${br(x0)})^2 + ${br(2 * b)}(${br(x0)}) + ${br(c)} = ${num(grad)}}}.`,
          ],
          hint: "Put brackets around negative x-values when squaring!",
          traps: [{ spec: { type: "number", value: yVal }, feedback: "That's the y-coordinate — substitute into dy/dx for the gradient!" }],
        };
      }
      // Tier 3: y = a*x^2 + k/x at x = x0 where k = q * x0^2
      const x0 = rng.pick([-4, -3, -2, 2, 3, 4]);
      const q = rng.nonZero(-7, 7);
      const a = rng.nonZero(-5, 5);
      const k = q * x0 * x0;
      const grad = 2 * a * x0 - q;
      const wrongSign = 2 * a * x0 + q;
      const aPart = a === 1 ? "x^2" : a === -1 ? "-x^2" : `${a}x^2`;
      const kPart = k < 0 ? `- ${Math.abs(k)}/x` : `+ ${k}/x`;
      return {
        prompt: `Find the gradient of the curve {{y = ${aPart} ${kPart}}} at the point where {{x = ${x0}}}.`,
        answer: { type: "number", value: grad },
        solution: [
          `Rewrite {{y = ${aPart} ${k < 0 ? "-" : "+"} ${Math.abs(k)}x^(-1)}}.`,
          `{{dy/dx = ${2 * a}x ${-k < 0 ? "-" : "+"} ${Math.abs(k)}/x^2}}.`,
          `At {{x = ${num(x0)}}}: {{${2 * a}(${br(x0)}) ${-q < 0 ? "−" : "+"} ${Math.abs(q)} = ${num(grad)}}}.`,
        ],
        hint: "Rewrite k/x as k·x^(−1) so its derivative is −k/x².",
        traps: [{ spec: { type: "number", value: wrongSign }, feedback: "Remember d/dx(k/x) = −k/x² changes the sign!" }],
      };
    },
  },
  {
    id: "calculus-kinematics.tangent-normal",
    topicId: "calculus-kinematics",
    title: "Tangents & perpendicular normals",
    level: 2,
    guideRef: "gradients-tangents-normals",
    generate(rng, tier) {
      if (tier === 1) {
        let a = 1, b = -2, d = 3, x0 = 2, y1 = 3, mT = 2, cT = -1;
        for (let i = 0; i < 50; i++) {
          a = rng.int(1, 4);
          b = rng.int(-6, 6);
          d = rng.int(-8, 8);
          x0 = rng.pick([-3, -2, -1, 1, 2, 3, 4]);
          mT = 2 * a * x0 + b;
          y1 = a * x0 * x0 + b * x0 + d;
          cT = y1 - mT * x0;
          if (Math.abs(mT) >= 2 && cT !== y1) break;
        }
        const yStr = poly([[a, "x^2"], [b, "x"], [d, ""]]);
        const rhs = poly([[mT, "x"], [cT, ""]]);
        const trapRhs = poly([[mT, "x"], [y1, ""]]);
        return {
          prompt: `Find the equation of the **tangent** to {{y = ${yStr}}} at {{x = ${x0}}}. Give the right-hand side of {{y = mx + c}}.`,
          answer: { type: "expression", expr: rhs, form: "simplified", display: `{{y = ${rhs}}}` },
          solution: [
            `At {{x = ${num(x0)}}}, {{y = ${num(y1)}}}, so the point is {{(${num(x0)}, ${num(y1)})}}.`,
            `{{dy/dx = ${poly([[2 * a, "x"], [b, ""]])}}}, giving tangent gradient {{m_T = ${num(mT)}}}.`,
            `{{y - ${br(y1)} = ${num(mT)}(x - ${br(x0)}) => y = ${rhs}}}.`,
          ],
          hint: "Find y₁ and m_T at x₀, then expand y − y₁ = m_T(x − x₀).",
          traps: [{ spec: { type: "expression", expr: trapRhs }, feedback: "y₁ is the y-coordinate at x₀, not the y-intercept c!" }],
        };
      }
      if (tier === 2) {
        let a = 1, b = -2, d = 4, x0 = 2, mT = 10;
        for (let i = 0; i < 50; i++) {
          a = rng.int(1, 3);
          b = rng.int(-9, 9);
          d = rng.int(-7, 7);
          x0 = rng.pick([-3, -2, -1, 1, 2, 3]);
          mT = 3 * a * x0 * x0 + b;
          if (Math.abs(mT) >= 2) break;
        }
        const yStr = poly([[a, "x^3"], [b, "x"], [d, ""]]);
        const nNum = mT > 0 ? -1 : 1;
        const nDen = Math.abs(mT);
        return {
          prompt: `Find the gradient of the **normal** to {{y = ${yStr}}} at the point where {{x = ${x0}}}. Give your answer as a fraction in simplest form.`,
          answer: { type: "fraction", n: nNum, d: nDen, simplest: true },
          solution: [
            `{{dy/dx = ${poly([[3 * a, "x^2"], [b, ""]])}}}, so at {{x = ${num(x0)}}}, tangent gradient {{m_T = ${num(mT)}}}.`,
            `Normal is perpendicular ({{m_T * m_N = -1}}), so {{m_N = ${nNum < 0 ? "-" : ""}1/${nDen}}}.`,
          ],
          hint: "Find m_T from dy/dx first, then take the negative reciprocal −1/m_T.",
          traps: [
            { spec: { type: "number", value: mT }, feedback: "That's the tangent gradient — take −1/m_T for the normal!" },
            { spec: { type: "fraction", n: -nNum, d: nDen }, feedback: "Don't forget to flip the sign in m_N = −1/m_T!" },
          ],
        };
      }
      // Tier 3: Where does the normal to y = ax^2 + bx + d at x = x0 cross the x-axis?
      let a = 1, b = -2, d = 3, x0 = 2, y1 = 3, mT = 2, xInt = 8, signTrap = -4;
      for (let i = 0; i < 60; i++) {
        a = rng.int(1, 3);
        b = rng.int(-6, 6);
        d = rng.int(-6, 8);
        x0 = rng.pick([-3, -2, -1, 1, 2, 3, 4]);
        mT = 2 * a * x0 + b;
        y1 = a * x0 * x0 + b * x0 + d;
        xInt = x0 + mT * y1;
        signTrap = x0 - mT * y1;
        if (Math.abs(mT) >= 2 && y1 !== 0 && xInt !== signTrap) break;
      }
      const yStr = poly([[a, "x^2"], [b, "x"], [d, ""]]);
      return {
        prompt: `The **normal** to {{y = ${yStr}}} at {{x = ${x0}}} crosses the {{x}}-axis at {{(p, 0)}}. Find the value of {{p}}.`,
        answer: { type: "number", value: xInt },
        solution: [
          `At {{x = ${num(x0)}}}, {{y = ${num(y1)}}} and {{m_T = ${num(mT)}}}, so normal gradient {{m_N = -1/(${num(mT)})}}.`,
          `Normal equation: {{y - ${br(y1)} = (-1/(${num(mT)}))(x - ${br(x0)})}}.`,
          `Set {{y = 0}}: {{-${br(y1)} = (-1/(${num(mT)}))(p - ${br(x0)}) => p = ${num(x0)} + (${num(mT)})(${num(y1)}) = ${num(xInt)}}}.`,
        ],
        hint: "Form y − y₁ = (−1/m_T)(x − x₀) and substitute y = 0.",
        traps: [{ spec: { type: "number", value: signTrap }, feedback: "Check the negative sign on m_N = −1/m_T when setting y = 0!" }],
      };
    },
  },
  {
    id: "calculus-kinematics.stationary-optimise",
    topicId: "calculus-kinematics",
    title: "Stationary points & calculus optimisation",
    level: 2,
    guideRef: "stationary-points-optimisation",
    generate(rng, tier) {
      if (tier === 1) {
        let a = 1, p = 3, c = 11, yStat = 2;
        for (let i = 0; i < 40; i++) {
          a = rng.pick([-4, -3, -2, -1, 1, 2, 3, 4]);
          p = rng.nonZero(-6, 6);
          c = rng.int(-15, 15);
          yStat = c - a * p * p;
          if (yStat !== 0) break;
        }
        const b = -2 * a * p;
        const yStr = poly([[a, "x^2"], [b, "x"], [c, ""]]);
        return {
          prompt: `Find the coordinates {{(x, y)}} of the stationary point on {{y = ${yStr}}}.`,
          answer: { type: "list", values: [p, yStat], ordered: true, display: `(${num(p)}, ${num(yStat)})` },
          solution: [
            `Set {{dy/dx = ${poly([[2 * a, "x"], [b, ""]])} = 0 => x = ${num(p)}}}.`,
            `Substitute into {{y}}: {{y = ${num(yStat)}}}, giving {{(${num(p)}, ${num(yStat)})}}.`,
          ],
          hint: "Solve dy/dx = 0 for x, then substitute back into y.",
          traps: [{ spec: { type: "list", values: [p, 0], ordered: true }, feedback: "Substitute x into the original curve y, not into dy/dx!" }],
        };
      }
      if (tier === 2) {
        // Cubic y = x^3 - 3*s*x^2 + 3*r1*r2*x + d with r1 < r2 same parity -> local max at r1!
        let r1 = -1, r2 = 3, d = 5, yMax = 10, yMin = -22;
        for (let i = 0; i < 50; i++) {
          r1 = rng.int(-4, 2);
          const step = rng.pick([2, 4, 6]);
          r2 = r1 + step;
          d = rng.int(-12, 12);
          const s = (r1 + r2) / 2;
          yMax = r1 ** 3 - 3 * s * r1 ** 2 + 3 * r1 * r2 * r1 + d;
          yMin = r2 ** 3 - 3 * s * r2 ** 2 + 3 * r1 * r2 * r2 + d;
          if (yMax !== r1 && yMax !== yMin) break;
        }
        const s = (r1 + r2) / 2;
        const B = -3 * s;
        const C = 3 * r1 * r2;
        const yStr = poly([[1, "x^3"], [B, "x^2"], [C, "x"], [d, ""]]);
        return {
          prompt: `Find the {{y}}-coordinate of the **local maximum** point on {{y = ${yStr}}}.`,
          answer: { type: "number", value: yMax },
          solution: [
            `{{dy/dx = ${poly([[3, "x^2"], [2 * B, "x"], [C, ""]])} = 3(x - ${br(r1)})(x - ${br(r2)}) = 0 => x = ${num(r1)}}} or {{${num(r2)}}}.`,
            `{{(d^2 y)/(dx^2) = ${poly([[6, "x"], [2 * B, ""]])}}}: at {{x = ${num(r1)}}} this is {{${num(3 * (r1 - r2))} < 0}} (local maximum).`,
            `At {{x = ${num(r1)}}}, {{y = ${num(yMax)}}}.`,
          ],
          hint: "Solve dy/dx = 0 and check d²y/dx² < 0 to pick the local maximum x-value.",
          traps: [
            { spec: { type: "number", value: yMin }, feedback: "That's the local minimum (where d²y/dx² > 0), not the local maximum!" },
            { spec: { type: "number", value: r1 }, feedback: "That's the x-coordinate — substitute back into y!" },
          ],
        };
      }
      // Tier 3: Fencing optimisation
      const k = rng.pick([2, 3, 4]);
      const m = rng.pick([1, 2]);
      const mult = m === 2 && k % 2 !== 0 ? 2 : 1;
      const xOpt = mult * rng.int(3, 10);
      const P = 2 * k * xOpt;
      const yOpt = (k * xOpt) / m;
      const aMax = xOpt * yOpt;
      const desc =
        m === 1
          ? `against a long straight wall using ${k} perpendicular fences of length {{x}} m and 1 parallel fence of length {{y}} m`
          : `using ${k} parallel fences of length {{x}} m and 2 long sides of length {{y}} m`;
      return {
        prompt: `An enclosure of width {{x}} m and length {{y}} m is built ${desc}, using {{${P}}} m of fencing in total ({{${k}x + ${m === 1 ? "y" : "2y"} = ${P}}}). Find the **maximum** enclosed area {{A = x y}} in m².`,
        answer: { type: "number", value: aMax, display: `${aMax} m²` },
        solution: [
          `From {{${k}x + ${m === 1 ? "y" : "2y"} = ${P}}}, {{y = ${m === 1 ? `${P} - ${k}x` : `(${P} - ${k}x)/2`}}}.`,
          `Area {{A = x y}}; setting {{dA/dx = 0}} gives {{x = ${xOpt}}} m and {{y = ${yOpt}}} m.`,
          `Maximum area {{A = ${xOpt} * ${yOpt} = ${aMax}}} m².`,
        ],
        hint: "Eliminate y using the fencing equation, solve dA/dx = 0 for x, and compute A = xy.",
        traps: [{ spec: { type: "number", value: xOpt }, feedback: "That's the optimal width x — multiply x by y for the maximum area!" }],
      };
    },
  },
  {
    id: "calculus-kinematics.kinematics-sva",
    topicId: "calculus-kinematics",
    title: "Kinematics: velocity, rest, acceleration & total distance",
    level: 3,
    guideRef: "kinematics-calculus",
    generate(rng, tier) {
      if (tier === 1) {
        let a = 1, b = -4, c = 5, t0 = 3, sVal = 6, vVal = 8, aVal = 10, askVel = true;
        for (let i = 0; i < 50; i++) {
          a = rng.int(1, 3);
          b = rng.int(-7, 5);
          c = rng.int(-10, 12);
          t0 = rng.int(2, 5);
          askVel = rng.bool();
          sVal = a * t0 ** 3 + b * t0 ** 2 + c * t0;
          vVal = 3 * a * t0 ** 2 + 2 * b * t0 + c;
          aVal = 6 * a * t0 + 2 * b;
          if (sVal !== vVal && vVal !== aVal && sVal !== aVal) break;
        }
        const sStr = poly([[a, "t^3"], [b, "t^2"], [c, "t"]]);
        const vStr = poly([[3 * a, "t^2"], [2 * b, "t"], [c, ""]]);
        const aStr = poly([[6 * a, "t"], [2 * b, ""]]);
        if (askVel) {
          return {
            prompt: `A particle has displacement {{s = ${sStr}}} metres at time {{t}} s. Find its **velocity** when {{t = ${t0}}} s.`,
            answer: { type: "number", value: vVal, display: `${num(vVal)} m/s` },
            solution: [`{{v = ds/dt = ${vStr}}}.`, `At {{t = ${t0}}}: {{v = ${num(vVal)}}} m/s.`],
            hint: "Differentiate s once with respect to t to get v = ds/dt.",
            traps: [
              { spec: { type: "number", value: sVal }, feedback: "That's s(t) — differentiate once to find velocity!" },
              { spec: { type: "number", value: aVal }, feedback: "That's acceleration a(t) — only differentiate once for velocity!" },
            ],
          };
        }
        return {
          prompt: `A particle has displacement {{s = ${sStr}}} metres at time {{t}} s. Find its **acceleration** when {{t = ${t0}}} s.`,
          answer: { type: "number", value: aVal, display: `${num(aVal)} m/s²` },
          solution: [`{{v = ds/dt = ${vStr}}}, and {{a = dv/dt = ${aStr}}}.`, `At {{t = ${t0}}}: {{a = ${num(aVal)}}} m/s².`],
          hint: "Differentiate twice: s → v = ds/dt → a = dv/dt.",
          traps: [{ spec: { type: "number", value: vVal }, feedback: "That's velocity v(t) — differentiate once more for acceleration!" }],
        };
      }
      if (tier === 2) {
        const r1 = rng.int(1, 5);
        const step = rng.pick([2, 4, 6]);
        const r2 = r1 + step;
        const pickFirst = rng.bool();
        const sSum = (r1 + r2) / 2;
        const B = -3 * sSum;
        const C = 3 * r1 * r2;
        const d = rng.int(0, 9);
        const sStr = poly([[1, "t^3"], [B, "t^2"], [C, "t"], [d, ""]]);
        const targetT = pickFirst ? r1 : r2;
        const acc = 6 * targetT + 2 * B;
        const otherAcc = -acc;
        return {
          prompt: `A particle has displacement {{s = ${sStr}}} m for {{t >= 0}}. Find its **acceleration** at the ${pickFirst ? "**first**" : "**second**"} instant when it is at instantaneous rest.`,
          answer: { type: "number", value: acc, display: `${num(acc)} m/s²` },
          solution: [
            `{{v = ds/dt = 3t^2 ${2 * B < 0 ? "-" : "+"} ${Math.abs(2 * B)}t + ${C} = 3(t - ${r1})(t - ${r2}) = 0}}, so {{t = ${r1}}} s and {{t = ${r2}}} s.`,
            `{{a = dv/dt = 6t ${2 * B < 0 ? "-" : "+"} ${Math.abs(2 * B)}}}. At {{t = ${targetT}}}, {{a = ${num(acc)}}} m/s².`,
          ],
          hint: "Solve v = ds/dt = 0 to find the two rest times, then evaluate a = dv/dt at the requested time.",
          traps: [
            { spec: { type: "number", value: otherAcc }, feedback: `You picked t = ${pickFirst ? r2 : r1} instead of the ${pickFirst ? "first" : "second"} rest instant!` },
            ...(targetT !== acc ? [{ spec: { type: "number" as const, value: targetT }, feedback: "That's the time t — substitute t into a = dv/dt!" }] : []),
          ],
        };
      }
      // Tier 3: Total distance travelled with turnaround!
      const p = rng.int(1, 5);
      const k = rng.int(1, 3);
      const tEnd = p + rng.int(1, 4);
      const c0 = rng.int(0, 8);
      // s = k*(3*p^2*t - t^3) + c0 => v = 3*k*(p^2 - t^2) = 0 at t = p!
      const lin = 3 * k * p * p;
      const s0 = c0;
      const sTurn = k * 2 * p ** 3 + c0;
      const sEnd = lin * tEnd - k * tEnd ** 3 + c0;
      const leg1 = Math.abs(sTurn - s0);
      const leg2 = Math.abs(sEnd - sTurn);
      const totalDist = leg1 + leg2;
      const netDisp = Math.abs(sEnd - s0);
      const sStr = poly([[lin, "t"], [-k, "t^3"], [c0, ""]]);
      return {
        prompt: `A particle moves along a line with displacement {{s = ${sStr}}} metres for {{t >= 0}}. Find the **total distance** travelled between {{t = 0}} and {{t = ${tEnd}}} s.`,
        answer: { type: "number", value: totalDist, display: `${totalDist} m` },
        solution: [
          `Check reversals: {{v = ds/dt = ${lin} - ${3 * k}t^2 = 0 => t = ${p}}} s (inside {{0 < t < ${tEnd}}}).`,
          `Positions: {{s(0) = ${s0}}}, {{s(${p}) = ${sTurn}}}, {{s(${tEnd}) = ${num(sEnd)}}}.`,
          `Total distance {{= |${sTurn} - ${s0}| + |${num(sEnd)} - ${sTurn}| = ${leg1} + ${leg2} = ${totalDist}}} m.`,
        ],
        hint: "Solve v = ds/dt = 0 first to find where the particle turns around, then sum |Δs| on each leg!",
        traps: [{ spec: { type: "number", value: netDisp }, feedback: `That's |s(${tEnd}) − s(0)| — the particle reverses at t = ${p} s, so add both legs!` }],
      };
    },
  },
];

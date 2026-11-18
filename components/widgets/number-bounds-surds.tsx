"use client";
import { useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, M, type WidgetDef } from "./kit";

type Op = "div" | "sub" | "add" | "mul";
type AccMode = "1dp" | "int" | "trunc1dp";

function roundClean(n: number, dp = 6): number {
  return parseFloat(n.toFixed(dp));
}

function getBounds(val: number, mode: AccMode): { lb: number; ub: number; desc: string } {
  if (mode === "int") {
    const v = Math.round(val);
    return { lb: roundClean(v - 0.5), ub: roundClean(v + 0.5), desc: `${v} (nearest 1)` };
  }
  if (mode === "trunc1dp") {
    const v = roundClean(val, 1);
    return { lb: v, ub: roundClean(v + 0.1), desc: `${v.toFixed(1)} (truncated 1 d.p.)` };
  }
  const v = roundClean(val, 1);
  return { lb: roundClean(v - 0.05), ub: roundClean(v + 0.05), desc: `${v.toFixed(1)} (rounded 1 d.p.)` };
}

function suitableAccuracy(lb: number, ub: number): string {
  if (!Number.isFinite(lb) || !Number.isFinite(ub) || lb <= 0 || ub <= 0) return "Compare LB & UB digits";
  for (let sf = 5; sf >= 1; sf--) {
    const a = Number(lb.toPrecision(sf));
    const b = Number(ub.toPrecision(sf));
    if (a === b) return `${a} (${sf} s.f.)`;
  }
  return `Disagree even at 1 s.f. (${lb.toPrecision(1)} vs ${ub.toPrecision(1)})`;
}

function BoundsIntervalExplorer() {
  const [op, setOp] = useState<Op>("div");
  const [aVal, setAVal] = useState(24.0);
  const [bVal, setBVal] = useState(4.0);
  const [aAcc, setAAcc] = useState<AccMode>("1dp");
  const [bAcc, setBAcc] = useState<AccMode>("1dp");

  const A = getBounds(aVal, aAcc);
  const B = getBounds(bVal, bAcc);

  let lbRes = 0;
  let ubRes = 0;
  let naiveUb = 0;
  let ubFormula = "";
  let lbFormula = "";
  let opSym = "÷";
  const crossPaired = op === "div" || op === "sub";

  if (op === "div") {
    opSym = "÷";
    ubRes = A.ub / B.lb;
    lbRes = A.lb / B.ub;
    naiveUb = A.ub / B.ub;
    ubFormula = `UB(a) / LB(b) = ${A.ub} / ${B.lb}`;
    lbFormula = `LB(a) / UB(b) = ${A.lb} / ${B.ub}`;
  } else if (op === "sub") {
    opSym = "−";
    ubRes = A.ub - B.lb;
    lbRes = A.lb - B.ub;
    naiveUb = A.ub - B.ub;
    ubFormula = `UB(a) - LB(b) = ${A.ub} - ${B.lb}`;
    lbFormula = `LB(a) - UB(b) = ${A.lb} - ${B.ub}`;
  } else if (op === "add") {
    opSym = "+";
    ubRes = A.ub + B.ub;
    lbRes = A.lb + B.lb;
    naiveUb = ubRes;
    ubFormula = `UB(a) + UB(b) = ${A.ub} + ${B.ub}`;
    lbFormula = `LB(a) + LB(b) = ${A.lb} + ${B.lb}`;
  } else {
    opSym = "×";
    ubRes = A.ub * B.ub;
    lbRes = A.lb * B.lb;
    naiveUb = ubRes;
    ubFormula = `UB(a) * UB(b) = ${A.ub} * ${B.ub}`;
    lbFormula = `LB(a) * LB(b) = ${A.lb} * ${B.lb}`;
  }

  const fmt4 = (n: number) => parseFloat(n.toFixed(4)).toString();
  const suit = suitableAccuracy(lbRes, ubRes);

  // Map result range onto bottom SVG number line
  const span = Math.max(1e-6, ubRes - lbRes);
  const minX = lbRes - 0.25 * span;
  const maxX = ubRes + 0.25 * span;
  const mapRes = (v: number) => 60 + ((v - minX) / (maxX - minX)) * 340;
  const xLb = mapRes(lbRes);
  const xUb = mapRes(ubRes);
  const xNaive = mapRes(naiveUb);

  return (
    <WidgetFrame
      title="Upper & Lower Bounds Cross-Pairing Explorer"
      tryThis={[
        "Switch between `a ÷ b` and `a × b` — watch the green & blue wires **cross** for `−` and `÷`!",
        "Set `a = 24.0` (1 d.p.) and `b = 4.0` (1 d.p.) on `a ÷ b`: spot where the red trap `UB(a) ÷ UB(b)` lands *inside* the interval instead of at the top!",
        "Switch `a` from **Rounded 1 d.p.** to **Truncated 1 d.p.** and see how the interval shifts right.",
      ]}
      caption={
        <>
          For <strong>a = {A.desc}</strong> (<M>{`${A.lb} <= a < ${A.ub}`}</M>) and <strong>b = {B.desc}</strong> (<M>{`${B.lb} <= b < ${B.ub}`}</M>):{" "}
          {crossPaired ? (
            <>
              because <strong>{opSym}</strong> shrinks the result as <em>b</em> grows, the bounds <strong>cross-pair</strong> —{" "}
              <M>{ubFormula}</M> gives UB = <strong>{fmt4(ubRes)}</strong> and <M>{lbFormula}</M> gives LB = <strong>{fmt4(lbRes)}</strong>, whereas the Edexcel trap{" "}
              <M>{`UB(a) ${op === "div" ? "/" : "-"} UB(b)`}</M> only reaches <strong>{fmt4(naiveUb)}</strong>!
            </>
          ) : (
            <>
              because <strong>{opSym}</strong> grows with both inputs, bounds pair <strong>like-with-like</strong> (<M>{ubFormula}</M>).
            </>
          )}{" "}
          Suitable degree of accuracy: <strong>{suit}</strong>.
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Segmented<Op>
            label="Operation"
            value={op}
            onChange={setOp}
            options={[
              { value: "div", label: "a ÷ b" },
              { value: "sub", label: "a − b" },
              { value: "add", label: "a + b" },
              { value: "mul", label: "a × b" },
            ]}
          />
          <Segmented<AccMode>
            label="Accuracy of a"
            value={aAcc}
            onChange={setAAcc}
            options={[
              { value: "1dp", label: "a: 1 d.p." },
              { value: "int", label: "a: nearest 1" },
              { value: "trunc1dp", label: "a: trunc 1 d.p." },
            ]}
          />
          <Segmented<AccMode>
            label="Accuracy of b"
            value={bAcc}
            onChange={setBAcc}
            options={[
              { value: "1dp", label: "b: 1 d.p." },
              { value: "int", label: "b: nearest 1" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Measured value of a"
            value={aVal}
            min={8}
            max={50}
            step={aAcc === "int" ? 1 : 0.2}
            onChange={setAVal}
            format={(v) => (aAcc === "int" ? Math.round(v) : v.toFixed(1))}
          />
          <Slider
            label="Measured value of b"
            value={bVal}
            min={2}
            max={15}
            step={bAcc === "int" ? 1 : 0.2}
            onChange={setBVal}
            format={(v) => (bAcc === "int" ? Math.round(v) : v.toFixed(1))}
          />
        </div>

        <svg
          viewBox="0 0 460 195"
          className="h-auto w-full rounded-xl border border-line bg-surface-2"
          role="img"
          aria-label={`Bounds wiring diagram for a ${opSym} b showing LB = ${fmt4(lbRes)} and UB = ${fmt4(ubRes)}`}
        >
          {/* Top boxes: a bounds (left) and b bounds (right) */}
          <rect x={24} y={16} width={180} height={54} rx={8} className="fill-surface stroke-line" strokeWidth={1.5} />
          <text x={114} y={32} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-ink-2">
            a interval: [{A.lb}, {A.ub})
          </text>
          <circle cx={58} cy={52} r={5} fill="#2563eb" />
          <text x={58} y={66} fontSize={10} fontWeight={700} textAnchor="middle" fill="#2563eb">
            LB(a)={A.lb}
          </text>
          <circle cx={170} cy={52} r={5} fill="#16a34a" />
          <text x={170} y={66} fontSize={10} fontWeight={700} textAnchor="middle" fill="#16a34a">
            UB(a)={A.ub}
          </text>

          <rect x={256} y={16} width={180} height={54} rx={8} className="fill-surface stroke-line" strokeWidth={1.5} />
          <text x={346} y={32} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-ink-2">
            b interval: [{B.lb}, {B.ub})
          </text>
          <circle cx={290} cy={52} r={5} fill={crossPaired ? "#16a34a" : "#2563eb"} />
          <text x={290} y={66} fontSize={10} fontWeight={700} textAnchor="middle" fill={crossPaired ? "#16a34a" : "#2563eb"}>
            LB(b)={B.lb}
          </text>
          <circle cx={402} cy={52} r={5} fill={crossPaired ? "#2563eb" : "#16a34a"} />
          <text x={402} y={66} fontSize={10} fontWeight={700} textAnchor="middle" fill={crossPaired ? "#2563eb" : "#16a34a"}>
            UB(b)={B.ub}
          </text>

          {/* Pairing wires down to result LB and UB */}
          <line x1={58} y1={57} x2={xLb} y2={138} stroke="#2563eb" strokeWidth={2} strokeDasharray="4 3" />
          <line x1={crossPaired ? 402 : 290} y1={57} x2={xLb} y2={138} stroke="#2563eb" strokeWidth={2} strokeDasharray="4 3" />
          <line x1={170} y1={57} x2={xUb} y2={138} stroke="#16a34a" strokeWidth={2.2} />
          <line x1={crossPaired ? 290 : 402} y1={57} x2={xUb} y2={138} stroke="#16a34a" strokeWidth={2.2} />

          <rect x={182} y={84} width={96} height={24} rx={12} className="fill-surface stroke-line" strokeWidth={1.2} />
          <text x={230} y={100} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-ink">
            {crossPaired ? "Cross-Paired!" : "Matched Pairs"}
          </text>

          {/* Result interval bar */}
          <line x1={36} y1={144} x2={424} y2={144} className="stroke-ink-2" strokeWidth={1.5} />
          <line x1={xLb} y1={144} x2={xUb} y2={144} stroke="#16a34a" strokeWidth={5} />
          <circle cx={xLb} cy={144} r={5.5} fill="#2563eb" />
          <circle cx={xUb} cy={144} r={5.5} fill="#ffffff" stroke="#16a34a" strokeWidth={2.5} />

          <text x={xLb} y={166} fontSize={11} fontWeight={800} textAnchor="middle" fill="#2563eb">
            LB = {fmt4(lbRes)}
          </text>
          <text x={xUb} y={166} fontSize={11} fontWeight={800} textAnchor="middle" fill="#15803d">
            UB = {fmt4(ubRes)}
          </text>

          {crossPaired ? (
            <g>
              <circle cx={xNaive} cy={144} r={4.5} fill="#dc2626" />
              <text x={xNaive} y={184} fontSize={10} fontWeight={700} textAnchor="middle" fill="#dc2626">
                Trap UB(a){opSym}UB(b) = {fmt4(naiveUb)} ❌
              </text>
            </g>
          ) : null}
        </svg>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label={`Lower Bound of a ${opSym} b`} value={fmt4(lbRes)} tone="brand" />
          <Readout label={`Upper Bound of a ${opSym} b`} value={fmt4(ubRes)} tone="good" />
          <Readout label="Suitable Accuracy" value={suit} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

function gcdInt(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

function ConjugateSurdVisualiser() {
  const [pNum, setPNum] = useState(12);
  const [a, setA] = useState(3);
  const [b, setB] = useState(1);
  const [c, setC] = useState<"2" | "3" | "5" | "7">("3");
  const [sign, setSign] = useState<"+" | "-">("+");

  const cVal = Number(c);
  const bSqC = b * b * cVal;
  const den = a * a - bSqC;
  const invalidDen = den === 0;
  const conjSign = sign === "+" ? "-" : "+";
  const bStr = b === 1 ? "" : `${b}`;

  const rawInt = pNum * a;
  const rawSurd = sign === "+" ? -pNum * b : pNum * b;
  const g = invalidDen ? 1 : gcdInt(gcdInt(rawInt, rawSurd), den);
  const sDen = den < 0 ? -den / g : den / g;
  const flip = den < 0 ? -1 : 1;
  const sInt = (flip * rawInt) / g;
  const sSurd = (flip * rawSurd) / g;

  const numText = `${sInt} ${sSurd < 0 ? "-" : "+"} ${Math.abs(sSurd) === 1 ? "" : `${Math.abs(sSurd)}*`}sqrt(${cVal})`;
  const finalMarkup = invalidDen ? "0" : sDen === 1 ? numText : `(${numText}) / ${sDen}`;

  return (
    <WidgetFrame
      title="Conjugate Denominator Difference-of-Squares Lab"
      tryThis={[
        "Keep `a = 3, b = 1, c = 3` and step `p` to `6` or `12` — see when the rationalised denominator `9 − 3 = 6` cancels cleanly!",
        "Try `a = 3, b = 2, c = 2` so `(3 + 2√2)(3 − 2√2) = 9 − 8 = 1` — the denominator vanishes completely!",
        "Notice in the 2×2 grid how the two yellow cross-cells **always** have opposite signs and sum to `0`.",
      ]}
      caption={
        invalidDen ? (
          <>Here <M>{`a^2 = b^2 c = ${a * a}`}</M>, making the original denominator zero — step <em>a</em> or <em>b</em> away!</>
        ) : (
          <>
            Multiplying top and bottom of <M>{`${pNum} / (${a} ${sign} ${bStr}sqrt(${cVal}))`}</M> by its conjugate{" "}
            <M>{`(${a} ${conjSign} ${bStr}sqrt(${cVal}))`}</M> turns the denominator into{" "}
            <M>{`${a}^2 - (${bStr}sqrt(${cVal}))^2 = ${a * a} - ${bSqC} = ${den}`}</M>, simplifying to <M>{finalMarkup}</M>.
          </>
        )
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stepper label="Top p" value={pNum} min={1} max={24} onChange={setPNum} />
          <Stepper label="Integer a" value={a} min={1} max={7} onChange={setA} />
          <Stepper label="Coeff b" value={b} min={1} max={4} onChange={setB} />
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase text-ink-2">Sign &amp; Surd √c</div>
            <div className="flex flex-wrap gap-1.5">
              <Segmented<"+" | "-">
                label="Denominator sign"
                value={sign}
                onChange={setSign}
                options={[
                  { value: "+", label: "+" },
                  { value: "-", label: "−" },
                ]}
              />
              <Segmented<"2" | "3" | "5" | "7">
                label="Surd c"
                value={c}
                onChange={setC}
                options={[
                  { value: "2", label: "√2" },
                  { value: "3", label: "√3" },
                  { value: "5", label: "√5" },
                  { value: "7", label: "√7" },
                ]}
              />
            </div>
          </div>
        </div>

        <svg
          viewBox="0 0 460 158"
          className="h-auto w-full rounded-xl border border-line bg-surface-2"
          role="img"
          aria-label={`2 by 2 conjugate grid for (${a} ${sign} ${bStr}√${cVal})(${a} ${conjSign} ${bStr}√${cVal}) = ${den}`}
        >
          <text x={135} y={22} fontSize={13} fontWeight={800} textAnchor="middle" className="fill-ink">
            {a}
          </text>
          <text x={255} y={22} fontSize={13} fontWeight={800} textAnchor="middle" fill="#dc2626">
            {conjSign} {bStr}√{cVal}
          </text>
          <text x={68} y={62} fontSize={13} fontWeight={800} textAnchor="end" className="fill-ink">
            {a}
          </text>
          <text x={68} y={114} fontSize={13} fontWeight={800} textAnchor="end" fill="#2563eb">
            {sign} {bStr}√{cVal}
          </text>

          <rect x={78} y={32} width={116} height={50} fill="#dbeafe" stroke="#334155" strokeWidth={1.4} />
          <text x={136} y={62} fontSize={14} fontWeight={800} textAnchor="middle" fill="#1e3a8a">
            {a}² = {a * a}
          </text>

          <rect x={194} y={32} width={120} height={50} fill="#fef3c7" stroke="#334155" strokeWidth={1.4} />
          <text x={254} y={62} fontSize={13} fontWeight={700} textAnchor="middle" fill="#92400e">
            {conjSign} {a * b}√{cVal}
          </text>
          <line x1={216} y1={58} x2={292} y2={58} stroke="#dc2626" strokeWidth={2} />

          <rect x={78} y={82} width={116} height={52} fill="#fef3c7" stroke="#334155" strokeWidth={1.4} />
          <text x={136} y={112} fontSize={13} fontWeight={700} textAnchor="middle" fill="#92400e">
            {sign} {a * b}√{cVal}
          </text>
          <line x1={98} y1={108} x2={174} y2={108} stroke="#dc2626" strokeWidth={2} />

          <rect x={194} y={82} width={120} height={52} fill="#dcfce7" stroke="#334155" strokeWidth={1.4} />
          <text x={254} y={106} fontSize={12} fontWeight={700} textAnchor="middle" fill="#14532d">
            − ({bStr}√{cVal})²
          </text>
          <text x={254} y={124} fontSize={14} fontWeight={800} textAnchor="middle" fill="#14532d">
            = −{bSqC}
          </text>

          <text x={386} y={58} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-ink-2">
            Surds cancel to 0!
          </text>
          <text x={386} y={84} fontSize={12} fontWeight={800} textAnchor="middle" className="fill-ink">
            Denom = {a * a} − {bSqC}
          </text>
          <text x={386} y={110} fontSize={16} fontWeight={800} textAnchor="middle" fill={invalidDen ? "#dc2626" : "#15803d"}>
            = {den}
          </text>
        </svg>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Original Fraction" value={<M>{`${pNum} / (${a} ${sign} ${bStr}sqrt(${cVal}))`}</M>} tone="ink" />
          <Readout label="Rational Denominator" value={den} tone={invalidDen ? "bad" : "brand"} />
          <Readout label="Simplified Surd Form" value={invalidDen ? "Undefined (÷0)" : <M>{finalMarkup}</M>} tone={invalidDen ? "bad" : "good"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "bounds-interval-explorer",
    title: "Upper & Lower Bounds Cross-Pairing Explorer",
    blurb: "See why subtracting and dividing cross-pair UB with LB — and test suitable degree of accuracy live.",
    Component: BoundsIntervalExplorer,
  },
  {
    id: "conjugate-surd-visualiser",
    title: "Conjugate Denominator Difference-of-Squares Lab",
    blurb: "Watch conjugate brackets wipe out denominator surds in a 2×2 Difference of Two Squares grid.",
    Component: ConjugateSurdVisualiser,
  },
];

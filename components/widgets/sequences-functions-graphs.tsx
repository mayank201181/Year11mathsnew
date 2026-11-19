"use client";
import { useState } from "react";
import { M, PlaneGrid, Readout, Segmented, Slider, Stepper, WidgetFrame, makePlane, type WidgetDef } from "./kit";

type BaseKind = "quadratic" | "cubic" | "reciprocal" | "sine";

const BASE_CURVES: Record<
  BaseKind,
  {
    label: string;
    formula: string;
    landmarkLabel: string;
    landmark: [number, number];
    fn: (x: number) => number;
  }
> = {
  quadratic: {
    label: "Quadratic",
    formula: "f(x) = (x - 1)^2 - 2",
    landmarkLabel: "Vertex",
    landmark: [1, -2],
    fn: (x) => (x - 1) * (x - 1) - 2,
  },
  cubic: {
    label: "Cubic",
    formula: "f(x) = 0.25x^3 - 0.75x",
    landmarkLabel: "Local min",
    landmark: [1, -0.5],
    fn: (x) => 0.25 * x * x * x - 0.75 * x,
  },
  reciprocal: {
    label: "Reciprocal",
    formula: "f(x) = 2/x",
    landmarkLabel: "Anchor",
    landmark: [1, 2],
    fn: (x) => (Math.abs(x) < 0.08 ? NaN : 2 / x),
  },
  sine: {
    label: "Sine wave",
    formula: "f(x) = 2 sin(90° x)",
    landmarkLabel: "Peak",
    landmark: [1, 2],
    fn: (x) => 2 * Math.sin((Math.PI / 2) * x),
  },
};

function fmtNum(n: number): string {
  const r = Math.round(n * 100) / 100;
  return r < 0 ? `−${Math.abs(r)}` : String(r);
}

function buildCurvePaths(
  evalY: (x: number) => number,
  plane: ReturnType<typeof makePlane>,
): string[] {
  const paths: string[] = [];
  let cur: string[] = [];
  const steps = 260;
  for (let i = 0; i <= steps; i++) {
    const x = plane.xMin + ((plane.xMax - plane.xMin) * i) / steps;
    const y = evalY(x);
    if (!Number.isFinite(y) || y < plane.yMin - 3 || y > plane.yMax + 3) {
      if (cur.length > 1) paths.push(cur.join(" "));
      cur = [];
      continue;
    }
    const cx = plane.px(x).toFixed(1);
    const cy = plane.py(y).toFixed(1);
    cur.push(`${cur.length === 0 ? "M" : "L"} ${cx} ${cy}`);
  }
  if (cur.length > 1) paths.push(cur.join(" "));
  return paths;
}

function GraphTransformationLab() {
  const [kind, setKind] = useState<BaseKind>("quadratic");
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [h, setH] = useState(0);
  const [k, setK] = useState(0);

  const base = BASE_CURVES[kind];
  const plane = makePlane({ width: 460, height: 270, xMin: -7, xMax: 7, yMin: -7, yMax: 7, pad: 26 });

  const origPaths = buildCurvePaths(base.fn, plane);
  const transPaths = buildCurvePaths((x) => a * base.fn(b * x + h) + k, plane);

  const [x0, y0] = base.landmark;
  const xNew = b !== 0 ? (x0 - h) / b : NaN;
  const yNew = a * y0 + k;

  const insideStr = (() => {
    const bPart = b === 1 ? "x" : b === -1 ? "-x" : `${b}x`;
    if (h === 0) return bPart;
    return `${bPart} ${h > 0 ? `+ ${h}` : `- ${Math.abs(h)}`}`;
  })();
  const aPrefix = a === 1 ? "" : a === -1 ? "-" : `${a}`;
  const kSuffix = k === 0 ? "" : k > 0 ? ` + ${k}` : ` - ${Math.abs(k)}`;
  const eqDisplay = `y = ${aPrefix}f(${insideStr})${kSuffix}`;

  const applyPreset = (na: number, nb: number, nh: number, nk: number) => {
    setA(na);
    setB(nb);
    setH(nh);
    setK(nk);
  };

  return (
    <WidgetFrame
      title="Graph Transformation Lab: Inside Opposite, Outside Obeys"
      tryThis={[
        "Set {{h = +3}} and watch why {{y = f(x + 3)}} drags the curve **left** by 3 units!",
        "Compare **−f(x)** ({{a = -1}}) vs **f(−x)** ({{b = -1}}) — which axis acts as the mirror each time?",
        "Set {{b = 2}} on the Sine wave and count how many peaks squeeze into the same horizontal width.",
      ]}
      caption={
        <div className="space-y-1">
          <div>
            Base curve: <M>{base.formula}</M> · Transformed curve: <M>{eqDisplay}</M>
          </div>
          <div className="text-ink-2">
            Solving inside <M>{`${insideStr} = ${x0}`}</M> gives <M>{`x = ${Math.round(xNew * 100) / 100}`}</M>; applying outside gives{" "}
            <M>{`y = ${a}(${y0}) ${k >= 0 ? `+ ${k}` : `- ${Math.abs(k)}`} = ${Math.round(yNew * 100) / 100}`}</M>.
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<BaseKind>
            label="Base curve"
            value={kind}
            onChange={setKind}
            options={[
              { value: "quadratic", label: "Quadratic" },
              { value: "cubic", label: "Cubic" },
              { value: "reciprocal", label: "Reciprocal 2/x" },
              { value: "sine", label: "Sine wave" },
            ]}
          />
          <div className="flex flex-wrap gap-1.5 text-xs">
            <button type="button" className="chip px-2.5 py-1 font-bold hover:bg-brand-soft hover:text-brand" onClick={() => applyPreset(1, 1, 0, 0)}>
              Reset
            </button>
            <button type="button" className="chip px-2.5 py-1 font-bold hover:bg-brand-soft hover:text-brand" onClick={() => applyPreset(1, 1, 3, 0)}>
              f(x + 3)
            </button>
            <button type="button" className="chip px-2.5 py-1 font-bold hover:bg-brand-soft hover:text-brand" onClick={() => applyPreset(-1, 1, 0, 0)}>
              −f(x)
            </button>
            <button type="button" className="chip px-2.5 py-1 font-bold hover:bg-brand-soft hover:text-brand" onClick={() => applyPreset(1, -1, 0, 0)}>
              f(−x)
            </button>
            <button type="button" className="chip px-2.5 py-1 font-bold hover:bg-brand-soft hover:text-brand" onClick={() => applyPreset(1, 2, 0, 0)}>
              f(2x)
            </button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label={<span>Outside stretch/flip <M>a</M> in <M>af(x)</M></span>}
            value={a}
            min={-3}
            max={3}
            step={0.5}
            onChange={(v) => setA(v === 0 ? (a > 0 ? -0.5 : 0.5) : v)}
            format={fmtNum}
          />
          <Slider
            label={<span>Inside stretch/flip <M>b</M> in <M>f(bx)</M></span>}
            value={b}
            min={-3}
            max={3}
            step={0.5}
            onChange={(v) => setB(v === 0 ? (b > 0 ? -0.5 : 0.5) : v)}
            format={fmtNum}
          />
          <Slider
            label={<span>Inside shift <M>h</M> in <M>f(x + h)</M></span>}
            value={h}
            min={-5}
            max={5}
            step={1}
            onChange={setH}
            format={(v) => (v > 0 ? `+${v}` : fmtNum(v))}
          />
          <Slider
            label={<span>Outside shift <M>k</M> in <M>f(x) + k</M></span>}
            value={k}
            min={-5}
            max={5}
            step={1}
            onChange={setK}
            format={(v) => (v > 0 ? `+${v}` : fmtNum(v))}
          />
        </div>

        <svg
          viewBox={`0 0 ${plane.width} ${plane.height}`}
          className="w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="Interactive coordinate plane comparing original y equals f of x against transformed curve"
        >
          <defs>
            <clipPath id="trans-plane-clip">
              <rect x={plane.pad} y={plane.pad} width={plane.width - 2 * plane.pad} height={plane.height - 2 * plane.pad} />
            </clipPath>
          </defs>
          <PlaneGrid plane={plane} step={2} />
          <g clipPath="url(#trans-plane-clip)">
            {origPaths.map((d, i) => (
              <path key={`orig-${i}`} d={d} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 4" />
            ))}
            {transPaths.map((d, i) => (
              <path key={`tr-${i}`} d={d} fill="none" stroke="#6366f1" strokeWidth={3} />
            ))}
            {Number.isFinite(xNew) && xNew >= plane.xMin && xNew <= plane.xMax && yNew >= plane.yMin && yNew <= plane.yMax ? (
              <>
                <line
                  x1={plane.px(x0)}
                  y1={plane.py(y0)}
                  x2={plane.px(xNew)}
                  y2={plane.py(yNew)}
                  stroke="#ec4899"
                  strokeWidth={1.6}
                  strokeDasharray="3 3"
                />
                <circle cx={plane.px(xNew)} cy={plane.py(yNew)} r={5.5} fill="#ec4899" stroke="#ffffff" strokeWidth={1.5} />
              </>
            ) : null}
            <circle cx={plane.px(x0)} cy={plane.py(y0)} r={4.5} fill="#64748b" stroke="#ffffff" strokeWidth={1.5} />
          </g>
        </svg>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          <Readout label={`Original ${base.landmarkLabel} P`} value={`(${fmtNum(x0)}, ${fmtNum(y0)})`} tone="ink" />
          <Readout label={`Transformed P′`} value={`(${fmtNum(xNew)}, ${fmtNum(yNew)})`} tone="brand" />
          <Readout label="Equation" value={<M>{eqDisplay}</M>} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

function GaussSeriesExplorer() {
  const [a, setA] = useState(3);
  const [d, setD] = useState(2);
  const [n, setN] = useState(8);
  const [mode, setMode] = useState<"paired" | "single">("paired");

  const terms = Array.from({ length: n }, (_, i) => a + i * d);
  const last = terms[n - 1];
  const pairHeight = a + last;
  const sum = (n * pairHeight) / 2;

  const W = 460;
  const H = 210;
  const padX = 28;
  const baseLine = 176;
  const maxStack = Math.max(1, Math.abs(pairHeight), ...terms.map((t) => Math.abs(t)));
  const barAreaW = W - 2 * padX - 20;
  const gap = 4;
  const barW = Math.max(12, (barAreaW - gap * (n - 1)) / n);
  const scaleY = 128 / maxStack;

  return (
    <WidgetFrame
      title="Gauss Arithmetic Series Staircase (S_n)"
      tryThis={[
        "Set {{a = 1}}, {{d = 2}} (odd numbers) and toggle **Pair 2 × S_n** — why is {{S_n}} always equal to {{n^2}}?",
        "Try {{a = 1}}, {{d = 1}}, {{n = 10}} to see Gauss's classic rectangle of height {{1 + 10 = 11}}.",
        "Check that {{(n/2)(a + l)}} and {{(n/2)(2a + (n - 1)d)}} produce the exact same sum for every setting!",
      ]}
      caption={
        <div>
          First term <M>{`a = ${a}`}</M>, last term <M>{`l = u_{${n}} = ${a} + ${n - 1}(${d}) = ${last}`}</M>. Each vertical pair sums to{" "}
          <M>{`a + l = ${pairHeight}`}</M>, so <M>{`S_{${n}} = (${n}/2)(${pairHeight}) = ${sum}`}</M>.
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented<"paired" | "single">
            label="Display mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "paired", label: "Pair 2 × S_n (Gauss Rectangle)" },
              { value: "single", label: "Single Staircase S_n" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Stepper label={<span>First term <M>a</M></span>} value={a} min={1} max={15} onChange={setA} />
          <Stepper label={<span>Difference <M>d</M></span>} value={d} min={0} max={8} onChange={setD} />
          <Slider label={<span>Terms <M>n</M></span>} value={n} min={3} max={14} onChange={setN} />
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="Bar staircase showing n arithmetic terms stacked with a reversed copy to form an n by a plus l rectangle"
        >
          <line x1={padX - 6} x2={W - padX} y1={baseLine} y2={baseLine} className="stroke-ink-2" strokeWidth={1.5} />
          {terms.map((u, i) => {
            const x = padX + i * (barW + gap);
            const h1 = Math.max(2, u * scaleY);
            const rev = terms[n - 1 - i];
            const h2 = Math.max(2, rev * scaleY);
            return (
              <g key={i}>
                <rect x={x} y={baseLine - h1} width={barW} height={h1} rx={4} fill="#6366f1" />
                {barW >= 22 && h1 >= 14 ? (
                  <text x={x + barW / 2} y={baseLine - h1 / 2 + 4} fontSize={10} fontWeight={700} fill="#ffffff" textAnchor="middle">
                    {u}
                  </text>
                ) : null}
                {mode === "paired" ? (
                  <>
                    <rect x={x} y={baseLine - h1 - h2 - 2} width={barW} height={h2} rx={4} fill="#f59e0b" opacity={0.88} />
                    {barW >= 22 && h2 >= 14 ? (
                      <text
                        x={x + barW / 2}
                        y={baseLine - h1 - h2 / 2 + 2}
                        fontSize={10}
                        fontWeight={700}
                        fill="#78350f"
                        textAnchor="middle"
                      >
                        {rev}
                      </text>
                    ) : null}
                  </>
                ) : null}
                <text x={x + barW / 2} y={baseLine + 14} fontSize={9.5} className="fill-ink-2" textAnchor="middle">
                  u{i + 1}
                </text>
              </g>
            );
          })}
          {mode === "paired" ? (
            <text x={W / 2} y={22} fontSize={12} fontWeight={700} className="fill-ink" textAnchor="middle">
              {n} columns × ({a} + {last} = {pairHeight}) = {n * pairHeight} → halve for S_{n} = {sum}
            </text>
          ) : (
            <text x={W / 2} y={22} fontSize={12} fontWeight={700} className="fill-ink" textAnchor="middle">
              Single staircase sum S_{n} = {sum}
            </text>
          )}
        </svg>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label={`Last term u_${n}`} value={fmtNum(last)} tone="ink" />
          <Readout label="Pair sum (a + l)" value={fmtNum(pairHeight)} tone="ink" />
          <Readout label="Rectangle 2S_n" value={fmtNum(n * pairHeight)} tone="brand" />
          <Readout label={`Series sum S_${n}`} value={fmtNum(sum)} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "graph-transformation-lab",
    title: "Graph Transformation Lab",
    blurb: "Slide {{a}}, {{b}}, {{h}} and {{k}} in {{y = a f(bx + h) + k}} to see why inside changes act oppositely on {{x}} while outside changes act directly on {{y}}.",
    Component: GraphTransformationLab,
  },
  {
    id: "gauss-series-explorer",
    title: "Gauss Arithmetic Series Staircase",
    blurb: "Stack a reversed copy of an arithmetic series onto itself to build an {{n * (a + l)}} rectangle and see why {{S_n = (n/2)(2a + (n - 1)d)}}.",
    Component: GaussSeriesExplorer,
  },
];

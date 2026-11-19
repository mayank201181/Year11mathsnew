"use client";

import { useState } from "react";
import { M, makePlane, PlaneGrid, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type IneqOp = "<" | "<=" | ">" | ">=";

function QuadraticInequalityExplorer() {
  const [r1, setR1] = useState(-3);
  const [r2, setR2] = useState(4);
  const [aSign, setASign] = useState<"pos" | "neg">("pos");
  const [op, setOp] = useState<IneqOp>("<");

  const lo = Math.min(r1, r2);
  const hi = Math.max(r1, r2 === r1 ? r1 + 1 : r2);
  const a = aSign === "pos" ? 1 : -1;
  const inclusive = op === "<=" || op === ">=";
  const wantsAbove = op === ">" || op === ">=";

  // With a > 0: above (> 0) = two tails; below (< 0) = sandwich.
  // With a < 0: above (> 0) = arch between roots (sandwich); below (< 0) = two tails!
  const isSandwich = a > 0 ? !wantsAbove : wantsAbove;

  const bCoef = -a * (lo + hi);
  const cCoef = a * lo * hi;

  const plane = makePlane({ width: 460, height: 240, xMin: -7, xMax: 7, yMin: -14, yMax: 14, pad: 28 });

  const samples: string[] = [];
  for (let x = -7; x <= 7.001; x += 0.15) {
    const y = a * (x - lo) * (x - hi);
    const yc = Math.max(-15, Math.min(15, y));
    samples.push(`${samples.length === 0 ? "M" : "L"} ${plane.px(x).toFixed(1)} ${plane.py(yc).toFixed(1)}`);
  }

  const integersInside: number[] = [];
  for (let n = -6; n <= 6; n++) {
    const val = a * (n - lo) * (n - hi);
    const ok = op === "<" ? val < 0 : op === "<=" ? val <= 0 : op === ">" ? val > 0 : val >= 0;
    if (ok) integersInside.push(n);
  }

  const opDisp = op === "<=" ? "≤" : op === ">=" ? "≥" : op;
  const ltSym = inclusive ? "≤" : "<";
  const gtSym = inclusive ? "≥" : ">";
  const notation = isSandwich
    ? `${lo} ${ltSym} x ${ltSym} ${hi}`
    : `x ${ltSym} ${lo}  or  x ${gtSym} ${hi}`;

  const polyStr = `${a < 0 ? "−" : ""}x² ${bCoef === 0 ? "" : bCoef > 0 ? `+ ${bCoef === 1 ? "" : bCoef}x ` : `− ${Math.abs(bCoef) === 1 ? "" : Math.abs(bCoef)}x `}${cCoef === 0 ? "" : cCoef > 0 ? `+ ${cCoef}` : `− ${Math.abs(cCoef)}`}`.trim();

  return (
    <WidgetFrame
      title="Quadratic Inequality Parabola & Critical-Region Lab"
      tryThis={[
        "Keep {{a = +1}} and toggle between {{< 0}} and {{> 0}}: watch one connected sandwich split into two separate tails!",
        "Switch to {{-x^2}} ({{a = -1}}): see why multiplying by {{-1}} flips the inequality sign.",
        "Toggle {{<}} vs {{<=}} and watch the hollow/solid critical-value circles and integer count change.",
      ]}
      caption={
        <div className="space-y-1">
          <div>
            Inequality: <strong>{polyStr} {opDisp} 0</strong> · Critical values: <strong>x = {lo}</strong> and <strong>x = {hi}</strong>.
          </div>
          <div>
            {a < 0 ? (
              <span>
                Tip: Multiply by −1 first and <strong>flip {opDisp}</strong> so you read off a standard U-shaped parabola!{" "}
              </span>
            ) : null}
            Edexcel solution: <strong className="text-brand">{notation}</strong> ({isSandwich ? "one connected interval" : "two disjoint tails — use 'or'!"}).
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-[1fr_230px]">
        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 460 240"
            className="w-full h-auto"
            role="img"
            aria-label="Interactive parabola showing critical values and shaded solution intervals on the x-axis"
          >
            <defs>
              <clipPath id="qi-clip">
                <rect x={plane.px(-7)} y={plane.py(14)} width={plane.px(7) - plane.px(-7)} height={plane.py(-14) - plane.py(14)} />
              </clipPath>
            </defs>
            {/* Shaded x-zones */}
            {isSandwich ? (
              <rect
                x={plane.px(lo)}
                y={plane.py(14)}
                width={Math.max(0, plane.px(hi) - plane.px(lo))}
                height={plane.py(-14) - plane.py(14)}
                fill="rgba(37, 99, 235, 0.10)"
              />
            ) : (
              <>
                <rect
                  x={plane.px(-7)}
                  y={plane.py(14)}
                  width={Math.max(0, plane.px(lo) - plane.px(-7))}
                  height={plane.py(-14) - plane.py(14)}
                  fill="rgba(220, 38, 38, 0.10)"
                />
                <rect
                  x={plane.px(hi)}
                  y={plane.py(14)}
                  width={Math.max(0, plane.px(7) - plane.px(hi))}
                  height={plane.py(-14) - plane.py(14)}
                  fill="rgba(220, 38, 38, 0.10)"
                />
              </>
            )}
            <PlaneGrid plane={plane} step={1} labels={false} />
            {/* Axis tick labels every 2 units */}
            {[-6, -4, -2, 2, 4, 6].map((x) => (
              <text key={x} x={plane.px(x)} y={plane.py(0) + 14} fontSize={10} textAnchor="middle" className="fill-ink-2">
                {x}
              </text>
            ))}
            {/* Highlighted solution bar on x-axis */}
            {isSandwich ? (
              <line x1={plane.px(lo)} x2={plane.px(hi)} y1={plane.py(0)} y2={plane.py(0)} stroke="#2563eb" strokeWidth={5} />
            ) : (
              <>
                <line x1={plane.px(-7)} x2={plane.px(lo)} y1={plane.py(0)} y2={plane.py(0)} stroke="#dc2626" strokeWidth={5} />
                <line x1={plane.px(hi)} x2={plane.px(7)} y1={plane.py(0)} y2={plane.py(0)} stroke="#dc2626" strokeWidth={5} />
              </>
            )}
            {/* Integer solution dots */}
            {integersInside.map((n) => (
              <circle key={n} cx={plane.px(n)} cy={plane.py(0)} r={3.5} fill="#10b981" />
            ))}
            {/* Parabola curve */}
            <path d={samples.join(" ")} fill="none" className="stroke-ink" strokeWidth={2.5} clipPath="url(#qi-clip)" />
            {/* Critical value markers */}
            {[lo, hi].map((r) => (
              <circle
                key={r}
                cx={plane.px(r)}
                cy={plane.py(0)}
                r={5.5}
                fill={inclusive ? (isSandwich ? "#2563eb" : "#dc2626") : "#ffffff"}
                stroke={isSandwich ? "#2563eb" : "#dc2626"}
                strokeWidth={2.5}
              />
            ))}
          </svg>
        </div>

        <div className="space-y-3">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Shape of x² term</div>
            <Segmented
              label="Sign of x squared"
              value={aSign}
              onChange={setASign}
              options={[
                { value: "pos", label: "+x² (U-shape)" },
                { value: "neg", label: "−x² (∩-shape)" },
              ]}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Inequality sign</div>
            <Segmented
              label="Inequality operator"
              value={op}
              onChange={setOp}
              options={[
                { value: "<", label: "< 0" },
                { value: "<=", label: "≤ 0" },
                { value: ">", label: "> 0" },
                { value: ">=", label: "≥ 0" },
              ]}
            />
          </div>
          <Stepper
            label="Left root r₁"
            value={lo}
            min={-5}
            max={hi - 1}
            onChange={(v) => setR1(v)}
          />
          <Stepper
            label="Right root r₂"
            value={hi}
            min={lo + 1}
            max={6}
            onChange={(v) => setR2(v)}
          />
          <Readout label="Solution Set" value={notation} tone={isSandwich ? "brand" : "bad"} />
          <Readout
            label="Integers in [-6, 6]"
            value={integersInside.length ? integersInside.join(", ") : "None"}
            tone="good"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

function LineCircleIntersectionLab() {
  const [m, setM] = useState(0.75);
  const [c, setC] = useState(2.5);
  const R2 = 25; // Circle x^2 + y^2 = 25 (radius 5)

  // Substituting y = mx + c into x^2 + y^2 = 25:
  // (1 + m^2)x^2 + (2mc)x + (c^2 - 25) = 0
  const A = 1 + m * m;
  const B = 2 * m * c;
  const C = c * c - R2;
  const disc = +(B * B - 4 * A * C).toFixed(6);

  const plane = makePlane({ width: 320, height: 320, xMin: -7, xMax: 7, yMin: -7, yMax: 7, pad: 24 });
  const rPx = plane.px(5) - plane.px(0);

  let pts: Array<[number, number]> = [];
  if (Math.abs(disc) < 1e-6) {
    const x0 = -B / (2 * A);
    pts = [[x0, m * x0 + c]];
  } else if (disc > 0) {
    const s = Math.sqrt(disc);
    const x1 = (-B - s) / (2 * A);
    const x2 = (-B + s) / (2 * A);
    pts = [
      [x1, m * x1 + c],
      [x2, m * x2 + c],
    ];
  }

  const fmtCoord = ([x, y]: [number, number]) => `(${+x.toFixed(2)}, ${+y.toFixed(2)})`;
  const status = Math.abs(disc) < 1e-6 ? "Tangent (1 point)" : disc > 0 ? "Secant (2 points)" : "Misses (0 points)";
  const tone = Math.abs(disc) < 1e-6 ? "brand" : disc > 0 ? "good" : "bad";

  return (
    <WidgetFrame
      title="Line & Circle Simultaneous Intersection Lab"
      tryThis={[
        "Set gradient {{m = 0.75}} and slide {{c}} to {{6.25}}: watch {{Delta = b^2 - 4ac}} hit {{0}} as the line becomes an exact tangent at {{(-3, 4)}}!",
        "Set {{m = 0}} and {{c = -5}}: verify the horizontal tangent at {{(0, -5)}}.",
        "Push {{c}} past {{7}} so {{Delta < 0}} and confirm the line misses {{x^2 + y^2 = 25}} completely.",
      ]}
      caption={
        <div>
          Substituting <M>{`y = ${m}x ${c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`}`}</M> into <M>{"x^2 + y^2 = 25"}</M> gives{" "}
          <strong>
            {+A.toFixed(4)}x² {B >= 0 ? `+ ${+B.toFixed(2)}x` : `− ${+Math.abs(B).toFixed(2)}x`}{" "}
            {C >= 0 ? `+ ${+C.toFixed(2)}` : `− ${+Math.abs(C).toFixed(2)}`} = 0
          </strong>{" "}
          with discriminant <strong>Δ = {+disc.toFixed(2)}</strong>.
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-[320px_1fr] items-center">
        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2 mx-auto w-full max-w-[320px]">
          <svg
            viewBox="0 0 320 320"
            className="w-full h-auto"
            role="img"
            aria-label="Coordinate plane showing circle x squared plus y squared equals 25 and adjustable line y equals mx plus c"
          >
            <defs>
              <clipPath id="lc-clip">
                <rect x={plane.px(-7)} y={plane.py(7)} width={plane.px(7) - plane.px(-7)} height={plane.py(-7) - plane.py(7)} />
              </clipPath>
            </defs>
            <PlaneGrid plane={plane} step={1} labels={false} />
            {[-5, 5].map((v) => (
              <g key={v}>
                <text x={plane.px(v)} y={plane.py(0) + 13} fontSize={10} textAnchor="middle" className="fill-ink-2">
                  {v}
                </text>
                <text x={plane.px(0) - 6} y={plane.py(v) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">
                  {v}
                </text>
              </g>
            ))}
            <circle cx={plane.px(0)} cy={plane.py(0)} r={rPx} fill="rgba(124, 58, 237, 0.07)" stroke="#7c3aed" strokeWidth={2.5} />
            <line
              x1={plane.px(-7.5)}
              y1={plane.py(m * -7.5 + c)}
              x2={plane.px(7.5)}
              y2={plane.py(m * 7.5 + c)}
              stroke={Math.abs(disc) < 1e-6 ? "#2563eb" : disc > 0 ? "#059669" : "#dc2626"}
              strokeWidth={2.5}
              clipPath="url(#lc-clip)"
            />
            {pts.map((pt, i) => (
              <g key={i}>
                <circle cx={plane.px(pt[0])} cy={plane.py(pt[1])} r={5} fill="#dc2626" stroke="#ffffff" strokeWidth={1.5} />
                <text
                  x={plane.px(pt[0]) + (pt[0] >= 0 ? 8 : -8)}
                  y={plane.py(pt[1]) - 8}
                  fontSize={10.5}
                  fontWeight="bold"
                  textAnchor={pt[0] >= 0 ? "start" : "end"}
                  className="fill-ink"
                >
                  {fmtCoord(pt)}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="space-y-4">
          <Slider
            label="Line gradient m"
            value={m}
            min={-2}
            max={2}
            step={0.25}
            onChange={setM}
            format={(v) => v.toFixed(2)}
          />
          <Slider
            label="y-intercept c"
            value={c}
            min={-8}
            max={8}
            step={0.25}
            onChange={setC}
            format={(v) => v.toFixed(2)}
          />
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="chip px-3 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
              onClick={() => {
                setM(0.75);
                setC(6.25);
              }}
            >
              Preset: Tangent at (−3, 4)
            </button>
            <button
              type="button"
              className="chip px-3 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
              onClick={() => {
                setM(1);
                setC(1);
              }}
            >
              Preset: Secant (3, 4) & (−4, −3)
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Readout label="Discriminant b² − 4ac" value={+disc.toFixed(2)} tone={tone} />
            <Readout label="Geometry" value={status} tone={tone} />
          </div>
          <Readout
            label="Paired (x, y) Solutions"
            value={pts.length === 0 ? "No real solutions" : pts.map(fmtCoord).join("  and  ")}
            tone="ink"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "quadratic-inequality-parabola",
    title: "Quadratic Inequality Parabola Lab",
    blurb: "See why {{< 0}} gives one connected interval while {{> 0}} splits into two outer tails — and what happens when {{x^2}} is negative.",
    Component: QuadraticInequalityExplorer,
  },
  {
    id: "line-circle-simultaneous-lab",
    title: "Line & Circle Simultaneous Intersection Lab",
    blurb: "Slide {{y = mx + c}} across {{x^2 + y^2 = 25}} to see {{b^2 - 4ac}} predict 2 intersections, tangency, or 0 intersections.",
    Component: LineCircleIntersectionLab,
  },
];

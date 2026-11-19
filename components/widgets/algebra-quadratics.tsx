"use client";

import { useId, useState } from "react";
import {
  M,
  PlaneGrid,
  Readout,
  Segmented,
  Slider,
  WidgetFrame,
  makePlane,
  type WidgetDef,
} from "./kit";

function fmtExpanded(a: number, b: number, c: number): string {
  const parts: string[] = [];
  parts.push(a === 1 ? "x^2" : a === -1 ? "-x^2" : `${a}x^2`);
  if (b !== 0) {
    const absB = Math.abs(b);
    const bTerm = absB === 1 ? "x" : `${absB}x`;
    parts.push(b < 0 ? `- ${bTerm}` : `+ ${bTerm}`);
  }
  if (c !== 0) {
    parts.push(c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`);
  }
  return parts.join(" ");
}

function fmtCompleted(a: number, p: number, q: number): string {
  const aPrefix = a === 1 ? "" : a === -1 ? "-" : `${a}`;
  const inside = p === 0 ? "x^2" : `(x ${p < 0 ? `- ${Math.abs(p)}` : `+ ${p}`})^2`;
  const tail = q === 0 ? "" : q < 0 ? ` - ${Math.abs(q)}` : ` + ${q}`;
  return `${aPrefix}${inside}${tail}`;
}

function CompletingSquareExplorer() {
  const clipId = useId();
  const [aStr, setAStr] = useState<"-2" | "-1" | "1" | "2" | "3">("2");
  const [p, setP] = useState<number>(-3);
  const [q, setQ] = useState<number>(-4);

  const a = Number(aStr);
  const vx = -p;
  const vy = q;
  const b = 2 * a * p;
  const c = a * p * p + q;

  const plane = makePlane({ width: 420, height: 270, xMin: -7, xMax: 7, yMin: -10, yMax: 10, pad: 28 });

  const pts: string[] = [];
  for (let i = 0; i <= 140; i++) {
    const x = -7 + (14 * i) / 140;
    const y = a * (x + p) * (x + p) + q;
    pts.push(`${plane.px(x).toFixed(1)},${plane.py(y).toFixed(1)}`);
  }

  const expandedStr = fmtExpanded(a, b, c);
  const completedStr = fmtCompleted(a, p, q);
  const hasRealRoots = -q / a >= 0;
  const rootDelta = hasRealRoots ? Math.sqrt(-q / a) : 0;

  return (
    <WidgetFrame
      title="Completing the Square & Turning Point Explorer"
      tryThis={[
        "Set a = 2, p = −3, q = −4: confirm 2(x − 3)^2 − 4 expands to {{2x^2 - 12x + 14}} with minimum (3, −4).",
        "Flip a to −2: watch the parabola invert so the exact same vertex (−p, q) becomes a MAXIMUM!",
        "Move p while watching the red dashed axis of symmetry x = −p: why does +p shift the graph LEFT?",
      ]}
      caption={
        <span>
          Expanded form <M>{`y = ${expandedStr}`}</M> hides the vertex, whereas completed-square form{" "}
          <M>{`y = ${completedStr}`}</M> immediately reveals a{" "}
          <strong>{a > 0 ? "minimum" : "maximum"}</strong> value of{" "}
          <strong>{vy < 0 ? `−${Math.abs(vy)}` : vy}</strong> when{" "}
          <M>{`x = ${vx}`}</M> (because <M>{`(x ${p === 0 ? "" : p < 0 ? `- ${Math.abs(p)}` : `+ ${p}`})^2 >= 0`}</M>).
        </span>
      }
    >
      <div className="grid gap-4 md:grid-cols-[1fr_1.25fr]">
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-ink-2">
              Leading stretch <M>{"a"}</M>
            </div>
            <Segmented
              label="Coefficient a"
              value={aStr}
              onChange={setAStr}
              options={[
                { value: "-2", label: "−2" },
                { value: "-1", label: "−1" },
                { value: "1", label: "+1" },
                { value: "2", label: "+2" },
                { value: "3", label: "+3" },
              ]}
            />
          </div>

          <Slider
            label={<span>Inside constant <M>{"p"}</M> in <M>{"(x + p)^2"}</M></span>}
            value={p}
            min={-5}
            max={5}
            step={1}
            onChange={setP}
            format={(v) => (v > 0 ? `+${v}` : v < 0 ? `−${Math.abs(v)}` : "0")}
          />

          <Slider
            label={<span>Outside constant <M>{"q"}</M></span>}
            value={q}
            min={-8}
            max={8}
            step={1}
            onChange={setQ}
            format={(v) => (v > 0 ? `+${v}` : v < 0 ? `−${Math.abs(v)}` : "0")}
          />

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Readout
              label={a > 0 ? "Minimum Vertex" : "Maximum Vertex"}
              value={`(${vx < 0 ? `−${Math.abs(vx)}` : vx}, ${vy < 0 ? `−${Math.abs(vy)}` : vy})`}
              tone={a > 0 ? "brand" : "good"}
            />
            <Readout
              label="Line of Symmetry"
              value={<M>{`x = ${vx}`}</M>}
              tone="ink"
            />
          </div>

          <div className="rounded-xl border border-line bg-surface p-2.5 text-xs space-y-1">
            <div>
              <span className="font-bold text-ink-2">Completed square: </span>
              <M>{`y = ${completedStr}`}</M>
            </div>
            <div>
              <span className="font-bold text-ink-2">Expanded form: </span>
              <M>{`y = ${expandedStr}`}</M>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox={`0 0 ${plane.width} ${plane.height}`}
            className="w-full h-auto"
            role="img"
            aria-label={`Coordinate plane plotting y = ${completedStr} with vertex at (${vx}, ${vy})`}
          >
            <defs>
              <clipPath id={clipId}>
                <rect
                  x={plane.pad}
                  y={plane.pad}
                  width={plane.width - 2 * plane.pad}
                  height={plane.height - 2 * plane.pad}
                />
              </clipPath>
            </defs>

            <PlaneGrid plane={plane} step={2} />

            {/* Axis of symmetry x = -p */}
            <line
              x1={plane.px(vx)}
              x2={plane.px(vx)}
              y1={plane.pad}
              y2={plane.height - plane.pad}
              stroke="#dc2626"
              strokeWidth={1.6}
              strokeDasharray="5,4"
            />

            {/* Clipped parabola */}
            <g clipPath={`url(#${clipId})`}>
              <polyline
                points={pts.join(" ")}
                fill="none"
                stroke="#2563eb"
                strokeWidth={2.8}
                strokeLinejoin="round"
              />
              {hasRealRoots && rootDelta > 1e-6 ? (
                <>
                  <circle cx={plane.px(vx - rootDelta)} cy={plane.py(0)} r={3.5} fill="#0f766e" />
                  <circle cx={plane.px(vx + rootDelta)} cy={plane.py(0)} r={3.5} fill="#0f766e" />
                </>
              ) : null}
              {c >= -10 && c <= 10 ? (
                <circle cx={plane.px(0)} cy={plane.py(c)} r={3.5} fill="#7c3aed" />
              ) : null}
            </g>

            {/* Turning point */}
            <circle cx={plane.px(vx)} cy={plane.py(vy)} r={5.5} fill="#dc2626" stroke="#ffffff" strokeWidth={1.5} />
            <text
              x={Math.min(plane.width - 90, Math.max(40, plane.px(vx) + 8))}
              y={a > 0 ? Math.min(plane.height - 10, plane.py(vy) + 15) : Math.max(18, plane.py(vy) - 9)}
              fontSize={11}
              fontWeight="bold"
              fill="#dc2626"
            >
              ({vx}, {vy})
            </text>
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

interface FractionCase {
  id: "dots" | "nonmonic" | "reversed";
  label: string;
  rawTop: string;
  rawBot: string;
  facTopLeft: string;
  facShared: string;
  facBotLeft: string;
  simplified: string;
  illegalResult: string;
  illegalDesc: string;
  evalOriginal: (x: number) => { top: number; bot: number };
  evalSimplified: (x: number) => { top: number; bot: number };
  evalIllegal: (x: number) => { top: number; bot: number };
}

const CASES: FractionCase[] = [
  {
    id: "dots",
    label: "(x² + 5x + 6) / (x² − 4)",
    rawTop: "x² + 5x + 6",
    rawBot: "x² − 4",
    facTopLeft: "(x + 3)",
    facShared: "(x + 2)",
    facBotLeft: "(x − 2)",
    simplified: "(x + 3) / (x − 2)",
    illegalResult: "(5x + 6) / (−4)",
    illegalDesc: "Crossing out x² across + and −",
    evalOriginal: (x) => ({ top: x * x + 5 * x + 6, bot: x * x - 4 }),
    evalSimplified: (x) => ({ top: x + 3, bot: x - 2 }),
    evalIllegal: (x) => ({ top: 5 * x + 6, bot: -4 }),
  },
  {
    id: "nonmonic",
    label: "(2x² + 5x − 3) / (x² − 9)",
    rawTop: "2x² + 5x − 3",
    rawBot: "x² − 9",
    facTopLeft: "(2x − 1)",
    facShared: "(x + 3)",
    facBotLeft: "(x − 3)",
    simplified: "(2x − 1) / (x − 3)",
    illegalResult: "(2 + 5x − 1) / (−3)",
    illegalDesc: "Crossing out x² and dividing −3 by 9",
    evalOriginal: (x) => ({ top: 2 * x * x + 5 * x - 3, bot: x * x - 9 }),
    evalSimplified: (x) => ({ top: 2 * x - 1, bot: x - 3 }),
    evalIllegal: (x) => ({ top: 5 * x + 1, bot: -3 }),
  },
  {
    id: "reversed",
    label: "(12 − 4x) / (x² − x − 6)",
    rawTop: "12 − 4x",
    rawBot: "x² − x − 6",
    facTopLeft: "−4",
    facShared: "(x − 3)",
    facBotLeft: "(x + 2)",
    simplified: "−4 / (x + 2)",
    illegalResult: "4 / (x + 2)",
    illegalDesc: "Cancelling (3 − x) with (x − 3) without −1",
    evalOriginal: (x) => ({ top: 12 - 4 * x, bot: x * x - x - 6 }),
    evalSimplified: (x) => ({ top: -4, bot: x + 2 }),
    evalIllegal: (x) => ({ top: 4, bot: x + 2 }),
  },
];

function AlgebraicFractionCanceller() {
  const [caseId, setCaseId] = useState<FractionCase["id"]>("dots");
  const [mode, setMode] = useState<"legal" | "illegal">("legal");
  const [x, setX] = useState<number>(4);

  const cur = CASES.find((c) => c.id === caseId) ?? CASES[0];
  const orig = cur.evalOriginal(x);
  const simp = cur.evalSimplified(x);
  const bad = cur.evalIllegal(x);

  const origZero = orig.bot === 0;
  const origVal = origZero ? null : orig.top / orig.bot;
  const testVal =
    mode === "legal"
      ? simp.bot === 0
        ? null
        : simp.top / simp.bot
      : bad.bot === 0
        ? null
        : bad.top / bad.bot;

  const fmtVal = (v: number | null) =>
    v === null ? "Excluded (÷ 0)" : Number.isInteger(v) ? String(v) : v.toFixed(2).replace(/^-/, "−");

  return (
    <WidgetFrame
      title="Algebraic Fraction Factor-Canceller Lab"
      tryThis={[
        "Switch between '✓ Factorise First' and '✗ Illegal Shortcut', then drag x across −4 to 6 to test whether the values match!",
        "Try the third fraction (12 − 4x)/(x² − x − 6): see why 12 − 4x = −4(x − 3) flips the sign to −4/(x + 2).",
        "Slide x onto an excluded root (like x = 2 or x = −2) to see why denominator roots are barred.",
      ]}
      caption={
        mode === "legal" ? (
          <span>
            Factorising turns sums into a <strong>product of bracket factors</strong>:{" "}
            <strong>{cur.facTopLeft}{cur.facShared}</strong> over{" "}
            <strong>{cur.facBotLeft}{cur.facShared}</strong>. Cancelling{" "}
            <strong>{cur.facShared}</strong> divides top and bottom by the exact same factor, so{" "}
            <strong>{cur.simplified}</strong> matches the original fraction at every valid <M>{"x"}</M>!
          </span>
        ) : (
          <span>
            <strong>Trap alert!</strong> {cur.illegalDesc} gives <strong>{cur.illegalResult}</strong>, which evaluates to{" "}
            <strong>{fmtVal(testVal)}</strong> at <M>{`x = ${x}`}</M> instead of the true value{" "}
            <strong>{fmtVal(origVal)}</strong>. Never cancel across <M>{"+"}</M> or <M>{"-"}</M>!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Choose algebraic fraction"
            value={caseId}
            onChange={setCaseId}
            options={CASES.map((c) => ({ value: c.id, label: c.label }))}
          />
          <Segmented
            label="Cancellation method"
            value={mode}
            onChange={setMode}
            options={[
              { value: "legal", label: "✓ Factorise First" },
              { value: "illegal", label: "✗ Illegal Shortcut" },
            ]}
          />
        </div>

        <svg
          viewBox="0 0 480 135"
          className="w-full h-auto rounded-xl border border-line bg-surface"
          role="img"
          aria-label={mode === "legal" ? `Valid factorisation cancelling ${cur.facShared}` : `Invalid cancellation giving ${cur.illegalResult}`}
        >
          {/* Step 1: Original */}
          <rect x={12} y={20} width={135} height={95} rx={10} fill="#f8fafc" stroke="#cbd5e1" />
          <text x={80} y={38} fontSize={10} fontWeight="bold" fill="#64748b" textAnchor="middle">ORIGINAL</text>
          <text x={80} y={62} fontSize={13} fontWeight="bold" fill="#0f172a" textAnchor="middle">{cur.rawTop}</text>
          <line x1={26} y1={71} x2={134} y2={71} stroke="#0f172a" strokeWidth={1.6} />
          <text x={80} y={92} fontSize={13} fontWeight="bold" fill="#0f172a" textAnchor="middle">{cur.rawBot}</text>

          <text x={161} y={73} fontSize={18} fontWeight="bold" fill="#64748b" textAnchor="middle">→</text>

          {/* Step 2: Working */}
          <rect
            x={175}
            y={20}
            width={145}
            height={95}
            rx={10}
            fill={mode === "legal" ? "#f0fdf4" : "#fef2f2"}
            stroke={mode === "legal" ? "#86efac" : "#fca5a5"}
          />
          <text
            x={247}
            y={38}
            fontSize={10}
            fontWeight="bold"
            fill={mode === "legal" ? "#15803d" : "#b91c1c"}
            textAnchor="middle"
          >
            {mode === "legal" ? "FACTORISE & CANCEL" : "ILLEGAL SHORTCUT"}
          </text>
          {mode === "legal" ? (
            <>
              <text x={247} y={62} fontSize={12} fontWeight="bold" fill="#0f172a" textAnchor="middle">
                {cur.facTopLeft} {cur.facShared}
              </text>
              <line x1={190} y1={71} x2={305} y2={71} stroke="#0f172a" strokeWidth={1.6} />
              <text x={247} y={92} fontSize={12} fontWeight="bold" fill="#0f172a" textAnchor="middle">
                {cur.facBotLeft} {cur.facShared}
              </text>
              <line x1={252} y1={50} x2={296} y2={66} stroke="#16a34a" strokeWidth={2.2} />
              <line x1={252} y1={80} x2={296} y2={96} stroke="#16a34a" strokeWidth={2.2} />
            </>
          ) : (
            <>
              <text x={247} y={62} fontSize={12} fontWeight="bold" fill="#7f1d1d" textAnchor="middle">{cur.rawTop}</text>
              <line x1={190} y1={71} x2={305} y2={71} stroke="#7f1d1d" strokeWidth={1.6} />
              <text x={247} y={92} fontSize={12} fontWeight="bold" fill="#7f1d1d" textAnchor="middle">{cur.rawBot}</text>
              <line x1={202} y1={49} x2={232} y2={66} stroke="#dc2626" strokeWidth={2.4} />
              <line x1={212} y1={79} x2={242} y2={96} stroke="#dc2626" strokeWidth={2.4} />
            </>
          )}

          <text x={334} y={73} fontSize={18} fontWeight="bold" fill="#64748b" textAnchor="middle">=</text>

          {/* Step 3: Result */}
          <rect
            x={348}
            y={20}
            width={120}
            height={95}
            rx={10}
            fill={mode === "legal" ? "#eff6ff" : "#fff1f2"}
            stroke={mode === "legal" ? "#93c5fd" : "#fda4af"}
          />
          <text
            x={408}
            y={38}
            fontSize={10}
            fontWeight="bold"
            fill={mode === "legal" ? "#1d4ed8" : "#be123c"}
            textAnchor="middle"
          >
            {mode === "legal" ? "EQUIVALENT ✓" : "NOT EQUAL ✗"}
          </text>
          <text
            x={408}
            y={75}
            fontSize={12}
            fontWeight="bold"
            fill={mode === "legal" ? "#1e3a8a" : "#9f1239"}
            textAnchor="middle"
          >
            {mode === "legal" ? cur.simplified : cur.illegalResult}
          </text>
        </svg>

        <Slider
          label={<span>Numerical sanity-check value <M>{"x"}</M></span>}
          value={x}
          min={-5}
          max={6}
          step={1}
          onChange={setX}
          format={(v) => (v < 0 ? `−${Math.abs(v)}` : String(v))}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Readout
            label={`Original at x = ${x < 0 ? `−${Math.abs(x)}` : x}`}
            value={origZero ? `${orig.top} / 0 (excl.)` : `${fmtVal(origVal)} (${orig.top}/${orig.bot})`}
            tone="ink"
          />
          <Readout
            label={mode === "legal" ? "Simplified value" : "Illegal shortcut value"}
            value={fmtVal(testVal)}
            tone={origZero ? "ink" : mode === "legal" ? "good" : "bad"}
          />
          <Readout
            label="Verdict"
            value={
              origZero
                ? `x = ${x < 0 ? `−${Math.abs(x)}` : x} excluded`
                : origVal !== null && testVal !== null && Math.abs(origVal - testVal) < 1e-9
                  ? "Exact match ✓"
                  : "Mismatch ✗"
            }
            tone={origZero ? "ink" : mode === "legal" ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "completing-the-square-explorer",
    title: "Completing the Square & Vertex Explorer",
    blurb: "Drag a, p and q in y = a(x + p)² + q to see how completed-square form locks in the turning point (−p, q) and axis of symmetry.",
    Component: CompletingSquareExplorer,
  },
  {
    id: "algebraic-fraction-canceller",
    title: "Algebraic Fraction Factor-Canceller Lab",
    blurb: "Compare illegal term-cancelling across +/− against factorising first, with a live x-value numerical verifier.",
    Component: AlgebraicFractionCanceller,
  },
];

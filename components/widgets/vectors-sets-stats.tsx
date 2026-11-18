"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

function simpFrac(n: number, d: number): string {
  if (d === 0) return "0";
  if (n === 0) return "0";
  const g = gcd(n, d);
  return `${n / g}/${d / g}`;
}

function HistogramDensityExplorer() {
  const [f1, setF1] = useState(20); // 0 <= x < 10 (width 10)
  const [f2, setF2] = useState(25); // 10 <= x < 15 (width 5)
  const [f3, setF3] = useState(45); // 15 <= x < 30 (width 15)
  const [f4, setF4] = useState(20); // 30 <= x < 50 (width 20)
  const [mode, setMode] = useState<"fd" | "raw">("fd");
  const [cut, setCut] = useState(20);

  const classes = [
    { a: 0, b: 10, f: f1, fill: "#93c5fd", stroke: "#1d4ed8" },
    { a: 10, b: 15, f: f2, fill: "#fde68a", stroke: "#b45309" },
    { a: 15, b: 30, f: f3, fill: "#a7f3d0", stroke: "#047857" },
    { a: 30, b: 50, f: f4, fill: "#ddd6fe", stroke: "#6d28d9" },
  ].map((c) => {
    const w = c.b - c.a;
    const fd = c.f / w;
    return { ...c, w, fd };
  });

  const totalN = f1 + f2 + f3 + f4;
  const estAboveCut = classes.reduce((acc, c) => {
    if (cut >= c.b) return acc;
    if (cut <= c.a) return acc + c.f;
    return acc + ((c.b - cut) / c.w) * c.f;
  }, 0);

  const maxVal =
    mode === "fd"
      ? Math.max(6, ...classes.map((c) => c.fd * 1.15))
      : Math.max(55, ...classes.map((c) => c.f * 1.15));

  const W = 500;
  const H = 240;
  const left = 58;
  const right = 472;
  const top = 22;
  const bot = 198;
  const px = (x: number) => left + (x / 50) * (right - left);
  const py = (v: number) => bot - (v / maxVal) * (bot - top);

  return (
    <WidgetFrame
      title="Unequal-Width Histogram & Frequency Density Lab"
      tryThis={[
        "Compare 0–10 (f = 20) and 30–50 (f = 20) in **Raw Frequency ❌** mode vs **Frequency Density ✅** mode — why does 30–50 look twice as big in Raw mode?",
        "Slide the threshold **x ≥ k** to 20 and verify how the shaded bar area splits 15–30 proportionally.",
      ]}
      caption={
        mode === "fd" ? (
          <span>
            <strong>Correct Histogram:</strong> Vertical height is <M>{"FD = f / width"}</M>, so every bar&apos;s{" "}
            <strong>area equals its frequency</strong>. Notice <M>{`x >= ${cut}`}</M> captures{" "}
            <strong>{estAboveCut.toFixed(1)}</strong> of the <strong>{totalN}</strong> items.
          </span>
        ) : (
          <span className="text-bad font-semibold">
            ❌ Classic Edexcel Trap! Plotting raw frequency across unequal widths makes wide intervals (like 30–50, width 20) look four times heavier per item than narrow intervals (like 10–15, width 5)!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Vertical Axis Mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "fd", label: "Frequency Density ✅" },
              { value: "raw", label: "Raw Frequency ❌ (Trap)" },
            ]}
          />
          <div className="grid grid-cols-3 gap-2">
            <Readout label="Total N" value={totalN} tone="ink" />
            <Readout label={`Est. x ≥ ${cut}`} value={estAboveCut.toFixed(1)} tone="brand" />
            <Readout
              label={`P(x ≥ ${cut})`}
              value={totalN > 0 ? `${((estAboveCut / totalN) * 100).toFixed(1)}%` : "0%"}
              tone="good"
            />
          </div>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full rounded-xl border border-line bg-surface-2"
          role="img"
          aria-label="Interactive unequal-width histogram comparing frequency density and raw frequency"
        >
          {[0, 0.25, 0.5, 0.75, 1].map((fr) => {
            const val = fr * maxVal;
            const y = py(val);
            return (
              <g key={fr}>
                <line x1={left} x2={right} y1={y} y2={y} className="stroke-line" strokeDasharray="3,3" />
                <text x={left - 8} y={y + 4} textAnchor="end" fontSize={10} className="fill-ink-2">
                  {mode === "fd" ? val.toFixed(1) : Math.round(val)}
                </text>
              </g>
            );
          })}

          {classes.map((c) => {
            const hVal = mode === "fd" ? c.fd : c.f;
            const x = px(c.a);
            const bw = px(c.b) - px(c.a);
            const y = py(hVal);
            const bh = bot - y;
            const shadeStart = Math.max(c.a, cut);
            const hasShade = shadeStart < c.b && bh > 0;
            return (
              <g key={c.a}>
                <rect x={x} y={y} width={bw} height={bh} fill={c.fill} fillOpacity={0.55} stroke={c.stroke} strokeWidth={2} />
                {hasShade ? (
                  <rect
                    x={px(shadeStart)}
                    y={y}
                    width={px(c.b) - px(shadeStart)}
                    height={bh}
                    fill="#dc2626"
                    fillOpacity={0.28}
                  />
                ) : null}
                {bh > 22 ? (
                  <text x={x + bw / 2} y={y + 15} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0f172a">
                    {mode === "fd" ? `FD=${c.fd.toFixed(1)}` : `f=${c.f}`}
                  </text>
                ) : null}
              </g>
            );
          })}

          <line x1={px(cut)} x2={px(cut)} y1={top} y2={bot} stroke="#dc2626" strokeWidth={2.2} strokeDasharray="5,3" />
          <text x={Math.min(right - 24, Math.max(left + 24, px(cut)))} y={top - 6} textAnchor="middle" fontSize={11} fontWeight={800} fill="#dc2626">
            x = {cut}
          </text>

          <line x1={left} x2={left} y1={top} y2={bot} className="stroke-ink" strokeWidth={1.8} />
          <line x1={left} x2={right} y1={bot} y2={bot} className="stroke-ink" strokeWidth={1.8} />

          {[0, 10, 15, 20, 30, 40, 50].map((tick) => (
            <text key={tick} x={px(tick)} y={bot + 15} textAnchor="middle" fontSize={10.5} fontWeight={600} className="fill-ink">
              {tick}
            </text>
          ))}
          <text x={(left + right) / 2} y={H - 6} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-ink-2">
            Continuous Value x (class boundaries 0, 10, 15, 30, 50)
          </text>
          <text x={16} y={(top + bot) / 2} transform={`rotate(-90 16 ${(top + bot) / 2})`} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-ink-2">
            {mode === "fd" ? "Frequency Density" : "Raw Frequency (Wrong!)"}
          </text>
        </svg>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label="0 ≤ x < 10 frequency (width 10)" value={f1} min={0} max={50} step={5} onChange={setF1} />
          <Slider label="10 ≤ x < 15 frequency (width 5)" value={f2} min={0} max={40} step={5} onChange={setF2} />
          <Slider label="15 ≤ x < 30 frequency (width 15)" value={f3} min={0} max={60} step={3} onChange={setF3} />
          <Slider label="30 ≤ x < 50 frequency (width 20)" value={f4} min={0} max={60} step={4} onChange={setF4} />
        </div>
        <Slider label="Threshold k for estimating count with x ≥ k" value={cut} min={0} max={50} step={1} onChange={setCut} />
      </div>
    </WidgetFrame>
  );
}

type VennRegionKey = "inter" | "union" | "aOnly" | "compA" | "outside";

function VennConditionalLab() {
  const [aOnly, setAOnly] = useState(12);
  const [both, setBoth] = useState(8);
  const [bOnly, setBOnly] = useState(14);
  const [outside, setOutside] = useState(6);
  const [region, setRegion] = useState<VennRegionKey>("inter");

  const nA = aOnly + both;
  const nB = bOnly + both;
  const total = aOnly + both + bOnly + outside;

  const regionCounts: Record<VennRegionKey, { label: string; count: number; inAOnly: boolean; inBoth: boolean; inBOnly: boolean; inOut: boolean }> = {
    inter: { label: "A ∩ B", count: both, inAOnly: false, inBoth: true, inBOnly: false, inOut: false },
    union: { label: "A ∪ B", count: aOnly + both + bOnly, inAOnly: true, inBoth: true, inBOnly: true, inOut: false },
    aOnly: { label: "A ∩ B′ (A only)", count: aOnly, inAOnly: true, inBoth: false, inBOnly: false, inOut: false },
    compA: { label: "A′ (not in A)", count: bOnly + outside, inAOnly: false, inBoth: false, inBOnly: true, inOut: true },
    outside: { label: "(A ∪ B)′ = A′ ∩ B′", count: outside, inAOnly: false, inBoth: false, inBOnly: false, inOut: true },
  };

  const sel = regionCounts[region];

  return (
    <WidgetFrame
      title="2-Set Venn Shading & Conditional Probability Lab"
      tryThis={[
        "Click **(A ∪ B)′** and **A′** to see why De Morgan's Law distinguishes outside-both from outside-A.",
        "Compare **P(A ∩ B)** (out of ξ) with **P(A | B)** (out of B only) as you slide n(B only)!",
      ]}
      caption={
        <span>
          Selected region <strong>{sel.label}</strong> holds <strong>{sel.count}</strong> out of{" "}
          <strong>{total}</strong> elements (<M>{simpFrac(sel.count, total)}</M>). Meanwhile, conditional probability{" "}
          <M>{"P(A | B) = n(A ∩ B) / n(B)"}</M> restricts the denominator strictly to the{" "}
          <strong>{nB}</strong> members of circle B, giving <M>{simpFrac(both, nB)}</M>.
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Highlight Set Expression"
          value={region}
          onChange={setRegion}
          options={[
            { value: "inter", label: "A ∩ B" },
            { value: "union", label: "A ∪ B" },
            { value: "aOnly", label: "A ∩ B′" },
            { value: "compA", label: "A′" },
            { value: "outside", label: "(A ∪ B)′" },
          ]}
        />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label={`n(${sel.label.split(" ")[0]})`} value={`${sel.count} / ${total}`} tone="brand" />
          <Readout label="n(A) , n(B)" value={`${nA} , ${nB}`} tone="ink" />
          <Readout label="P(A | B)" value={nB > 0 ? simpFrac(both, nB) : "—"} tone="good" />
          <Readout label="P(B | A)" value={nA > 0 ? simpFrac(both, nA) : "—"} tone="good" />
        </div>

        <svg
          viewBox="0 0 480 215"
          className="w-full rounded-xl border border-line bg-surface-2"
          role="img"
          aria-label="Interactive two-set Venn diagram with region highlighting and counts"
        >
          <defs>
            <clipPath id="clipCircleA">
              <circle cx="195" cy="110" r="68" />
            </clipPath>
            <mask id="maskOutA">
              <rect x="0" y="0" width="480" height="215" fill="white" />
              <circle cx="195" cy="110" r="68" fill="black" />
            </mask>
            <mask id="maskOutB">
              <rect x="0" y="0" width="480" height="215" fill="white" />
              <circle cx="285" cy="110" r="68" fill="black" />
            </mask>
            <mask id="maskOutBoth">
              <rect x="0" y="0" width="480" height="215" fill="white" />
              <circle cx="195" cy="110" r="68" fill="black" />
              <circle cx="285" cy="110" r="68" fill="black" />
            </mask>
          </defs>

          <rect x="14" y="12" width="452" height="191" rx="12" fill="#f8fafc" stroke="#334155" strokeWidth={2} />
          {sel.inOut ? (
            <rect x="14" y="12" width="452" height="191" rx="12" fill="#fde68a" fillOpacity={0.65} mask="url(#maskOutBoth)" />
          ) : null}
          {sel.inAOnly ? (
            <circle cx="195" cy="110" r="68" fill="#60a5fa" fillOpacity={0.55} mask="url(#maskOutB)" />
          ) : null}
          {sel.inBOnly ? (
            <circle cx="285" cy="110" r="68" fill="#34d399" fillOpacity={0.55} mask="url(#maskOutA)" />
          ) : null}
          {sel.inBoth ? (
            <circle cx="285" cy="110" r="68" fill="#f87171" fillOpacity={0.6} clipPath="url(#clipCircleA)" />
          ) : null}

          <circle cx="195" cy="110" r="68" fill="none" stroke="#1d4ed8" strokeWidth={2.4} />
          <circle cx="285" cy="110" r="68" fill="none" stroke="#047857" strokeWidth={2.4} />

          <text x="28" y="34" fontSize={14} fontWeight={800} fill="#0f172a">
            ξ (Total = {total})
          </text>
          <text x="145" y="54" fontSize={13} fontWeight={800} fill="#1d4ed8">
            A ({nA})
          </text>
          <text x="322" y="54" fontSize={13} fontWeight={800} fill="#047857">
            B ({nB})
          </text>

          <text x="155" y="115" textAnchor="middle" fontSize={18} fontWeight={800} fill="#0f172a">
            {aOnly}
          </text>
          <text x="240" y="115" textAnchor="middle" fontSize={18} fontWeight={800} fill="#b91c1c">
            {both}
          </text>
          <text x="325" y="115" textAnchor="middle" fontSize={18} fontWeight={800} fill="#0f172a">
            {bOnly}
          </text>
          <text x="424" y="180" textAnchor="middle" fontSize={16} fontWeight={800} fill="#334155">
            {outside}
          </text>
          <text x="424" y="195" textAnchor="middle" fontSize={10.5} fontWeight={600} fill="#64748b">
            outside
          </text>
        </svg>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label="n(A only) = n(A ∩ B′)" value={aOnly} min={0} max={30} onChange={setAOnly} />
          <Slider label="n(A ∩ B) — central overlap" value={both} min={1} max={25} onChange={setBoth} />
          <Slider label="n(B only) = n(A′ ∩ B)" value={bOnly} min={0} max={30} onChange={setBOnly} />
          <Slider label="n((A ∪ B)′) — outside both" value={outside} min={0} max={25} onChange={setOutside} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "histogram-density-lab",
    title: "Unequal-Width Histogram & Frequency Density Lab",
    blurb: "Toggle Frequency Density vs Raw Frequency and slice sub-intervals to see why bar area equals frequency.",
    Component: HistogramDensityExplorer,
  },
  {
    id: "venn-conditional-lab",
    title: "2-Set Venn Shading & Conditional Probability Lab",
    blurb: "Highlight set-notation regions and watch P(A | B) restrict the sample space to circle B in real time.",
    Component: VennConditionalLab,
  },
];

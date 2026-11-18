"use client";

import { useState } from "react";
import { M, PlaneGrid, Readout, Segmented, Slider, WidgetFrame, makePlane, type WidgetDef } from "./kit";

type CurveKey = "pos-cubic" | "neg-cubic" | "wide-cubic";

const CURVES: Record<
  CurveKey,
  {
    label: string;
    formula: string;
    f: (x: number) => number;
    df: (x: number) => number;
    d2f: (x: number) => number;
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    statX: number[];
  }
> = {
  "pos-cubic": {
    label: "x³ − 3x + 1",
    formula: "y = x^3 - 3x + 1",
    f: (x) => x ** 3 - 3 * x + 1,
    df: (x) => 3 * x ** 2 - 3,
    d2f: (x) => 6 * x,
    xMin: -2.6,
    xMax: 2.6,
    yMin: -4,
    yMax: 6,
    statX: [-1, 1],
  },
  "neg-cubic": {
    label: "3x − x³ + 1",
    formula: "y = 3x - x^3 + 1",
    f: (x) => 3 * x - x ** 3 + 1,
    df: (x) => 3 - 3 * x ** 2,
    d2f: (x) => -6 * x,
    xMin: -2.6,
    xMax: 2.6,
    yMin: -4,
    yMax: 6,
    statX: [-1, 1],
  },
  "wide-cubic": {
    label: "x³ − 3x² + 2",
    formula: "y = x^3 - 3x^2 + 2",
    f: (x) => x ** 3 - 3 * x ** 2 + 2,
    df: (x) => 3 * x ** 2 - 6 * x,
    d2f: (x) => 6 * x - 6,
    xMin: -1.6,
    xMax: 3.6,
    yMin: -4,
    yMax: 5,
    statX: [0, 2],
  },
};

function CubicTangentExplorer() {
  const [curveKey, setCurveKey] = useState<CurveKey>("pos-cubic");
  const [x0, setX0] = useState<number>(1.4);
  const [showNormal, setShowNormal] = useState<"both" | "tangent">("both");

  const c = CURVES[curveKey];
  const xClamped = Math.max(c.xMin + 0.2, Math.min(c.xMax - 0.2, x0));
  const y0 = c.f(xClamped);
  const mT = c.df(xClamped);
  const d2 = c.d2f(xClamped);

  const plane = makePlane({ width: 460, height: 270, xMin: c.xMin, xMax: c.xMax, yMin: c.yMin, yMax: c.yMax, pad: 28 });

  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const xv = c.xMin + ((c.xMax - c.xMin) * i) / 120;
    pts.push(`${i === 0 ? "M" : "L"} ${plane.px(xv).toFixed(1)} ${plane.py(c.f(xv)).toFixed(1)}`);
  }

  const tx1 = c.xMin;
  const tx2 = c.xMax;
  const ty1 = y0 + mT * (tx1 - xClamped);
  const ty2 = y0 + mT * (tx2 - xClamped);

  const isFlat = Math.abs(mT) < 0.04;
  const mN = isFlat ? null : -1 / mT;

  const stateBadge = isFlat
    ? d2 < -0.05
      ? "Stationary — Local Maximum (d²y/dx² < 0)"
      : d2 > 0.05
        ? "Stationary — Local Minimum (d²y/dx² > 0)"
        : "Stationary Point (dy/dx = 0)"
    : mT > 0
      ? "Increasing (dy/dx > 0)"
      : "Decreasing (dy/dx < 0)";

  return (
    <WidgetFrame
      title="Cubic Tangent, Normal & Stationary-Point Explorer"
      tryThis={[
        "Slide {{x_0}} to {{-1}} and {{1}} (or {{0}} and {{2}}): watch the tangent turn horizontal ({{dy/dx = 0}}) and check the sign of {{(d^2 y)/(dx^2)}}!",
        "Toggle the perpendicular normal and verify that {{m_T * m_N = -1}} everywhere {{m_T != 0}}.",
      ]}
      caption={
        <span>
          On <M>{c.formula}</M> at <M>{`x_0 = ${xClamped.toFixed(1)}`}</M>, point is{" "}
          <strong>
            ({xClamped.toFixed(1)}, {y0.toFixed(2)})
          </strong>
          : <strong>{stateBadge}</strong>.
          {mN !== null ? (
            <>
              {" "}
              Perpendicular normal gradient is <M>{`m_N = ${mN.toFixed(2)}`}</M>.
            </>
          ) : (
            <> Because the tangent is horizontal, the normal is the vertical line x = {xClamped.toFixed(1)}!</>
          )}
        </span>
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <Segmented
          label="Curve"
          value={curveKey}
          onChange={(k) => {
            setCurveKey(k);
            setX0(k === "wide-cubic" ? 1.2 : 1.4);
          }}
          options={[
            { value: "pos-cubic", label: "x³ − 3x + 1" },
            { value: "neg-cubic", label: "3x − x³ + 1" },
            { value: "wide-cubic", label: "x³ − 3x² + 2" },
          ]}
        />
        <Segmented
          label="Lines"
          value={showNormal}
          onChange={setShowNormal}
          options={[
            { value: "both", label: "Tangent + Normal" },
            { value: "tangent", label: "Tangent Only" },
          ]}
        />
      </div>

      <Slider
        label={
          <span>
            Point <M>{"x_0"}</M>
          </span>
        }
        value={xClamped}
        min={+(c.xMin + 0.2).toFixed(1)}
        max={+(c.xMax - 0.2).toFixed(1)}
        step={0.1}
        onChange={setX0}
        format={(v) => v.toFixed(1)}
      />

      <div className="mt-3 overflow-hidden rounded-xl border border-line bg-surface">
        <svg viewBox="0 0 460 270" className="w-full h-auto" role="img" aria-label="Interactive cubic curve with tangent and normal lines">
          <defs>
            <clipPath id="cubic-clip">
              <rect x={plane.pad} y={plane.pad} width={460 - 2 * plane.pad} height={270 - 2 * plane.pad} />
            </clipPath>
          </defs>
          <PlaneGrid plane={plane} step={1} />
          <g clipPath="url(#cubic-clip)">
            <path d={pts.join(" ")} fill="none" stroke="#2563eb" strokeWidth={2.8} />
            {c.statX.map((sx) => (
              <circle key={sx} cx={plane.px(sx)} cy={plane.py(c.f(sx))} r={4.5} fill="#f59e0b" stroke="#0f172a" strokeWidth={1.2} />
            ))}
            <line
              x1={plane.px(tx1)}
              y1={plane.py(ty1)}
              x2={plane.px(tx2)}
              y2={plane.py(ty2)}
              stroke="#dc2626"
              strokeWidth={2.2}
            />
            {showNormal === "both" ? (
              isFlat ? (
                <line
                  x1={plane.px(xClamped)}
                  y1={plane.py(c.yMin)}
                  x2={plane.px(xClamped)}
                  y2={plane.py(c.yMax)}
                  stroke="#9333ea"
                  strokeWidth={2}
                  strokeDasharray="6 4"
                />
              ) : (
                <line
                  x1={plane.px(tx1)}
                  y1={plane.py(y0 + mN! * (tx1 - xClamped))}
                  x2={plane.px(tx2)}
                  y2={plane.py(y0 + mN! * (tx2 - xClamped))}
                  stroke="#9333ea"
                  strokeWidth={2}
                  strokeDasharray="6 4"
                />
              )
            ) : null}
            <circle cx={plane.px(xClamped)} cy={plane.py(y0)} r={5.5} fill="#dc2626" stroke="#ffffff" strokeWidth={1.5} />
          </g>
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Readout label="y(x₀)" value={y0.toFixed(2)} tone="ink" />
        <Readout label="dy/dx (Tangent m_T)" value={mT.toFixed(2)} tone={isFlat ? "good" : "brand"} />
        <Readout label="Normal m_N" value={mN === null ? "Vertical" : mN.toFixed(2)} tone="ink" />
        <Readout label="d²y/dx²" value={d2.toFixed(2)} tone={d2 < -0.05 ? "bad" : d2 > 0.05 ? "good" : "ink"} />
      </div>
    </WidgetFrame>
  );
}

type MotionKey = "two-turns" | "one-turn";

function KinematicsTrackExplorer() {
  const [motion, setMotion] = useState<MotionKey>("two-turns");
  const [t, setT] = useState<number>(3.2);

  const cfg =
    motion === "two-turns"
      ? {
          formula: "s(t) = t^3 - 9t^2 + 24t",
          s: (u: number) => u ** 3 - 9 * u ** 2 + 24 * u,
          v: (u: number) => 3 * u ** 2 - 18 * u + 24,
          a: (u: number) => 6 * u - 18,
          turns: [2, 4],
          tMax: 5,
          sMin: -2,
          sMax: 24,
        }
      : {
          formula: "s(t) = 12t - t^3",
          s: (u: number) => 12 * u - u ** 3,
          v: (u: number) => 12 - 3 * u ** 2,
          a: (u: number) => -6 * u,
          turns: [2],
          tMax: 3.5,
          sMin: -12,
          sMax: 20,
        };

  const tClamped = Math.min(t, cfg.tMax);
  const sNow = cfg.s(tClamped);
  const vNow = cfg.v(tClamped);
  const aNow = cfg.a(tClamped);

  // Total distance up to tClamped by splitting at active turning points
  const stops = [0, ...cfg.turns.filter((tp) => tp < tClamped), tClamped];
  let totalDist = 0;
  for (let i = 1; i < stops.length; i++) {
    totalDist += Math.abs(cfg.s(stops[i]) - cfg.s(stops[i - 1]));
  }

  const mapS = (sv: number) => 36 + ((sv - cfg.sMin) / (cfg.sMax - cfg.sMin)) * 388;

  return (
    <WidgetFrame
      title="Kinematics Particle Track: Displacement vs Total Distance"
      tryThis={[
        "Scrub {{t}} past {{t = 2}} s: watch velocity {{v = ds/dt}} hit **0** (instantaneous rest!) and flip negative as the particle turns around.",
        "Compare **Displacement s(t)** with **Total Distance** at the end of the motion — why do they diverge after {{t = 2}} s?",
      ]}
      caption={
        <span>
          On <M>{cfg.formula}</M> at <M>{`t = ${tClamped.toFixed(1)}`}</M> s:{" "}
          {Math.abs(vNow) < 0.05 ? (
            <strong>Instantaneous rest (v = 0)!</strong>
          ) : vNow > 0 ? (
            <span>Moving forward (v &gt; 0).</span>
          ) : (
            <span>Moving backwards towards/past O (v &lt; 0)!</span>
          )}{" "}
          Net displacement is <strong>{sNow.toFixed(1)} m</strong>, whereas total distance walked is{" "}
          <strong>{totalDist.toFixed(1)} m</strong>.
        </span>
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <Segmented
          label="Motion law"
          value={motion}
          onChange={(m) => {
            setMotion(m);
            setT(2);
          }}
          options={[
            { value: "two-turns", label: "s = t³ − 9t² + 24t (2 reversals)" },
            { value: "one-turn", label: "s = 12t − t³ (1 reversal)" },
          ]}
        />
        <div className="flex gap-1.5">
          {cfg.turns.map((tp) => (
            <button
              key={tp}
              type="button"
              onClick={() => setT(tp)}
              className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink hover:border-brand"
            >
              Jump to v = 0 (t = {tp}s)
            </button>
          ))}
        </div>
      </div>

      <Slider
        label={
          <span>
            Time <M>{"t"}</M> (seconds)
          </span>
        }
        value={tClamped}
        min={0}
        max={cfg.tMax}
        step={0.1}
        onChange={setT}
        format={(v) => `${v.toFixed(1)} s`}
      />

      <div className="mt-3 overflow-hidden rounded-xl border border-line bg-surface">
        <svg viewBox="0 0 460 150" className="w-full h-auto" role="img" aria-label="1D particle number line track showing origin, turnaround markers, and current particle position">
          <line x1={28} y1={105} x2={432} y2={105} className="stroke-ink-2" strokeWidth={2} />
          <line x1={mapS(0)} y1={95} x2={mapS(0)} y2={115} className="stroke-ink" strokeWidth={2.5} />
          <text x={mapS(0)} y={132} fontSize={11} fontWeight="bold" textAnchor="middle" className="fill-ink">
            O (s = 0)
          </text>
          {cfg.turns.map((tp) => {
            const sx = mapS(cfg.s(tp));
            return (
              <g key={tp}>
                <line x1={sx} y1={98} x2={sx} y2={112} stroke="#f59e0b" strokeWidth={2.5} />
                <text x={sx} y={144} fontSize={10} textAnchor="middle" fill="#d97706">
                  Turn (t={tp}s, s={cfg.s(tp)}m)
                </text>
              </g>
            );
          })}
          {stops.slice(1).map((st, idx) => {
            const xA = mapS(cfg.s(stops[idx]));
            const xB = mapS(cfg.s(st));
            const yRow = 32 + idx * 18;
            return (
              <g key={st}>
                <line x1={xA} y1={yRow} x2={xB} y2={yRow} stroke="#2563eb" strokeWidth={3} strokeLinecap="round" />
                <circle cx={xB} cy={yRow} r={3.5} fill="#2563eb" />
              </g>
            );
          })}
          <circle cx={mapS(sNow)} cy={105} r={8} fill={Math.abs(vNow) < 0.05 ? "#f59e0b" : vNow > 0 ? "#16a34a" : "#dc2626"} stroke="#ffffff" strokeWidth={2} />
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Readout label="Displacement s(t)" value={`${sNow.toFixed(1)} m`} tone="brand" />
        <Readout label="Total Distance" value={`${totalDist.toFixed(1)} m`} tone="good" />
        <Readout label="Velocity v = ds/dt" value={`${vNow.toFixed(1)} m/s`} tone={Math.abs(vNow) < 0.05 ? "good" : "ink"} />
        <Readout label="Accel a = dv/dt" value={`${aNow.toFixed(1)} m/s²`} tone="ink" />
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "cubic-tangent-stationary-explorer",
    title: "Cubic Tangents, Normals & Stationary Points",
    blurb: "Slide along a cubic to watch dy/dx, perpendicular normals, and d²y/dx² classify peaks vs troughs.",
    Component: CubicTangentExplorer,
  },
  {
    id: "kinematics-particle-track",
    title: "Kinematics Particle Track (s → v → a)",
    blurb: "Scrub time t to spot instantaneous rest (v = 0) and see why total distance beats net displacement when a particle turns back.",
    Component: KinematicsTrackExplorer,
  },
];

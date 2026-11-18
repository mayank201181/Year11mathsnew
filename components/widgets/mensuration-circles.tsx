"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type TheoremMode = "centre" | "alternate" | "secant";

function CircleTheoremsLab() {
  const [mode, setMode] = useState<TheoremMode>("centre");
  const [arcSpan, setArcSpan] = useState(116);
  const [cSlide, setCSlide] = useState(0);
  const [tanAngle, setTanAngle] = useState(56);
  const [altSlide, setAltSlide] = useState(-25);
  const [opDist, setOpDist] = useState(95);
  const [secTilt, setSecTilt] = useState(16);

  const cx = 190;
  const cy = 96;
  const rad = 66;
  const ptOnCircle = (deg: number) => {
    const r = (deg * Math.PI) / 180;
    return { x: cx + rad * Math.cos(r), y: cy + rad * Math.sin(r) };
  };

  // Mode 1: Centre & Cyclic Quad
  const aDeg = 90 + arcSpan / 2;
  const bDeg = 90 - arcSpan / 2;
  const cDeg = -90 + cSlide;
  const dDeg = 90;
  const pA = ptOnCircle(aDeg);
  const pB = ptOnCircle(bDeg);
  const pC = ptOnCircle(cDeg);
  const pD = ptOnCircle(dDeg);
  const circAngle = arcSpan / 2;
  const minorAngle = 180 - circAngle;

  // Mode 2: Alternate Segment (A at bottom 90° in SVG coords, tangent horizontal)
  const altA = ptOnCircle(90);
  // Chord AB makes angle `tanAngle` above horizontal right tangent -> central angle from A(90°) is 90 - 2*tanAngle
  const altBDeg = 90 - 2 * tanAngle;
  const altB = ptOnCircle(altBDeg);
  const altCDeg = -115 + altSlide;
  const altC = ptOnCircle(altCDeg);

  // Mode 3: Tangent-Secant from external point P to the left of circle
  const scx = 235;
  const scy = 96;
  const sR = 54;
  const px = scx - opDist;
  const py = scy;
  // Upper tangent point T: cos(∠TOP) = sR / opDist
  const alpha = Math.acos(sR / opDist);
  const tx = scx - sR * Math.cos(alpha);
  const ty = scy - sR * Math.sin(alpha);
  const ptLen = Math.sqrt(opDist * opDist - sR * sR);
  // Secant ray from P at angle +secTilt degrees downward/upward toward circle
  const tiltRad = (secTilt * Math.PI) / 180;
  const dx = Math.cos(tiltRad);
  const dy = Math.sin(tiltRad);
  // Solve |(P + t*d) - C|^2 = sR^2: (-opDist + t*dx)^2 + (t*dy)^2 = sR^2 => t^2 - 2*opDist*dx*t + (opDist^2 - sR^2) = 0
  const bQuad = -2 * opDist * dx;
  const cQuad = opDist * opDist - sR * sR;
  const disc = Math.max(0, bQuad * bQuad - 4 * cQuad);
  const paLen = (-bQuad - Math.sqrt(disc)) / 2;
  const pbLen = (-bQuad + Math.sqrt(disc)) / 2;
  const abLen = pbLen - paLen;
  const secA = { x: px + paLen * dx, y: py + paLen * dy };
  const secB = { x: px + pbLen * dx, y: py + pbLen * dy };

  return (
    <WidgetFrame
      title="Interactive Circle Theorems & Secant Power Explorer"
      tryThis={[
        "In **Centre & Cyclic**, slide point C left and right along the major arc — notice {{∠ACB}} never changes!",
        "Switch to **Alternate Segment** and move C around the circle to verify {{∠ACB = ∠BAT}} everywhere.",
        "Switch to **Tangent–Secant** and compare {{PT^2}} against {{PA * PB}} (and the classic trap {{PA * AB}}).",
      ]}
      caption={
        mode === "centre" ? (
          <span>
            Central angle <M>{`∠AOB = ${arcSpan}°`}</M>, so every point <M>{"C"}</M> on the major arc sees{" "}
            <M>{`∠ACB = ${circAngle}°`}</M> (<em>angle at the centre is twice the angle at the circumference</em>), while{" "}
            <M>{"D"}</M> on the minor arc completes cyclic quad <M>{"ACBD"}</M> with{" "}
            <M>{`∠ADB = 180° - ${circAngle}° = ${minorAngle}°`}</M>.
          </span>
        ) : mode === "alternate" ? (
          <span>
            Tangent <M>{"AT"}</M> meets chord <M>{"AB"}</M> at <M>{`∠BAT = ${tanAngle}°`}</M>. By the{" "}
            <strong>alternate segment theorem</strong>, chord <M>{"AB"}</M> subtends the exact same angle{" "}
            <M>{`∠ACB = ${tanAngle}°`}</M> at every point <M>{"C"}</M> in the alternate segment!
          </span>
        ) : (
          <span>
            From external point <M>{"P"}</M>, <M>{`PT^2 = ${ptLen.toFixed(1)}^2 = ${(ptLen * ptLen).toFixed(1)}`}</M> and{" "}
            <M>{`PA * PB = ${paLen.toFixed(1)} * ${pbLen.toFixed(1)} = ${(paLen * pbLen).toFixed(1)}`}</M> — an exact match! Notice{" "}
            the trap <M>{`PA * AB = ${(paLen * abLen).toFixed(1)}`}</M> fails because <M>{"PB"}</M> must be measured all the way
            from <M>{"P"}</M>.
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented<TheoremMode>
          label="Circle theorem mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "centre", label: "Centre & Cyclic" },
            { value: "alternate", label: "Alternate Segment" },
            { value: "secant", label: "Tangent–Secant" },
          ]}
        />

        <svg
          viewBox="0 0 380 192"
          className="w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="Interactive circle theorem diagram"
        >
          {mode === "centre" ? (
            <g>
              <circle cx={cx} cy={cy} r={rad} fill="#eff6ff" stroke="#2563eb" strokeWidth={2} />
              <polyline
                points={`${pA.x},${pA.y} ${cx},${cy} ${pB.x},${pB.y}`}
                fill="none"
                stroke="#dc2626"
                strokeWidth={2.2}
              />
              <polyline
                points={`${pA.x},${pA.y} ${pC.x},${pC.y} ${pB.x},${pB.y}`}
                fill="none"
                stroke="#1d4ed8"
                strokeWidth={2}
              />
              <polyline
                points={`${pA.x},${pA.y} ${pD.x},${pD.y} ${pB.x},${pB.y}`}
                fill="none"
                stroke="#b45309"
                strokeWidth={1.8}
                strokeDasharray="4,3"
              />
              <circle cx={cx} cy={cy} r={3.2} fill="#0f172a" />
              <circle cx={pA.x} cy={pA.y} r={4} fill="#dc2626" />
              <circle cx={pB.x} cy={pB.y} r={4} fill="#dc2626" />
              <circle cx={pC.x} cy={pC.y} r={4.5} fill="#1d4ed8" />
              <circle cx={pD.x} cy={pD.y} r={4} fill="#b45309" />
              <text x={cx} y={cy - 8} fontSize={11} fontWeight="bold" textAnchor="middle" fill="#0f172a">
                O ({arcSpan}°)
              </text>
              <text x={pA.x - 12} y={pA.y + 12} fontSize={11} fontWeight="bold" fill="#0f172a">
                A
              </text>
              <text x={pB.x + 7} y={pB.y + 12} fontSize={11} fontWeight="bold" fill="#0f172a">
                B
              </text>
              <text x={pC.x} y={pC.y - 8} fontSize={11} fontWeight="bold" textAnchor="middle" fill="#1d4ed8">
                C ({circAngle}°)
              </text>
              <text x={pD.x} y={pD.y + 16} fontSize={11} fontWeight="bold" textAnchor="middle" fill="#b45309">
                D ({minorAngle}°)
              </text>
            </g>
          ) : mode === "alternate" ? (
            <g>
              <circle cx={cx} cy={cy - 8} r={rad} fill="#eff6ff" stroke="#2563eb" strokeWidth={2} />
              <line
                x1={cx - 120}
                y1={altA.y - 8}
                x2={cx + 120}
                y2={altA.y - 8}
                stroke="#dc2626"
                strokeWidth={2.4}
              />
              <polygon
                points={`${altA.x},${altA.y - 8} ${altB.x},${altB.y - 8} ${altC.x},${altC.y - 8}`}
                fill="#dbeafe"
                fillOpacity={0.6}
                stroke="#1e293b"
                strokeWidth={2}
              />
              <circle cx={altA.x} cy={altA.y - 8} r={4.2} fill="#dc2626" />
              <circle cx={altB.x} cy={altB.y - 8} r={4} fill="#0f172a" />
              <circle cx={altC.x} cy={altC.y - 8} r={4.5} fill="#1d4ed8" />
              <text x={altA.x} y={altA.y + 10} fontSize={11} fontWeight="bold" textAnchor="middle" fill="#0f172a">
                A
              </text>
              <text x={cx + 112} y={altA.y + 8} fontSize={11} fontWeight="bold" fill="#dc2626">
                T
              </text>
              <text x={altB.x + 8} y={altB.y - 6} fontSize={11} fontWeight="bold" fill="#0f172a">
                B
              </text>
              <text x={altC.x - 10} y={altC.y - 14} fontSize={11} fontWeight="bold" fill="#1d4ed8">
                C ({tanAngle}°)
              </text>
              <text x={altA.x + 34} y={altA.y - 14} fontSize={11} fontWeight="bold" fill="#dc2626">
                {tanAngle}°
              </text>
            </g>
          ) : (
            <g>
              <circle cx={scx} cy={scy} r={sR} fill="#fefce8" stroke="#ca8a04" strokeWidth={2} />
              <line x1={scx} y1={scy} x2={tx} y2={ty} stroke="#64748b" strokeWidth={1.5} strokeDasharray="4,3" />
              <line x1={px} y1={py} x2={tx} y2={ty} stroke="#dc2626" strokeWidth={2.3} />
              <line x1={px} y1={py} x2={secB.x} y2={secB.y} stroke="#1d4ed8" strokeWidth={2.2} />
              <circle cx={scx} cy={scy} r={2.8} fill="#0f172a" />
              <circle cx={px} cy={py} r={4.2} fill="#0f172a" />
              <circle cx={tx} cy={ty} r={4} fill="#dc2626" />
              <circle cx={secA.x} cy={secA.y} r={4} fill="#1d4ed8" />
              <circle cx={secB.x} cy={secB.y} r={4} fill="#1d4ed8" />
              <text x={px - 10} y={py + 4} fontSize={11} fontWeight="bold" fill="#0f172a">
                P
              </text>
              <text x={tx - 4} y={ty - 8} fontSize={11} fontWeight="bold" fill="#dc2626">
                T
              </text>
              <text x={secA.x - 4} y={secA.y + 15} fontSize={11} fontWeight="bold" fill="#1d4ed8">
                A
              </text>
              <text x={secB.x + 7} y={secB.y + 5} fontSize={11} fontWeight="bold" fill="#1d4ed8">
                B
              </text>
              <text x={scx + 6} y={scy - 4} fontSize={10} fontWeight="bold" fill="#475569">
                O
              </text>
            </g>
          )}
        </svg>

        {mode === "centre" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <Slider
              label="Central angle ∠AOB"
              value={arcSpan}
              min={44}
              max={160}
              step={2}
              onChange={setArcSpan}
              format={(v) => `${v}°`}
            />
            <Slider
              label="Slide C along major arc"
              value={cSlide}
              min={-55}
              max={55}
              step={1}
              onChange={setCSlide}
              format={(v) => `${v > 0 ? "+" : ""}${v}°`}
            />
            <Readout label="Major arc ∠ACB" value={`${circAngle}°`} tone="brand" />
            <Readout label="Minor arc ∠ADB (cyclic)" value={`${minorAngle}°`} tone="good" />
          </div>
        ) : mode === "alternate" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <Slider
              label="Tangent-chord angle ∠BAT"
              value={tanAngle}
              min={28}
              max={74}
              step={1}
              onChange={setTanAngle}
              format={(v) => `${v}°`}
            />
            <Slider
              label="Slide C in alternate segment"
              value={altSlide}
              min={-45}
              max={45}
              step={1}
              onChange={setAltSlide}
              format={(v) => `${v > 0 ? "+" : ""}${v}°`}
            />
            <Readout label="Tangent angle ∠BAT" value={`${tanAngle}°`} tone="bad" />
            <Readout label="Alternate segment ∠ACB" value={`${tanAngle}°`} tone="good" />
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <Slider
                label="Distance OP from centre"
                value={opDist}
                min={70}
                max={125}
                step={1}
                onChange={setOpDist}
              />
              <Slider
                label="Secant tilt angle"
                value={secTilt}
                min={-22}
                max={24}
                step={1}
                onChange={setSecTilt}
                format={(v) => `${v}°`}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Readout label="PT²" value={(ptLen * ptLen).toFixed(0)} tone="brand" />
              <Readout label="PA × PB (whole)" value={(paLen * pbLen).toFixed(0)} tone="good" />
              <Readout label="Trap: PA × AB" value={(paLen * abLen).toFixed(0)} tone="bad" />
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

function FrustumSimilaritySlicer() {
  const [bigR, setBigR] = useState(9);
  const [bigH, setBigH] = useState(12);
  const [cutPct, setCutPct] = useState(50);

  const k = cutPct / 100;
  const smallR = +(bigR * k).toFixed(2);
  const smallH = +(bigH * k).toFixed(2);
  const frustH = +(bigH - smallH).toFixed(2);
  const vLargePi = (bigR * bigR * bigH) / 3;
  const vSmallPi = vLargePi * k * k * k;
  const vFrustPi = vLargePi - vSmallPi;
  const k2Pct = +(k * k * 100).toFixed(1);
  const k3Pct = +(k * k * k * 100).toFixed(1);
  const frustPct = +(100 - k3Pct).toFixed(1);

  const apexX = 190;
  const apexY = 20;
  const baseHalfW = bigR * 11;
  const totalPixH = 142;
  const cutY = apexY + totalPixH * k;
  const cutHalfW = baseHalfW * k;
  const baseY = apexY + totalPixH;

  return (
    <WidgetFrame
      title="Frustum & Similarity (k, k², k³) Slicer"
      tryThis={[
        "Set the cut at **50%** ({{k = 1/2}}): the removed cone is half the height, **25%** ({{k^2}}) of curved area, and only **12.5%** ({{k^3 = 1/8}}) of volume — leaving **87.5%** in the frustum!",
        "Try {{R = 9}}, {{H = 18}} and cut at **33%** to watch {{V_\"large\" - V_\"small\"}} in action.",
      ]}
      caption={
        <span>
          With linear cut ratio <M>{`k = r/R = ${k.toFixed(2)}`}</M>, curved surface area of the removed top cone is{" "}
          <strong>{k2Pct}%</strong> (<M>{"k^2"}</M>), while its volume is only <strong>{k3Pct}%</strong> (<M>{"k^3"}</M>). The
          bottom frustum keeps <strong>{frustPct}%</strong> of the cone&apos;s volume:{" "}
          <M>{`${vLargePi.toFixed(1)} * pi - ${vSmallPi.toFixed(1)} * pi = ${vFrustPi.toFixed(1)} * pi cm^3`}</M>.
        </span>
      }
    >
      <div className="space-y-4">
        <svg
          viewBox="0 0 380 185"
          className="w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="Cone sliced horizontally into a small top similar cone and a bottom frustum"
        >
          <polygon
            points={`${apexX},${apexY} ${apexX - cutHalfW},${cutY} ${apexX + cutHalfW},${cutY}`}
            fill="#fee2e2"
            stroke="#dc2626"
            strokeWidth={1.8}
            strokeDasharray="4,3"
          />
          <polygon
            points={`${apexX - cutHalfW},${cutY} ${apexX - baseHalfW},${baseY} ${apexX + baseHalfW},${baseY} ${apexX + cutHalfW},${cutY}`}
            fill="#dbeafe"
            stroke="#2563eb"
            strokeWidth={2.2}
          />
          <ellipse cx={apexX} cy={cutY} rx={cutHalfW} ry={Math.max(4, cutHalfW * 0.16)} fill="#fecaca" stroke="#dc2626" strokeWidth={1.5} />
          <ellipse cx={apexX} cy={baseY} rx={baseHalfW} ry={Math.max(6, baseHalfW * 0.16)} fill="#bfdbfe" stroke="#1d4ed8" strokeWidth={1.8} />
          <line x1={apexX} y1={apexY} x2={apexX} y2={baseY} stroke="#0f172a" strokeWidth={1.3} strokeDasharray="3,3" />
          <text x={apexX + cutHalfW + 8} y={cutY + 4} fontSize={11} fontWeight="bold" fill="#dc2626">
            r = {smallR} cm (h = {smallH})
          </text>
          <text x={apexX + baseHalfW + 8} y={baseY + 2} fontSize={11} fontWeight="bold" fill="#1d4ed8">
            R = {bigR} cm
          </text>
          <text x={20} y={(cutY + baseY) / 2} fontSize={11} fontWeight="bold" fill="#1e3a8a">
            Frustum height = {frustH} cm
          </text>
        </svg>

        <div className="grid gap-3 sm:grid-cols-3">
          <Slider
            label="Cut height k = h/H"
            value={cutPct}
            min={20}
            max={80}
            step={5}
            onChange={setCutPct}
            format={(v) => `${v}%`}
          />
          <Slider
            label="Base radius R"
            value={bigR}
            min={4}
            max={12}
            step={1}
            onChange={setBigR}
            format={(v) => `${v} cm`}
          />
          <Slider
            label="Full cone height H"
            value={bigH}
            min={6}
            max={18}
            step={3}
            onChange={setBigH}
            format={(v) => `${v} cm`}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Linear k" value={k.toFixed(2)} tone="ink" />
          <Readout label="Top area k²" value={`${k2Pct}%`} tone="brand" />
          <Readout label="Top vol k³" value={`${k3Pct}%`} tone="bad" />
          <Readout label="Frustum vol" value={`${vFrustPi.toFixed(1)}π`} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "mensuration-circles-theorems-lab",
    title: "Circle Theorems & Secant Power Explorer",
    blurb: "Slide vertices on a circle to test 2x at the centre, cyclic quads, the alternate segment theorem, and PT² = PA × PB.",
    Component: CircleTheoremsLab,
  },
  {
    id: "mensuration-circles-frustum-slicer",
    title: "Frustum & k–k²–k³ Similarity Slicer",
    blurb: "Slice a cone at any fraction k of its height to see why curved area scales as k² while frustum volume keeps 1 − k³.",
    Component: FrustumSimilaritySlicer,
  },
];

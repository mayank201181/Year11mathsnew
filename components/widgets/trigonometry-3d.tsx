"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

const DEG = Math.PI / 180;
const ADEG = 180 / Math.PI;

function AmbiguousAndCosineLab() {
  const [mode, setMode] = useState<"ssa" | "sas">("ssa");
  // SSA state
  const [angleP, setAngleP] = useState(32);
  const [sidePQ, setSidePQ] = useState(14);
  const [sideQR, setSideQR] = useState(9);
  // SAS state
  const [sideB, setSideB] = useState(7);
  const [sideC, setSideC] = useState(8);
  const [angleA, setAngleA] = useState(120);

  if (mode === "ssa") {
    const h = sidePQ * Math.sin(angleP * DEG);
    const px = 48;
    const py = 178;
    const scale = 14;
    const qx = px + sidePQ * Math.cos(angleP * DEG) * scale;
    const qy = py - sidePQ * Math.sin(angleP * DEG) * scale;
    const rArc = sideQR * scale;
    const dy = py - qy; // = h * scale

    let status: "none" | "right" | "two" | "one" = "none";
    let acuteR = 0;
    let obtuseR = 0;
    let r1x = 0;
    let r2x = 0;

    if (Math.abs(sideQR - h) < 0.08) {
      status = "right";
      acuteR = 90;
      r2x = qx;
    } else if (sideQR < h) {
      status = "none";
    } else {
      const dx = Math.sqrt(Math.max(0, rArc * rArc - dy * dy));
      r1x = qx - dx;
      r2x = qx + dx;
      const sinR = Math.min(1, (sidePQ * Math.sin(angleP * DEG)) / sideQR);
      acuteR = Math.asin(sinR) * ADEG;
      obtuseR = 180 - acuteR;
      status = sideQR < sidePQ ? "two" : "one";
    }

    return (
      <WidgetFrame
        title="Ambiguous Sine Rule & Cosine Rule Lab"
        tryThis={[
          "In SSA mode, keep angle P = 32°, PQ = 14 cm and set QR = 9 cm to see BOTH the acute (55.5°) and obtuse (124.5°) triangles!",
          "Shrink QR below 7.4 cm to watch the compass arc miss the base completely (sin R > 1).",
          "Switch to SAS Cosine Rule mode and drag angle A past 90° to see −2bc cos A turn positive!",
        ]}
        caption={
          status === "two" ? (
            <span>
              <strong>Ambiguous Case Active (h &lt; QR &lt; PQ):</strong> Your calculator&apos;s <M>{"sin^(-1)"}</M> gives only the blue acute angle{" "}
              <strong>{acuteR.toFixed(1)}°</strong>, whereas swinging <M>{"QR"}</M> inward hits <M>{"R_1"}</M> at the red obtuse angle{" "}
              <strong>
                180° − {acuteR.toFixed(1)}° = {obtuseR.toFixed(1)}°
              </strong>
              !
            </span>
          ) : status === "none" ? (
            <span>
              <strong>No Triangle Exists (QR &lt; {h.toFixed(1)} cm):</strong> Here <M>{"sin R > 1"}</M> because arm <M>{"QR"}</M> is shorter than perpendicular height{" "}
              <strong>{h.toFixed(2)} cm</strong>.
            </span>
          ) : status === "right" ? (
            <span>
              <strong>Tangent Case (QR ≈ h):</strong> Arm <M>{"QR"}</M> just grazes the base at a single <strong>90°</strong> right angle.
            </span>
          ) : (
            <span>
              <strong>Single Triangle (QR ≥ PQ):</strong> Swinging inward lands to the left of <M>{"P"}</M>, so only the acute angle{" "}
              <strong>{acuteR.toFixed(1)}°</strong> forms a valid triangle with <M>{`P = ${angleP}°`}</M>.
            </span>
          )
        }
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Rule mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "ssa", label: "SSA Ambiguous Sine Rule" },
              { value: "sas", label: "SAS Obtuse Cosine Rule" },
            ]}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Slider label="Angle P" value={angleP} min={20} max={60} onChange={setAngleP} format={(v) => `${v}°`} />
          <Slider label="Side PQ" value={sidePQ} min={9} max={16} step={0.5} onChange={setSidePQ} format={(v) => `${v} cm`} />
          <Slider label="Swinging side QR" value={sideQR} min={4} max={17} step={0.5} onChange={setSideQR} format={(v) => `${v} cm`} />
        </div>

        <svg viewBox="0 0 460 210" className="mt-4 w-full rounded-xl border border-line bg-surface" role="img" aria-label="Interactive SSA Sine Rule triangle explorer">
          {/* Base ray */}
          <line x1={24} y1={py} x2={442} y2={py} stroke="#64748b" strokeWidth={2} />
          {/* Altitude h */}
          <line x1={qx} y1={qy} x2={qx} y2={py} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4,4" />
          <text x={qx + 5} y={(qy + py) / 2} fontSize={10} className="fill-ink-2">
            h = {h.toFixed(1)}
          </text>
          {/* Fixed arm PQ */}
          <line x1={px} y1={py} x2={qx} y2={qy} stroke="#0f172a" strokeWidth={2.6} />
          {/* Compass arc centered at Q */}
          <circle cx={qx} cy={qy} r={rArc} fill="none" stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="5,4" />

          {/* Acute R2 */}
          {(status === "two" || status === "one" || status === "right") && r2x <= 445 ? (
            <g>
              <line x1={qx} y1={qy} x2={r2x} y2={py} stroke="#2563eb" strokeWidth={2.4} strokeDasharray={status === "two" ? "6,3" : undefined} />
              <circle cx={r2x} cy={py} r={4} fill="#2563eb" />
              <text x={r2x} y={py + 16} fontSize={11} fontWeight={700} textAnchor="middle" fill="#2563eb">
                R₂ ({acuteR.toFixed(1)}°)
              </text>
            </g>
          ) : null}

          {/* Obtuse R1 */}
          {status === "two" && r1x > px ? (
            <g>
              <polygon points={`${px},${py} ${qx},${qy} ${r1x},${py}`} fill="#fecaca" fillOpacity={0.35} />
              <line x1={qx} y1={qy} x2={r1x} y2={py} stroke="#dc2626" strokeWidth={2.8} />
              <circle cx={r1x} cy={py} r={4.5} fill="#dc2626" />
              <text x={r1x - 4} y={py + 16} fontSize={11} fontWeight={800} textAnchor="middle" fill="#dc2626">
                R₁ ({obtuseR.toFixed(1)}°)
              </text>
            </g>
          ) : null}

          <circle cx={px} cy={py} r={4} fill="#0f172a" />
          <circle cx={qx} cy={qy} r={4} fill="#0f172a" />
          <text x={px - 10} y={py + 15} fontSize={12} fontWeight={800} className="fill-ink">
            P ({angleP}°)
          </text>
          <text x={qx} y={qy - 8} fontSize={12} fontWeight={800} textAnchor="middle" className="fill-ink">
            Q
          </text>
          <text x={(px + qx) / 2 - 12} y={(py + qy) / 2 - 6} fontSize={11} fontWeight={700} className="fill-ink">
            {sidePQ} cm
          </text>
        </svg>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Min height h" value={`${h.toFixed(2)} cm`} tone="ink" />
          <Readout label="Valid triangles" value={status === "two" ? "2 (Ambiguous!)" : status === "none" ? "0" : "1"} tone={status === "two" ? "bad" : status === "none" ? "ink" : "good"} />
          <Readout label="Acute sin⁻¹" value={status === "none" ? "—" : `${acuteR.toFixed(1)}°`} tone="brand" />
          <Readout label="Obtuse 180° − θ" value={status === "two" ? `${obtuseR.toFixed(1)}°` : "—"} tone="bad" />
        </div>
      </WidgetFrame>
    );
  }

  // SAS Cosine Rule & Area mode
  const cosA = Math.cos(angleA * DEG);
  const correction = -2 * sideB * sideC * cosA;
  const aSq = sideB * sideB + sideC * sideC + correction;
  const sideA = Math.sqrt(aSq);
  const area = 0.5 * sideB * sideC * Math.sin(angleA * DEG);

  const ax = 185;
  const ay = 165;
  const sc = 11.5;
  const bx = ax + sideC * sc;
  const by = ay;
  const cx = ax + sideB * Math.cos(angleA * DEG) * sc;
  const cy = ay - sideB * Math.sin(angleA * DEG) * sc;

  return (
    <WidgetFrame
      title="Ambiguous Sine Rule & Cosine Rule Lab"
      tryThis={[
        "Set b = 7 cm, c = 8 cm and angle A = 120° to hit the exact integer side a = 13 cm!",
        "Compare angle A = 60° (a = 7.55 cm) vs A = 120° (a = 13.00 cm) to see why −2bc cos A flips sign.",
      ]}
      caption={
        <span>
          Here <M>{`b^2 + c^2 = ${sideB * sideB + sideC * sideC}`}</M> and{" "}
          <M>{`-2bc cos ${angleA}° = ${correction >= 0 ? "+" : ""}${correction.toFixed(1)}`}</M>{" "}
          ({angleA > 90 ? "positive because cos A < 0 for obtuse angles!" : angleA === 90 ? "zero — pure Pythagoras!" : "negative because A is acute"}), giving{" "}
          <M>{`a = sqrt(${aSq.toFixed(1)}) = ${sideA.toFixed(2)}`}</M> cm.
        </span>
      }
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <Segmented
          label="Rule mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "ssa", label: "SSA Ambiguous Sine Rule" },
            { value: "sas", label: "SAS Obtuse Cosine Rule" },
          ]}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Slider label="Side b (AC)" value={sideB} min={4} max={12} step={1} onChange={setSideB} format={(v) => `${v} cm`} />
        <Slider label="Side c (AB)" value={sideC} min={4} max={13} step={1} onChange={setSideC} format={(v) => `${v} cm`} />
        <Slider label="Included angle A" value={angleA} min={25} max={145} step={1} onChange={setAngleA} format={(v) => `${v}°`} />
      </div>

      <svg viewBox="0 0 460 205" className="mt-4 w-full rounded-xl border border-line bg-surface" role="img" aria-label="Interactive SAS Cosine Rule and triangle area explorer">
        <polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy}`} fill={angleA > 90 ? "#fee2e2" : "#ede9fe"} fillOpacity={0.65} stroke="#6d28d9" strokeWidth={2.5} />
        <line x1={cx} y1={cy} x2={bx} y2={by} stroke="#dc2626" strokeWidth={2.8} />
        <text x={ax - 4} y={ay + 18} fontSize={12} fontWeight={800} className="fill-ink">
          A ({angleA}°)
        </text>
        <text x={bx + 8} y={by + 4} fontSize={12} fontWeight={800} className="fill-ink">
          B
        </text>
        <text x={cx - 10} y={cy - 6} fontSize={12} fontWeight={800} className="fill-ink">
          C
        </text>
        <text x={(ax + bx) / 2} y={ay + 18} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-ink-2">
          c = {sideC} cm
        </text>
        <text x={(ax + cx) / 2 - 18} y={(ay + cy) / 2} fontSize={11} fontWeight={700} className="fill-ink-2">
          b = {sideB} cm
        </text>
        <text x={(bx + cx) / 2 + 12} y={(by + cy) / 2 - 6} fontSize={12} fontWeight={800} fill="#dc2626">
          a = {sideA.toFixed(2)} cm
        </text>
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="b² + c²" value={sideB * sideB + sideC * sideC} tone="ink" />
        <Readout label="−2bc cos A" value={`${correction >= 0 ? "+" : ""}${correction.toFixed(1)}`} tone={correction > 0 ? "bad" : "brand"} />
        <Readout label="Opposite side a" value={`${sideA.toFixed(2)} cm`} tone="good" />
        <Readout label="Area ½bc sin A" value={`${area.toFixed(1)} cm²`} tone="brand" />
      </div>
    </WidgetFrame>
  );
}

function ThreeDShadowExplorer() {
  const [solid, setSolid] = useState<"cuboid" | "pyramid-face" | "pyramid-edge">("cuboid");
  const [len, setLen] = useState(12);
  const [wid, setWid] = useState(9);
  const [hgt, setHgt] = useState(8);

  if (solid === "cuboid") {
    const floorDiag = Math.sqrt(len * len + wid * wid);
    const spaceDiag = Math.sqrt(len * len + wid * wid + hgt * hgt);
    const angle = Math.atan(hgt / floorDiag) * ADEG;

    return (
      <WidgetFrame
        title="3D Shadow Triangle Explorer (Cuboid & Pyramid)"
        tryThis={[
          "Keep 12 × 9 × 8 cm to see the double Pythagorean triple: floor shadow AC = 15 cm and space diagonal AG = 17 cm!",
          "Toggle between 'Pyramid Face (△VOM)' and 'Pyramid Edge (△VOC)' to see why the face angle is ALWAYS steeper than the edge angle.",
        ]}
        caption={
          <span>
            Drop vertically from <M>{"G"}</M> to <M>{"C"}</M>: floor shadow <M>{`AC = sqrt(${len}^2 + ${wid}^2) = ${floorDiag.toFixed(2)}`}</M> cm, space diagonal{" "}
            <M>{`AG = ${spaceDiag.toFixed(2)}`}</M> cm, and <M>{`tan theta = ${hgt} / ${floorDiag.toFixed(2)}`}</M> gives{" "}
            <strong>{angle.toFixed(1)}°</strong>.
          </span>
        }
      >
        <div className="mb-4">
          <Segmented
            label="3D Solid"
            value={solid}
            onChange={setSolid}
            options={[
              { value: "cuboid", label: "Cuboid Space Diagonal" },
              { value: "pyramid-face", label: "Pyramid Face (△VOM)" },
              { value: "pyramid-edge", label: "Pyramid Edge (△VOC)" },
            ]}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Slider label="Length AB" value={len} min={5} max={18} onChange={setLen} format={(v) => `${v} cm`} />
          <Slider label="Width BC" value={wid} min={4} max={15} onChange={setWid} format={(v) => `${v} cm`} />
          <Slider label="Height CG" value={hgt} min={4} max={20} onChange={setHgt} format={(v) => `${v} cm`} />
        </div>

        <svg viewBox="0 0 460 195" className="mt-4 w-full rounded-xl border border-line bg-surface" role="img" aria-label="3D cuboid and extracted 2D right-angled shadow triangle">
          <polygon points="48,162 205,162 268,120 111,120" fill="#f1f5f9" stroke="#64748b" strokeWidth={1.5} />
          <polygon points="48,162 268,120 268,42" fill="#fde68a" fillOpacity={0.55} />
          <line x1={48} y1={162} x2={268} y2={120} stroke="#d97706" strokeWidth={2.3} strokeDasharray="6,3" />
          <line x1={48} y1={162} x2={268} y2={42} stroke="#dc2626" strokeWidth={2.8} />
          <line x1={268} y1={120} x2={268} y2={42} stroke="#2563eb" strokeWidth={2.6} />
          <rect x={48} y={84} width={157} height={78} fill="none" stroke="#334155" strokeWidth={1.8} />
          <line x1={48} y1={84} x2={111} y2={42} stroke="#334155" strokeWidth={1.8} />
          <line x1={205} y1={84} x2={268} y2={42} stroke="#334155" strokeWidth={1.8} />
          <line x1={111} y1={42} x2={268} y2={42} stroke="#334155" strokeWidth={1.8} />
          <text x={34} y={170} fontSize={12} fontWeight={800} className="fill-ink">A</text>
          <text x={274} y={125} fontSize={12} fontWeight={800} className="fill-ink">C</text>
          <text x={274} y={44} fontSize={12} fontWeight={800} fill="#dc2626">G</text>

          {/* Extracted 2D triangle */}
          <polygon points="325,162 432,162 432,62" fill="#fef3c7" stroke="#b45309" strokeWidth={2.2} />
          <rect x={420} y={150} width={12} height={12} fill="none" stroke="#b45309" strokeWidth={1.5} />
          <text x={378} y={36} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-ink">
            Extracted 2D △ACG
          </text>
          <text x={315} y={166} fontSize={11} fontWeight={800} className="fill-ink">A</text>
          <text x={437} y={166} fontSize={11} fontWeight={800} className="fill-ink">C</text>
          <text x={437} y={62} fontSize={11} fontWeight={800} fill="#dc2626">G</text>
          <text x={378} y={178} fontSize={11} fontWeight={700} textAnchor="middle" fill="#b45309">
            AC = {floorDiag.toFixed(1)} cm
          </text>
          <text x={445} y={114} fontSize={11} fontWeight={700} textAnchor="end" fill="#2563eb">
            {hgt}
          </text>
          <text x={352} y={156} fontSize={11} fontWeight={800} fill="#dc2626">
            {angle.toFixed(1)}°
          </text>
        </svg>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <Readout label="Floor shadow AC" value={`${floorDiag.toFixed(2)} cm`} tone="ink" />
          <Readout label="Space diagonal AG" value={`${spaceDiag.toFixed(2)} cm`} tone="brand" />
          <Readout label="Angle GAC" value={`${angle.toFixed(1)}°`} tone="good" />
        </div>
      </WidgetFrame>
    );
  }

  // Pyramid mode (square base of side `len`, vertical height `hgt`)
  const halfSide = len / 2;
  const halfDiag = halfSide * Math.SQRT2;
  const faceAngle = Math.atan(hgt / halfSide) * ADEG;
  const edgeAngle = Math.atan(hgt / halfDiag) * ADEG;
  const isFace = solid === "pyramid-face";
  const activeBase = isFace ? halfSide : halfDiag;
  const activeHyp = Math.sqrt(activeBase * activeBase + hgt * hgt);
  const activeAngle = isFace ? faceAngle : edgeAngle;

  return (
    <WidgetFrame
      title="3D Shadow Triangle Explorer (Cuboid & Pyramid)"
      tryThis={[
        "Set Square Base = 16 cm and Height VO = 15 cm: check Face Angle = 61.9° vs Edge Angle = 53.0°!",
      ]}
      caption={
        isFace ? (
          <span>
            <strong>Sloping Face to Base (△VOM):</strong> Drop to edge midpoint <M>{"M"}</M> so <M>{`OM = ${len}/2 = ${halfSide.toFixed(1)}`}</M> cm and{" "}
            <M>{`tan(angle VMO) = ${hgt} / ${halfSide.toFixed(1)}`}</M> → <strong>{faceAngle.toFixed(1)}°</strong> (steeper than edge angle {edgeAngle.toFixed(1)}°!).
          </span>
        ) : (
          <span>
            <strong>Sloping Edge to Base (△VOC):</strong> Join centre <M>{"O"}</M> to corner <M>{"C"}</M> so{" "}
            <M>{`OC = ${halfSide.toFixed(1)} sqrt(2) = ${halfDiag.toFixed(2)}`}</M> cm and <M>{`tan(angle VCO) = ${hgt} / ${halfDiag.toFixed(2)}`}</M> →{" "}
            <strong>{edgeAngle.toFixed(1)}°</strong>.
          </span>
        )
      }
    >
      <div className="mb-4">
        <Segmented
          label="3D Solid"
          value={solid}
          onChange={setSolid}
          options={[
            { value: "cuboid", label: "Cuboid Space Diagonal" },
            { value: "pyramid-face", label: "Pyramid Face (△VOM)" },
            { value: "pyramid-edge", label: "Pyramid Edge (△VOC)" },
          ]}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Slider label="Square base side" value={len} min={6} max={20} step={2} onChange={setLen} format={(v) => `${v} cm`} />
        <Slider label="Vertical height VO" value={hgt} min={5} max={20} onChange={setHgt} format={(v) => `${v} cm`} />
      </div>

      <svg viewBox="0 0 460 195" className="mt-4 w-full rounded-xl border border-line bg-surface" role="img" aria-label="Square-based pyramid showing face midpoint M versus corner C shadow triangles">
        <polygon points="52,164 202,164 262,122 112,122" fill="#f1f5f9" stroke="#64748b" strokeWidth={1.6} />
        <line x1={157} y1={32} x2={157} y2={143} stroke="#0f172a" strokeWidth={2} strokeDasharray="4,3" />
        {isFace ? (
          <polygon points="157,32 157,143 232,143" fill="#dcfce7" fillOpacity={0.75} stroke="#16a34a" strokeWidth={2.4} />
        ) : (
          <polygon points="157,32 157,143 262,122" fill="#fee2e2" fillOpacity={0.75} stroke="#dc2626" strokeWidth={2.4} />
        )}
        <line x1={157} y1={32} x2={52} y2={164} stroke="#334155" strokeWidth={1.7} />
        <line x1={157} y1={32} x2={202} y2={164} stroke="#334155" strokeWidth={1.7} />
        <line x1={157} y1={32} x2={262} y2={122} stroke="#334155" strokeWidth={1.7} />
        <line x1={157} y1={32} x2={112} y2={122} stroke="#94a3b8" strokeWidth={1.3} strokeDasharray="4,4" />
        <text x={153} y={24} fontSize={12} fontWeight={800} className="fill-ink">V</text>
        <text x={143} y={154} fontSize={11} fontWeight={800} className="fill-ink">O</text>
        <text x={238} y={148} fontSize={11} fontWeight={800} fill="#15803d">M</text>
        <text x={267} y={125} fontSize={11} fontWeight={800} fill="#dc2626">C</text>

        {/* Extracted 2D right triangle */}
        <polygon points="325,162 432,162 325,58" fill={isFace ? "#dcfce7" : "#fee2e2"} stroke={isFace ? "#16a34a" : "#dc2626"} strokeWidth={2.2} />
        <rect x={325} y={150} width={12} height={12} fill="none" stroke="#334155" strokeWidth={1.5} />
        <text x={378} y={36} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-ink">
          Extracted 2D {isFace ? "△VOM (Face)" : "△VOC (Edge)"}
        </text>
        <text x={315} y={58} fontSize={11} fontWeight={800} className="fill-ink">V</text>
        <text x={315} y={166} fontSize={11} fontWeight={800} className="fill-ink">O</text>
        <text x={437} y={166} fontSize={11} fontWeight={800} fill={isFace ? "#15803d" : "#dc2626"}>
          {isFace ? "M" : "C"}
        </text>
        <text x={378} y={178} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-ink">
          {isFace ? `OM = ${halfSide.toFixed(1)} cm` : `OC = ${halfDiag.toFixed(2)} cm`}
        </text>
        <text x={392} y={155} fontSize={11} fontWeight={800} fill={isFace ? "#15803d" : "#dc2626"}>
          {activeAngle.toFixed(1)}°
        </text>
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label={isFace ? "Base leg OM" : "Base leg OC"} value={`${activeBase.toFixed(2)} cm`} tone="ink" />
        <Readout label={isFace ? "Slant height VM" : "Slant edge VC"} value={`${activeHyp.toFixed(2)} cm`} tone="brand" />
        <Readout label="Face angle (△VOM)" value={`${faceAngle.toFixed(1)}°`} tone={isFace ? "good" : "ink"} />
        <Readout label="Edge angle (△VOC)" value={`${edgeAngle.toFixed(1)}°`} tone={!isFace ? "bad" : "ink"} />
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "trigonometry-3d-ambiguous-cosine-lab",
    title: "Ambiguous Sine Rule & Cosine Rule Lab",
    blurb: "Swing the SSA compass arc to catch the hidden 180° − θ obtuse triangle, then push the Cosine Rule past 90°.",
    Component: AmbiguousAndCosineLab,
  },
  {
    id: "trigonometry-3d-shadow-explorer",
    title: "3D Cuboid & Pyramid Shadow-Angle Explorer",
    blurb: "Shine a vertical torch on cuboids and square pyramids to pull out the exact 2D right-angled triangle.",
    Component: ThreeDShadowExplorer,
  },
];

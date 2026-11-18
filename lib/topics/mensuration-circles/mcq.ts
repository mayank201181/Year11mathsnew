import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "mensuration-circles-m1",
    title: "MCQ Paper 1 — Core Mensuration, Similarity & Circle Angles",
    questions: [
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q01",
        question: "A sector of a circle has radius {{9 cm}} and central angle {{80°}}. Find the exact length of its arc.",
        options: ["{{4 * pi + 18 cm}}", "{{4 * pi cm}}", "{{18 * pi cm}}", "{{2 * pi cm}}"],
        answerIndex: 1,
        explanation:
          "Arc length {{= (80/360) * 2 * pi * 9 = (2/9) * 18 * pi = 4 * pi cm}}. {{18 * pi cm}} is the sector area {{(80/360) * pi * 9^2}}, and {{4 * pi + 18 cm}} is the full perimeter.",
        difficulty: "warmup",
        guideRef: "sectors-segments",
        hints: ["Arc length is the fraction {{theta/360}} of the circumference {{2 * pi * r}}."],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q02",
        question: "A sector has radius {{10 cm}} and sector angle {{108°}}. Find the exact **perimeter** of the sector.",
        options: ["{{6 * pi + 20 cm}}", "{{30 * pi + 20 cm}}", "{{6 * pi cm}}", "{{6 * pi + 10 cm}}"],
        answerIndex: 0,
        explanation:
          "Arc length {{= (108/360) * 2 * pi * 10 = 0.3 * 20 * pi = 6 * pi cm}}. Adding **both** straight radii ({{10 + 10 = 20 cm}}) gives {{6 * pi + 20 cm}}. {{6 * pi cm}} forgets the two straight edges.",
        difficulty: "core",
        guideRef: "sectors-segments",
        hints: [
          "Find the curved arc length {{(108/360) * 2 * pi * 10}} first.",
          "Remember a sector boundary also includes two straight radii of length {{10 cm}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q03",
        question:
          "Sector {{OAB}} of a circle has radius {{8 cm}} and central angle {{90°}}. Find the exact area of the minor segment bounded by chord {{AB}} and arc {{AB}}.",
        options: ["{{16 * pi - 64 cm^2}}", "{{4 * pi - 32 cm^2}}", "{{16 * pi - 32 cm^2}}", "{{16 * pi cm^2}}"],
        answerIndex: 2,
        explanation:
          "Sector area {{= (90/360) * pi * 8^2 = 16 * pi cm^2}}, and right-angled triangle {{OAB}} has area {{(1/2) * 8 * 8 = 32 cm^2}}, leaving {{16 * pi - 32 cm^2}}. {{16 * pi - 64 cm^2}} forgets the {{1/2}} in the triangle area.",
        difficulty: "core",
        guideRef: "sectors-segments",
        hints: [
          "Segment area = sector area minus triangle {{OAB}} area.",
          "Sector area is a quarter of {{pi * 8^2}}; triangle area is {{(1/2) * 8 * 8 * sin(90°)}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q04",
        question:
          "A right circular cone has base radius {{6 cm}} and vertical height {{8 cm}}. What is its exact **curved** surface area?",
        options: ["{{96 * pi cm^2}}", "{{48 * pi cm^2}}", "{{84 * pi cm^2}}", "{{60 * pi cm^2}}"],
        answerIndex: 3,
        explanation:
          "By Pythagoras, slant height {{l = sqrt(6^2 + 8^2) = 10 cm}}, so curved surface area {{= pi * r * l = pi * 6 * 10 = 60 * pi cm^2}}. {{48 * pi cm^2}} wrongly uses the vertical height {{8}} instead of slant height {{10}}.",
        difficulty: "warmup",
        guideRef: "cones-spheres-frustums",
        hints: ["Curved surface area is {{pi * r * l}} — use Pythagoras {{l = sqrt(r^2 + h^2)}} first."],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q05",
        question: "Find the exact **total** surface area of a **solid hemisphere** of radius {{6 cm}}.",
        options: ["{{288 * pi cm^2}}", "{{108 * pi cm^2}}", "{{144 * pi cm^2}}", "{{72 * pi cm^2}}"],
        answerIndex: 1,
        explanation:
          "A solid hemisphere has curved dome {{2 * pi * r^2 = 72 * pi}} **plus** flat circular base {{pi * r^2 = 36 * pi}}, giving {{3 * pi * 6^2 = 108 * pi cm^2}}. {{72 * pi cm^2}} forgets the flat base.",
        difficulty: "core",
        guideRef: "cones-spheres-frustums",
        hints: [
          "How many surfaces does a **solid** hemisphere have?",
          "Add the curved dome {{2 * pi * r^2}} and the circular base {{pi * r^2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q06",
        question:
          "A solid metal sphere of radius {{3 cm}} is melted down and recast into a solid cone of base radius {{6 cm}} with no waste. What is the vertical height of the cone?",
        options: ["{{1.5 cm}}", "{{3 cm}}", "{{9 cm}}", "{{1 cm}}"],
        answerIndex: 1,
        explanation:
          "Sphere volume {{= (4/3) * pi * 3^3 = 36 * pi cm^3}}. Equating to cone volume {{(1/3) * pi * 6^2 * h = 12 * pi * h}} gives {{12h = 36 => h = 3 cm}}. {{1 cm}} omits the {{1/3}} factor in the cone volume formula.",
        difficulty: "core",
        guideRef: "cones-spheres-frustums",
        hints: [
          "Melting preserves **volume**: equate {{(4/3) * pi * 3^3}} and {{(1/3) * pi * 6^2 * h}}.",
          "Divide both sides by {{pi}} before solving for {{h}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q07",
        question:
          "Two mathematically similar jugs have heights {{10 cm}} and {{15 cm}}. The smaller jug has capacity {{240 ml}}. Find the capacity of the larger jug.",
        options: ["{{360 ml}}", "{{720 ml}}", "{{810 ml}}", "{{540 ml}}"],
        answerIndex: 2,
        explanation:
          "Linear scale factor {{k = 15/10 = 3/2}}, so volume scale factor {{k^3 = (3/2)^3 = 27/8}}. Capacity {{= 240 * (27/8) = 810 ml}}. {{360 ml}} multiplies by {{k}} and {{540 ml}} multiplies by {{k^2}}.",
        difficulty: "warmup",
        guideRef: "area-volume-similarity",
        hints: ["Find linear scale factor {{k = 15/10}}, then cube it for capacity ({{k^3}})."],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q08",
        question:
          "Two similar cylinders have curved surface areas {{32 cm^2}} and {{72 cm^2}}. The larger cylinder has volume {{270 cm^3}}. What is the volume of the smaller cylinder?",
        options: ["{{60 cm^3}}", "{{180 cm^3}}", "{{120 cm^3}}", "{{80 cm^3}}"],
        answerIndex: 3,
        explanation:
          "Area ratio {{32/72 = 4/9}}, so linear ratio {{k = sqrt(4/9) = 2/3}} and volume ratio {{k^3 = (2/3)^3 = 8/27}}. Smaller volume {{= 270 * (8/27) = 80 cm^3}}. {{120 cm^3}} multiplies directly by the area ratio {{4/9}}.",
        difficulty: "core",
        guideRef: "area-volume-similarity",
        hints: [
          "Simplify {{32 / 72}} first to reveal perfect squares.",
          "Take the square root to get {{k}}, then cube {{k}} to scale volume.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q09",
        question:
          "Points {{A, B, C}} lie on a circle with centre {{O}}, with {{C}} on the major arc {{AB}}. Given {{∠AOB = 136°}}, find {{∠ACB}}.",
        diagram:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160" role="img" aria-label="Circle with centre O, angle AOB equal to 136 degrees, and point C on the major arc"><circle cx="110" cy="82" r="62" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><circle cx="110" cy="82" r="3" fill="#0f172a"/><polyline points="56,113 110,82 164,113" fill="none" stroke="#dc2626" stroke-width="2"/><polyline points="56,113 118,21 164,113" fill="none" stroke="#1e293b" stroke-width="1.8"/><text x="110" y="74" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">O</text><text x="110" y="102" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">136°</text><text x="44" y="120" font-size="12" font-weight="bold" fill="#0f172a">A</text><text x="170" y="120" font-size="12" font-weight="bold" fill="#0f172a">B</text><text x="120" y="15" font-size="12" font-weight="bold" fill="#0f172a">C</text></svg>',
        options: ["{{44°}}", "{{68°}}", "{{22°}}", "{{136°}}"],
        answerIndex: 1,
        explanation:
          "The angle at the centre is twice the angle at the circumference subtended by the same arc, so {{∠ACB = 136° / 2 = 68°}}. {{44°}} wrongly subtracts {{136°}} from {{180°}} as if {{OACB}} were a cyclic quadrilateral.",
        difficulty: "warmup",
        guideRef: "circle-theorems-angles",
        hints: ["Use *the angle at the centre is twice the angle at the circumference*."],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q10",
        question:
          "{{AB}} is a diameter of a circle with centre {{O}}, and {{C}} lies on the circumference. Given {{∠CAB = 37°}}, find {{∠CBA}}.",
        options: ["{{63°}}", "{{37°}}", "{{74°}}", "{{53°}}"],
        answerIndex: 3,
        explanation:
          "Because {{AB}} is a diameter, {{∠ACB = 90°}} (*the angle in a semicircle is {{90°}}*). Angles in {{△ABC}} give {{∠CBA = 180° - 90° - 37° = 53°}}. {{37°}} falsely assumes {{CA = CB}}.",
        difficulty: "core",
        guideRef: "circle-theorems-angles",
        hints: [
          "What angle does a diameter subtend at the circumference?",
          "Since {{∠ACB = 90°}}, use the angle sum of triangle {{ABC}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q11",
        question:
          "{{ABCD}} is a cyclic quadrilateral in which {{∠DAB = (2x + 15)°}} and {{∠BCD = (3x - 10)°}}. Find the value of {{x}}.",
        options: ["{{37}}", "{{25}}", "{{71}}", "{{35}}"],
        answerIndex: 3,
        explanation:
          "Opposite angles of a cyclic quadrilateral sum to {{180°}}: {{(2x + 15) + (3x - 10) = 180 => 5x + 5 = 180 => x = 35}}. Setting the opposite angles equal gives the trap value {{25}}.",
        difficulty: "core",
        guideRef: "circle-theorems-angles",
        hints: [
          "{{∠DAB}} and {{∠BCD}} are opposite vertices of cyclic quadrilateral {{ABCD}}.",
          "Solve {{(2x + 15) + (3x - 10) = 180}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q12",
        question:
          "Line {{PT}} is a tangent to a circle with centre {{O}}, touching the circle at {{T}}. Given {{∠OPT = 28°}}, find {{∠POT}}.",
        options: ["{{152°}}", "{{28°}}", "{{62°}}", "{{56°}}"],
        answerIndex: 2,
        explanation:
          "A tangent is perpendicular to the radius at the point of contact, so {{∠OTP = 90°}}. In {{△OTP}}, {{∠POT = 180° - 90° - 28° = 62°}}. {{152°}} forgets the {{90°}} angle at {{T}}.",
        difficulty: "warmup",
        guideRef: "tangents-alternate-chords",
        hints: ["What is the angle {{∠OTP}} between tangent {{PT}} and radius {{OT}}?"],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q13",
        question:
          "From an external point {{P}}, two tangents {{PA}} and {{PB}} touch a circle at {{A}} and {{B}}. Given {{∠APB = 48°}}, find {{∠PAB}}.",
        diagram:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 150" role="img" aria-label="External point P with two tangents PA and PB to a circle and chord AB, angle APB equal to 48 degrees"><circle cx="155" cy="75" r="50" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="30" y1="75" x2="135" y2="29" stroke="#dc2626" stroke-width="2"/><line x1="30" y1="75" x2="135" y2="121" stroke="#dc2626" stroke-width="2"/><line x1="135" y1="29" x2="135" y2="121" stroke="#1e293b" stroke-width="1.8"/><text x="18" y="79" font-size="12" font-weight="bold" fill="#0f172a">P</text><text x="132" y="21" font-size="12" font-weight="bold" fill="#0f172a">A</text><text x="132" y="137" font-size="12" font-weight="bold" fill="#0f172a">B</text><text x="65" y="79" font-size="11" font-weight="bold" fill="#dc2626">48°</text></svg>',
        options: ["{{42°}}", "{{48°}}", "{{132°}}", "{{66°}}"],
        answerIndex: 3,
        explanation:
          "Tangents from an external point are equal in length ({{PA = PB}}), so {{△PAB}} is isosceles and {{∠PAB = (180° - 48°) / 2 = 66°}}. {{132°}} forgets to divide by {{2}}.",
        difficulty: "core",
        guideRef: "tangents-alternate-chords",
        hints: [
          "What do you know about the lengths {{PA}} and {{PB}}?",
          "Triangle {{PAB}} is isosceles with apex angle {{48°}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q14",
        question:
          "Chords {{AB}} and {{CD}} intersect inside a circle at {{P}}. Given {{AP = 5 cm}}, {{PB = 12 cm}} and {{CP = 4 cm}}, find the **total length of chord {{CD}}**.",
        options: ["{{13 cm}}", "{{20 cm}}", "{{19 cm}}", "{{15 cm}}"],
        answerIndex: 2,
        explanation:
          "By the intersecting chords theorem {{AP * PB = CP * PD}}, {{5 * 12 = 4 * PD => PD = 15 cm}}. Therefore the whole chord {{CD = CP + PD = 4 + 15 = 19 cm}}. {{15 cm}} stops at {{PD}} instead of finding {{CD}}.",
        difficulty: "core",
        guideRef: "tangents-alternate-chords",
        hints: [
          "Use {{AP * PB = CP * PD}} to calculate {{PD}}.",
          "Read carefully: add {{CP + PD}} for the whole chord {{CD}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m1-q15",
        question:
          "A frustum is made by removing a small cone of base radius {{2 cm}} and vertical height {{3 cm}} from the top of a mathematically similar large cone of base radius {{6 cm}}. Find the exact volume of the frustum.",
        options: ["{{108 * pi cm^3}}", "{{96 * pi cm^3}}", "{{104 * pi cm^3}}", "{{72 * pi cm^3}}"],
        answerIndex: 2,
        explanation:
          "Linear ratio {{2 : 6 = 1 : 3}}, so the full cone has height {{H = 3 * 3 = 9 cm}} and volume {{(1/3) * pi * 6^2 * 9 = 108 * pi cm^3}}. Subtracting the small cone {{(1/3) * pi * 2^2 * 3 = 4 * pi cm^3}} gives {{104 * pi cm^3}}. {{72 * pi cm^3}} wrongly treats the frustum as a cone of height {{9 - 3 = 6 cm}}.",
        difficulty: "challenge",
        guideRef: "cones-spheres-frustums",
        hints: [
          "Use the radius ratio {{6 / 2 = 3}} to find the height {{H}} of the full cone.",
          "Calculate {{V_\"large\" = (1/3) * pi * 6^2 * H}} and {{V_\"small\" = (1/3) * pi * 2^2 * 3}}.",
          "Subtract {{V_\"small\"}} from {{V_\"large\"}}.",
        ],
      },
    ],
  },
  {
    id: "mensuration-circles-m2",
    title: "MCQ Paper 2 — Segments, Frustums & Multi-Step Circle Theorems",
    questions: [
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q01",
        question:
          "A sector of a circle of radius {{15 cm}} has arc length {{10 * pi cm}}. What is the exact area of this sector?",
        options: ["{{50 * pi cm^2}}", "{{75 * pi cm^2}}", "{{25 * pi cm^2}}", "{{150 * pi cm^2}}"],
        answerIndex: 1,
        explanation:
          "Since {{(theta/360) * 2 * pi * 15 = 10 * pi}}, the fraction {{theta/360 = 10/30 = 1/3}}. Sector area {{= (1/3) * pi * 15^2 = 75 * pi cm^2}}. {{150 * pi cm^2}} forgets the factor {{1/2}} in {{A = (1/2) * r * L}}.",
        difficulty: "core",
        guideRef: "sectors-segments",
        hints: [
          "Find what fraction of the full circumference {{2 * pi * 15 = 30 * pi}} the arc {{10 * pi}} represents.",
          "Take that same fraction of the circle's area {{pi * 15^2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q02",
        question:
          "Find the exact area of the minor segment of a circle of radius {{6 cm}} subtended by a central angle of {{60°}}.",
        options: ["{{6 * pi - 18 * sqrt(3) cm^2}}", "{{6 * pi - 9 cm^2}}", "{{6 * pi - 9 * sqrt(3) cm^2}}", "{{12 * pi - 9 * sqrt(3) cm^2}}"],
        answerIndex: 2,
        explanation:
          "Sector area {{= (60/360) * pi * 6^2 = 6 * pi cm^2}}. Triangle area {{= (1/2) * 6 * 6 * sin(60°) = 18 * (sqrt(3)/2) = 9 * sqrt(3) cm^2}}, giving {{6 * pi - 9 * sqrt(3) cm^2}}. {{6 * pi - 9 cm^2}} uses {{1/2}} instead of {{sqrt(3)/2}} for {{sin(60°)}}.",
        difficulty: "core",
        guideRef: "sectors-segments",
        hints: [
          "Sector area {{= (60/360) * pi * 36}}.",
          "Recall the exact value {{sin(60°) = sqrt(3)/2}} for {{(1/2) * r^2 * sin(60°)}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q03",
        question:
          "A **solid** cone has base **diameter** {{16 cm}} and vertical height {{15 cm}}. Find its exact **total** surface area.",
        options: ["{{200 * pi cm^2}}", "{{136 * pi cm^2}}", "{{320 * pi cm^2}}", "{{184 * pi cm^2}}"],
        answerIndex: 0,
        explanation:
          "Radius {{r = 8 cm}} and slant height {{l = sqrt(8^2 + 15^2) = 17 cm}}. Total SA {{= pi * 8 * 17 + pi * 8^2 = 136 * pi + 64 * pi = 200 * pi cm^2}}. {{136 * pi cm^2}} omits the circular base {{pi * r^2}}.",
        difficulty: "core",
        guideRef: "cones-spheres-frustums",
        hints: [
          "Halve the diameter first ({{r = 8 cm}}), then find slant height {{l = sqrt(8^2 + 15^2)}}.",
          "Total surface area of a solid cone is {{pi * r * l + pi * r^2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q04",
        question:
          "A solid wooden toy is made by gluing the flat circular base of a hemisphere of radius {{3 cm}} onto the identical circular base of a cone of radius {{3 cm}} and slant height {{5 cm}}. Find the exact **exterior** surface area of the toy.",
        options: ["{{51 * pi cm^2}}", "{{27 * pi cm^2}}", "{{33 * pi cm^2}}", "{{42 * pi cm^2}}"],
        answerIndex: 2,
        explanation:
          "The glued circular interface is hidden inside the toy! Exposed area = curved cone ({{pi * 3 * 5 = 15 * pi}}) + curved hemisphere ({{2 * pi * 3^2 = 18 * pi}}) {{= 33 * pi cm^2}}. {{42 * pi cm^2}} and {{51 * pi cm^2}} include hidden internal circles.",
        difficulty: "core",
        guideRef: "cones-spheres-frustums",
        hints: [
          "Are the flat circular bases exposed on the outside of the joined toy?",
          "Add only the curved cone surface {{pi * r * l}} and the curved hemisphere dome {{2 * pi * r^2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q05",
        question:
          "A frustum has top radius {{4 cm}}, bottom radius {{10 cm}} and vertical height {{9 cm}}. What was the vertical height {{h}} of the small cone removed from the top?",
        options: ["{{6 cm}}", "{{15 cm}}", "{{3.6 cm}}", "{{4.5 cm}}"],
        answerIndex: 0,
        explanation:
          "By similar triangles, {{4 / 10 = h / (h + 9) => 2 / 5 = h / (h + 9) => 5h = 2h + 18 => h = 6 cm}}. {{15 cm}} is the full cone height {{H = 6 + 9}}, while {{3.6 cm}} takes {{(4/10) * 9}} instead of {{(4/10) * H}}.",
        difficulty: "challenge",
        guideRef: "cones-spheres-frustums",
        hints: [
          "Let the removed cone have height {{h}}, so the full cone has height {{h + 9}}.",
          "Set up similar triangles: {{4 / 10 = h / (h + 9)}}.",
          "Cross-multiply and solve for {{h}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q06",
        question:
          "Two mathematically similar mugs have volumes {{125 cm^3}} and {{343 cm^3}}. Find the ratio of their total surface areas in simplest form.",
        options: ["{{25 : 35}}", "{{25 : 49}}", "{{5 : 7}}", "{{125 : 343}}"],
        answerIndex: 1,
        explanation:
          "Volume ratio {{k^3 = 125 : 343}}, so linear ratio {{k = cbrt(125) : cbrt(343) = 5 : 7}}, giving area ratio {{k^2 = 25 : 49}}. {{5 : 7}} stops at the linear ratio {{k}}.",
        difficulty: "core",
        guideRef: "area-volume-similarity",
        hints: [
          "Take the cube root of {{125 : 343}} to reach the linear bridge {{k}}.",
          "Square {{k}} to obtain the surface-area ratio {{k^2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q07",
        question:
          "A cone is sliced parallel to its base at one third of its vertical height measured down from the apex. What is the ratio of the volume of the **small top cone** to the volume of the **bottom frustum**?",
        options: ["{{1 : 26}}", "{{1 : 9}}", "{{1 : 8}}", "{{1 : 27}}"],
        answerIndex: 0,
        explanation:
          "Small cone : full cone has linear ratio {{1 : 3}} and volume ratio {{1^3 : 3^3 = 1 : 27}}. Subtracting the top cone from the full cone leaves {{27 - 1 = 26}} parts in the frustum, so small cone : frustum {{= 1 : 26}}. {{1 : 27}} forgets to subtract the top cone.",
        difficulty: "core",
        guideRef: "area-volume-similarity",
        hints: [
          "Compare the small top cone to the **full** cone first: linear ratio {{1 : 3}} gives volume ratio {{1^3 : 3^3}}.",
          "Subtract the small cone's volume parts from the full cone's parts to get the frustum.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q08",
        question:
          "Points {{A, B, C, D}} lie in order around a circle, and chords {{AC}} and {{BD}} intersect at {{X}}. Given {{∠BAC = 34°}} and {{∠ACD = 49°}}, find {{∠AXB}}.",
        diagram:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160" role="img" aria-label="Circle with points A, B, C, D and intersecting chords AC and BD meeting at X, angle BAC is 34 degrees and angle ACD is 49 degrees"><circle cx="110" cy="80" r="62" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="56" y1="49" x2="164" y2="111" stroke="#1e293b" stroke-width="1.8"/><line x1="154" y1="36" x2="66" y2="124" stroke="#1e293b" stroke-width="1.8"/><line x1="56" y1="49" x2="154" y2="36" stroke="#2563eb" stroke-width="1.8"/><line x1="164" y1="111" x2="66" y2="124" stroke="#2563eb" stroke-width="1.8"/><text x="44" y="48" font-size="12" font-weight="bold" fill="#0f172a">A</text><text x="160" y="34" font-size="12" font-weight="bold" fill="#0f172a">B</text><text x="170" y="117" font-size="12" font-weight="bold" fill="#0f172a">C</text><text x="52" y="133" font-size="12" font-weight="bold" fill="#0f172a">D</text><text x="110" y="72" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">X</text><text x="80" y="55" font-size="10" font-weight="bold" fill="#1d4ed8">34°</text><text x="133" y="116" font-size="10" font-weight="bold" fill="#b45309">49°</text></svg>',
        options: ["{{97°}}", "{{98°}}", "{{83°}}", "{{131°}}"],
        answerIndex: 0,
        explanation:
          "Angles in the same segment (subtended by arc {{AD}}) give {{∠ABD = ∠ACD = 49°}}. In {{△AXB}}, {{∠AXB = 180° - 34° - 49° = 97°}}. {{83°}} computes {{34° + 49°}}, which is the adjacent supplementary angle {{∠BXC}}.",
        difficulty: "core",
        guideRef: "circle-theorems-angles",
        hints: [
          "Look at arc {{AD}}: which angle at {{B}} equals {{∠ACD = 49°}} by *angles in the same segment*?",
          "Use the angle sum of triangle {{AXB}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q09",
        question:
          "Points {{A, B, C}} lie on a circle with centre {{O}}, with {{B}} lying on the **minor** arc {{AC}}. Given that the obtuse angle at the centre is {{∠AOC = 130°}}, find the obtuse angle {{∠ABC}}.",
        options: ["{{130°}}", "{{65°}}", "{{50°}}", "{{115°}}"],
        answerIndex: 3,
        explanation:
          "The reflex angle at centre {{O}} is {{360° - 130° = 230°}}, so {{∠ABC = 230° / 2 = 115°}} (angle at centre = {{2 ×}} angle at circumference). {{50°}} wrongly treats {{OABC}} as a cyclic quadrilateral even though {{O}} is at the centre, not on the circumference!",
        difficulty: "core",
        guideRef: "circle-theorems-angles",
        hints: [
          "{{O}} is at the centre, NOT on the circumference, so {{OABC}} is NOT a cyclic quadrilateral!",
          "Find the reflex angle around {{O}} ({{360° - 130°}}) and halve it.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q10",
        question:
          "Four points {{A, B, C, D}} lie on a circle with {{C}} and {{D}} on the same side of chord {{AB}}. Which statement earns the full Edexcel 4MA1 reasoning mark for writing {{∠ADB = ∠ACB}}?",
        options: ["Alternate angles in a circle are equal", "Angles in the same segment are equal", "Opposite angles in a cyclic segment are equal", "Angles in a bowtie or butterfly shape are equal"],
        answerIndex: 1,
        explanation:
          "Edexcel mark schemes require the exact wording **angles in the same segment are equal** (or *angles at the circumference subtended by the same arc are equal*). Informal phrases like *bowtie* or *butterfly* score zero.",
        difficulty: "core",
        guideRef: "circle-theorems-angles",
        hints: [
          "Eliminate informal slang like *bowtie* and parallel-line vocabulary like *alternate angles*.",
          "Chord {{AB}} divides the circle into a major and minor **segment**.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q11",
        question:
          "Line {{AT}} is a tangent to a circle at {{A}}. Points {{B}} and {{C}} lie on the circle so that acute {{∠BAT = 58°}} and {{∠ABC = 74°}} (with {{C}} in the alternate segment). Find {{∠BAC}}.",
        diagram:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 165" role="img" aria-label="Circle with tangent AT at A and inscribed triangle ABC, angle BAT is 58 degrees and angle ABC is 74 degrees"><circle cx="115" cy="76" r="54" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="35" y1="130" x2="195" y2="130" stroke="#dc2626" stroke-width="2.2"/><polygon points="115,130 162,50 67,51" fill="#dbeafe" fill-opacity="0.5" stroke="#1e293b" stroke-width="1.8"/><text x="115" y="147" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text><text x="188" y="146" font-size="12" font-weight="bold" fill="#dc2626">T</text><text x="169" y="50" font-size="12" font-weight="bold" fill="#0f172a">B</text><text x="53" y="50" font-size="12" font-weight="bold" fill="#0f172a">C</text><text x="142" y="124" font-size="10.5" font-weight="bold" fill="#dc2626">58°</text><text x="139" y="64" font-size="10.5" font-weight="bold" fill="#1d4ed8">74°</text></svg>',
        options: ["{{48°}}", "{{32°}}", "{{58°}}", "{{64°}}"],
        answerIndex: 0,
        explanation:
          "By the alternate segment theorem, {{∠ACB = ∠BAT = 58°}}. Angles in {{△ABC}} give {{∠BAC = 180° - 74° - 58° = 48°}}. {{32°}} wrongly assumes {{AB}} is perpendicular to {{AT}} ({{90° - 58°}}), which only holds if {{AB}} is a diameter.",
        difficulty: "core",
        guideRef: "tangents-alternate-chords",
        hints: [
          "Use the **alternate segment theorem** to find {{∠ACB}} from {{∠BAT = 58°}}.",
          "Subtract {{∠ABC}} and {{∠ACB}} from {{180°}} in {{△ABC}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q12",
        question:
          "Tangents {{PA}} and {{PB}} from an external point {{P}} touch a circle with centre {{O}} at {{A}} and {{B}}. Given {{∠APB = 54°}}, find {{∠AOB}}.",
        options: ["{{63°}}", "{{108°}}", "{{54°}}", "{{126°}}"],
        answerIndex: 3,
        explanation:
          "Since each tangent is perpendicular to its radius, {{∠OAP = ∠OBP = 90°}}. In quadrilateral {{OAPB}}, {{∠AOB = 360° - 90° - 90° - 54° = 126°}}. {{108°}} wrongly doubles {{54°}}.",
        difficulty: "core",
        guideRef: "tangents-alternate-chords",
        hints: [
          "What are angles {{∠OAP}} and {{∠OBP}}?",
          "Angles in quadrilateral {{OAPB}} add up to {{360°}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q13",
        question:
          "From an external point {{P}}, secant {{PAB}} ({{A}} between {{P}} and {{B}}) and secant {{PCD}} ({{C}} between {{P}} and {{D}}) cut a circle. Given {{PA = 4 cm}}, {{AB = 5 cm}} and {{PC = 3 cm}}, find the chord length {{CD}}.",
        options: ["{{6.7 cm}}", "{{12 cm}}", "{{9 cm}}", "{{8 cm}}"],
        answerIndex: 2,
        explanation:
          "Whole secant {{PB = 4 + 5 = 9 cm}}. Using {{PA * PB = PC * PD}}: {{4 * 9 = 3 * PD => PD = 12 cm}}, so {{CD = PD - PC = 12 - 3 = 9 cm}}. {{12 cm}} stops at {{PD}}, while {{6.7 cm}} wrongly uses {{PA * AB = PC * CD}}.",
        difficulty: "core",
        guideRef: "tangents-alternate-chords",
        hints: [
          "Measure the **whole** secant from {{P}}: {{PB = PA + AB = 9 cm}}.",
          "Solve {{PA * PB = PC * PD}} for {{PD}}, then subtract {{PC}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q14",
        question:
          "From an external point {{P}}, tangent {{PT}} has length {{8 cm}} and secant {{PAB}} has external part {{PA = x cm}} and internal chord {{AB = 12 cm}}. Find {{x}}.",
        options: ["{{4}}", "{{16}}", "{{5.3}}", "{{8}}"],
        answerIndex: 0,
        explanation:
          "Using {{PT^2 = PA * PB}} with {{PB = x + 12}}: {{64 = x(x + 12) => x^2 + 12x - 64 = 0 => (x + 16)(x - 4) = 0}}, so {{x = 4}} (since {{x > 0}}). {{5.3}} comes from the classic error {{8^2 = 12x}}.",
        difficulty: "challenge",
        guideRef: "tangents-alternate-chords",
        hints: [
          "Write the whole secant length from {{P}} to {{B}} as {{PB = x + 12}}.",
          "Substitute into {{PT^2 = PA * PB}} to form a quadratic equation in {{x}}.",
          "Factorise {{x^2 + 12x - 64 = 0}} and choose the positive root.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m2-q15",
        question:
          "A flat paper sector of radius {{12 cm}} and central angle {{150°}} is curled so its two straight radii meet cleanly to form a hollow open cone. What is the **base radius** of the cone?",
        options: ["{{7.5 cm}}", "{{5 cm}}", "{{10 cm}}", "{{12 cm}}"],
        answerIndex: 1,
        explanation:
          "The sector's arc length {{(150/360) * 2 * pi * 12 = 10 * pi cm}} wraps around to become the circumference {{2 * pi * R}} of the cone's circular base, giving {{2 * pi * R = 10 * pi => R = 5 cm}}. {{12 cm}} is the cone's slant height {{l}}, not its base radius!",
        difficulty: "challenge",
        guideRef: "sectors-segments",
        hints: [
          "When the sector curls into a cone, its radius {{12 cm}} becomes the **slant height** {{l}}, and its curved arc becomes the cone's **base circumference**.",
          "Calculate arc length {{L = (150/360) * 2 * pi * 12}}.",
          "Set {{2 * pi * R = L}} and solve for {{R}}.",
        ],
      },
    ],
  },
  {
    id: "mensuration-circles-m3",
    title: "MCQ Paper 3 — Grade 8–9 Exam Stretch",
    questions: [
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q01",
        question:
          "Two concentric circles with centre {{O}} have radii {{4 cm}} and {{10 cm}}. Two radii at {{60°}} enclose a curved wiper-blade region between the inner and outer arcs. Find its exact area.",
        options: ["{{84 * pi cm^2}}", "{{28 * pi cm^2}}", "{{6 * pi cm^2}}", "{{14 * pi cm^2}}"],
        answerIndex: 3,
        explanation:
          "Outer sector minus inner sector {{= (60/360) * pi * (10^2 - 4^2) = (1/6) * 84 * pi = 14 * pi cm^2}}. {{6 * pi cm^2}} wrongly computes {{(10 - 4)^2 = 36}} instead of {{10^2 - 4^2 = 84}}.",
        difficulty: "core",
        guideRef: "sectors-segments",
        hints: [
          "Subtract the inner {{60°}} sector of radius {{4}} from the outer {{60°}} sector of radius {{10}}.",
          "Remember {{R^2 - r^2 = 100 - 16 = 84}}, not {{(10 - 4)^2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q02",
        question:
          "In a circle of radius {{10 cm}}, chord {{AB}} has exact length {{10 * sqrt(2) cm}}. Find the exact area of the minor segment cut off by chord {{AB}}.",
        options: ["{{50 * pi - 50 cm^2}}", "{{25 * pi - 25 * sqrt(2) cm^2}}", "{{25 * pi - 100 cm^2}}", "{{25 * pi - 50 cm^2}}"],
        answerIndex: 3,
        explanation:
          "Since {{10^2 + 10^2 = 200 = (10 * sqrt(2))^2}}, {{△OAB}} is right-angled at {{O}} ({{∠AOB = 90°}})! Thus sector area {{= (90/360) * 100 * pi = 25 * pi}} and triangle area {{= (1/2) * 10 * 10 = 50}}, giving {{25 * pi - 50 cm^2}}.",
        difficulty: "challenge",
        guideRef: "sectors-segments",
        hints: [
          "Check {{OA^2 + OB^2}} against {{AB^2}} in triangle {{OAB}}.",
          "By the converse of Pythagoras, what is central angle {{∠AOB}}?",
          "Subtract {{(1/2) * 10 * 10}} from quarter-circle {{(1/4) * pi * 10^2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q03",
        question: "A solid sphere has surface area {{196 * pi cm^2}}. What is its exact volume?",
        options: ["{{(343/3) * pi cm^3}}", "{{(1372/3) * pi cm^3}}", "{{(2744/3) * pi cm^3}}", "{{196 * pi cm^3}}"],
        answerIndex: 1,
        explanation:
          "From {{4 * pi * r^2 = 196 * pi}}, we get {{r^2 = 49 => r = 7 cm}}. Volume {{= (4/3) * pi * 7^3 = (4 * 343 / 3) * pi = (1372/3) * pi cm^3}}. {{(343/3) * pi cm^3}} forgets the {{4}} in {{4/3}}.",
        difficulty: "core",
        guideRef: "cones-spheres-frustums",
        hints: [
          "Equate {{4 * pi * r^2 = 196 * pi}} to find {{r}}.",
          "Substitute {{r = 7}} into {{V = (4/3) * pi * r^3}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q04",
        question:
          "Water fills a vertical cylindrical beaker of radius {{6 cm}} to a depth of {{10 cm}}. A solid metal sphere of radius {{3 cm}} is completely submerged in the water without overflow. By how much does the water level rise?",
        options: ["{{0.5 cm}}", "{{1 cm}}", "{{3 cm}}", "{{1.5 cm}}"],
        answerIndex: 1,
        explanation:
          "Displaced water volume equals sphere volume {{(4/3) * pi * 3^3 = 36 * pi cm^3}}. In a cylinder of cross-sectional area {{pi * 6^2 = 36 * pi cm^2}}, rise {{h = (36 * pi) / (36 * pi) = 1 cm}}. Note the initial depth {{10 cm}} is extra information once you know the sphere is submerged!",
        difficulty: "core",
        guideRef: "cones-spheres-frustums",
        hints: [
          "The volume of water pushed upwards as a cylinder {{pi * R^2 * h_\"rise\"}} equals the sphere's volume {{(4/3) * pi * r^3}}.",
          "Solve {{pi * 6^2 * h_\"rise\" = (4/3) * pi * 3^3}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q05",
        question:
          "A frustum of a cone has top radius {{3 cm}}, bottom radius {{6 cm}} and vertical height {{4 cm}}. Find its exact **curved** surface area.",
        options: ["{{36 * pi cm^2}}", "{{60 * pi cm^2}}", "{{45 * pi cm^2}}", "{{90 * pi cm^2}}"],
        answerIndex: 2,
        explanation:
          "Since {{r : R = 3 : 6 = 1 : 2}}, the removed cone also has height {{h = 4 cm}} and slant height {{l = sqrt(3^2 + 4^2) = 5 cm}}, while the full cone has slant height {{L = 10 cm}}. Curved SA {{= pi * 6 * 10 - pi * 3 * 5 = 60 * pi - 15 * pi = 45 * pi cm^2}}. {{90 * pi cm^2}} includes the top and bottom circular bases ({{+ 9 * pi + 36 * pi}}).",
        difficulty: "challenge",
        guideRef: "cones-spheres-frustums",
        hints: [
          "Use {{r / R = 3 / 6 = 1 / 2}} to find the height {{h = 4 cm}} of the small removed cone.",
          "Find small slant height {{l = sqrt(3^2 + 4^2) = 5 cm}} and large slant height {{L = 2l = 10 cm}}.",
          "Subtract {{pi * r * l}} from {{pi * R * L}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q06",
        question:
          "Two mathematically similar statues cast from the same bronze alloy have masses {{54 g}} and {{128 g}}. The heavier statue has height {{24 cm}}. Find the height of the lighter statue.",
        options: ["{{16 cm}}", "{{10.125 cm}}", "{{18 cm}}", "{{13.5 cm}}"],
        answerIndex: 2,
        explanation:
          "Same density means mass ratio equals volume ratio: {{k^3 = 54 / 128 = 27 / 64}}, so linear ratio {{k = cbrt(27/64) = 3/4}}. Height {{= 24 * (3/4) = 18 cm}}. {{10.125 cm}} multiplies directly by {{54/128}}.",
        difficulty: "core",
        guideRef: "area-volume-similarity",
        hints: [
          "Divide {{54}} and {{128}} by {{2}} to spot two perfect cubes!",
          "Take the cube root of {{27/64}} to get the linear scale factor {{k}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q07",
        question:
          "Painting the exterior of a small scale-model dome costs {{£12}}. A mathematically similar full-size dome encloses {{27}} times the volume of air. At the same paint cost per square metre, how much does painting the full-size dome cost?",
        options: ["{{£108}}", "{{£36}}", "{{£324}}", "{{£972}}"],
        answerIndex: 0,
        explanation:
          "Volume factor {{k^3 = 27 => k = 3}}. Paint covers **surface area**, which scales by {{k^2 = 3^2 = 9}}, so cost {{= £12 * 9 = £108}}. {{£324}} wrongly multiplies paint cost by the volume factor {{27}}.",
        difficulty: "challenge",
        guideRef: "area-volume-similarity",
        hints: [
          "Does paint cover **volume** or **surface area**?",
          "From {{k^3 = 27}}, find {{k}} first, then square {{k}} for {{k^2}}.",
          "Multiply {{£12}} by {{k^2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q08",
        question:
          "Points {{A, B, C, D}} lie in order around a circle, and side {{AD}} is extended past {{D}} to a point {{E}} on a straight line. Given {{∠ABC = 104°}}, find the exterior angle {{∠CDE}}.",
        options: ["{{76°}}", "{{52°}}", "{{86°}}", "{{104°}}"],
        answerIndex: 3,
        explanation:
          "Opposite angles of cyclic quadrilateral {{ABCD}} sum to {{180°}}, so {{∠ADC = 180° - 104° = 76°}}. Angles on straight line {{ADE}} sum to {{180°}}, giving {{∠CDE = 180° - 76° = 104°}} (the exterior angle of a cyclic quad equals the interior opposite angle!). {{76°}} stops one step early.",
        difficulty: "core",
        guideRef: "circle-theorems-angles",
        hints: [
          "Find interior angle {{∠ADC}} using cyclic quadrilateral {{ABCD}}.",
          "Subtract {{∠ADC}} from {{180°}} along straight line {{ADE}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q09",
        question:
          "Chord {{AB}} lies inside a circle with centre {{O}} and radius {{13 cm}}. {{M}} is the midpoint of {{AB}}, and {{OM = 5 cm}}. Find the total length of chord {{AB}}.",
        options: ["{{12 cm}}", "{{24 cm}}", "{{8 cm}}", "{{16 cm}}"],
        answerIndex: 1,
        explanation:
          "The line from the centre to the midpoint of a chord is perpendicular to the chord ({{∠OMA = 90°}}). By Pythagoras, {{AM = sqrt(13^2 - 5^2) = 12 cm}}, so {{AB = 2 * 12 = 24 cm}}. {{12 cm}} forgets to double {{AM}}.",
        difficulty: "challenge",
        guideRef: "circle-theorems-angles",
        hints: [
          "Since {{OA = OB = 13 cm}} and {{M}} is the midpoint of {{AB}}, {{OM}} meets {{AB}} at {{90°}}.",
          "Use Pythagoras in right-angled triangle {{OMA}} to find {{AM}}.",
          "Double {{AM}} to get the full chord {{AB}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q10",
        question:
          "Points {{A, B, C, D}} lie in order around a circle with centre {{O}} such that {{BD}} is a **diameter**. Given {{∠BDC = 29°}}, find {{∠DAC}}.",
        options: ["{{58°}}", "{{29°}}", "{{61°}}", "{{119°}}"],
        answerIndex: 2,
        explanation:
          "Since {{BD}} is a diameter, {{∠BCD = 90°}} (angle in a semicircle), so in {{△BCD}}, {{∠CBD = 180° - 90° - 29° = 61°}}. Both {{∠DAC}} and {{∠CBD}} stand on chord {{CD}} in the same segment, so {{∠DAC = 61°}}. {{29°}} confuses arc {{CD}} with arc {{BC}}.",
        difficulty: "challenge",
        guideRef: "circle-theorems-angles",
        hints: [
          "Use diameter {{BD}} to identify a {{90°}} angle in {{△BCD}}.",
          "Find {{∠CBD}} using the angle sum of {{△BCD}}.",
          "Which chord subtends both {{∠CBD}} and {{∠DAC}}?",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q11",
        question:
          "Two tangents {{PA}} and {{PB}} from external point {{P}} touch a circle at {{A}} and {{B}}, and {{C}} lies on the major arc {{AB}}. Given {{∠APB = 44°}}, find {{∠ACB}}.",
        options: ["{{68°}}", "{{136°}}", "{{46°}}", "{{44°}}"],
        answerIndex: 0,
        explanation:
          "In isosceles {{△PAB}} ({{PA = PB}}), {{∠PAB = (180° - 44°)/2 = 68°}}, and by the alternate segment theorem {{∠ACB = ∠PAB = 68°}} (equivalently {{∠AOB = 136° => ∠ACB = 68°}}). {{136°}} stops at the central angle {{∠AOB}}.",
        difficulty: "core",
        guideRef: "tangents-alternate-chords",
        hints: [
          "Either use {{PA = PB}} to find {{∠PAB}} and apply the alternate segment theorem...",
          "...or draw radii {{OA, OB}} to find {{∠AOB = 180° - 44°}} and halve it!",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q12",
        question:
          "Chords {{AB}} and {{CD}} intersect inside a circle at {{P}}, with {{AP = (x + 1) cm}}, {{PB = 6 cm}}, {{CP = 3 cm}} and {{PD = (3x - 1) cm}}. Find {{x}}.",
        options: ["{{5}}", "{{2}}", "{{1}}", "{{3}}"],
        answerIndex: 3,
        explanation:
          "Using {{AP * PB = CP * PD}}: {{6(x + 1) = 3(3x - 1) => 6x + 6 = 9x - 3 => 3x = 9 => x = 3}}. {{1}} comes from forgetting to multiply the second term inside each bracket.",
        difficulty: "core",
        guideRef: "tangents-alternate-chords",
        hints: [
          "Equate products of chord segments: {{6(x + 1) = 3(3x - 1)}}.",
          "Expand both brackets carefully and solve the linear equation.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q13",
        question:
          "From an external point {{P}}, tangent {{PT}} touches a circle of centre {{O}} and radius {{5 cm}} at {{T}}. The line from {{P}} through {{O}} meets the circle first at {{A}} and then at {{B}}. Given {{PA = 8 cm}}, find the tangent length {{PT}}.",
        options: ["{{12 cm}}", "{{sqrt(104) cm}}", "{{sqrt(80) cm}}", "{{13 cm}}"],
        answerIndex: 0,
        explanation:
          "Diameter {{AB = 2 * 5 = 10 cm}}, so {{PB = 8 + 10 = 18 cm}}. By {{PT^2 = PA * PB = 8 * 18 = 144}}, {{PT = 12 cm}} (confirmed by Pythagoras in {{△OTP}}: {{OP = 13, OT = 5 => PT = 12}}). {{sqrt(80) cm}} wrongly multiplies {{PA * AB = 8 * 10}}.",
        difficulty: "challenge",
        guideRef: "tangents-alternate-chords",
        hints: [
          "Since {{AB}} passes through {{O}}, {{AB}} is a diameter of length {{10 cm}}, so {{PB = PA + 10}}.",
          "Apply {{PT^2 = PA * PB}} (or Pythagoras in right-angled {{△OTP}} with {{OP = 8 + 5 = 13 cm}}).",
          "Take the square root of {{144}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q14",
        question:
          "Archimedes compared three solids of equal base radius {{r}} and equal total height {{2r}}: a **cone** (radius {{r}}, height {{2r}}), a **sphere** (radius {{r}}), and a **cylinder** (radius {{r}}, height {{2r}}). What is the ratio {{V_\"cone\" : V_\"sphere\" : V_\"cylinder\"}}?",
        options: ["{{1 : 2 : 3}}", "{{2 : 3 : 6}}", "{{1 : 3 : 6}}", "{{1 : 4 : 6}}"],
        answerIndex: 0,
        explanation:
          "{{V_\"cone\" = (1/3) * pi * r^2 * (2r) = (2/3) * pi * r^3}}, {{V_\"sphere\" = (4/3) * pi * r^3}}, and {{V_\"cylinder\" = pi * r^2 * (2r) = (6/3) * pi * r^3}}. Dividing through by {{(2/3) * pi * r^3}} gives {{1 : 2 : 3}}. {{1 : 4 : 6}} forgets the height of the cone and cylinder is {{2r}}, not {{r}}.",
        difficulty: "challenge",
        guideRef: "cones-spheres-frustums",
        hints: [
          "Substitute height {{h = 2r}} into the cone and cylinder volume formulas.",
          "Write all three volumes over a common denominator of {{3}}.",
          "Divide the numerators {{2 : 4 : 6}} by {{2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "mensuration-circles-m3-q15",
        question:
          "Water is poured into an inverted hollow cone of vertical height {{H}}. When the depth of water measured from the bottom apex is {{h}}, the water occupies exactly **half** the volume of the cone. What is {{h / H}}?",
        options: ["{{1/2}}", "{{1/8}}", "{{1 / sqrt(2)}}", "{{1 / cbrt(2)}}"],
        answerIndex: 3,
        explanation:
          "The cone of water and the full cone are mathematically similar with linear ratio {{k = h / H}}. Since {{k^3 = V_\"water\" / V_\"cone\" = 1/2}}, taking the cube root gives {{h / H = 1 / cbrt(2)}}. {{1/2}} confuses volume with length.",
        difficulty: "challenge",
        guideRef: "area-volume-similarity",
        hints: [
          "The water inside an inverted cone forms a smaller **mathematically similar** cone!",
          "Set the volume scale factor {{k^3 = (h / H)^3}} equal to {{1/2}}.",
          "Take the cube root of both sides.",
        ],
      },
    ],
  },
];

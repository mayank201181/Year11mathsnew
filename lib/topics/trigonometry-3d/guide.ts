import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "trigonometry-3d",
  title: "Sine & Cosine Rules, 3D Trig & Trig Graphs",
  strand: "Geometry & Trigonometry",
  icon: "📐",
  summary: "Conquer exact trig surds, 3D shadow triangles, the obtuse Sine Rule trap, Cosine Rule, bearings and wave symmetry.",
  intro:
    "In Edexcel 4MA1 Higher, trigonometry steps out of flat right-angled triangles into three-dimensional solids, non-right-angled navigation triangles, and periodic waves across {{0° <= x <= 360°}}. Almost every high-tariff problem comes down to two habits: **extracting a clean 2D triangle** from a messy 3D or bearing diagram, and **checking whether symmetry hides a second obtuse or reflex angle**.",
  guide: [
    {
      id: "pythagoras-exact-trig",
      heading: "Right-angled trig & exact values (30°, 45°, 60°)",
      discovery: {
        problem:
          "Slice an equilateral triangle of side {{2}} straight down its line of symmetry. Without touching a calculator, how long is the vertical height, and what are {{sin 60°}}, {{cos 60°}} and {{tan 30°}} as exact surds?",
        idea:
          "The base splits into {{1}} and {{1}}, so Pythagoras gives height {{sqrt(2^2 - 1^2) = sqrt(3)}}. Reading SOHCAHTOA off that {{1}}-{{sqrt(3)}}-{{2}} half-triangle gives {{sin 60° = sqrt(3)/2}}, {{cos 60° = 1/2}} and {{tan 30° = 1/sqrt(3) = sqrt(3)/3}}.",
      },
      body:
        "In any right-angled triangle, label **Hypotenuse (H)** opposite the {{90°}} angle, **Opposite (O)** opposite your chosen angle {{theta}}, and **Adjacent (A)** next to {{theta}}:\n\n    {{sin theta = O/H}},    {{cos theta = A/H}},    {{tan theta = O/A}}\n\n- **Angles of elevation and depression** are ALWAYS measured from the **horizontal** (never from a vertical cliff or mast). Because two horizontals are parallel, the angle of depression from the top equals the alternate angle of elevation from the bottom.\n- **Two reference triangles** generate every interior exact value in 4MA1 Higher:\n  1. Isosceles right-angled triangle with legs {{1, 1}} and hypotenuse {{sqrt(2)}} → gives {{45°}}.\n  2. Bisected equilateral triangle with sides {{1, sqrt(3), 2}} → gives {{30°}} and {{60°}}.\n\n| Angle {{theta}} | {{0°}} | {{30°}} | {{45°}} | {{60°}} | {{90°}} |\n|---|---|---|---|---|---|\n| {{sin theta}} | {{0}} | {{1/2}} | {{sqrt(2)/2}} | {{sqrt(3)/2}} | {{1}} |\n| {{cos theta}} | {{1}} | {{sqrt(3)/2}} | {{sqrt(2)/2}} | {{1/2}} | {{0}} |\n| {{tan theta}} | {{0}} | {{sqrt(3)/3}} | {{1}} | {{sqrt(3)}} | not defined |",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 190" role="img" aria-label="Reference 45-45-90 triangle with sides 1, 1, root 2 and 30-60-90 triangle with sides 1, root 3, 2"><rect x="4" y="4" width="452" height="182" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><polygon points="45,152 165,152 165,32" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.2"/><rect x="151" y="138" width="14" height="14" fill="none" stroke="#1d4ed8" stroke-width="1.6"/><text x="73" y="145" font-size="12" font-weight="700" fill="#1e3a8a">45°</text><text x="138" y="66" font-size="12" font-weight="700" fill="#1e3a8a">45°</text><text x="105" y="170" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">1</text><text x="180" y="96" font-size="13" font-weight="700" fill="#0f172a">1</text><text x="92" y="84" font-size="13" font-weight="700" fill="#1d4ed8">√2</text><polygon points="270,152 400,152 400,26" fill="#fef3c7" stroke="#b45309" stroke-width="2.2"/><rect x="386" y="138" width="14" height="14" fill="none" stroke="#b45309" stroke-width="1.6"/><text x="298" y="145" font-size="12" font-weight="700" fill="#92400e">30°</text><text x="372" y="58" font-size="12" font-weight="700" fill="#92400e">60°</text><text x="335" y="170" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a">√3</text><text x="415" y="94" font-size="13" font-weight="700" fill="#0f172a">1</text><text x="322" y="80" font-size="13" font-weight="700" fill="#b45309">2</text></svg>`,
      diagramCaption: "Draw these two mini-triangles in the margin whenever an 'exact value' surd question appears.",
      workedExamples: [
        {
          title: "Combining exact trigonometric values as surds",
          problem: "Without using a calculator, show that {{sin 60° * cos 30° + tan 45° = 7/4}}.",
          steps: [
            "Substitute exact values: {{sin 60° = sqrt(3)/2}}, {{cos 30° = sqrt(3)/2}}, and {{tan 45° = 1}}.",
            "Multiply the surd fractions: {{(sqrt(3)/2) * (sqrt(3)/2) = 3/4}}.",
            "Add {{1}}: {{3/4 + 4/4 = 7/4}}.",
          ],
          answer: "{{7/4}}",
          yourTurn: {
            question: "Work out the exact value of {{2 cos 60° + (sin 45°)^2}}. Give your answer as an improper fraction in its simplest form.",
            answer: { type: "fraction", n: 3, d: 2, simplest: true },
            solution: "{{2 * (1/2) + (sqrt(2)/2)^2 = 1 + 2/4 = 1 + 1/2 = 3/2}}.",
          },
        },
        {
          title: "Angle of depression from a cliff",
          problem: "From the top of a vertical {{42}} m cliff, the angle of depression to a buoy is {{28°}}. Find the horizontal distance from the foot of the cliff to the buoy, to 1 decimal place.",
          steps: [
            "Draw a horizontal line at the cliff top; by alternate angles, the angle of elevation at the buoy is also {{28°}}.",
            "Opposite = {{42}} m, Adjacent = {{d}} m, so {{tan 28° = 42/d}}.",
            "Rearrange: {{d = 42 / (tan 28°) = 78.9906... = 79.0}} m (1 d.p.).",
          ],
          answer: "79.0 m",
        },
      ],
      keyPoints: [
        "Label O, A, H relative to the target angle before picking SOH, CAH or TOA.",
        "Elevation and depression are ALWAYS measured from the horizontal.",
        "Notice the complementary swap: {{sin 30° = cos 60° = 1/2}} and {{sin 60° = cos 30° = sqrt(3)/2}}.",
      ],
      whyItWorks:
        "All right-angled triangles sharing the same acute angle {{theta}} are mathematically similar, so the side ratios {{O/H}}, {{A/H}} and {{O/A}} depend only on {{theta}}, never on the size of the triangle.",
      strategies: ["Sketch the 1-1-√2 and 1-√3-2 triangles", "Draw the horizontal line for depression"],
      thinkDeeper: "Why does {{(sin theta)^2 + (cos theta)^2 = 1}} hold for every acute angle {{theta}}? Prove it in one line using Pythagoras on {{O, A, H}}.",
    },
    {
      id: "three-dimensional-trig",
      heading: "3D Pythagoras & angle between a line and a plane",
      discovery: {
        problem:
          "A cuboid pencil case measures {{12}} cm long, {{9}} cm wide and {{8}} cm tall. Can a {{16.5}} cm unsharpened pencil fit flat inside from bottom-front-left corner {{A}} to top-back-right corner {{G}}?",
        idea:
          "Find the floor diagonal first: {{AC = sqrt(12^2 + 9^2) = 15}} cm. Stand up the vertical right-angled triangle {{ACG}} with base {{15}} cm and height {{8}} cm: {{AG = sqrt(15^2 + 8^2) = 17}} cm — yes, with {{0.5}} cm to spare!",
      },
      body:
        "Never try to do trigonometry across a skewed 3D picture in your head. **Pull out a flat 2D right-angled triangle** and draw it separately with its three vertices labelled.\n\n- **3D Pythagoras (cuboid space diagonal):**\n\n    {{d = sqrt(l^2 + w^2 + h^2)}}\n\n- **Angle between a line {{AG}} and a horizontal plane {{ABCD}}:**\n  1. Drop a perpendicular from {{G}} straight down onto the plane to meet its **foot** {{C}}.\n  2. Join {{A}} to {{C}} to draw the **shadow** of {{AG}} on the plane.\n  3. The required angle is ALWAYS {{angle GAC}} — the angle between the line and its shadow on the plane.\n- **Pyramids — sloping EDGE vs sloping FACE (huge Edexcel distinction!):**\n  - Angle between **sloping edge {{VC}}** and base {{ABCD}} → use **half-diagonal {{OC}}** in right triangle {{VOC}}.\n  - Angle between **sloping face {{VBC}}** and base {{ABCD}} → drop to the **midpoint {{M}}** of edge {{BC}} and use {{OM}} in right triangle {{VOM}}.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 210" role="img" aria-label="Cuboid ABCDEFGH showing base diagonal AC as the shadow and internal right-angled triangle ACG"><rect x="4" y="4" width="452" height="202" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><polygon points="60,168 230,168 295,124 125,124" fill="#f1f5f9" stroke="#64748b" stroke-width="1.6"/><line x1="125" y1="124" x2="125" y2="42" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/><polygon points="60,168 295,124 295,42" fill="#fde68a" fill-opacity="0.55" stroke="none"/><line x1="60" y1="168" x2="295" y2="124" stroke="#d97706" stroke-width="2.4" stroke-dasharray="6,3"/><line x1="60" y1="168" x2="295" y2="42" stroke="#dc2626" stroke-width="2.8"/><line x1="295" y1="124" x2="295" y2="42" stroke="#1d4ed8" stroke-width="2.6"/><rect x="60" y="86" width="170" height="82" fill="none" stroke="#334155" stroke-width="2"/><line x1="60" y1="86" x2="125" y2="42" stroke="#334155" stroke-width="2"/><line x1="230" y1="86" x2="295" y2="42" stroke="#334155" stroke-width="2"/><line x1="125" y1="42" x2="295" y2="42" stroke="#334155" stroke-width="2"/><polyline points="283,126 283,114 295,112" fill="none" stroke="#0f172a" stroke-width="1.6"/><text x="44" y="176" font-size="13" font-weight="800" fill="#0f172a">A</text><text x="234" y="180" font-size="13" font-weight="800" fill="#0f172a">B</text><text x="303" y="130" font-size="13" font-weight="800" fill="#0f172a">C</text><text x="112" y="121" font-size="12" font-weight="700" fill="#64748b">D</text><text x="303" y="44" font-size="13" font-weight="800" fill="#dc2626">G</text><text x="145" y="186" font-size="12" font-weight="700" fill="#334155">12 cm</text><text x="272" y="156" font-size="12" font-weight="700" fill="#334155">9 cm</text><text x="305" y="88" font-size="12" font-weight="700" fill="#1d4ed8">8 cm</text><text x="184" y="139" font-size="11" font-weight="700" fill="#b45309">shadow AC = 15</text><text x="152" y="96" font-size="12" font-weight="800" fill="#dc2626">AG = 17</text><polygon points="348,168 436,168 436,78" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><rect x="424" y="156" width="12" height="12" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="337" y="173" font-size="12" font-weight="700" fill="#0f172a">A</text><text x="440" y="173" font-size="12" font-weight="700" fill="#0f172a">C</text><text x="440" y="76" font-size="12" font-weight="700" fill="#dc2626">G</text><text x="372" y="163" font-size="11" font-weight="700" fill="#dc2626">θ</text><text x="392" y="185" font-size="11" font-weight="700" text-anchor="middle" fill="#b45309">15 cm</text></svg>`,
      diagramCaption: "Drop vertically from G to C on the base: AC is the shadow, so angle GAC is the angle with the plane.",
      workedExamples: [
        {
          title: "Angle between a space diagonal and the base of a cuboid",
          problem: "Cuboid {{ABCDEFGH}} has horizontal base {{ABCD}} with {{AB = 12}} cm, {{BC = 9}} cm and vertical edge {{CG = 8}} cm. Calculate the angle between {{AG}} and the plane {{ABCD}}, to 1 decimal place.",
          steps: [
            "Find the shadow diagonal {{AC}} on the floor: {{AC = sqrt(12^2 + 9^2) = sqrt(225) = 15}} cm.",
            "Extract vertical right-angled triangle {{ACG}} (right angle at {{C}}) with {{AC = 15}} cm and {{CG = 8}} cm.",
            "{{tan(angle GAC) = 8/15}}, so {{angle GAC = 28.072...° = 28.1°}} (1 d.p.).",
          ],
          answer: "28.1°",
          yourTurn: {
            question: "A cuboid measures {{8}} cm long, {{6}} cm wide and {{24}} cm high. Find the exact length of its space diagonal in cm.",
            answer: { type: "number", value: 26 },
            solution: "Floor diagonal {{= sqrt(8^2 + 6^2) = 10}} cm, then space diagonal {{= sqrt(10^2 + 24^2) = sqrt(676) = 26}} cm.",
          },
        },
        {
          title: "Angle between a sloping face and the base of a pyramid",
          problem: "A right pyramid {{VABCD}} has a horizontal square base {{ABCD}} of side {{10}} cm and vertical height {{VO = 12}} cm above the centre {{O}}. Find the angle between sloping face {{VBC}} and the base {{ABCD}}, to 1 decimal place.",
          steps: [
            "Let {{M}} be the midpoint of {{BC}} (because lines of steepest slope on face {{VBC}} and base {{ABCD}} meet {{BC}} at {{90°}}).",
            "Distance from centre {{O}} to midpoint {{M}} is half the side length: {{OM = 10 / 2 = 5}} cm.",
            "In right-angled triangle {{VOM}}: {{tan(angle VMO) = 12/5 = 2.4}}, giving {{angle VMO = 67.4°}} (1 d.p.).",
          ],
          answer: "67.4°",
        },
      ],
      keyPoints: [
        "Keep unrounded surds (like {{sqrt(85)}}) in calculator memory until the final rounding step.",
        "Line-to-plane angle = angle between the line and its orthogonal shadow on that plane.",
        "Pyramid face-to-base uses edge midpoint {{M}}; pyramid edge-to-base uses corner {{C}}.",
      ],
      whyItWorks:
        "Dropping a perpendicular {{GC}} to the plane guarantees {{GC}} is at {{90°}} to EVERY line on the floor passing through {{C}} — including the diagonal {{AC}} — turning 3D geometry into two linked 2D right-angled steps.",
      strategies: ["Shine a torch from above to find the shadow", "Re-sketch the extracted 2D right-angled triangle"],
      thinkDeeper: "In our {{10}} cm square-base pyramid of height {{12}} cm, is the angle of a **sloping edge** {{VC}} to the base steeper or gentler than the **sloping face** angle {{67.4°}}? Why must that always be true?",
    },
    {
      id: "sine-rule-ambiguous",
      heading: "The Sine Rule & the obtuse ambiguous case",
      discovery: {
        problem:
          "Your calculator says {{sin 50° = 0.7660...}}. Now type {{sin 130°}}. Why do TWO completely different triangle angles have the exact same sine — and which one does {{sin^(-1)}} hide from you?",
        idea:
          "Because {{sin(180° - theta) = sin theta}}, every positive sine ratio {{k < 1}} corresponds to an **acute** angle {{theta}} AND an **obtuse** supplement {{180° - theta}}. Your calculator's {{sin^(-1)}} key only ever returns the acute one!",
      },
      body:
        "In any triangle {{ABC}}, side {{a}} lies opposite angle {{A}}, {{b}} opposite {{B}}, and {{c}} opposite {{C}}. Put the unknown on top:\n\n- **Finding a missing side:**\n\n    {{a/(sin A) = b/(sin B) = c/(sin C)}}\n\n- **Finding a missing angle:**\n\n    {{(sin A)/a = (sin B)/b = (sin C)/c}}\n\n- **When to use the Sine Rule:** whenever you know a **matching opposite pair** (an angle and the side opposite it) plus one other piece.\n- **The Ambiguous Case (SSA — Grade 9 Trap!):** When given two sides and a non-included acute angle (e.g. {{angle P = 32°}}, {{PQ = 14}} cm and shorter opposite side {{QR = 9}} cm), swinging side {{QR}} like a compass arc cuts the base line **twice** — once making an acute angle {{theta}} and once making an obtuse angle {{180° - theta}}. If Edexcel states **'angle {{R}} is obtuse'**, you MUST subtract the calculator's acute angle from {{180°}}!",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 190" role="img" aria-label="Ambiguous SSA Sine Rule triangle showing side 9 cm swinging to two positions R1 obtuse and R2 acute"><rect x="4" y="4" width="452" height="182" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><line x1="45" y1="154" x2="420" y2="154" stroke="#64748b" stroke-width="2"/><line x1="45" y1="154" x2="265" y2="34" stroke="#0f172a" stroke-width="2.4"/><line x1="265" y1="34" x2="188" y2="154" stroke="#dc2626" stroke-width="2.6"/><line x1="265" y1="34" x2="342" y2="154" stroke="#2563eb" stroke-width="2.2" stroke-dasharray="6,4"/><path d="M 172 135 A 145 145 0 0 0 358 135" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/><text x="32" y="160" font-size="13" font-weight="800" fill="#0f172a">P</text><text x="262" y="25" font-size="13" font-weight="800" fill="#0f172a">Q</text><text x="176" y="172" font-size="12" font-weight="800" fill="#dc2626">R₁ (obtuse)</text><text x="332" y="172" font-size="12" font-weight="800" fill="#2563eb">R₂ (acute)</text><text x="80" y="147" font-size="12" font-weight="700" fill="#0f172a">32°</text><text x="135" y="84" font-size="12" font-weight="700" fill="#0f172a">14 cm</text><text x="206" y="96" font-size="12" font-weight="800" fill="#dc2626">9 cm</text><text x="313" y="96" font-size="12" font-weight="700" fill="#2563eb">9 cm</text><text x="142" y="146" font-size="11" font-weight="800" fill="#dc2626">124.5°</text><text x="303" y="146" font-size="11" font-weight="700" fill="#2563eb">55.5°</text></svg>`,
      diagramCaption: "Isosceles triangle Q R₁ R₂ forces the acute outer angle θ = 55.5° and the obtuse inner angle 180° − θ = 124.5°.",
      workedExamples: [
        {
          title: "Obtuse angle via the Sine Rule",
          problem: "In triangle {{PQR}}, {{PQ = 14}} cm, {{QR = 9}} cm and {{angle QPR = 32°}}. Given that **angle {{PRQ}} is obtuse**, find {{angle PRQ}} correct to 1 decimal place.",
          steps: [
            "Write the Sine Rule with angles on top: {{(sin R)/14 = (sin 32°)/9}}.",
            "Evaluate: {{sin R = (14 sin 32°)/9 = 0.824318...}}, so the calculator gives acute angle {{55.519...°}}.",
            "Because {{angle PRQ}} is obtuse, subtract from {{180°}}: {{180° - 55.519...° = 124.5°}} (1 d.p.).",
          ],
          answer: "124.5°",
          yourTurn: {
            question: "In a triangle, {{sin theta = 0.5}} and {{theta}} is **obtuse**. Find the exact size of angle {{theta}} in degrees.",
            answer: { type: "number", value: 150 },
            solution: "The acute angle with sine {{0.5}} is {{30°}}, so the obtuse angle is {{180° - 30° = 150°}}.",
          },
        },
        {
          title: "Finding a side with the Sine Rule",
          problem: "In triangle {{ABC}}, {{angle A = 42°}}, {{angle B = 73°}} and {{BC = 11}} cm. Find {{AC}} to 1 decimal place.",
          steps: [
            "Match opposite pairs: {{BC = a = 11}} cm is opposite {{42°}}, and {{AC = b}} is opposite {{73°}}.",
            "{{b / (sin 73°) = 11 / (sin 42°)}}.",
            "{{b = (11 sin 73°) / (sin 42°) = 15.7209... = 15.7}} cm (1 d.p.).",
          ],
          answer: "15.7 cm",
        },
      ],
      keyPoints: [
        "Draw arrows connecting each known angle to its opposite side — a complete arrow means Sine Rule!",
        "Put unknown on the numerator so rearrangement takes a single multiplication.",
        "Always scan the question stem for the word **obtuse**; if present, compute {{180° - theta}}.",
      ],
      whyItWorks:
        "Dropping perpendicular height {{h}} from {{C}} to {{AB}} gives {{h = b sin A}} in one right-angled piece and {{h = a sin B}} in the other. Equating {{b sin A = a sin B}} divides immediately into {{a/(sin A) = b/(sin B)}}.",
      strategies: ["Draw opposite-pair arrows", "Check 180° − θ whenever SSA has shorter side opposite given angle"],
      thinkDeeper: "Why can the **Cosine Rule** NEVER suffer from an ambiguous acute/obtuse angle trap on {{0° < A < 180°}}, whereas the Sine Rule can?",
    },
    {
      id: "cosine-rule-triangle-area",
      heading: "The Cosine Rule & triangle area ½ab sin C",
      discovery: {
        problem:
          "Open a pair of compasses with arms {{7}} cm and {{8}} cm from {{90°}} out to an obtuse {{120°}}. Must the third side {{a}} become **longer** or **shorter** than {{sqrt(7^2 + 8^2) = sqrt(113)}} cm — and what happens to {{-2bc cos 120°}}?",
        idea:
          "Opening past {{90°}} stretches {{a}} **longer**! Since {{cos 120° = -0.5}}, subtracting {{2(7)(8)(-0.5)}} **adds** {{56}}, giving {{a^2 = 49 + 64 + 56 = 169}} so {{a = 13}} cm!",
      },
      body:
        "Use the **Cosine Rule** when there is **no matching opposite pair** — either **SAS** (two sides and the included angle) or **SSS** (all three sides):\n\n- **Finding the third side (SAS):**\n\n    {{a^2 = b^2 + c^2 - 2bc cos A}}\n\n- **Finding any angle from three sides (SSS):**\n\n    {{cos A = (b^2 + c^2 - a^2)/(2bc)}}\n\n- **Sign trap when {{A > 90°}}:** For obtuse angles, {{cos A < 0}}, so {{-2bc cos A}} turns **positive** (making {{a^2 > b^2 + c^2}}). Likewise, in SSS, if {{b^2 + c^2 - a^2 < 0}}, your calculator automatically outputs the obtuse angle!\n- **Area of ANY triangle (SAS):**\n\n    {{\"Area\" = (1/2)ab sin C}}\n\n  where {{C}} MUST be the **included angle** sandwiched between sides {{a}} and {{b}}. Notice that the **largest angle** in any triangle is always opposite the **longest side**.",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 185" role="img" aria-label="Obtuse triangle ABC with sides b=7 cm, c=8 cm, included angle A=120 degrees, opposite side a=13 cm and SAS area formula"><rect x="4" y="4" width="452" height="177" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><polygon points="155,148 395,148 82,42" fill="#ede9fe" stroke="#6d28d9" stroke-width="2.4"/><path d="M 183 148 A 28 28 0 0 0 139 125" fill="none" stroke="#dc2626" stroke-width="2"/><text x="148" y="168" font-size="13" font-weight="800" fill="#0f172a">A</text><text x="403" y="153" font-size="13" font-weight="800" fill="#0f172a">B</text><text x="66" y="40" font-size="13" font-weight="800" fill="#0f172a">C</text><text x="166" y="133" font-size="12" font-weight="800" fill="#dc2626">120°</text><text x="275" y="168" font-size="12" font-weight="700" text-anchor="middle" fill="#4c1d95">c = 8 cm</text><text x="98" y="106" font-size="12" font-weight="700" fill="#4c1d95">b = 7 cm</text><text x="255" y="84" font-size="13" font-weight="800" fill="#dc2626">a = 13 cm</text><text x="342" y="44" font-size="12" font-weight="700" text-anchor="middle" fill="#334155">SAS sandwich:</text><text x="342" y="62" font-size="12" font-weight="800" text-anchor="middle" fill="#6d28d9">Area = ½ bc sin A</text></svg>`,
      diagramCaption: "Both the Cosine Rule for side a and the ½bc sin A area formula use the SAS 'V-sandwich' of two sides and their included angle.",
      workedExamples: [
        {
          title: "Cosine Rule with an obtuse included angle",
          problem: "In triangle {{ABC}}, {{AB = 8}} cm, {{AC = 7}} cm and {{angle BAC = 120°}}. Find the exact length of {{BC}}.",
          steps: [
            "Apply {{a^2 = b^2 + c^2 - 2bc cos A}}: {{BC^2 = 7^2 + 8^2 - 2(7)(8) cos 120°}}.",
            "Since {{cos 120° = -1/2}}, {{-2(56)(-1/2) = +56}} (minus times minus is plus!).",
            "{{BC^2 = 49 + 64 + 56 = 169}}, so {{BC = sqrt(169) = 13}} cm.",
          ],
          answer: "13 cm",
          yourTurn: {
            question: "In triangle {{PQR}}, {{PQ = 3}} cm, {{PR = 5}} cm and {{angle QPR = 120°}}. Find the exact length of {{QR}} in cm.",
            answer: { type: "number", value: 7 },
            solution: "{{QR^2 = 3^2 + 5^2 - 2(3)(5)(-1/2) = 9 + 25 + 15 = 49}}, so {{QR = 7}} cm.",
          },
        },
        {
          title: "Finding the largest angle and area from SSS",
          problem: "A triangular plot has sides {{8}} m, {{11}} m and {{15}} m. Find (a) the largest angle in the triangle, and (b) its area, both to 1 decimal place.",
          steps: [
            "The largest angle {{C}} lies opposite the longest side {{c = 15}} m: {{cos C = (8^2 + 11^2 - 15^2)/(2 * 8 * 11) = -40/176 = -5/22}}.",
            "{{C = 103.1366...° = 103.1°}} (1 d.p.).",
            "Use the unrounded angle in {{(1/2)ab sin C}}: {{\"Area\" = (1/2)(8)(11) sin(103.1366°) = 42.848... = 42.8}} m² (1 d.p.).",
          ],
          answer: "103.1° and 42.8 m²",
        },
      ],
      keyPoints: [
        "Never collapse {{b^2 + c^2 - 2bc}} first before multiplying by {{cos A}} — BIDMAS binds {{2bc}} to {{cos A}}!",
        "Remember to take the square root at the end of {{a^2 = ...}}.",
        "In SSS rearrange {{cos A = (b^2 + c^2 - a^2)/(2bc)}}, the subtracted square {{-a^2}} MUST match the target angle {{A}}.",
      ],
      whyItWorks:
        "When {{A = 90°}}, {{cos 90° = 0}} so {{-2bc cos A}} vanishes, reducing {{a^2 = b^2 + c^2 - 2bc cos A}} straight back to Pythagoras' Theorem! The {{-2bc cos A}} term is simply the correction for tilting angle {{A}} away from {{90°}}.",
      strategies: ["Check SAS vs SSS before choosing a rule", "Always pair largest angle with longest side"],
      thinkDeeper: "A parallelogram has adjacent sides {{6}} cm and {{10}} cm and acute angle {{55°}}. Why is its total area simply {{6 * 10 * sin 55°}} (with no {{1/2}})?",
    },
    {
      id: "bearings-and-trig-graphs",
      heading: "Three-figure bearings & trigonometric graphs",
      discovery: {
        problem:
          "A yacht sails from {{A}} to {{B}} on a bearing of {{050°}}. Without drawing any extra distances, what is the back-bearing of {{A}} **from** {{B}}, and why?",
        idea:
          "Draw parallel North lines at {{A}} and {{B}}. Co-interior angles add to {{180°}}, so South-to-{{BA}} at {{B}} is {{50°}} clockwise past {{180°}}: back-bearing {{= 050° + 180° = 230°}}!",
      },
      body:
        "**Three-figure bearings** follow three iron rules: measure **from North**, turn **clockwise**, and write **three digits** (e.g. {{065°}}, never {{65°}}). Always pay attention to the word **FROM** — the bearing of {{B}} **from** {{A}} puts your North compass needle at **{{A}}**.\n\n- **Parallel North lines unlock interior triangle angles:** Co-interior angles between two North arrows sum to {{180°}}, and back-bearings differ by {{+-180°}}.\n\n**Trigonometric graphs on {{0° <= x <= 360°}}** let you find ALL solutions to equations like {{sin x = k}} or {{cos x = k}} using wave symmetry:\n\n| Graph | Period | Range | Symmetry rule on {{0° <= x <= 360°}} |\n|---|---|---|---|\n| {{y = sin x}} | {{360°}} | {{-1 <= y <= 1}} | Peaks at {{(90°, 1)}}, trough at {{(270°, -1)}}; pair {{x}} with **{{180° - x}}** (or {{540° - x}} if {{x > 180°}}) |\n| {{y = cos x}} | {{360°}} | {{-1 <= y <= 1}} | Symmetric about {{x = 180°}}, trough at {{(180°, -1)}}; pair {{x}} with **{{360° - x}}** |\n| {{y = tan x}} | {{180°}} | all real {{y}} | Vertical asymptotes at {{x = 90°, 270°}}; repeats every {{180°}}, so pair {{x}} with **{{x + 180°}}** |",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 195" role="img" aria-label="Left: three-figure bearing journey with parallel North arrows at A and B. Right: sine and cosine waves from 0 to 360 degrees showing symmetry"><rect x="4" y="4" width="452" height="187" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><line x1="48" y1="150" x2="48" y2="52" stroke="#0f172a" stroke-width="2"/><polygon points="48,44 43,54 53,54" fill="#0f172a"/><text x="48" y="38" font-size="11" font-weight="800" text-anchor="middle" fill="#0f172a">N</text><line x1="145" y1="90" x2="145" y2="28" stroke="#0f172a" stroke-width="2"/><polygon points="145,20 140,30 150,30" fill="#0f172a"/><text x="145" y="16" font-size="11" font-weight="800" text-anchor="middle" fill="#0f172a">N</text><polygon points="48,150 145,90 162,172" fill="#dcfce7" stroke="#15803d" stroke-width="2.2"/><text x="34" y="158" font-size="12" font-weight="800" fill="#0f172a">A</text><text x="153" y="88" font-size="12" font-weight="800" fill="#0f172a">B</text><text x="170" y="178" font-size="12" font-weight="800" fill="#0f172a">C</text><text x="56" y="114" font-size="11" font-weight="700" fill="#15803d">050°</text><text x="122" y="116" font-size="11" font-weight="800" fill="#dc2626">60°</text><line x1="230" y1="100" x2="442" y2="100" stroke="#64748b" stroke-width="1.5"/><line x1="235" y1="30" x2="235" y2="170" stroke="#64748b" stroke-width="1.5"/><path d="M 235 100 Q 261 32 287 32 Q 313 32 339 100 Q 365 168 391 168 Q 417 168 443 100" fill="none" stroke="#2563eb" stroke-width="2.3"/><path d="M 235 32 Q 261 32 287 100 Q 313 168 339 168 Q 365 168 391 100 Q 417 32 443 32" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><line x1="235" y1="66" x2="443" y2="66" stroke="#d97706" stroke-width="1.3" stroke-dasharray="3,3"/><circle cx="252" cy="66" r="3.5" fill="#1d4ed8"/><circle cx="322" cy="66" r="3.5" fill="#1d4ed8"/><text x="339" y="114" font-size="10" font-weight="700" text-anchor="middle" fill="#334155">180°</text><text x="438" y="114" font-size="10" font-weight="700" text-anchor="end" fill="#334155">360°</text><text x="292" y="24" font-size="11" font-weight="800" fill="#2563eb">sin x</text><text x="392" y="24" font-size="11" font-weight="800" fill="#dc2626">cos x</text></svg>`,
      diagramCaption: "Left: parallel North arrows turn bearings into interior angles. Right: a horizontal line y = k cuts sin x and cos x twice in 0° ≤ x ≤ 360°.",
      workedExamples: [
        {
          title: "Bearings with the Cosine Rule",
          problem: "A ferry sails {{10}} km from {{A}} to {{B}} on a bearing of {{050°}}, then sails {{16}} km from {{B}} to {{C}} on a bearing of {{170°}}. Find the direct distance {{AC}}.",
          steps: [
            "At {{B}}, the back-bearing of {{A}} is {{050° + 180° = 230°}}, while {{BC}} has bearing {{170°}}.",
            "Interior angle {{angle ABC = 230° - 170° = 60°}}.",
            "By the Cosine Rule: {{AC^2 = 10^2 + 16^2 - 2(10)(16) cos 60° = 100 + 256 - 160 = 196}}, so {{AC = 14}} km.",
          ],
          answer: "14 km",
        },
        {
          title: "Solving a trig equation across 0° ≤ x ≤ 360°",
          problem: "Solve {{cos x = -0.5}} for {{0° <= x <= 360°}}.",
          steps: [
            "Principal calculator value: {{x_1 = 120°}}.",
            "Using the symmetry of {{y = cos x}} about {{x = 180°}}, the second root is {{360° - x_1 = 360° - 120° = 240°}}.",
          ],
          answer: "120°, 240°",
          yourTurn: {
            question: "Solve {{sin x = 0.5}} for {{0° <= x <= 360°}}. Give both answers in degrees separated by a comma.",
            answer: { type: "list", values: [30, 150], display: "30°, 150°" },
            solution: "Principal value {{x = 30°}}; by sine wave symmetry, second solution is {{180° - 30° = 150°}}.",
          },
        },
      ],
      keyPoints: [
        "Always draw a fresh North arrow at EVERY vertex in a bearing journey.",
        "Pad bearings below {{100°}} with a leading zero ({{042°}}, {{008°}}).",
        "Memorise the symmetry pairs on {{[0°, 360°]}}: **sin → {{180° - x}}**, **cos → {{360° - x}}**, **tan → {{x + 180°}}**.",
      ],
      whyItWorks:
        "Points on the unit circle at angle {{theta}} have coordinates {{(cos theta, sin theta)}}. Reflecting across the y-axis ({{180° - theta}}) preserves height {{sin theta}}, while reflecting across the x-axis ({{360° - theta}}) preserves horizontal coordinate {{cos theta}}.",
      strategies: ["Draw parallel North lines at every point", "Sketch the 0°–360° wave to spot both intersections"],
      thinkDeeper: "If {{sin x = -0.6}} on {{0° <= x <= 360°}}, your calculator gives {{-36.9°}} (outside the interval!). How do you add {{360°}} and reflect in {{270°}} to land both valid roots inside {{[180°, 360°]}}?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Exact values of {{sin 30°}}, {{sin 45°}}, {{sin 60°}}?", back: "{{1/2}}, {{sqrt(2)/2}}, {{sqrt(3)/2}} (think {{sqrt(1)/2, sqrt(2)/2, sqrt(3)/2}})." },
      { front: "Exact values of {{tan 30°}}, {{tan 45°}}, {{tan 60°}}?", back: "{{sqrt(3)/3}} (or {{1/sqrt(3)}}), {{1}}, {{sqrt(3)}}." },
      { front: "Space diagonal of a cuboid {{l * w * h}}?", back: "{{d = sqrt(l^2 + w^2 + h^2)}}." },
      { front: "How do you define the angle between a line and a horizontal plane?", back: "Drop a perpendicular to the plane to trace the line's shadow; find the angle between the line and its shadow." },
      { front: "Pyramid angle: sloping EDGE vs sloping FACE to base?", back: "Sloping edge uses corner-to-centre half-diagonal {{OC}}; sloping face uses edge-midpoint {{M}} to centre {{OM}}." },
      { front: "When do you use the Sine Rule vs the Cosine Rule?", back: "Sine Rule: known opposite angle–side pair. Cosine Rule: SAS (two sides + included angle) or SSS (all three sides)." },
      { front: "How do you get the obtuse angle in the Sine Rule?", back: "Take the acute angle {{theta}} from {{sin^(-1)}} and compute {{180° - theta}}." },
      { front: "Cosine Rule rearranged for an angle {{A}}?", back: "{{cos A = (b^2 + c^2 - a^2)/(2bc)}} — the subtracted square {{-a^2}} is opposite angle {{A}}." },
      { front: "Area of any non-right-angled triangle?", back: "{{\"Area\" = (1/2)ab sin C}}, where {{C}} is the included angle between {{a}} and {{b}}." },
      { front: "Three rules of bearings?", back: "1. Measure from North. 2. Turn clockwise. 3. Write 3 figures (e.g. {{068°}})." },
      { front: "Secondary solution on {{0° <= x <= 360°}} for {{sin x = k > 0}}?", back: "{{180° - x}} (symmetric about {{x = 90°}})." },
      { front: "Secondary solution on {{0° <= x <= 360°}} for {{cos x = k}} and {{tan x = k}}?", back: "Cosine: {{360° - x}} (symmetric about {{180°}}). Tangent: {{x + 180°}} (period {{180°}})." },
    ],
    mustKnow: [
      "Recall and manipulate exact surd values of {{sin}}, {{cos}} and {{tan}} for {{0°, 30°, 45°, 60°, 90°}}.",
      "Calculate 3D lengths and angles between a line and a plane or between a sloping pyramid face and its base.",
      "Apply the Sine Rule {{a/(sin A) = b/(sin B)}} for sides and {{(sin A)/a = (sin B)/b}} for acute and obtuse angles.",
      "Spot the obtuse ambiguous case ('given that angle X is obtuse') and subtract the acute {{sin^(-1)}} value from {{180°}}.",
      "Apply {{a^2 = b^2 + c^2 - 2bc cos A}} cleanly, especially when {{A > 90°}} makes {{cos A}} negative.",
      "Rearrange the Cosine Rule to find the largest or smallest angle in an SSS triangle.",
      "Combine {{(1/2)ab sin C}} with Sine/Cosine Rule in multi-triangle, sector-segment and quadrilateral problems.",
      "Use parallel North lines and co-interior angles ({{180°}}) to convert 3-figure bearings into triangle angles.",
      "Sketch {{y = sin x}}, {{y = cos x}}, {{y = tan x}} and find all solutions on {{0° <= x <= 360°}} (including transformed curves).",
    ],
    misconceptions: [
      {
        wrong: "Never Write This ❌: In {{a^2 = 7^2 + 8^2 - 2(7)(8) cos 120°}}, computing {{49 + 64 - 112 = 1}} first, or subtracting {{56}} instead of adding.",
        right: "Write This Instead ✅: Multiply {{2(7)(8) cos 120° = 112 * (-0.5) = -56}} first, then subtract: {{113 - (-56) = 169}}.",
      },
      {
        wrong: "Never Write This ❌: Writing bearing {{65°}} or measuring anticlockwise from East/South.",
        right: "Write This Instead ✅: Measure clockwise from North and pad to three digits: {{065°}}.",
      },
      {
        wrong: "Never Write This ❌: Giving calculator output {{55.5°}} when the question says 'angle {{R}} is obtuse'.",
        right: "Write This Instead ✅: Subtract the acute calculator angle from {{180°}}: {{180° - 55.5° = 124.5°}}.",
      },
      {
        wrong: "Never Write This ❌: Using half the base diagonal {{OC}} to find the angle between a pyramid's **sloping face** and its base.",
        right: "Write This Instead ✅: Drop from apex {{V}} to the **midpoint {{M}}** of the base edge and use {{OM}} in right triangle {{VOM}}.",
      },
      {
        wrong: "Never Write This ❌: Measuring an angle of depression downwards from the vertical cliff wall.",
        right: "Write This Instead ✅: Measure depression downwards from the **horizontal** eyeline (equal to alternate elevation from below).",
      },
      {
        wrong: "Never Write This ❌: Giving only {{x = 40°}} when solving {{sin x = 0.643}} for {{0° <= x <= 360°}}.",
        right: "Write This Instead ✅: Sketch the wave and state BOTH roots in range: {{x = 40°}} and {{180° - 40° = 140°}}.",
      },
      {
        wrong: "Never Write This ❌: Leaving {{a^2 = 169}} as the final side length in the Cosine Rule.",
        right: "Write This Instead ✅: Always square-root at the final step: {{a = sqrt(169) = 13}}.",
      },
    ],
    examMistakes: [
      "Calculator left in RADIAN or GRAD mode — always verify `sin(30) = 0.5` at the start of both 4MA1 papers!",
      "Premature rounding of an intermediate diagonal or angle (e.g. rounding {{15.72}} to {{16}}) causing the final 1 d.p. answer to drift outside mark-scheme tolerance.",
      "Misreading 'bearing of A **from** B' by putting the North line at A instead of B.",
      "Using {{(1/2)ab sin C}} with an angle that is NOT the included angle between the two chosen sides.",
      "Forgetting that {{y = tan x}} has period {{180°}} (so secondary root is {{x + 180°}}, NOT {{180° - x}} or {{360° - x}}).",
      "Confusing the smallest angle (opposite shortest side) with the largest angle (opposite longest side) in SSS triangles.",
    ],
    mnemonics: [
      {
        topic: "Exact Sine Finger / Root Ladder",
        device: "√0/2, √1/2, √2/2, √3/2, √4/2",
        explanation: "For 0°, 30°, 45°, 60°, 90°, sin θ climbs √0, √1, √2, √3, √4 all over 2 — and cos θ counts backwards!",
      },
      {
        topic: "Trig Graph Quadrant Signs (0°–360°)",
        device: "CAST / All Students Take Calculus",
        explanation: "0°–90° All positive; 90°–180° Sine positive (180°−θ); 180°–270° Tan positive (180°+θ); 270°–360° Cos positive (360°−θ).",
      },
      {
        topic: "3-Figure Bearings Checklist",
        device: "N-C-3 (North · Clockwise · 3 Digits)",
        explanation: "Start at FROM's North arrow, sweep clockwise, and write three digits with leading zeros if under 100°.",
      },
    ],
    realWorld: [
      { title: "Air Traffic & Marine Navigation", detail: "Pilots and ships compute wind-drift triangles using 3-figure bearings and the Cosine Rule.", emoji: "✈️" },
      { title: "Roof Pitch & Crane Engineering", detail: "Structural engineers use 3D shadow triangles to calculate hip-rafter angles and crane boom clearances.", emoji: "🏗️" },
      { title: "GPS Triangulation & Surveying", detail: "Surveyors measure baseline angles with a theodolite and apply the Sine Rule across rivers and valleys.", emoji: "🛰️" },
      { title: "Sound Waves & AC Electricity", detail: "Pure musical tones and household alternating current follow transformed {{y = A sin(kx)}} curves.", emoji: "🎵" },
    ],
    videos: [
      { title: "3D Trigonometry & Pythagoras (IGCSE Higher)", channel: "GCSE Maths Tutor", url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+3d+trigonometry+pythagoras" },
      { title: "Sine Rule Including the Ambiguous Obtuse Case", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+sine+rule+ambiguous+case+obtuse" },
      { title: "Cosine Rule, Bearings & Area of a Triangle", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+cosine+rule+bearings+igcse" },
      { title: "Trigonometric Graphs & Solving Trig Equations", channel: "TLMaths", url: "https://www.youtube.com/results?search_query=igcse+higher+trig+graphs+solving+equations+0+to+360" },
    ],
    formulas: [
      { name: "SOHCAHTOA", formula: "{{sin theta = O/H}},  {{cos theta = A/H}},  {{tan theta = O/A}}", note: "Right-angled triangles only" },
      { name: "3D Pythagoras (Cuboid)", formula: "{{d = sqrt(l^2 + w^2 + h^2)}}", note: "Space diagonal" },
      { name: "Sine Rule", formula: "{{a/(sin A) = b/(sin B) = c/(sin C)}}", note: "Check {{180° - theta}} if obtuse!" },
      { name: "Cosine Rule (Side)", formula: "{{a^2 = b^2 + c^2 - 2bc cos A}}", note: "SAS; watch {{-2bc cos A > 0}} if {{A > 90°}}" },
      { name: "Cosine Rule (Angle)", formula: "{{cos A = (b^2 + c^2 - a^2)/(2bc)}}", note: "SSS; largest angle opposite longest side" },
      { name: "Area of Any Triangle", formula: "{{\"Area\" = (1/2)ab sin C}}", note: "{{C}} must be included between {{a}} and {{b}}" },
      { name: "Wave Symmetry (0°–360°)", formula: "{{sin(180° - x) = sin x}},  {{cos(360° - x) = cos x}},  {{tan(x + 180°) = tan x}}", note: "Secondary solutions" },
    ],
  },
};

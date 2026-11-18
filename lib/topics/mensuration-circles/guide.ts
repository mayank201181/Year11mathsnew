import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "mensuration-circles",
  title: "3D Mensuration, Similarity & Circle Theorems",
  strand: "Geometry & Trigonometry",
  icon: "🔵",
  summary: "Exact π mensuration, frustums, k–k²–k³ scaling, and every 4MA1 circle theorem.",
  intro:
    "In Edexcel 4MA1 Higher, geometry moves beyond plugging into a single formula. You will carve segments out of sectors, slice small cones off large cones to build **frustums**, bridge between lengths, areas and volumes with **{{k}}, {{k^2}}, {{k^3}}**, and chain together **circle theorems** where the geometric reason earns half the marks.",
  guide: [
    {
      id: "sectors-segments",
      heading: "Arc length, sector area & segments",
      discovery: {
        problem:
          "A pizza slice is a sector of radius {{12 cm}} and angle {{60°}}. A straight knife cuts along the chord joining the two crust tips, removing the triangular cheese bite. How can you find the exact area of the curved crust **segment** left behind?",
        idea:
          "A sector is just the fraction {{theta/360}} of the whole circle, giving area {{(60/360) * pi * 12^2 = 24 * pi}}. Subtract the isosceles triangle {{(1/2) * 12^2 * sin(60°) = 36 * sqrt(3)}} to leave the exact minor segment {{24 * pi - 36 * sqrt(3) cm^2}}.",
      },
      body:
        "A **sector** with central angle {{theta}} (in degrees) is the fraction {{theta/360}} of a full circle of radius {{r}}:\n\n    {{\"Arc length\" = (theta/360) * 2 * pi * r}}\n    {{\"Sector area\" = (theta/360) * pi * r^2}}\n\n- **Perimeter of a sector** includes the curved arc **plus two straight radii**: {{P = (theta/360) * 2 * pi * r + 2r}}. Forgetting {{+ 2r}} is one of the most common Paper 1HR/2HR errors.\n- A **chord** splits a sector into an isosceles triangle (two sides equal to {{r}}, included angle {{theta}}) and a **minor segment**.\n- Using {{A = (1/2)ab * sin(C)}} with {{a = b = r}}, the triangle has area {{(1/2) * r^2 * sin(theta)}}, so:\n\n    {{\"Minor segment area\" = (theta/360) * pi * r^2 - (1/2) * r^2 * sin(theta)}}\n\n| Measurement | Formula | Watch out for |\n|---|---|---|\n| Arc length | {{(theta/360) * 2 * pi * r}} | Uses circumference {{2 * pi * r}}, not {{pi * r^2}} |\n| Sector perimeter | {{(theta/360) * 2 * pi * r + 2r}} | Add both straight radii ({{+ 2r}}) |\n| Sector area | {{(theta/360) * pi * r^2}} | Leave in terms of {{pi}} when asked for an exact value |\n| Minor segment area | {{(theta/360) * pi * r^2 - (1/2) * r^2 * sin(theta)}} | Calculator in **DEG** mode; works even when {{theta > 90°}} |",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 190" role="img" aria-label="Sector OAB of radius r and angle theta divided by chord AB into triangle OAB and shaded minor segment"><rect x="4" y="4" width="352" height="182" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><path d="M 65 145 L 225 145 A 160 160 0 0 0 145 6.4 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><path d="M 225 145 A 160 160 0 0 0 145 6.4 L 225 145 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/><line x1="65" y1="145" x2="225" y2="145" stroke="#1e293b" stroke-width="2"/><line x1="65" y1="145" x2="145" y2="6.4" stroke="#1e293b" stroke-width="2"/><line x1="145" y1="6.4" x2="225" y2="145" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><path d="M 105 145 A 40 40 0 0 0 85 110.4" fill="none" stroke="#0f172a" stroke-width="1.8"/><text x="50" y="152" font-size="13" font-weight="bold" fill="#0f172a">O</text><text x="232" y="152" font-size="13" font-weight="bold" fill="#0f172a">A</text><text x="140" y="18" font-size="13" font-weight="bold" fill="#0f172a">B</text><text x="110" y="132" font-size="13" font-weight="bold" fill="#0f172a">θ</text><text x="145" y="162" font-size="12" fill="#1e293b" text-anchor="middle">radius r</text><text x="86" y="72" font-size="12" fill="#1e293b">r</text><text x="128" y="112" font-size="11" fill="#1e40af" font-weight="bold">½r² sin θ</text><text x="206" y="66" font-size="11" fill="#b45309" font-weight="bold">Minor segment</text><text x="255" y="95" font-size="11" fill="#334155">Sector − Triangle</text><text x="255" y="112" font-size="11" fill="#334155">Arc AB = (θ/360)×2πr</text></svg>',
      diagramCaption: "Subtract isosceles triangle OAB (blue) from sector OAB to isolate the minor segment (amber).",
      workedExamples: [
        {
          title: "Exact sector perimeter & minor segment area",
          problem:
            "Sector {{OAB}} has radius {{10 cm}} and angle {{AOB = 90°}}. Find (a) the exact perimeter of the sector in terms of {{pi}}, and (b) the area of the minor segment shaded between chord {{AB}} and arc {{AB}}, correct to 3 significant figures.",
          steps: [
            "Arc length {{AB = (90/360) * 2 * pi * 10 = 5 * pi cm}}.",
            "Add the two straight radii {{OA + OB = 10 + 10 = 20 cm}}: perimeter {{= 20 + 5 * pi cm}}.",
            "Sector area {{= (90/360) * pi * 10^2 = 25 * pi cm^2}}.",
            "Triangle {{OAB}} area {{= (1/2) * 10 * 10 * sin(90°) = 50 cm^2}}.",
            "Minor segment area {{= 25 * pi - 50 = 78.5398... - 50 = 28.5 cm^2}} (3 s.f.).",
          ],
          answer: "(a) {{20 + 5 * pi cm}}, (b) {{28.5 cm^2}}",
          yourTurn: {
            question:
              "A sector has radius {{6 cm}} and central angle {{120°}}. Find the exact **perimeter** of the sector in terms of {{pi}}.",
            answer: { type: "expression", expr: "12 + 4*pi", form: "simplified", display: "{{12 + 4 * pi}}" },
            solution: "Arc length {{= (120/360) * 2 * pi * 6 = 4 * pi}}. Add {{2r = 12}} to get {{12 + 4 * pi}}.",
          },
        },
        {
          title: "Working backwards to find the sector angle",
          problem:
            "A sector of radius {{8 cm}} has area {{20 * pi cm^2}}. Find the angle of the sector in degrees.",
          steps: [
            "Set up the sector area equation: {{(theta/360) * pi * 8^2 = 20 * pi}}.",
            "Divide both sides by {{pi}}: {{(64 * theta)/360 = 20}}.",
            "Solve for {{theta}}: {{theta = (20 * 360)/64 = 112.5°}}.",
          ],
          answer: "{{112.5°}}",
        },
      ],
      keyPoints: [
        "Sector fraction is always {{theta/360}}.",
        "Sector perimeter = curved arc {{+ 2r}} (include both straight edges).",
        "Minor segment area = sector area {{(theta/360) * pi * r^2}} minus triangle area {{(1/2) * r^2 * sin(theta)}}.",
        "Cancel {{pi}} early when working backwards from an exact area or arc length.",
      ],
      whyItWorks:
        "A full turn about the centre is {{360°}}. Because a circle is rotationally symmetric, sweeping {{theta°}} sweeps out exactly {{theta/360}} of both the circumference {{2 * pi * r}} and the disc area {{pi * r^2}}.",
      strategies: ["Subtract from the whole (sector minus triangle)", "Cancel π before rearranging"],
      thinkDeeper:
        "If the perimeter of a sector of radius {{r}} is numerically equal to its area, express the central angle {{theta}} in terms of {{r}} and explain why {{r}} must be greater than {{2}}.",
    },
    {
      id: "cones-spheres-frustums",
      heading: "Cones, spheres, hemispheres & frustums",
      discovery: {
        problem:
          "Slice a solid wooden sphere of radius {{r}} cleanly in half to make two solid hemispheres. Each curved dome has area {{2 * pi * r^2}}. Why isn't the total surface area of one solid hemisphere simply {{2 * pi * r^2}}?",
        idea:
          "Slicing exposes a brand-new **flat circular base** of area {{pi * r^2}}! So a solid hemisphere has total surface area {{2 * pi * r^2 + pi * r^2 = 3 * pi * r^2}}.",
      },
      body:
        "Edexcel gives the curved surface area and volume of cones and spheres on the formula sheet, **but** you must distinguish **curved** vs **total** surface area, find slant height {{l}} via Pythagoras, and build **frustums** by subtraction.\n\n| 3D Solid | Volume | Surface Area |\n|---|---|---|\n| Cone (radius {{r}}, vertical height {{h}}, slant {{l}}) | {{(1/3) * pi * r^2 * h}} | Curved: {{pi * r * l}}; Total solid: {{pi * r * l + pi * r^2}} |\n| Pyramid (base area {{B}}, vertical height {{h}}) | {{(1/3) * B * h}} | Base area + areas of triangular faces |\n| Sphere (radius {{r}}) | {{(4/3) * pi * r^3}} | {{4 * pi * r^2}} |\n| Hemisphere (radius {{r}}) | {{(2/3) * pi * r^3}} | Hollow bowl: {{2 * pi * r^2}}; **Solid total: {{3 * pi * r^2}}** |\n\n- **Cone Pythagoras**: vertical height {{h}}, base radius {{r}} and slant height {{l}} form a right-angled triangle: {{l^2 = r^2 + h^2}}. Use **{{h}}** for volume and **{{l}}** for curved surface area!\n- **Frustum of a cone**: extend the sloping sides to meet at an apex. The removed top cone (radius {{r}}, height {{h}}) and the full original cone (radius {{R}}, height {{H}}) are **similar**, so:\n\n    {{r / R = h / H = l / L}}\n\n  Once you solve {{r / R = h / (h + h_\"frustum\")}} for {{h}}, subtract the small cone from the large cone:\n\n    {{V_\"frustum\" = (1/3) * pi * R^2 * H - (1/3) * pi * r^2 * h}}",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 195" role="img" aria-label="Frustum formed by removing a small cone of radius r and height h from a similar large cone of radius R and height H, alongside a solid hemisphere of total surface area 3 pi r squared"><rect x="4" y="4" width="372" height="187" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><polygon points="105,18 69,90 141,90" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/><polygon points="69,90 45,155 165,155 141,90" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><line x1="105" y1="18" x2="105" y2="155" stroke="#0f172a" stroke-width="1.4" stroke-dasharray="3,3"/><line x1="105" y1="90" x2="141" y2="90" stroke="#dc2626" stroke-width="2"/><line x1="105" y1="155" x2="165" y2="155" stroke="#1d4ed8" stroke-width="2"/><text x="122" y="85" font-size="11" font-weight="bold" fill="#dc2626">r</text><text x="134" y="150" font-size="11" font-weight="bold" fill="#1d4ed8">R</text><text x="92" y="60" font-size="11" fill="#475569">h</text><text x="86" y="128" font-size="11" fill="#1e3a8a" font-weight="bold">H−h</text><text x="105" y="175" font-size="11" fill="#0f172a" text-anchor="middle">r / R = h / H (similar △s)</text><path d="M 235 125 A 55 55 0 0 1 345 125 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/><ellipse cx="290" cy="125" rx="55" ry="14" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><line x1="290" y1="125" x2="345" y2="125" stroke="#0f172a" stroke-width="1.8"/><text x="316" y="121" font-size="11" font-weight="bold" fill="#0f172a">r</text><text x="290" y="60" font-size="11" fill="#92400e" text-anchor="middle" font-weight="bold">Curved = 2πr²</text><text x="290" y="155" font-size="11" fill="#92400e" text-anchor="middle">Flat base = πr²</text><text x="290" y="175" font-size="11" fill="#0f172a" text-anchor="middle" font-weight="bold">Solid total = 3πr²</text></svg>',
      diagramCaption: "Left: complete the ghost cone at the top to use similar triangles r/R = h/H. Right: a solid hemisphere has curved dome 2πr² plus circular base πr² = 3πr².",
      workedExamples: [
        {
          title: "Volume of a frustum via similar triangles",
          problem:
            "A frustum is made by removing a small cone from the top of a large cone. The frustum has top radius {{3 cm}}, base radius {{9 cm}} and vertical height {{12 cm}}. Find its exact volume in terms of {{pi}}.",
          steps: [
            "Let the removed top cone have vertical height {{h}}. Then the full large cone has height {{H = h + 12}}.",
            "By similar triangles: {{3 / 9 = h / (h + 12) => 1 / 3 = h / (h + 12)}}.",
            "Cross-multiply: {{3h = h + 12 => 2h = 12 => h = 6 cm}}, so {{H = 6 + 12 = 18 cm}}.",
            "{{V_\"large\" = (1/3) * pi * 9^2 * 18 = 486 * pi cm^3}} and {{V_\"small\" = (1/3) * pi * 3^2 * 6 = 18 * pi cm^3}}.",
            "{{V_\"frustum\" = 486 * pi - 18 * pi = 468 * pi cm^3}}.",
          ],
          answer: "{{468 * pi cm^3}}",
          yourTurn: {
            question:
              "A solid cone has base radius {{5 cm}} and vertical height {{12 cm}}. Find its **total** surface area in terms of {{pi}}.",
            answer: { type: "expression", expr: "90*pi", form: "simplified", display: "{{90 * pi}}" },
            solution:
              "Slant height {{l = sqrt(5^2 + 12^2) = 13 cm}}. Total surface area {{= pi * 5 * 13 + pi * 5^2 = 65 * pi + 25 * pi = 90 * pi cm^2}}.",
          },
        },
      ],
      keyPoints: [
        "Cone slant height {{l = sqrt(r^2 + h^2)}}: use {{h}} in {{(1/3) * pi * r^2 * h}} and {{l}} in {{pi * r * l}}.",
        "Total surface area of a **solid** cone is {{pi * r * l + pi * r^2}}; for a **solid** hemisphere it is {{3 * pi * r^2}}.",
        "For any frustum, draw the missing apex first and use {{r / R = h / H}} before touching the volume formula.",
        "When a solid is melted and recast into another shape, equate their **volumes** (keeping {{pi}} unrounded until cancellation).",
      ],
      whyItWorks:
        "Slicing a cone parallel to its base creates two right-angled cross-section triangles sharing the apex angle, so they are guaranteed to be mathematically similar ({{r / R = h / H = l / L}}).",
      strategies: ["Complete the ghost cone", "Keep π symbolic until the final step"],
      thinkDeeper:
        "If you slice a cone halfway up its vertical height ({{h = H/2}}), what fraction of the original cone's volume remains in the bottom frustum?",
    },
    {
      id: "area-volume-similarity",
      heading: "Similar shapes & solids (k, k², k³)",
      discovery: {
        problem:
          "Double every edge of a {{1 cm}} cube to make a {{2 cm}} cube. The length scale factor is {{k = 2}}. By what factor did the surface area of one face multiply — and how many {{1 cm}} cubes fit inside the {{2 cm}} cube?",
        idea:
          "Each face becomes {{2 * 2 = 4}} times as large ({{k^2 = 2^2 = 4}}), while the interior holds {{2 * 2 * 2 = 8}} unit cubes ({{k^3 = 2^3 = 8}}). Area scales in **2 dimensions** ({{k^2}}) and volume scales in **3 dimensions** ({{k^3}}).",
      },
      body:
        "Two 3D solids are **mathematically similar** if one is an enlargement of the other. If corresponding lengths are in the ratio {{1 : k}} (so the linear scale factor is {{k = L_2 / L_1}}):\n\n- **Length / perimeter / height / radius** scale factor {{= k}}\n- **Area / curved surface area / paint cost** scale factor {{= k^2}}\n- **Volume / capacity / mass (same material)** scale factor {{= k^3}}\n\n> **The Golden Bridge Rule:** Never jump directly from area to volume by multiplying or cubing the area ratio! Always step onto the **linear bridge {{k}}** first:\n> - Given areas {{A_1, A_2}}: find {{k^2 = A_2 / A_1}}, take the **square root** {{k = sqrt(A_2 / A_1)}}, then **cube** for {{k^3}}.\n> - Given volumes {{V_1, V_2}}: find {{k^3 = V_2 / V_1}}, take the **cube root** {{k = cbrt(V_2 / V_1)}}, then **square** for {{k^2}}.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 155" role="img" aria-label="Bridge diagram linking Area ratio k squared through linear scale factor k to Volume ratio k cubed"><rect x="4" y="4" width="372" height="147" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><rect x="20" y="50" width="95" height="56" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><rect x="142" y="42" width="96" height="72" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/><rect x="265" y="50" width="95" height="56" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="67" y="74" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Area Ratio</text><text x="67" y="94" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">k²</text><text x="190" y="70" font-size="12" font-weight="bold" fill="#14532d" text-anchor="middle">Linear Bridge</text><text x="190" y="96" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">k</text><text x="312" y="74" font-size="12" font-weight="bold" fill="#78350f" text-anchor="middle">Volume Ratio</text><text x="312" y="94" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">k³</text><path d="M 115 65 Q 128 45 142 65" fill="none" stroke="#16a34a" stroke-width="2"/><text x="128" y="38" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">√ (sqrt)</text><path d="M 238 65 Q 251 45 265 65" fill="none" stroke="#d97706" stroke-width="2"/><text x="251" y="38" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">( )³ cube</text><path d="M 265 95 Q 251 115 238 95" fill="none" stroke="#16a34a" stroke-width="2"/><text x="251" y="130" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">∛ (cbrt)</text><path d="M 142 95 Q 128 115 115 95" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="130" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">( )² square</text></svg>',
      diagramCaption: "Always cross via the linear bridge k: take √ from k² to k, then cube to reach k³ (or ∛ from k³ to k, then square for k²).",
      workedExamples: [
        {
          title: "Stepping from surface area ratio to volume",
          problem:
            "Two mathematically similar statues {{A}} and {{B}} have surface areas {{54 cm^2}} and {{150 cm^2}}. Statue {{A}} has volume {{81 cm^3}}. Calculate the volume of statue {{B}}.",
          steps: [
            "Simplify the area ratio first: {{k^2 = 150 / 54 = 25 / 9}}.",
            "Take the square root to cross the linear bridge: {{k = sqrt(25/9) = 5/3}}.",
            "Cube {{k}} for the volume scale factor: {{k^3 = (5/3)^3 = 125/27}}.",
            "Multiply statue {{A}}'s volume by {{k^3}}: {{V_B = 81 * (125/27) = 3 * 125 = 375 cm^3}}.",
          ],
          answer: "{{375 cm^3}}",
          yourTurn: {
            question:
              "Two similar bottles have volumes {{160 ml}} and {{540 ml}}. The smaller bottle has height {{12 cm}}. Find the height of the larger bottle in cm.",
            answer: { type: "number", value: 18 },
            solution:
              "{{k^3 = 540 / 160 = 27 / 8}}, so {{k = cbrt(27/8) = 3/2}}. Height {{= 12 * (3/2) = 18 cm}}.",
          },
        },
      ],
      keyPoints: [
        "Simplify {{A_2 / A_1}} or {{V_2 / V_1}} to lowest terms BEFORE taking square or cube roots — Edexcel picks hidden squares/cubes like {{54 : 150 -> 9 : 25}}!",
        "Mass scales as {{k^3}} **only** when both solids are made from the same uniform density material.",
        "For a frustum where small cone : large cone has linear ratio {{r : R}}, the volume ratio of small cone : **frustum** is {{r^3 : (R^3 - r^3)}}.",
      ],
      whyItWorks:
        "Every area formula multiplies two lengths (e.g. {{pi * r * l}} becomes {{pi * (kr) * (kl) = k^2 * pi * r * l}}), and every volume formula multiplies three lengths (e.g. {{(1/3) * pi * r^2 * h}} becomes {{k^3}} times as large).",
      strategies: ["Simplify before rooting", "Cross the linear bridge k"],
      thinkDeeper:
        "A model aeroplane is built at scale {{1 : 20}} using the same metal as the real aircraft. Explain why its wings experience far less stress per unit area under its own weight than the full-sized aircraft!",
    },
    {
      id: "circle-theorems-angles",
      heading: "Circle theorems I: centre, semicircle, same segment & cyclic quads",
      discovery: {
        problem:
          "Mark centre {{O}} and three points {{A, B, C}} on a circle. Draw radii {{OA, OB, OC}} to split triangle {{ABC}} into isosceles triangles {{OAC}} and {{OBC}}. If {{∠OAC = alpha}} and {{∠OBC = beta}}, what is the exterior angle at {{O}}?",
        idea:
          "In isosceles {{△OAC}}, the exterior angle from {{CO}} extended is {{2 * alpha}}; in {{△OBC}} it is {{2 * beta}}. Together {{∠AOB = 2(alpha + beta) = 2 * ∠ACB}} — the angle at the centre is **always** twice the angle at the circumference!",
      },
      body:
        "In Edexcel 4MA1, ”Give a reason for each stage of your working” means **exact geometric vocabulary** — slang such as *bowtie angle* or *Z-angle* scores **zero**.\n\n| Theorem | Geometric Diagram Clue | Exact Edexcel Wording |\n|---|---|---|\n| **Angle at the centre** | Two radii from {{O}} and two chords to the circumference on the same arc | *The angle at the centre is twice the angle at the circumference* |\n| **Angle in a semicircle** | A chord passing through {{O}} (a **diameter**) subtending an angle at the circumference | *The angle in a semicircle is {{90°}}* |\n| **Same segment** | Four points on the circumference forming a crossed ”bowtie” on the same arc | *Angles in the same segment are equal* |\n| **Cyclic quadrilateral** | **All four** vertices lie on the circumference | *Opposite angles of a cyclic quadrilateral sum to {{180°}}* |\n\n- **Isosceles radii bonus**: any triangle {{OAB}} using two radii has {{OA = OB}}, so *base angles of an isosceles triangle are equal* (state *radii are equal*).\n- **Arrowhead / reflex trap**: when {{C}} lies on the **minor** arc, {{∠ACB}} is obtuse and equals half the **reflex** angle at {{O}} ({{360° - ∠AOB}}) — do NOT add {{∠AOB + ∠ACB = 180°}} because {{O}} is at the centre, not on the circumference!",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 185" role="img" aria-label="Four circle theorem panels: angle at centre is 2x, angle in a semicircle is 90 degrees, angles in the same segment are equal, and opposite angles of a cyclic quadrilateral sum to 180 degrees"><rect x="4" y="4" width="372" height="177" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="52" cy="82" r="36" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/><circle cx="52" cy="82" r="2.2" fill="#0f172a"/><polyline points="24,105 52,82 80,105" fill="none" stroke="#dc2626" stroke-width="1.8"/><polyline points="24,105 55,46 80,105" fill="none" stroke="#1e293b" stroke-width="1.6"/><text x="52" y="76" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">O</text><text x="52" y="96" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">2x</text><text x="55" y="61" font-size="9" font-weight="bold" fill="#1e293b" text-anchor="middle">x</text><text x="52" y="142" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Centre = 2 × circ.</text><circle cx="144" cy="82" r="36" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/><line x1="108" y1="82" x2="180" y2="82" stroke="#15803d" stroke-width="2"/><polyline points="108,82 158,49 180,82" fill="none" stroke="#1e293b" stroke-width="1.7"/><circle cx="144" cy="82" r="2.2" fill="#0f172a"/><text x="155" y="62" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">90°</text><text x="144" y="142" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Semicircle = 90°</text><circle cx="236" cy="82" r="36" fill="#fefce8" stroke="#ca8a04" stroke-width="1.8"/><polyline points="210,107 216,52 262,107 256,52 210,107" fill="none" stroke="#1e293b" stroke-width="1.5"/><line x1="210" y1="107" x2="262" y2="107" stroke="#d97706" stroke-width="2"/><text x="220" y="66" font-size="9" font-weight="bold" fill="#dc2626">x</text><text x="249" y="66" font-size="9" font-weight="bold" fill="#dc2626">x</text><text x="236" y="142" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Same segment</text><circle cx="328" cy="82" r="36" fill="#fdf2f8" stroke="#db2777" stroke-width="1.8"/><polygon points="298,62 342,49 359,100 305,110" fill="none" stroke="#9d174d" stroke-width="1.8"/><text x="307" y="69" font-size="9" font-weight="bold" fill="#be185d">a</text><text x="348" y="98" font-size="9" font-weight="bold" fill="#be185d">b</text><text x="328" y="142" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Cyclic: a+b=180°</text><text x="190" y="168" font-size="10" fill="#475569" text-anchor="middle">Check every vertex: all 4 on circumference for a cyclic quad; O at centre for 2x and diameter!</text></svg>',
      diagramCaption: "Core angle circle theorems. Always verify whether a vertex is at the centre O or on the circumference before choosing a theorem.",
      workedExamples: [
        {
          title: "Chaining centre, radii & cyclic quadrilateral theorems",
          problem:
            "Points {{A, B, C, D}} lie in order on a circle with centre {{O}}. Given that {{∠OAB = 32°}} and {{AB}} is subtended at {{C}} on the major arc and {{D}} on the minor arc, find {{∠ACB}} and {{∠ADB}}, giving geometric reasons.",
          steps: [
            "{{OA = OB}} (radii of the same circle), so {{△OAB}} is isosceles and {{∠OBA = 32°}}.",
            "{{∠AOB = 180° - 2 * 32° = 116°}} (angles in a triangle sum to {{180°}}).",
            "{{∠ACB = 116° / 2 = 58°}} because **the angle at the centre is twice the angle at the circumference**.",
            "{{ABCD}} is a cyclic quadrilateral, so {{∠ADB = 180° - 58° = 122°}} because **opposite angles of a cyclic quadrilateral sum to {{180°}}**.",
          ],
          answer: "{{∠ACB = 58°}}, {{∠ADB = 122°}}",
          yourTurn: {
            question:
              "Points {{P, Q, R}} lie on a circle with centre {{O}} on the major arc side of {{PR}}. Given {{∠PQR = 67°}}, find {{∠OPR}} in degrees.",
            answer: { type: "number", value: 23 },
            solution:
              "{{∠POR = 2 * 67° = 134°}} (angle at centre = 2 × angle at circumference). Since {{OP = OR}} (radii), {{∠OPR = (180° - 134°) / 2 = 23°}}.",
          },
        },
      ],
      keyPoints: [
        "Spot **equal radii** first — hidden isosceles triangles unlock almost every centre-angle problem.",
        "Angle in a semicircle ({{90°}}) is the special case of angle at the centre where the straight diameter has central angle {{180°}}.",
        "Check all 4 corners lie on the circle before applying *opposite angles of a cyclic quadrilateral sum to {{180°}}*.",
      ],
      whyItWorks:
        "Every circle theorem flows from the single ”angle at the centre = {{2x}}” rule: a diameter has {{180°}} at {{O}} so {{90°}} at the circumference; two angles on the same arc share the same central angle {{2x}} so both equal {{x}}; opposite arcs of a cyclic quad sum to {{360°}} at {{O}}, so the opposite angles sum to {{360° / 2 = 180°}}.",
      strategies: ["Mark all radii equal", "Check centre vs circumference vertices"],
      thinkDeeper:
        "Prove using the angle-at-the-centre theorem (including the reflex angle at {{O}}) why opposite angles of any cyclic quadrilateral must sum to {{180°}}.",
    },
    {
      id: "tangents-alternate-chords",
      heading: "Circle theorems II: tangents, alternate segment & intersecting chords",
      discovery: {
        problem:
          "Draw tangent {{TA}} touching a circle at {{A}}, diameter {{AD}} perpendicular to {{TA}}, and another point {{C}} on the circle. If chord {{AB}} makes angle {{x}} with tangent {{TA}}, what is {{∠DAB}}, what is {{∠ADB}}, and therefore what is {{∠ACB}}?",
        idea:
          "Since {{∠DAT = 90°}}, {{∠DAB = 90° - x}}. Because {{AD}} is a diameter, {{∠ABD = 90°}}, so in {{△ABD}} we get {{∠ADB = 180° - 90° - (90° - x) = x}}. Angles in the same segment give {{∠ACB = ∠ADB = x}} — proving the **alternate segment theorem**!",
      },
      body:
        "Higher tier adds three **tangent** theorems and three **chord/secant length** theorems (Edexcel 4MA1 spec 4.10):\n\n1. **Tangent ⊥ radius**: *A tangent to a circle is perpendicular to the radius at the point of contact* ({{90°}}).\n2. **Two tangents from an external point**: *Tangents from an external point are equal in length* ({{PA = PB}}). Thus {{△PAB}} is isosceles, and kite {{OAPB}} has {{∠OAP = ∠OBP = 90°}}, so {{∠AOB + ∠APB = 180°}}.\n3. **Alternate segment theorem**: The angle between a tangent and a chord at the point of contact equals the angle subtended by that chord in the **alternate segment** ({{∠BAT = ∠ACB}}).\n4. **Intersecting chords & secants (lengths, NOT angles!)**:\n   - Chords {{AB}} and {{CD}} crossing **inside** at {{P}}: {{AP * PB = CP * PD}}\n   - Secants {{PAB}} and {{PCD}} meeting **outside** at {{P}}: {{PA * PB = PC * PD}} *(measure BOTH distances from {{P}}: {{PB = PA + AB}}!)*\n   - Tangent {{PT}} and secant {{PAB}} from external point {{P}}: {{PT^2 = PA * PB}}",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 180" role="img" aria-label="Alternate segment theorem showing angle x between tangent and chord equals angle x in alternate segment, and tangent-secant theorem PT squared equals PA times PB"><rect x="4" y="4" width="372" height="172" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="95" cy="82" r="48" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="25" y1="130" x2="165" y2="130" stroke="#dc2626" stroke-width="2.2"/><polygon points="95,130 136,57 53,58" fill="#dbeafe" fill-opacity="0.55" stroke="#1e293b" stroke-width="1.8"/><text x="95" y="146" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text><text x="158" y="145" font-size="11" font-weight="bold" fill="#dc2626">T</text><text x="143" y="57" font-size="11" font-weight="bold" fill="#0f172a">B</text><text x="41" y="57" font-size="11" font-weight="bold" fill="#0f172a">C</text><text x="118" y="124" font-size="11" font-weight="bold" fill="#dc2626">x</text><text x="63" y="68" font-size="11" font-weight="bold" fill="#dc2626">x</text><text x="95" y="164" font-size="10.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Alternate segment: ∠BAT = ∠ACB</text><circle cx="295" cy="82" r="46" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/><line x1="195" y1="120" x2="279" y2="39" stroke="#dc2626" stroke-width="2.2"/><line x1="195" y1="120" x2="338" y2="98" stroke="#1d4ed8" stroke-width="2"/><circle cx="279" cy="39" r="3" fill="#dc2626"/><circle cx="250" cy="111.5" r="3" fill="#1d4ed8"/><circle cx="338" cy="98" r="3" fill="#1d4ed8"/><text x="184" y="125" font-size="11" font-weight="bold" fill="#0f172a">P</text><text x="275" y="31" font-size="11" font-weight="bold" fill="#dc2626">T</text><text x="247" y="126" font-size="11" font-weight="bold" fill="#1d4ed8">A</text><text x="344" y="102" font-size="11" font-weight="bold" fill="#1d4ed8">B</text><text x="280" y="164" font-size="10.5" font-weight="bold" fill="#78350f" text-anchor="middle">PT² = PA × PB (PB = PA + AB!)</text></svg>',
      diagramCaption: "Left: Alternate segment theorem (chord AB, tangent AT, opposite vertex C). Right: Tangent-secant rule PT² = PA × PB — always measure PB all the way from P!",
      workedExamples: [
        {
          title: "Tangent-secant quadratic & external secants",
          problem:
            "From an external point {{P}}, a tangent {{PT}} of length {{6 cm}} touches a circle at {{T}}, and a secant {{PAB}} cuts the circle at {{A}} and {{B}}. Given {{PA = 4 cm}}, find the chord length {{AB}}.",
          steps: [
            "Apply the tangent-secant theorem from {{P}}: {{PT^2 = PA * PB}} (where {{PB}} is the **whole** distance from {{P}} to {{B}}).",
            "Substitute {{PT = 6}} and {{PA = 4}}: {{6^2 = 4 * PB => 36 = 4 * PB => PB = 9 cm}}.",
            "Subtract {{PA}} from {{PB}} to get the chord inside the circle: {{AB = PB - PA = 9 - 4 = 5 cm}}.",
          ],
          answer: "{{5 cm}}",
          yourTurn: {
            question:
              "Chords {{AB}} and {{CD}} intersect **inside** a circle at {{P}}. Given {{AP = 6 cm}}, {{PB = 8 cm}} and {{CP = 4 cm}}, find {{PD}} in cm.",
            answer: { type: "number", value: 12 },
            solution:
              "Using intersecting chords {{AP * PB = CP * PD}}: {{6 * 8 = 4 * PD => 48 = 4 * PD => PD = 12 cm}}.",
          },
        },
      ],
      keyPoints: [
        "Quote **alternate segment theorem** in full — never ”tangent-triangle rule”.",
        "Two tangents from {{P}} make an **isosceles** triangle {{PAB}} ({{PA = PB}}), so {{∠PAB = ∠PBA = (180° - ∠APB)/2}}.",
        "In external secant formulas {{PA * PB = PC * PD}} and {{PT^2 = PA * PB}}, every segment starts at the external intersection point **{{P}}** ({{PB = PA + AB}}, never {{AB}} alone!).",
      ],
      whyItWorks:
        "Joining {{A}} to {{D}} and {{C}} to {{B}} (for internal chords) or {{T}} to {{A}} and {{T}} to {{B}} (for tangent-secant) creates two **similar triangles** via equal angles in the same segment or the alternate segment theorem: {{△PTA}} is similar to {{△PBT}}, so {{PT / PB = PA / PT => PT^2 = PA * PB}}!",
      strategies: ["Measure every secant from P", "Spot the isosceles two-tangent triangle"],
      thinkDeeper:
        "Show that if you shrink chord {{AB}} until {{A}} and {{B}} merge into a single tangent point {{T}}, the secant rule {{PA * PB = PC * PD}} turns directly into {{PT^2 = PC * PD}}!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the formula for the **perimeter** of a sector of radius {{r}} and angle {{theta}}?",
        back: "{{P = (theta/360) * 2 * pi * r + 2r}} (curved arc length plus **two** straight radii).",
      },
      {
        front: "How do you calculate the area of a **minor segment**?",
        back: "Sector area minus triangle area: {{(theta/360) * pi * r^2 - (1/2) * r^2 * sin(theta)}}.",
      },
      {
        front: "What is the **total** surface area of a **solid hemisphere** of radius {{r}}?",
        back: "{{3 * pi * r^2}} (curved dome {{2 * pi * r^2}} plus flat circular base {{pi * r^2}}).",
      },
      {
        front: "What is the **total** surface area of a **solid cone** of radius {{r}} and vertical height {{h}}?",
        back: "{{pi * r * l + pi * r^2}}, where slant height {{l = sqrt(r^2 + h^2)}}.",
      },
      {
        front: "How do you find the missing height {{h}} of the removed top cone in a **frustum**?",
        back: "Complete the cone and equate ratios of similar triangles: {{r / R = h / (h + h_\"frustum\")}}.",
      },
      {
        front: "If two similar solids have surface areas in ratio {{A_1 : A_2}}, how do you find their volume ratio?",
        back: "Step via linear scale factor {{k}} first: {{k = sqrt(A_2 / A_1)}}, then volume ratio is {{k^3}}.",
      },
      {
        front: "State the exact Edexcel reason for {{∠AOB = 2 * ∠ACB}}.",
        back: "*The angle at the centre is twice the angle at the circumference*.",
      },
      {
        front: "State the exact Edexcel reason when a diameter subtends {{90°}} at the circumference.",
        back: "*The angle in a semicircle is {{90°}}*.",
      },
      {
        front: "State the exact Edexcel reason for equal ”bowtie” angles standing on the same arc.",
        back: "*Angles in the same segment are equal*.",
      },
      {
        front: "State the exact Edexcel reason for {{∠A + ∠C = 180°}} in cyclic quad {{ABCD}}.",
        back: "*Opposite angles of a cyclic quadrilateral sum to {{180°}}*.",
      },
      {
        front: "What is the **alternate segment theorem**?",
        back: "The angle between a tangent and a chord at the point of contact equals the angle subtended by that chord in the alternate segment.",
      },
      {
        front: "State the three **intersecting chords / secants / tangent-secant** length rules from point {{P}}.",
        back: "Inside: {{AP * PB = CP * PD}}. Outside secants: {{PA * PB = PC * PD}}. Tangent-secant: {{PT^2 = PA * PB}} (always measure {{PB = PA + AB}} from {{P}}!).",
      },
    ],
    mustKnow: [
      "Calculate arc length, sector area, sector perimeter ({{+ 2r}}), and minor segment area both as exact multiples of {{pi}}/surds and to 3 s.f.",
      "Find slant height {{l = sqrt(r^2 + h^2)}} and distinguish curved vs total surface area of cones and solid hemispheres ({{3 * pi * r^2}}).",
      "Solve frustum volume and surface-area problems by finding the missing small-cone height via similar triangles {{r / R = h / H}}.",
      "Equate volumes when a 3D solid (e.g. cone + hemisphere) is melted or poured into another container.",
      "Convert fluently between linear ({{k}}), area ({{k^2}}) and volume/mass ({{k^3}}) scale factors for similar shapes.",
      "Apply and state exact Edexcel reasons for centre, semicircle, same-segment, and cyclic-quadrilateral angle theorems.",
      "Combine tangent ⊥ radius ({{90°}}), equal tangents from an external point ({{PA = PB}}), and the alternate segment theorem.",
      "Solve algebraic equations (including quadratics) formed by intersecting chords {{AP * PB = CP * PD}} and secants {{PT^2 = PA * PB}}.",
    ],
    misconceptions: [
      {
        wrong: "Total surface area of a solid hemisphere = {{2 * pi * r^2}} ❌",
        right: "Add the flat circular base {{pi * r^2}}: total SA of a solid hemisphere = {{3 * pi * r^2}} ✅",
      },
      {
        wrong: "Perimeter of a sector = {{(theta/360) * 2 * pi * r}} ❌",
        right: "Include both straight radii: perimeter = {{(theta/360) * 2 * pi * r + 2r}} ✅",
      },
      {
        wrong: "Multiplying volume by {{k}} (or by {{k^2}}) for similar solids ❌",
        right: "Find linear {{k}} first (e.g. {{k = sqrt(A_2 / A_1)}}), then multiply volume by **{{k^3}}** ✅",
      },
      {
        wrong: "Writing ”bowtie rule”, ”butterfly angle”, or ”Z-angle” in circle proofs ❌",
        right: "Write **angles in the same segment are equal** (and **alternate angles are equal** for parallel lines) ✅",
      },
      {
        wrong: "Using {{PA * AB = PC * CD}} or {{PT^2 = PA * AB}} for external secants ❌",
        right: "Measure **both** lengths from external point {{P}}: {{PA * (PA + AB) = PC * (PC + CD)}} and {{PT^2 = PA * PB}} ✅",
      },
      {
        wrong: "Treating arrowhead {{OABC}} (with {{O}} at the centre) as a cyclic quadrilateral ({{∠AOC + ∠ABC = 180°}}) ❌",
        right: "All 4 vertices must lie on the circumference for a cyclic quad; if {{O}} is the centre, use {{∠AOC = 2 * ∠ADC}} or the reflex angle at {{O}} ✅",
      },
      {
        wrong: "Using vertical height {{h}} inside {{pi * r * l}} for curved surface area of a cone ❌",
        right: "Find slant height {{l = sqrt(r^2 + h^2)}} first, then compute {{pi * r * l}} ✅",
      },
    ],
    examMistakes: [
      "Rounding {{pi}} mid-calculation (e.g. using {{3.14}} early) so the 3 s.f. final answer drifts outside mark-scheme accuracy.",
      "Forgetting the circular ring or top/bottom faces when calculating the **total** surface area of a frustum or composite solid.",
      "Subtracting the heights ({{H - h}}) and plugging directly into {{(1/3) * pi * r^2 * (H - h)}} as if a frustum were a single cone.",
      "Omitting *radii are equal* / *isosceles triangle* when deducing base angles in {{△OAB}}.",
      "Confusing the angle between tangent and chord (alternate segment theorem) with the {{90°}} angle between tangent and **radius**.",
      "Finding {{PB}} in {{PT^2 = PA * PB}} and writing {{PB}} as the final answer when the question asked for the chord length {{AB = PB - PA}}.",
    ],
    mnemonics: [
      {
        topic: "Sector Perimeter",
        device: "Crust + Two Cuts (Arc + 2r)",
        explanation: "A pizza slice has one curved crust {{(theta/360) * 2 * pi * r}} plus **two** straight knife cuts of length {{r}}.",
      },
      {
        topic: "Similarity Scale Factors",
        device: "1D → k, 2D → k², 3D → k³ (Cross the k-Bridge!)",
        explanation: "Units tell you the power: {{cm^1 -> k^1}}, {{cm^2 -> k^2}}, {{cm^3 -> k^3}}. Always return to {{k^1}} before changing dimension.",
      },
      {
        topic: "External Secants & Tangent-Secant",
        device: "Out × Whole = Out × Whole (Start at P every time!)",
        explanation: "Outside piece {{PA}} times **Whole** secant {{PB}} equals Outside {{PC}} times **Whole** {{PD}} (or {{PT * PT = PT^2}}).",
      },
    ],
    realWorld: [
      {
        title: "Coffee Cups, Lampshades & Stadium Buckets",
        detail: "Disposable coffee cups and popcorn buckets are **frustums of cones** — designers unroll the curved surface ({{pi * R * L - pi * r * l}}) into a flat sector ring on cardboard sheets.",
        emoji: "☕",
      },
      {
        title: "Wind-Tunnel & Ship Hull Scale Models",
        detail: "Aerospace engineers test {{1 : 10}} scale models: wing area is {{1/100}} ({{k^2}}) of full size while fuel tank volume is {{1/1000}} ({{k^3}}).",
        emoji: "✈️",
      },
      {
        title: "GPS Horizon & Satellite Coverage",
        detail: "Signals from a satellite graze Earth along **tangents** perpendicular to Earth's radius ({{90°}}), and {{PT^2 = PA * PB}} gives the exact distance to the horizon!",
        emoji: "🛰️",
      },
      {
        title: "Camera Field-of-View & Theatre Seating",
        detail: "By *angles in the same segment are equal*, every seat along a circular arc subtends the **exact same viewing angle** to a stage chord {{AB}}.",
        emoji: "🎭",
      },
    ],
    videos: [
      {
        title: "Edexcel IGCSE 4MA1 Higher — Frustums & 3D Mensuration",
        channel: "Maths Genie",
        url: "https://www.youtube.com/results?search_query=maths+genie+frustums+cones+spheres+igcse",
      },
      {
        title: "Area & Volume of Similar Shapes (k, k², k³)",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+similar+shapes+area+volume",
      },
      {
        title: "All Circle Theorems & Proofs for IGCSE Higher",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+all+circle+theorems",
      },
      {
        title: "Intersecting Chords & Secants Theorem (Edexcel IGCSE 4MA1)",
        channel: "Mr Astbury Maths",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+intersecting+chords+secants+theorem",
      },
    ],
    formulas: [
      { name: "Arc length", formula: "{{L = (theta/360) * 2 * pi * r}}", note: "Sector perimeter = {{L + 2r}}" },
      { name: "Sector area", formula: "{{A = (theta/360) * pi * r^2}}" },
      { name: "Minor segment area", formula: "{{A = (theta/360) * pi * r^2 - (1/2) * r^2 * sin(theta)}}" },
      { name: "Cone volume & surface area", formula: "{{V = (1/3) * pi * r^2 * h}}, {{A_\"curved\" = pi * r * l}}", note: "{{l = sqrt(r^2 + h^2)}}; solid total SA adds {{+ pi * r^2}}" },
      { name: "Sphere volume & surface area", formula: "{{V = (4/3) * pi * r^3}}, {{A = 4 * pi * r^2}}" },
      { name: "Solid hemisphere total SA", formula: "{{A_\"total\" = 3 * pi * r^2}}", note: "Curved {{2 * pi * r^2}} + flat base {{pi * r^2}}" },
      { name: "Similar solids scale factors", formula: "{{\"Length\" = k}}, {{\"Area\" = k^2}}, {{\"Volume\" = k^3}}" },
      { name: "Intersecting chords (internal)", formula: "{{AP * PB = CP * PD}}" },
      { name: "Intersecting secants & tangent-secant (external)", formula: "{{PA * PB = PC * PD}}, {{PT^2 = PA * PB}}", note: "Measure {{PB = PA + AB}} from external point {{P}}" },
    ],
  },
};

// ---------------------------------------------------------------------------
// Topic registry for Pearson Edexcel IGCSE Mathematics Higher (4MA1).
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** Grade 9 / Further Maths extension. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which IGCSE year normally teaches this topic (Year 10 vs Year 11). */
  courseYear: 10 | 11;
  /** Teaching order used when ?year=10 is active (1..N). */
  courseOrder: number;
  /** Pearson Edexcel 4MA1 Higher specification codes & Tanglin Higher units. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Number",
  "Algebra",
  "Functions & Calculus",
  "Geometry & Trigonometry",
  "Vectors & Statistics",
];

export const TOPIC_META: TopicMeta[] = [
  // ------------------------------- NUMBER ---------------------------------
  {
    id: "number-bounds-surds",
    title: "Number, Bounds, Indices & Surds",
    strand: "Number",
    icon: "🔢",
    courseYear: 10,
    courseOrder: 2,
    curriculum: "Edexcel 4MA1 Higher 1.4, 1.8, 1.9, 1.11; Tanglin Higher Units 2–4",
    sections: [
      {
        id: "upper-lower-bounds",
        heading: "Upper & lower bounds and error intervals",
        covers: "Error intervals LB ≤ x < UB for rounding and truncation; UB/LB traps in a − b (UB_a − LB_b vs LB_a − UB_b) and a ÷ b (UB_a ÷ LB_b vs LB_a ÷ UB_b); giving answers to a suitable degree of accuracy.",
      },
      {
        id: "standard-form-recurring",
        heading: "Standard form & recurring decimals to fractions",
        covers: "Calculating with A × 10^n (1 ≤ A < 10) across multiplication, division and addition/subtraction; rigorous algebraic proof converting recurring decimals (e.g. 0.27̇, 0.34̇5̇) to fractions.",
      },
      {
        id: "fractional-negative-indices",
        heading: "Negative & fractional indices and index equations",
        covers: "Evaluating a^(−n) = 1/a^n and a^(m/n) = (ⁿ√a)^m; simplifying algebraic index expressions; solving index equations by rewriting in a common base (e.g. 8^(x−1) = 4^(2x)).",
      },
      {
        id: "surds-simplifying-expanding",
        heading: "Simplifying surds & expanding brackets",
        covers: "Extracting largest square factors (√72 = 6√2), collecting like surds, multiplying surds and expanding double brackets such as (3 + 2√5)(4 − √5).",
      },
      {
        id: "rationalising-denominators",
        heading: "Rationalising denominators with conjugates",
        covers: "Rationalising k/√a and two-term denominators p/(a + b√c) by multiplying top and bottom by the conjugate (a − b√c) using difference of two squares.",
      },
    ],
  },
  // ------------------------------- ALGEBRA --------------------------------
  {
    id: "algebra-quadratics",
    title: "Quadratics, Algebraic Fractions & Proof",
    strand: "Algebra",
    icon: "🧬",
    courseYear: 10,
    courseOrder: 1,
    curriculum: "Edexcel 4MA1 Higher 2.1, 2.2, 2.3; Tanglin Higher Units 1–2",
    sections: [
      {
        id: "expanding-three-brackets",
        heading: "Expanding triple brackets & polynomial manipulation",
        covers: "Expanding (ax + b)(cx + d)(ex + f) systematically in two stages; subtracting squared brackets cleanly without sign slips.",
      },
      {
        id: "factorising-quadratics",
        heading: "Factorising ax² + bx + c & difference of two squares",
        covers: "Splitting the middle term (ac method) when a > 1; common factor first; difference of two squares including 9x² − 25y² and (2x + 3)² − (x − 1)².",
      },
      {
        id: "completing-the-square",
        heading: "Completing the square a(x + p)² + q",
        covers: "Completing the square when a = 1, when a > 1, and when a < 0 (factoring out a first); deducing minimum/maximum value and turning point (−p, q).",
      },
      {
        id: "algebraic-fractions",
        heading: "Simplifying & combining algebraic fractions",
        covers: "Factorise BEFORE cancelling (never cancel across +/−); multiplying and dividing algebraic fractions; adding and subtracting over quadratic common denominators.",
      },
      {
        id: "rearranging-and-proof",
        heading: "Changing the subject (twice) & algebraic proof",
        covers: "Making x the subject when x appears in two places by collecting, factorising out x and dividing; direct algebraic proof with even (2n), odd (2n + 1) and consecutive integers.",
      },
    ],
  },
  {
    id: "equations-inequalities",
    title: "Equations, Simultaneous & Quadratic Inequalities",
    strand: "Algebra",
    icon: "⚖️",
    courseYear: 10,
    courseOrder: 4,
    curriculum: "Edexcel 4MA1 Higher 2.4, 2.6, 2.7, 2.8; Tanglin Higher Unit 5",
    sections: [
      {
        id: "quadratic-equations",
        heading: "Solving quadratic equations & disguised quadratics",
        covers: "Zero-product property, completing the square, and the quadratic formula (−b ± √(b² − 4ac))/(2a) (including (−b)² bracket trap and ± roots); forming quadratics from geometry/kinematics.",
      },
      {
        id: "algebraic-fraction-equations",
        heading: "Equations with algebraic fractions",
        covers: "Clearing algebraic denominators (e.g. 6/(x − 2) − 2/(x + 3) = 1) to form ax² + bx + c = 0, solving and checking against excluded denominator values.",
      },
      {
        id: "linear-simultaneous",
        heading: "Linear simultaneous equations in context",
        covers: "Elimination and substitution with fractional/negative coefficients; forming and solving pairs of equations from speed/cost/geometry problems.",
      },
      {
        id: "linear-quadratic-simultaneous",
        heading: "Linear–quadratic simultaneous equations",
        covers: "Substituting a linear equation into a circle or quadratic curve (e.g. x² + y² = 25 and y = 2x − 5); pairing each x with its corresponding y; interpreting intersections and tangency (b² − 4ac = 0).",
      },
      {
        id: "quadratic-and-graphical-inequalities",
        heading: "Quadratic inequalities & graphical regions",
        covers: "Finding critical values and sketching the parabola to write one connected interval (a < x < b) vs two separate tails (x < a or x > b); shading regions defined by dashed/solid lines.",
      },
    ],
  },
  // ------------------------ FUNCTIONS & CALCULUS --------------------------
  {
    id: "sequences-functions-graphs",
    title: "Arithmetic Series, Functions & Curve Transformations",
    strand: "Functions & Calculus",
    icon: "📈",
    courseYear: 11,
    courseOrder: 6,
    curriculum: "Edexcel 4MA1 Higher 3.1, 3.2, 3.3; Tanglin Higher Units 7 & 11",
    sections: [
      {
        id: "arithmetic-sequences-series",
        heading: "Arithmetic sequences & series S_n",
        covers: "Using u_n = a + (n − 1)d and deriving/applying S_n = n/2[2a + (n − 1)d] = n/2(a + l); simultaneous sequence clues and finding n from a given sum.",
      },
      {
        id: "composite-inverse-functions",
        heading: "Domain, range, composite fg(x) & inverse f⁻¹(x)",
        covers: "Excluded domain values (division by zero, negative square roots); evaluating fg(x) in right-to-left order (apply g first, then f); finding f⁻¹(x) and solving fg(x) = k.",
      },
      {
        id: "turning-points-sketching",
        heading: "Quadratic sketching, roots, normals & perpendicular lines",
        covers: "Sketching quadratics with roots, y-intercept and turning point; perpendicular gradients m₁m₂ = −1 and equations of normals/mediators.",
      },
      {
        id: "cubic-reciprocal-exponential",
        heading: "Cubic, reciprocal & exponential graphs",
        covers: "Recognising and sketching y = ax³ + bx² + cx + d, y = k/x, y = k/x² and y = ab^x; asymptotes; solving f(x) = g(x) by drawing a suitable straight line on a given curve.",
      },
      {
        id: "graph-transformations",
        heading: "Transformations of graphs y = f(x)",
        covers: "Translations f(x) + a and f(x + a) (inside bracket acts oppositely on x), stretches af(x) and f(ax), and reflections −f(x) and f(−x); tracking turning points and asymptotes.",
      },
    ],
  },
  {
    id: "calculus-kinematics",
    title: "Differentiation & Kinematics",
    strand: "Functions & Calculus",
    icon: "🚀",
    courseYear: 11,
    courseOrder: 8,
    curriculum: "Edexcel 4MA1 Higher 3.4; Tanglin Higher Calculus & Kinematics",
    sections: [
      {
        id: "differentiating-powers",
        heading: "Differentiating powers of x (dy/dx)",
        covers: "Power rule d/dx(ax^n) = nax^(n−1) for positive, negative and fractional powers; rewriting 1/x^n = x^(−n), √x = x^(1/2) and splitting single-denominator fractions before differentiating.",
      },
      {
        id: "gradients-tangents-normals",
        heading: "Gradients of curves, tangents & normals",
        covers: "Evaluating dy/dx at x = x₀ for gradient; finding points with a given gradient; equations of tangents and normals using y − y₁ = m(x − x₁).",
      },
      {
        id: "stationary-points-optimisation",
        heading: "Stationary points (max/min) & optimisation",
        covers: "Solving dy/dx = 0 for stationary points; mandatory justification of maximum vs minimum (second derivative d²y/dx² or sign of dy/dx either side / shape of cubic); forming & maximising area/volume functions.",
      },
      {
        id: "kinematics-calculus",
        heading: "Kinematics: displacement s, velocity v & acceleration a",
        covers: "Differentiating s(t) → v = ds/dt → a = dv/dt; instantaneous rest (v = 0); total distance travelled when a particle reverses direction vs net displacement.",
      },
    ],
  },
  // ---------------------- GEOMETRY & TRIGONOMETRY -------------------------
  {
    id: "mensuration-circles",
    title: "3D Mensuration, Similarity & Circle Theorems",
    strand: "Geometry & Trigonometry",
    icon: "🔵",
    courseYear: 10,
    courseOrder: 3,
    curriculum: "Edexcel 4MA1 Higher 4.6, 4.9, 4.10; Tanglin Higher Unit 4 & Circle Theorems",
    sections: [
      {
        id: "sectors-segments",
        heading: "Arc length, sector area & segments",
        covers: "Arc length (θ/360) × 2πr, sector perimeter (+ 2r), sector area (θ/360) × πr², and minor segment area = sector − ½r² sin θ; exact answers in terms of π.",
      },
      {
        id: "cones-spheres-frustums",
        heading: "Cones, spheres, hemispheres & frustums",
        covers: "Curved vs total surface area (πrl + πr² for solid cone; 3πr² for solid hemisphere); volumes of cones, pyramids, spheres and frustums (large cone − small similar cone).",
      },
      {
        id: "area-volume-similarity",
        heading: "Similar shapes & solids (k, k², k³)",
        covers: "Linear scale factor k, area/surface-area scale factor k², and volume/mass scale factor k³; taking √ for k² → k before cubing for k³.",
      },
      {
        id: "circle-theorems-angles",
        heading: "Circle theorems I: centre, semicircle, same segment & cyclic quads",
        covers: "Angle at centre = 2 × angle at circumference; angle in a semicircle = 90°; angles in the same segment are equal; opposite angles of a cyclic quadrilateral sum to 180° — with exact Edexcel wording.",
      },
      {
        id: "tangents-alternate-chords",
        heading: "Circle theorems II: tangents, alternate segment & intersecting chords",
        covers: "Tangent perpendicular to radius (90°); equal tangents from an external point; alternate segment theorem; intersecting chords & secants (PA × PB = PC × PD and PT² = PA × PB).",
      },
    ],
  },
  {
    id: "trigonometry-3d",
    title: "Sine & Cosine Rules, 3D Trig & Trig Graphs",
    strand: "Geometry & Trigonometry",
    icon: "📐",
    courseYear: 11,
    courseOrder: 7,
    curriculum: "Edexcel 4MA1 Higher 4.8; Tanglin Higher Unit 8",
    sections: [
      {
        id: "pythagoras-exact-trig",
        heading: "Right-angled trig & exact values (30°, 45°, 60°)",
        covers: "SOHCAHTOA, angles of elevation & depression, deriving exact values for 0°, 30°, 45°, 60°, 90° from 1-1-√2 and 2-2-2 triangles, and surd Pythagoras.",
      },
      {
        id: "three-dimensional-trig",
        heading: "3D Pythagoras & angle between a line and a plane",
        covers: "Space diagonals in cuboids, pyramids and wedges; dropping a perpendicular to identify the right-angled shadow triangle for the angle between a line and a base plane.",
      },
      {
        id: "sine-rule-ambiguous",
        heading: "The Sine Rule & the obtuse ambiguous case",
        covers: "a/sin A = b/sin B for sides and sin A/a = sin B/b for angles; spotting when sin θ = k gives an obtuse angle 180° − θ ('given that angle A is obtuse').",
      },
      {
        id: "cosine-rule-triangle-area",
        heading: "The Cosine Rule & triangle area ½ab sin C",
        covers: "a² = b² + c² − 2bc cos A (and negative cos A when A > 90°); cos A = (b² + c² − a²)/(2bc); area = ½ab sin C and multi-triangle quadrilateral problems.",
      },
      {
        id: "bearings-and-trig-graphs",
        heading: "Three-figure bearings & trigonometric graphs",
        covers: "Combining parallel North lines (co-interior 180°) with Sine/Cosine Rules in bearing journeys; sketching y = sin x, y = cos x, y = tan x and finding secondary solutions in 0° ≤ x ≤ 360°.",
      },
    ],
  },
  // ----------------------- VECTORS & STATISTICS ---------------------------
  {
    id: "vectors-sets-stats",
    title: "Vectors, Sets, Conditional Probability & Histograms",
    strand: "Vectors & Statistics",
    icon: "📊",
    courseYear: 11,
    courseOrder: 5,
    curriculum: "Edexcel 4MA1 Higher 1.5, 5.1, 6.1–6.3; Tanglin Higher Unit 6, Vectors & Sets",
    sections: [
      {
        id: "vector-geometry-proofs",
        heading: "Vector geometry, ratios & collinearity proofs",
        covers: "Column vectors, magnitude |a| = √(x² + y²), routing along vector paths, dividing a segment in ratio m : n, and proving points A, B, C are collinear (parallel scalar multiple + shared point).",
      },
      {
        id: "sets-venn-diagrams",
        heading: "Set notation & Venn diagrams",
        covers: "Universal set ξ, union A ∪ B, intersection A ∩ B, complement A', subset A ⊂ B, element ∈, empty set ∅ and cardinality n(A); solving algebraic 2- and 3-circle Venn diagrams.",
      },
      {
        id: "conditional-probability-trees",
        heading: "Tree diagrams & conditional probability",
        covers: "Independent vs dependent ('without replacement' — denominator drops by 1!) events; 'at least one' = 1 − P(none); conditional probability from Venn diagrams and trees.",
      },
      {
        id: "cumulative-frequency-quartiles",
        heading: "Grouped mean, cumulative frequency & IQR",
        covers: "Estimated mean ∑fx / ∑f using midpoints; plotting cumulative frequency at UPPER class boundaries; reading median (N/2), Q₁ (N/4), Q₃ (3N/4) and interquartile range IQR = Q₃ − Q₁.",
      },
      {
        id: "histograms-frequency-density",
        heading: "Histograms with unequal class widths",
        covers: "Frequency Density = Frequency ÷ Class Width; area of bar = frequency (or proportional to frequency); estimating counts across fractional parts of a class interval.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}

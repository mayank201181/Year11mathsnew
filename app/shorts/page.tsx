import { Suspense } from "react";
import type { Metadata } from "next";
import { ShortsHub } from "@/components/ShortsHub";

export const metadata: Metadata = {
  title: "Concept Shorts — IGCSE Maths 4MA1 Higher",
  description: "Bite-sized vertical 9:16 concept Shorts for every topic in Edexcel IGCSE Mathematics Higher (4MA1).",
};

export default function ShortsPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading Concept Shorts…</p>}>
      <ShortsHub subjectLabel="IGCSE Maths 4MA1" />
    </Suspense>
  );
}

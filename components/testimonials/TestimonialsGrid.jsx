"use client";

import { useMemo, useState } from "react";
import { testimonials } from "@/lib/testimonials";
import TestimonialCard from "./TestimonialCard";

const tabs = ["Semua", "Pembeli", "Desainer"];

export default function TestimonialsGrid() {
  const [active, setActive] = useState("Semua");

  const filtered = useMemo(() => {
    if (active === "Semua") return testimonials;
    return testimonials.filter((t) => t.role === active);
  }, [active]);

  return (
    <section className="bg-smoke py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="flex justify-center gap-2">
          {tabs.map((tab) => {
            const isActive = active === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-ring ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink hover:border-ink"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

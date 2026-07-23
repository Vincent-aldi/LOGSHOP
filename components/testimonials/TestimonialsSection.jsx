"use client";

import { useMemo, useState } from "react";
import { testimonials as initialTestimonials } from "@/lib/testimonials";
import TestimonialCard from "./TestimonialCard";
import TestimonialForm from "./TestimonialForm";

const tabs = ["Semua", "Pembeli", "Desainer"];

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [active, setActive] = useState("Semua");
  const [highlightId, setHighlightId] = useState(null);

  const filtered = useMemo(() => {
    if (active === "Semua") return testimonials;
    return testimonials.filter((t) => t.role === active);
  }, [active, testimonials]);

  function handleAddTestimonial({ name, role, quote, rating }) {
    const newTestimonial = {
      id: `local-${Date.now()}`,
      name,
      role,
      business: "Pengguna LOGSHOP",
      rating,
      quote,
    };

    // Menambahkan langsung ke daftar (optimistic update) supaya pengguna
    // melihat testimoninya tampil seketika. Untuk produksi, kirim juga
    // data ini ke API/database, dan idealnya tandai `pending: true` sampai
    // dimoderasi tim — baru dianggap final setelah disetujui di backend.
    setTestimonials((prev) => [newTestimonial, ...prev]);
    setActive("Semua"); // pastikan testimoni baru tidak "hilang" karena filter aktif
    setHighlightId(newTestimonial.id);
    setTimeout(() => setHighlightId(null), 3000);

    document
      .getElementById("testimonials-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section id="testimonials-grid" className="bg-smoke py-24">
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
              <TestimonialCard
                key={t.id}
                testimonial={t}
                highlighted={t.id === highlightId}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-2xl px-6">
          <TestimonialForm onSubmit={handleAddTestimonial} />
        </div>
      </section>
    </>
  );
}

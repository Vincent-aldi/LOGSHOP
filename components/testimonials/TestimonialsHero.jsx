import { testimonials, getAverageRating } from "@/lib/testimonials";
import StarRating from "./StarRating";

export default function TestimonialsHero() {
  const average = getAverageRating();
  const buyerCount = testimonials.filter((t) => t.role === "Pembeli").length;
  const designerCount = testimonials.filter((t) => t.role === "Desainer").length;

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-content px-6 py-20 text-center md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mute">
          Testimoni
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Apa Kata Pengguna LOGSHOP?
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-mute">
          Cerita nyata dari pemilik bisnis yang menemukan identitas visualnya,
          dan desainer yang membangun penghasilan lewat karyanya.
        </p>

        <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 divide-x divide-line rounded-2xl border border-line">
          <div className="flex flex-col items-center gap-2 px-4 py-6">
            <StarRating rating={5} className="h-4 w-4 text-ink" />
            <span className="font-display text-2xl font-bold text-ink">{average}</span>
            <span className="text-xs text-mute">Rating Rata-rata</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 px-4 py-6">
            <span className="font-display text-2xl font-bold text-ink">
              {testimonials.length}+
            </span>
            <span className="text-xs text-mute">Total Ulasan</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 px-4 py-6">
            <span className="font-display text-2xl font-bold text-ink">
              {buyerCount}:{designerCount}
            </span>
            <span className="text-xs text-mute">Pembeli : Desainer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

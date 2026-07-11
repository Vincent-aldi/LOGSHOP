import StarRating from "./StarRating";

export default function TestimonialCard({ testimonial }) {
  const initial = testimonial.name.charAt(0);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
      <StarRating rating={testimonial.rating} className="h-4 w-4 text-ink" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-paper">
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-mute">{testimonial.business}</p>
        </div>
        <span className="ml-auto shrink-0 rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-mute">
          {testimonial.role}
        </span>
      </div>
    </div>
  );
}

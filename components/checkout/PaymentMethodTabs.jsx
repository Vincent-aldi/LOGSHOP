export default function PaymentMethodTabs({ method, onChange }) {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => onChange("qris")}
        aria-pressed={method === "qris"}
        className={`rounded-lg border px-6 py-2.5 text-sm font-bold tracking-wide transition-colors focus-ring ${
          method === "qris"
            ? "border-ink bg-paper text-ink"
            : "border-line text-mute hover:border-ink hover:text-ink"
        }`}
      >
        QRIS
      </button>
      <button
        type="button"
        onClick={() => onChange("bank")}
        aria-pressed={method === "bank"}
        className={`rounded-lg border px-6 py-2.5 text-sm font-semibold transition-colors focus-ring ${
          method === "bank"
            ? "border-ink bg-ink text-paper"
            : "border-line text-ink hover:border-ink"
        }`}
      >
        Transfer Bank
      </button>
    </div>
  );
}

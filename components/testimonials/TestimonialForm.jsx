"use client";

import { useState } from "react";

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink/20";

export default function TestimonialForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Pembeli");
  const [quote, setQuote] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !quote.trim()) {
      setError("Nama dan testimoni wajib diisi.");
      return;
    }

    setLoading(true);
    // Simulasi pengiriman. Untuk produksi, kirim juga ke API/database agar
    // testimoni tersimpan permanen (saat ini hanya tampil di sesi browser
    // pengguna yang mengisi, karena datanya cuma disimpan di state React).
    setTimeout(() => {
      onSubmit?.({ name: name.trim(), role, quote: quote.trim(), rating });

      setLoading(false);
      setJustSubmitted(true);
      setTimeout(() => setJustSubmitted(false), 3000);

      // Reset form supaya siap dipakai lagi / oleh pengguna lain di perangkat yang sama
      setName("");
      setQuote("");
      setRating(5);
      setRole("Pembeli");
    }, 500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-paper p-6 sm:p-8"
    >
      <h3 className="font-display text-lg font-bold text-ink">
        Tulis Testimonimu
      </h3>
      <p className="mt-1 text-sm text-mute">
        Sudah pernah beli atau jual desain di LOGSHOP? Ceritakan pengalamanmu
        — testimonimu langsung tampil di atas begitu dikirim.
      </p>

      <div className="mt-6">
        <p className="text-sm font-medium text-ink">Rating</p>
        <div
          className="mt-2 flex gap-1"
          onMouseLeave={() => setHoverRating(0)}
        >
          {Array.from({ length: 5 }).map((_, i) => {
            const value = i + 1;
            const filled = value <= (hoverRating || rating);
            return (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                onMouseEnter={() => setHoverRating(value)}
                aria-label={`Beri rating ${value}`}
                className="p-0.5 text-ink focus-ring"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill={filled ? "currentColor" : "none"}>
                  <path
                    d="M12 3 L14.8 9 L21.3 9.8 L16.6 14.2 L17.9 20.6 L12 17.4 L6.1 20.6 L7.4 14.2 L2.7 9.8 L9.2 9 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="t-name" className="text-sm font-medium text-ink">
            Nama
          </label>
          <input
            id="t-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="t-role" className="text-sm font-medium text-ink">
            Kamu sebagai
          </label>
          <select
            id="t-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={inputClass}
          >
            <option value="Pembeli">Pembeli</option>
            <option value="Desainer">Desainer</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="t-quote" className="text-sm font-medium text-ink">
          Testimoni
        </label>
        <textarea
          id="t-quote"
          rows={4}
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Ceritakan pengalamanmu memakai LOGSHOP..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
          {error}
        </p>
      )}

      {justSubmitted && (
        <p className="mt-4 rounded-lg bg-ink px-4 py-2 text-sm text-paper">
          Testimonimu berhasil ditambahkan — lihat di atas ✓
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 focus-ring disabled:opacity-60"
      >
        {loading ? "Mengirim..." : "Kirim Testimoni"}
      </button>
    </form>
  );
}

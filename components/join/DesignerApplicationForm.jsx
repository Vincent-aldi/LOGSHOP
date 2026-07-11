"use client";

import { useState } from "react";
import { categories } from "@/lib/products";

const initialForm = {
  name: "",
  email: "",
  whatsapp: "",
  portfolio: "",
  message: "",
};

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink/20";

export default function DesignerApplicationForm() {
  const [form, setForm] = useState(initialForm);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleCategory(cat) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.portfolio.trim()) {
      setError("Nama, email, dan link portofolio wajib diisi.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Format alamat email tidak valid.");
      return;
    }
    if (selectedCategories.length === 0) {
      setError("Pilih minimal satu kategori keahlianmu.");
      return;
    }

    setLoading(true);
    // Simulasi pengiriman pengajuan. Ganti dengan pemanggilan API asli
    // (mis. POST ke /api/designer-applications) untuk menyimpan data ini.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <section id="form-pendaftaran" className="bg-smoke py-24">
        <div className="mx-auto max-w-content px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink text-paper">
            <CheckIcon className="h-8 w-8" />
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold text-ink">
            Pengajuan Terkirim
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-mute">
            Terima kasih, {form.name}! Tim kami akan meninjau portofoliomu
            dan menghubungi lewat {form.email} dalam 2-3 hari kerja.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="form-pendaftaran" className="bg-smoke py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Formulir Pendaftaran Desainer
          </h2>
          <p className="mt-4 text-mute">
            Isi data di bawah ini selengkap mungkin — semakin lengkap
            portofoliomu, semakin cepat proses kurasinya.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 rounded-2xl border border-line bg-paper p-6 sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Nama Lengkap" htmlFor="name">
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Alamat Email" htmlFor="email">
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Nomor WhatsApp" htmlFor="whatsapp" optional>
              <input
                id="whatsapp"
                type="tel"
                placeholder="08xxxxxxxxxx"
                value={form.whatsapp}
                onChange={(e) => updateField("whatsapp", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Link Portofolio" htmlFor="portfolio">
              <input
                id="portfolio"
                type="url"
                placeholder="Behance / Instagram / Drive"
                value={form.portfolio}
                onChange={(e) => updateField("portfolio", e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Kategori Keahlian</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = selectedCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors focus-ring ${
                      active
                        ? "border-ink bg-ink text-paper"
                        : "border-line text-ink hover:border-ink"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <Field label="Ceritakan pengalamanmu" htmlFor="message" optional>
            <textarea
              id="message"
              rows={4}
              placeholder="Sudah berapa lama mendesain? Tools favorit? Pencapaian yang ingin dibagikan?"
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </Field>

          <div>
            <p className="text-sm font-medium text-ink">
              Contoh Karya <span className="font-normal text-mute">(opsional)</span>
            </p>
            <label
              htmlFor="file"
              className="mt-3 flex cursor-pointer items-center justify-between rounded-lg border border-dashed border-line px-4 py-3 text-sm text-mute hover:border-ink"
            >
              <span>{fileName || "Klik untuk unggah file (PNG, JPG, atau PDF)"}</span>
              <span className="shrink-0 rounded-full border border-ink px-3 py-1 text-xs font-semibold text-ink">
                Pilih File
              </span>
              <input
                id="file"
                type="file"
                accept="image/png,image/jpeg,application/pdf"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                className="hidden"
              />
            </label>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-ink py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 focus-ring disabled:opacity-60"
          >
            {loading ? "Mengirim..." : "Kirim Pengajuan"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, optional, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}{" "}
        {optional && <span className="font-normal text-mute">(opsional)</span>}
      </label>
      {children}
    </div>
  );
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 12 L9.5 17.5 L20 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

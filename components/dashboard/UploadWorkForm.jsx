"use client";

import { useState } from "react";
import { categories } from "@/lib/designer-data";

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink/20";

export default function UploadWorkForm({ onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !price) {
      setError("Nama karya dan harga wajib diisi.");
      return;
    }
    if (Number(price) <= 0) {
      setError("Harga harus lebih dari 0.");
      return;
    }

    onSubmit({
      id: `w${Date.now()}`,
      name: name.trim(),
      category,
      price: Number(price),
      status: "Menunggu Kurasi",
      sold: 0,
      icon: "monogram",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-paper p-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-ink">
          Upload Karya Baru
        </h3>
        <button
          type="button"
          onClick={onCancel}
          aria-label="Tutup"
          className="text-mute hover:text-ink focus-ring"
        >
          ✕
        </button>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="w-name" className="text-sm font-medium text-ink">
            Nama Karya
          </label>
          <input
            id="w-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="w-category" className="text-sm font-medium text-ink">
            Kategori
          </label>
          <select
            id="w-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputClass}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="w-price" className="text-sm font-medium text-ink">
            Harga (Rp)
          </label>
          <input
            id="w-price"
            type="number"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="w-file" className="text-sm font-medium text-ink">
            File Desain
          </label>
          <label
            htmlFor="w-file"
            className="mt-2 flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-line px-4 py-6 text-sm text-mute hover:border-ink"
          >
            Klik untuk unggah file AI / EPS / PNG
          </label>
          <input id="w-file" type="file" className="hidden" />
        </div>
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90 focus-ring"
        >
          Kirim untuk Kurasi
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full border border-ink px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
        >
          Batal
        </button>
      </div>
    </form>
  );
}

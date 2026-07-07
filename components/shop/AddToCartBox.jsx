"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

export default function AddToCartBox({ product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleBuyNow() {
    addItem(product, qty);
    router.push("/cart");
  }

  return (
    <div className="mt-8 space-y-5">
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-ink">Jumlah</span>
        <div className="flex items-center rounded-full border border-ink">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Kurangi jumlah"
            className="h-10 w-10 text-lg font-semibold text-ink focus-ring"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-semibold text-ink">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Tambah jumlah"
            className="h-10 w-10 text-lg font-semibold text-ink focus-ring"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={handleAdd}
          className="rounded-full border border-ink px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
        >
          {added ? "Ditambahkan ✓" : "Tambah ke Keranjang"}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-80 focus-ring"
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
}

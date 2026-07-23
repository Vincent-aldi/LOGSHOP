"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

export default function AddToCartBox({ product }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  function handleAdd() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleBuyNow() {
    addItem(product, 1);
    router.push("/checkout");
  }

  return (
    <div className="mt-8 space-y-5">
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
"use client";

import ProductThumbnail from "./ProductThumbnail";
import { formatRupiah } from "@/lib/products";

export default function CartItemRow({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center gap-5 border-b border-line py-6 first:pt-0">
      <ProductThumbnail
        product={item}
        className="h-20 w-20 shrink-0 rounded-xl"
        iconSize="h-9 w-9"
      />

      <div className="flex-1">
        <p className="font-display text-base font-bold text-ink">{item.name}</p>
        <p className="text-xs uppercase tracking-wide text-mute">{item.category}</p>
        <p className="mt-1 text-sm text-mute">{formatRupiah(item.price)}</p>
      </div>

      <p className="w-28 shrink-0 text-right text-sm font-semibold text-ink">
        {formatRupiah(item.price * item.quantity)}
      </p>

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        aria-label="Hapus dari keranjang"
        className="shrink-0 text-mute transition-colors hover:text-ink focus-ring"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

function TrashIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 7 H19 M9 7 V4 h6 V7 M7 7 L8 20 h8 L17 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
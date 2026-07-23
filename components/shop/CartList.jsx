"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatRupiah } from "@/lib/products";
import CartItemRow from "./CartItemRow";

export default function CartList() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-content px-6 py-24 text-center">
        <p className="text-lg font-semibold text-ink">Keranjang Anda kosong</p>
        <p className="mt-2 text-sm text-mute">
          Yuk, jelajahi katalog dan temukan desain logo favoritmu.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-80 focus-ring"
        >
          Jelajahi Katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-content px-6 pb-24">
      <div className="grid gap-12 md:grid-cols-[1fr_320px]">
        <div>
          <div className="flex items-center justify-between border-b border-line pb-4">
            <p className="text-sm font-semibold text-ink">
              {items.length} desain di keranjang
            </p>
            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-mute underline decoration-1 underline-offset-4 hover:text-ink focus-ring"
            >
              Kosongkan keranjang
            </button>
          </div>

          {items.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>

        <aside className="h-fit rounded-2xl border border-line p-6">
          <h3 className="font-display text-lg font-bold text-ink">
            Ringkasan Pesanan
          </h3>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-mute">
              <span>Subtotal</span>
              <span>{formatRupiah(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-mute">
              <span>Biaya Layanan</span>
              <span>Rp 0</span>
            </div>
          </div>
          <div className="mt-5 flex justify-between border-t border-line pt-5 text-base font-semibold text-ink">
            <span>Total</span>
            <span>{formatRupiah(totalPrice)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block w-full rounded-full bg-ink py-3 text-center text-sm font-semibold text-paper transition-opacity hover:opacity-80 focus-ring"
          >
            Checkout
          </Link>
        </aside>
      </div>
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

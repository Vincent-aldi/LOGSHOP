"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartButton() {
  const { totalCount } = useCart();

  return (
    <Link href="/cart" aria-label="Keranjang" className="relative text-ink focus-ring">
      <CartIcon className="h-5 w-5" />
      {totalCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-paper">
          {totalCount > 9 ? "9+" : totalCount}
        </span>
      )}
    </Link>
  );
}

function CartIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 8 H18 L17 20 H7 Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9 8 V6 a3 3 0 0 1 6 0 V8" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

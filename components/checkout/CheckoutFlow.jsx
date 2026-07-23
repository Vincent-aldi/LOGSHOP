"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import PaymentMethodTabs from "./PaymentMethodTabs";
import QrisPayment from "./QrisPayment";
import BankTransferPayment from "./BankTransferPayment";
import OrderSummary from "./OrderSummary";

export default function CheckoutFlow() {
  const { items, totalPrice, clearCart } = useCart();
  const [method, setMethod] = useState("qris");
  const [paid, setPaid] = useState(false);

  // ID pesanan sederhana untuk demo — di produksi ini datang dari
  // response API saat membuat transaksi di payment gateway.
  const [orderId] = useState(
    () => `LGS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  );

  function handlePaymentSuccess() {
    setPaid(true);
    clearCart();
  }

  if (paid) {
    return (
      <div className="mx-auto max-w-content px-6 py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink text-paper">
          <CheckIcon className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-bold text-ink">
          Pembayaran Berhasil
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-mute">
          Terima kasih! File desain logo akan dikirim ke email Anda beberapa
          saat lagi. Nomor pesanan: <span className="font-semibold text-ink">{orderId}</span>
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-80 focus-ring"
        >
          Lanjut Belanja
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-content px-6 py-24 text-center">
        <p className="text-lg font-semibold text-ink">
          Keranjang Anda kosong
        </p>
        <p className="mt-2 text-sm text-mute">
          Tidak ada desain untuk dibayar. Yuk, jelajahi katalog dulu.
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
      <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="text-sm text-mute">
            Lakukan pembayaran dengan memilih metode berikut:
          </p>

          <div className="mt-4">
            <PaymentMethodTabs method={method} onChange={setMethod} />
          </div>

          <div className="mt-8">
            {method === "qris" ? (
              <QrisPayment
                amount={totalPrice}
                orderId={orderId}
                onSuccess={handlePaymentSuccess}
              />
            ) : (
              <BankTransferPayment
                amount={totalPrice}
                onSuccess={handlePaymentSuccess}
              />
            )}
          </div>
        </div>

        <OrderSummary />
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

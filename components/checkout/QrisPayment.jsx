"use client";

import { useState } from "react";

export default function QrisPayment({ amount, orderId, onSuccess }) {
  const [checking, setChecking] = useState(false);

  // Kode QR di bawah dibuat lewat API publik https://goqr.me hanya untuk
  // keperluan demo/prototipe (meng-encode ID pesanan + jumlah bayar jadi
  // gambar QR). Untuk produksi, ganti dengan gambar QRIS resmi yang
  // dikirim oleh payment gateway-mu (mis. Midtrans, Xendit, atau Doku)
  // setelah membuat transaksi lewat API mereka.
  const qrData = encodeURIComponent(`LOGSHOP|${orderId}|${amount}`);
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${qrData}`;

  function handleCheckStatus() {
    setChecking(true);
    // Simulasi polling status pembayaran ke payment gateway.
    setTimeout(() => {
      setChecking(false);
      onSuccess();
    }, 1200);
  }

  return (
    <div>
      <p className="text-sm text-ink">
        Silakan pindai kode QR di bawah ini menggunakan aplikasi e-wallet
        atau mobile banking Anda:
      </p>

      <div className="mt-6 inline-block rounded-2xl border border-line bg-paper p-4">
        <img
          src={qrImageUrl}
          alt="Kode QR pembayaran QRIS"
          className="h-64 w-64"
          width={280}
          height={280}
        />
      </div>

      <button
        type="button"
        onClick={handleCheckStatus}
        disabled={checking}
        className="mt-6 block w-full max-w-xs rounded-lg bg-ink py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 focus-ring disabled:opacity-60"
      >
        {checking ? "Mengecek status..." : "Cek Status Pembayaran"}
      </button>
    </div>
  );
}

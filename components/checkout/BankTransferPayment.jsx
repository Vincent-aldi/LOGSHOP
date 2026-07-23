"use client";

import { useState } from "react";

const banks = [
  {
    name: "Bank Central Asia",
    code: "BCA",
    account: "8801234567",
    channels: {
      atm: [
        "Masukkan kartu ATM BCA dan PIN Anda.",
        'Pilih menu "Transaksi Lainnya" > "Transfer" > "Ke Rek BCA Virtual Account".',
        "Masukkan nomor Virtual Account: {account}.",
        "Periksa detail tagihan sejumlah {amount}, lalu konfirmasi.",
        "Simpan struk sebagai bukti pembayaran.",
      ],
      mbanking: [
        'Buka aplikasi BCA mobile, login, lalu pilih menu "m-Transfer".',
        'Pilih "BCA Virtual Account".',
        "Masukkan nomor Virtual Account: {account}.",
        "Periksa detail tagihan sejumlah {amount}, masukkan PIN untuk konfirmasi.",
        "Transaksi selesai, simpan notifikasi sebagai bukti.",
      ],
      ibanking: [
        "Login ke KlikBCA Individual di klikbca.com.",
        'Pilih menu "Transfer Dana" > "Transfer ke BCA Virtual Account".',
        "Masukkan nomor Virtual Account: {account}.",
        "Konfirmasi jumlah tagihan {amount}, masukkan Response KeyBCA Token.",
        "Transaksi selesai, simpan bukti pembayaran.",
      ],
    },
  },
  {
    name: "Bank Mandiri",
    code: "Mandiri",
    account: "1370099887766",
    channels: {
      atm: [
        "Masukkan kartu ATM Mandiri dan PIN Anda.",
        'Pilih menu "Bayar/Beli" > "Lainnya" > "Multipayment".',
        "Masukkan kode perusahaan LOGSHOP, lalu nomor Virtual Account: {account}.",
        "Periksa detail tagihan sejumlah {amount}, lalu konfirmasi.",
        "Simpan struk sebagai bukti pembayaran.",
      ],
      mbanking: [
        'Buka aplikasi Livin\u2019 by Mandiri, login, lalu pilih "Bayar".',
        'Pilih kategori "Multipayment", cari LOGSHOP.',
        "Masukkan nomor Virtual Account: {account}.",
        "Periksa detail tagihan sejumlah {amount}, konfirmasi dengan MPIN.",
        "Transaksi selesai, simpan notifikasi sebagai bukti.",
      ],
      ibanking: [
        "Login ke Mandiri Internet Banking di ibank.bankmandiri.co.id.",
        'Pilih menu "Bayar" > "Multipayment".',
        "Pilih penyedia jasa LOGSHOP, masukkan nomor Virtual Account: {account}.",
        "Konfirmasi jumlah tagihan {amount} dan masukkan token.",
        "Transaksi selesai, simpan bukti pembayaran.",
      ],
    },
  },
  {
    name: "Bank Negara Indonesia",
    code: "BNI",
    account: "0192837465",
    channels: {
      atm: [
        "Masukkan kartu ATM BNI dan PIN Anda.",
        'Pilih menu "Menu Lain" > "Transfer" > "Virtual Account Billing".',
        "Masukkan nomor Virtual Account: {account}.",
        "Periksa detail tagihan sejumlah {amount}, lalu konfirmasi.",
        "Simpan struk sebagai bukti pembayaran.",
      ],
      mbanking: [
        'Buka aplikasi BNI Mobile Banking, login, lalu pilih "Transfer".',
        'Pilih "Virtual Account Billing".',
        "Masukkan nomor Virtual Account: {account}.",
        "Periksa detail tagihan sejumlah {amount}, konfirmasi dengan MPIN/password.",
        "Transaksi selesai, simpan notifikasi sebagai bukti.",
      ],
      ibanking: [
        "Login ke BNI Internet Banking di ibank.bni.co.id.",
        'Pilih menu "Transfer" > "Virtual Account Billing".',
        "Masukkan nomor Virtual Account: {account}.",
        "Konfirmasi jumlah tagihan {amount} dan masukkan kode otentikasi token.",
        "Transaksi selesai, simpan bukti pembayaran.",
      ],
    },
  },
];

const channelTabs = [
  { key: "atm", label: "ATM" },
  { key: "mbanking", label: "Mobile Banking" },
  { key: "ibanking", label: "Internet Banking" },
];

export default function BankTransferPayment({ amount, onSuccess }) {
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const [expandedBank, setExpandedBank] = useState(null);
  const [activeChannel, setActiveChannel] = useState("atm");

  function handleCopy(account) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(account).catch(() => {});
    }
    setCopiedAccount(account);
    setTimeout(() => setCopiedAccount(null), 1500);
  }

  function toggleInstructions(code) {
    setExpandedBank((prev) => (prev === code ? null : code));
    setActiveChannel("atm");
  }

  function handleConfirm() {
    setConfirming(true);
    // Simulasi verifikasi transfer manual. Untuk produksi, hubungkan ke
    // payment gateway Virtual Account (mis. Midtrans/Xendit) yang bisa
    // mendeteksi pembayaran masuk secara otomatis.
    setTimeout(() => {
      setConfirming(false);
      onSuccess();
    }, 1200);
  }

  return (
    <div>
      <p className="text-sm text-ink">
        Transfer sejumlah{" "}
        <span className="font-semibold">{formatRupiah(amount)}</span> tepat
        ke salah satu rekening Virtual Account berikut:
      </p>

      <div className="mt-6 max-w-md space-y-3">
        {banks.map((bank) => {
          const isExpanded = expandedBank === bank.code;
          return (
            <div
              key={bank.code}
              className="rounded-xl border border-line bg-paper"
            >
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-mute">
                    {bank.name}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-ink">
                    {bank.account}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(bank.account)}
                  className="shrink-0 rounded-full border border-ink px-4 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
                >
                  {copiedAccount === bank.account ? "Tersalin ✓" : "Salin"}
                </button>
              </div>

              <button
                type="button"
                onClick={() => toggleInstructions(bank.code)}
                aria-expanded={isExpanded}
                className="flex w-full items-center justify-between border-t border-line px-5 py-3 text-xs font-semibold text-ink focus-ring"
              >
                Cara Pembayaran
                <span
                  className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>

              {isExpanded && (
                <div className="border-t border-line px-5 py-4">
                  <div className="flex flex-wrap gap-2">
                    {channelTabs.map((tab) => (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => setActiveChannel(tab.key)}
                        aria-pressed={activeChannel === tab.key}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-ring ${
                          activeChannel === tab.key
                            ? "border-ink bg-ink text-paper"
                            : "border-line text-mute hover:border-ink hover:text-ink"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-mute">
                    {bank.channels[activeChannel].map((step, i) => (
                      <li key={i}>
                        {step
                          .replace("{account}", bank.account)
                          .replace("{amount}", formatRupiah(amount))}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-4 max-w-md text-xs text-mute">
        Pembayaran akan diverifikasi otomatis. Jika sudah transfer, klik
        tombol di bawah ini.
      </p>

      <button
        type="button"
        onClick={handleConfirm}
        disabled={confirming}
        className="mt-4 block w-full max-w-xs rounded-lg bg-ink py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 focus-ring disabled:opacity-60"
      >
        {confirming ? "Memverifikasi..." : "Cek Status Pembayaran"}
      </button>
    </div>
  );
}

function formatRupiah(value) {
  return "Rp " + value.toLocaleString("id-ID");
}

"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { isAdmin } from "@/lib/admin-data";
import AdminApp from "./AdminApp";

export default function AdminGate() {
  const { user, hydrated } = useAuth();

  if (!hydrated) {
    return (
      <div className="mx-auto max-w-content px-6 py-24 text-center text-sm text-mute">
        Memuat dashboard...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-content px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-ink">
          Masuk Dulu untuk Melihat Dashboard Admin
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-mute">
          Halaman ini hanya bisa diakses oleh akun dengan role admin.
        </p>
        <Link
          href="/login"
          className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-80 focus-ring"
        >
          Login Sekarang
        </Link>
      </div>
    );
  }

  if (!isAdmin(user.email)) {
    return (
      <div className="mx-auto max-w-content px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-ink">
          Akses Ditolak
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-mute">
          Akun <span className="font-semibold text-ink">{user.email}</span>{" "}
          tidak memiliki akses admin. Halaman ini khusus untuk tim internal
          LOGSHOP.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full border border-ink px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return <AdminApp />;
}

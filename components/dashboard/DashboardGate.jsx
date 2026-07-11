"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import DashboardApp from "./DashboardApp";

export default function DashboardGate() {
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
          Masuk Dulu untuk Melihat Dashboard
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-mute">
          Dashboard ini hanya bisa diakses oleh desainer yang sudah login.
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

  return <DashboardApp />;
}

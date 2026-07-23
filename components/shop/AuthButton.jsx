"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { isAdmin } from "@/lib/admin-data";

export default function AuthButton() {
  const { user, logout, hydrated } = useAuth();

  // Sebelum hydrated (render pertama di server), tampilkan placeholder
  // netral supaya tidak ada "flash" dari Login -> email pengguna.
  if (!hydrated) {
    return (
      <span className="rounded-full border border-ink px-5 py-2 text-sm font-semibold text-transparent">
        Login
      </span>
    );
  }

  if (user) {
    const dashboardHref = isAdmin(user.email) ? "/admin" : "/dashboard";
    return (
      <div className="flex items-center gap-3">
        <Link
          href={dashboardHref}
          className="hidden text-sm font-medium text-ink hover:underline sm:inline focus-ring"
        >
          {user.email}
        </Link>
        <button
          type="button"
          onClick={logout}
          className="rounded-full border border-ink px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="rounded-full border border-ink px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
    >
      Login
    </Link>
  );
}

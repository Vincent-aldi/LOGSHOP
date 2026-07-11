"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CartButton from "./shop/CartButton";
import AuthButton from "./shop/AuthButton";

export default function Navbar() {
  const pathname = usePathname();
  const showCart =
  pathname.startsWith("/shop") ||
  pathname.startsWith("/detail") ||
  pathname.startsWith("/checkout");

  const links = [
    { label: "Jelajahi Kategori", href: "/shop" },
    { label: "Gabung Jadi Desainer", href: "/join-designer" },
    { label: "Testimoni", href: "/testimoni" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-ink focus-ring"
        >
          LOGSHOP
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-ink focus-ring"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden max-w-xs flex-1 items-center gap-2 rounded-full border border-line bg-smoke px-4 py-2 md:flex">
          <SearchIcon className="h-4 w-4 shrink-0 text-mute" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm text-ink placeholder:text-mute focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-5">
          {showCart && <CartButton />}

          <AuthButton />
        </div>
      </nav>
    </header>
  );
}

function SearchIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M21 21 L16.65 16.65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

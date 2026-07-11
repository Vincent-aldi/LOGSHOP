"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Alamat email dan password wajib diisi.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Format alamat email tidak valid.");
      return;
    }
    if (password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }

    setLoading(true);
    // Simulasi proses autentikasi. Ganti bagian ini dengan pemanggilan
    // API/auth provider asli (mis. NextAuth, Supabase, Firebase, dll).
    setTimeout(() => {
      login(email);
      router.push("/");
    }, 600);
  }

  function handleGoogleLogin() {
    // Placeholder — sambungkan ke OAuth provider asli (mis. NextAuth
    // dengan Google provider) untuk fungsi "Log with Google" sungguhan.
    setError("");
    setLoading(true);
    setTimeout(() => {
      login("pengguna@gmail.com");
      router.push("/");
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h1 className="text-center font-display text-4xl font-bold tracking-tight text-ink">
        Login
      </h1>

      <div className="mt-10">
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Alamat Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-lg border border-ink px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink/30"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="password" className="text-sm font-medium text-ink">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-lg border border-ink px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink/30"
        />
      </div>

      <div className="mt-3 text-right">
        <a
          href="#"
          className="text-sm text-sky-600 hover:underline focus-ring"
        >
          Forgot Password?
        </a>
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-lg bg-ink py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 focus-ring disabled:opacity-60"
      >
        {loading ? "Memproses..." : "Login"}
      </button>

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loading}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-ink py-3 text-sm font-semibold text-ink transition-colors hover:bg-smoke focus-ring disabled:opacity-60"
      >
        <GoogleIcon className="h-5 w-5" />
        Log with Google
      </button>

      <p className="mt-8 text-center text-sm text-mute">
        Belum punya akun?{" "}
        <a href="#" className="font-semibold text-ink hover:underline focus-ring">
          Daftar
        </a>
      </p>
    </form>
  );
}

function GoogleIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        fill="#EA4335"
        d="M24 9.5c3.4 0 6.4 1.2 8.8 3.5l6.5-6.5C35.3 2.6 30 0.5 24 0.5 14.9 0.5 7.1 5.7 3.3 13.3l7.6 5.9C12.7 13.3 17.9 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 3-2.2 5.5-4.7 7.2l7.3 5.7c4.3-4 6.8-9.9 6.8-17.4z"
      />
      <path
        fill="#FBBC05"
        d="M10.9 28.2A14.5 14.5 0 0 1 10.1 24c0-1.5.3-2.9.7-4.2l-7.6-5.9A24 24 0 0 0 0.5 24c0 3.9.9 7.5 2.6 10.7l7.8-6.5z"
      />
      <path
        fill="#34A853"
        d="M24 47.5c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2 1.4-4.7 2.3-8.6 2.3-6.1 0-11.3-3.8-13.1-9.3l-7.8 6.5C7.1 42.3 14.9 47.5 24 47.5z"
      />
    </svg>
  );
}

import Link from "next/link";
import LoginForm from "@/components/shop/LoginForm";

export const metadata = {
  title: "Login — LOGSHOP",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-paper">
      <div className="px-6 py-6">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-ink focus-ring"
        >
          LOGSHOP
        </Link>
      </div>

      <div className="flex justify-center px-6 py-16 sm:py-24">
        <LoginForm />
      </div>
    </main>
  );
}

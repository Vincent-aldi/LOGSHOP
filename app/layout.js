import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "LOGSHOP",
  description:
    "Temukan desain visual identitas bisnis Anda. Ratusan pilihan desain logo siap pakai, dari minimalis hingga korporat mewah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

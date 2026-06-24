import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThaB Media | Yapım Aşamasında",
  description:
    "Markalar için yaratıcı reklam, dijital pazarlama ve medya çözümleri. Çok yakında yayındayız.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-[#0a0e1a] text-white font-sans">
        {children}
      </body>
    </html>
  );
}

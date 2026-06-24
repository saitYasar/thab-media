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
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-[#f8f9fc] text-[#192652] font-sans">
        {children}
      </body>
    </html>
  );
}

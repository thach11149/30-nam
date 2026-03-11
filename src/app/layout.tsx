import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "30 Năm Hàng Việt Nam Chất Lượng Cao",
  description: "Kỷ niệm 30 năm hình thành và phát triển Hàng Việt Nam Chất Lượng Cao (1996 - 2026). Tự hào & Tiếp nối.",
  openGraph: {
    title: "30 Năm Hàng Việt Nam Chất Lượng Cao",
    description: "Kỷ niệm 30 năm hình thành và phát triển Hàng Việt Nam Chất Lượng Cao (1996 - 2026).",
    images: [{ url: "/og-image.jpg" }],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} ${playfair.variable}`}
        suppressHydrationWarning
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

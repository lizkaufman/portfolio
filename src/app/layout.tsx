import type { Metadata } from "next";
import { Inter, Merriweather, Inconsolata } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liz Kaufman",
  description: "Liz Kaufman's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}

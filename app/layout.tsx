import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: { default: "Xaiko — Blog Pribadi", template: "%s — Xaiko" },
  description: "Blog pribadi Xaiko — catatan, proyek, dan hal-hal yang layak disimpan.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><Header /><main>{children}</main><Footer /></body></html>;
}

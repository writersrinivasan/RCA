import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-RCA Academy — AI-Assisted Problem Solving & Root Cause Analysis",
  description:
    "A 3-day leadership intensive for non-technical support team leaders: where AI genuinely helps root cause analysis, where it creates false confidence, and how to lead a team through it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[#05070d] text-slate-200">
        <NavBar />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

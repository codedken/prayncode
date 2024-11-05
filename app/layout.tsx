import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pray&Code",
    default: "Pray&Code",
  },
  description: "This is the Kennedy Chibuzor's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Link
          href="https://wa.me/+2348068895803"
          target="_blank"
          className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-accent/90 p-3"
        >
          <FaWhatsapp className="text-4xl text-white" />
          <span className="hidden font-bold text-primary/80 md:block">
            Let&apos;s chat
          </span>
        </Link>
        <Footer />
      </body>
    </html>
  );
}

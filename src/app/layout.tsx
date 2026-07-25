import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grow Smart - Premium Educational Platform",
  description: "A world-class EdTech platform empowering learners and educators to achieve more.",
  openGraph: {
    title: "Grow Smart",
    description: "Premium SaaS-quality educational company profile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10 selection:text-primary flex flex-col">
        {children}
      </body>
    </html>
  );
}

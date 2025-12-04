import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goh Jia Xin | Applied Computing Student | FinTech Specialist",
  description: "Portfolio of Goh Jia Xin, an Applied Computing student specializing in FinTech. Showcasing projects in data science, machine learning, and financial technology solutions.",
  keywords: ["Goh Jia Xin", "Applied Computing", "FinTech", "Data Science", "Machine Learning", "Portfolio"],
  authors: [{ name: "Goh Jia Xin" }],
  openGraph: {
    title: "Goh Jia Xin | Applied Computing Student | FinTech Specialist",
    description: "Portfolio of Goh Jia Xin, an Applied Computing student specializing in FinTech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

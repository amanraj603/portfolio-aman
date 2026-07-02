import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Aman Raj – Frontend Engineer",
  description: "Associate Software Engineer at Droom Technology. Building fast, scalable, and beautiful web experiences with Next.js, React, and modern frontend technologies.",
  keywords: "Aman Raj, Frontend Engineer, React Developer, Next.js, Portfolio",
  openGraph: {
    title: "Aman Raj – Frontend Engineer",
    description: "Associate Software Engineer specializing in Next.js, React, and modern web development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

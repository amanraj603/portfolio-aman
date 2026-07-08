import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Aman Raj – Full Stack Engineer",
  description:
    "Associate Software Engineer at Droom Technology. Building fast, scalable, and beautiful web experiences with Next.js, React, and modern web technologies.",
  keywords:
    "Aman Raj, Full Stack Engineer, React Developer, Next.js, Portfolio",
  openGraph: {
    title: "Aman Raj – Full Stack Engineer",
    description:
      "Associate Software Engineer specializing in Next.js, React, and modern web development.",
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

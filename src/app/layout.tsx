import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cryptography Demos",
  description: "A hands on demo effort to learn cryptography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        {children}
        {/* <footer className="bg-gray-800">&copy; 2021</footer> */}
      </body>
    </html>
  );
}

"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <Toaster position="top-center" />
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}

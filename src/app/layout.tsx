import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Header from "../components/Header/Header";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Residence | Dev Website",
  description: "Dev Mode Residences Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body
          className={`${inter.className} min-h-screen min-w-screen w-screen h-auto overflow-x-hidden relative`}
        >
          <div className='relative z-30'>
            <Navbar />
          </div>
          <div className='w-full z-30'>{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}

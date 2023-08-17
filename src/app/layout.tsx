"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { createContext, useContext } from "react";
import { Poppins } from "@next/font/google";

const FadeBackgroundContext = createContext(false);
export const useFadeBackground = () => useContext(FadeBackgroundContext);

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fadeBackground, setfadeBackground] = useState(false);

  const isMobileMenuOpen = () => {
    setfadeBackground(!fadeBackground);
  };

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans scrollbar-thin scrollbar-thumb-royalPurple scrollbar-track-goldenApricot scrollbar-thumb-rounded-full`}
      >
        <Navbar clicked={isMobileMenuOpen} />
        <FadeBackgroundContext.Provider value={fadeBackground}>
          {children}
        </FadeBackgroundContext.Provider>
      </body>
    </html>
  );
}

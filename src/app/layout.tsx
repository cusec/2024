"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Fade from "@/components/Fade";
import { useState } from "react";
import { createContext, useContext } from "react";
import { Poppins } from "@next/font/google";
import Footer from "@/components/Footer";

const FadeBackgroundContext = createContext(false);
export const useFadeBackground = () => useContext(FadeBackgroundContext);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        className={`${poppins.variable} font-sans scrollbar scrollbar-w-3 scrollbar-thumb-royalPurple scrollbar-track-goldenApricot scrollbar-thumb-rounded-sm`}
      >
        <Navbar clicked={isMobileMenuOpen} />
        <FadeBackgroundContext.Provider value={fadeBackground}>
          {children}
          <Fade>
            <Footer />
          </Fade>
        </FadeBackgroundContext.Provider>
      </body>
    </html>
  );
}

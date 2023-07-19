'use client'

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import {useState} from "react"

export const metadata: Metadata = {
  title: "CUSEC 2024",
  description:
    "Official website for the 2024 edition of the Canadian University Software Engineering Conference.",
};
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
      <body>
        <div className="gradientGridBackground w-full top-0 left-0 z-negative">
          <Navbar clicked={isMobileMenuOpen}/>
          <div className={`transition-opacity ease-in-out duration-[1500ms] ${fadeBackground ? 'opacity-0' : 'opacity-100'}`}>
          <Main />
          </div>
        </div>


          <div className={`transition-opacity ease-in-out duration-[1500ms] ${fadeBackground ? 'opacity-0' : 'opacity-100'}`}>
          <About />
          </div>
        {/* {children} */}
     </body>
    </html>
  );
}

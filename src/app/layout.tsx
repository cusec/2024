'use client'

import "./globals.css";
import Navbar from "@/components/Navbar";
import About from "@/components/Landing Page/About";
import {useState} from "react"


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
        <div className={`${fadeBackground ? 'gradientBackground':'gradientGridBackground'} w-full top-0 left-0 z-negative`}>
          <Navbar clicked={isMobileMenuOpen}/>
          <div className={`transition-opacity ease-in-out duration-[1500ms] ${fadeBackground ? 'opacity-0' : 'opacity-100'}`}>
          {/* <Main /> */}
          </div>
        {children}
        </div>


          <div className={`transition-opacity ease-in-out duration-[1500ms] ${fadeBackground ? 'opacity-0' : 'opacity-100'}`}>
          <About />
          </div>
     </body>
    </html>
  );
}

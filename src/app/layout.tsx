import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "CUSEC 2024",
  description:
    "Official website for the 2024 edition of the Canadian University Software Engineering Conference.",
};

type MobileMenuToggleHandler = (isOpen: boolean) => void;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  const handleMobileMenuToggle: MobileMenuToggleHandler = (isOpen: boolean) => {
    console.log("Mobile menu is now " + (isOpen ? "open" : "closed"));
  };
  
  return (
    <html lang="en">
      <body>
        <div className="gradientBackground w-full top-0 left-0 z-negative">
          <Navbar/>
          <Main />
        </div>
          <About />
        {/* {children} */}
      </body>
    </html>
  );
}

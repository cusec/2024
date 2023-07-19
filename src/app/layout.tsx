import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

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
  return (
    <html lang="en">
      <body>
        <div className="gradientBackground h-full w-full fixed top-0 left-0 z-negative">
          <Navbar />
          <Main />
        </div>
        {children}
      </body>
    </html>
  );
}

"use client";

import type { Metadata } from "next";

import Landingbox from "@/components/Landing Page/Landingbox";
import About from "@/components/Landing Page/About";
import Contact from "@/components/Landing Page/Contact";
import { useFadeBackground } from "./layout";

export const metadata: Metadata = {
  title: "CUSEC 2024",
  description:
    "Official website for the 2024 edition of the Canadian University Software Engineering Conference.",
};

export default function Home() {
  const fadeBackground = useFadeBackground();
  return (
    <div className="w-full">
      <div
        className={`${
          fadeBackground ? "gradientBackground" : "gradientGridBackground"
        } flex items-center justify-center`}
      >
        <Landingbox />
      </div>

      <div className="flex flex-col items-center">
      <div className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full">
      <About /> 
      </div>
      <div className="mx-6 lg:mx-24 pb-10 max-w-screen-lg lg:w-full">
      <Contact/>
      </div>
      </div>
    </div>
  );
}

"use client";

import type { Metadata } from "next";

import Landingbox from "@/components/Landing Page/Landingbox";
import About from "@/components/Landing Page/About";
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
      <div className="flex items-center justify-center">
      <About /> 
      </div>
    </div>
  );
}

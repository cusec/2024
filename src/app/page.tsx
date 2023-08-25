"use client";

import type { Metadata } from "next";
import Head from "next/head";

import Landingbox from "@/components/Landing Page/Landingbox";
import About from "@/components/Landing Page/About";
import Contact from "@/components/Landing Page/Contact";
import Faq from "@/components/Landing Page/Faq";
import { useFadeBackground } from "./layout";

const metadata: Metadata = {
  title: "CUSEC 2024",
  description:
    "Official website for the 2024 edition of the Canadian University Software Engineering Conference.",
};

export default function Home() {
  const fadeBackground = useFadeBackground();
  return (
    <>
      <Head>
        <title>CUSEC 2024 Home</title>
        <meta
          name="description"
          content="Official website for the 2024 edition of the Canadian University Software Engineering Conference."
        ></meta>
      </Head>
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
          <div className="w-full gradientBackground">
            <Faq />
            <div className="mx-6 lg:mx-24 pb-10 max-w-screen-lg lg:w-full">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

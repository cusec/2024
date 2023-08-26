"use client";

import type { Metadata } from "next";
import Head from "next/head";

import Main from "@/components/Landing Page/Main";
import main_section_fade from "@/assets/main_section_fade.svg";
import About from "@/components/Landing Page/About";
import Sponsor from "@/components/Landing Page/Sponsor";
import Tickets from "@/components/Landing Page/Tickets";
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
          } flex items-center justify-center min-h-[calc(100vh+50px)]`}
        >
          <Main />
        </div>

        <div className="flex flex-col items-center">
          <div className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full">
            <About />
          </div>
          <div className="w-full gradientBackground">
          <Sponsor/>
            </div>
          <div className="mx-6 lg:mx-24 max-w-screen-lg">
            <Tickets />
          </div>
          <div className="w-full gradientBackground">
            <Faq />
            </div>
            <div className="mx-6 lg:mx-24 pb-10 max-w-screen-lg lg:w-full">
              <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

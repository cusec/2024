"use client";

import type { Metadata } from "next";
import Head from "next/head";
import Fade from "@/components/Fade";
import Image from "next/image";
import { useEffect, useState } from "react";
import Main from "@/app/sponsors/Main";
import CusecSponsors from "@/app/sponsors/CusecSponsors";
import WhySponsor from "./WhySponsor";

export default function Sponsors() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>CUSEC 2024 - About Us</title>
        <meta
          name="description"
          content="Official website for the 2024 edition of the Canadian University Software Engineering Conference."
        />
      </Head>

      {/* TODO: Fix gradient lines not showing up */}

      <div className="w-full">
        {/* Top Left Gradient Lines */}
        <Image
          src={"/images/top_left_gradient_lines.svg"}
          alt="top_left_gradient_lines"
          className="absolute top-[64px] z-10"
          width={200}
          height={250}
        />

        {/* Bottom Right Gradient Lines */}
        <Image
          src={"/images/bottom_right_gradient_lines.svg"}
          alt="bottom right gradient lines"
          className="absolute bottom-[-4vh] right-0 z-10"
          width={200}
          height={250}
        />

        <div
          style={{
            filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5))",
          }}
        >
          <div
            className="bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot flex items-center justify-center min-h-[100vh] pt-[4.5rem] pb-4"
            style={{
              filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2))",
            }}
          >
            <Fade>
              <Main />
            </Fade>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20">
          <div className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full md:-mt-3 mb-16">
            <Fade>
              <CusecSponsors />
            </Fade>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full md:-mt-3 mb-16">
            <Fade>
              <WhySponsor />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

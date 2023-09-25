"use client";

import type { Metadata } from "next";
import Head from "next/head";
import Fade from "@/components/Fade";
import Image from "next/image";
// import bottom_right_gradient_lines from "/images/bottom_right_gradient_lines.svg";
// import top_left_gradient_lines from "/images/top_left_gradient_lines.svg";
import { useEffect, useState } from "react";
import Main from "@/app/sponsors/Main";

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
          className="absolute bottom-[-13vh] right-0 z-10 md:hidden"
          width={200}
          height={250}
        />

        <div
          style={{
            filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5))",
          }}
        >
          <div
            className="bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot flex items-center justify-center min-h-[calc(100vh+50px)]"
            style={{
              filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5))",
            }}
          >
            <Fade>
              <Main />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

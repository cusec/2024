"use client";

import type { Metadata } from "next";
import Head from "next/head";
import Fade from "@/components/Fade";
import Image from "next/image";
import bottom_right_gradient_lines from "./bottom_right_gradient_lines.svg";
import top_left_gradient_lines from "./top_left_gradient_lines.svg";
import Main from "@/components/About Page/Main";

const metadata: Metadata = {
  title: "CUSEC 2024",
  description:
    "Official website for the 2024 edition of the Canadian University Software Engineering Conference.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>CUSEC 2024 - About Us</title>
        <meta
          name="description"
          content="Official website for the 2024 edition of the Canadian University Software Engineering Conference."
        ></meta>
      </Head>
      <div className="w-full">
        <Image
          src={top_left_gradient_lines}
          alt="top_left_gradient_lines"
          className="absolute top-[64px]"
        />
        <Image
          src={bottom_right_gradient_lines}
          alt="bottom right gradient lines"
          className="absolute -bottom-[15vh] right-0"
        />
        <div
          className={`gradientBackground flex items-center justify-center min-h-[calc(100vh+50px)]`}
        >
            <Fade>
              <Main />
            </Fade>
        </div>

        <div className="flex flex-col items-center">
          <div className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full"></div>
        </div>
      </div>
    </>
  );
}

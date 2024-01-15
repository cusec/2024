"use client";

import type { Metadata } from "next";
import Head from "next/head";
import Fade from "@/components/Fade";
import Image from "next/image";
import Main from "@/app/sponsors/Main";
import PastSponsors from "@/app/sponsors/PastSponsors";
import CurrentSponsors from "./CurrentSponsors";
import WhySponsor from "./WhySponsor";
import { motion } from "framer-motion";

const animateInConfigImage = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

const animateInConfigText = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.1,
});

export default function Sponsors() {
  return (
    <div className="overflow-hidden">
      <title>Sponsors - CUSEC 2024</title>
      <meta
        name="description"
        content="Official website for the 2024 edition of the Canadian University Software Engineering Conference."
      />

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
              <CurrentSponsors />
            </Fade>
          </div>
        </div>

        {/* <div className="flex flex-col items-center mt-20">
          <div className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full md:-mt-3 mb-16">
            <Fade>
              <PastSponsors />
            </Fade>
          </div>
        </div> */}

        <div className="flex flex-col items-center mt-20 md:mt-0">
          <div className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full md:-mt-3 mb-16">
            <Fade>
              <WhySponsor />
            </Fade>
          </div>
        </div>

        <motion.div className="flex flex-col items-center">
          <div
            className="w-full gradientBackground"
            style={{
              boxShadow:
                "0px 3px 8px 4px rgba(0, 0, 0, 0.5), 0px -3px 8px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Fade>
              <div className="bg-black bg-opacity-60 px-8 flex flex-col justify-center items-center text-center py-48 space-y-6 md:space-y-8">
                <motion.p
                  {...animateInConfigText}
                  transition={transitionConfig()}
                  className="text-white text-[16px] md:text-[26px]"
                >
                  Want to help spark inspiration into tech-savvy minds?
                </motion.p>
                <motion.p
                  {...animateInConfigText}
                  transition={transitionConfig(0.3)}
                  className="font-semibold text-[20px] md:text-[40px] w-fit text-transparent bg-clip-text bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot"
                >
                  Become a 2024 Sponsor
                </motion.p>
                <motion.div
                  {...animateInConfigImage}
                  transition={transitionConfig(0.6)}
                >
                  <a
                    href="mailto:sponsor@cusec.net?subject=CUSEC 2024 Sponsorship Information Request"
                    className="flex drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#AD65E3] px-3 min-[390px]:px-10 md:px-20 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-goldenApricot hover:text-white"
                  >
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </Fade>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

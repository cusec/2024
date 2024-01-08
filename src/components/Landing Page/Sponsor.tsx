import BlueBorderSquareBox from "./BlueBorderSquareBox";
import Link from "next/link";
import Image from "next/image";
// import rbc_logo_2 from "public/images/sponsor logos/rbc_logo_2.svg";
// import cse_logo from "public/images/sponsor logos/cse_logo.svg";
// import kinaxis_logo from "public/images/sponsor logos/kinaxis_logo.svg";
// import accenture_logo from "public/images/sponsor logos/accenture_logo.svg";
// import fellow_logo from "public/images/sponsor logos/fellow_logo.svg";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

function animateInConfig(text: boolean) {
  return {
    initial: { opacity: 0, x: text ? 100 : -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };
}
const fadeInConfigImage = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

export default function Sponsor() {
  return (
    <>
      <div
        className="bg-black bg-opacity-60 shadow mx-auto px-5 sm:px-20 text-white overflow-hidden"
        style={{
          boxShadow:
            "0px 3px 8px 4px rgba(0, 0, 0, 0.5), 0px -3px 8px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 py-14 md:py-32 max-w-6xl mx-auto w-fit">
          <motion.span
            {...animateInConfig(true)}
            transition={transitionConfig(0)}
            className="flex justify-center text-[28px] font-semibold pb-10 md:hidden"
          >
            <h2 className="w-fit">
              CUSEC 2024 Sponsors
              <hr className="max-w-[3rem] md:max-w-[4rem] h-2 bg-orange-300 mb-2 mt-2 ml-auto" />
            </h2>
          </motion.span>
          <div className="mx-4 md:mx-0">
            <motion.div
              {...animateInConfig(false)}
              transition={transitionConfig(0)}
              className="relative max-w-md aspect-square mx-auto w-full"
            >
              {/* Background gradient */}
              <motion.div
                {...fadeInConfigImage}
                transition={transitionConfig(0.3)}
                className="absolute max-w-md aspect-square top-[-20px] right-[-20px] bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-full h-full scale-[95%]"
              ></motion.div>

              <BlueBorderSquareBox>
                <div
                  className="grid grid-rows-[20%_1fr_20%] grid-cols-2 gap-2 p-4"
                  style={{ aspectRatio: "1 / 1" }}
                >

                  {/* The bobbing animation is defined in globals.css */}

                  {/* Blank top row */}
                  <div className="row-span-1 col-span-2"></div>

                  {/* Middle row containing all logos */}
                  {/* Left column for RBC */}
                  <motion.div
                    {...fadeInConfigImage}
                    transition={transitionConfig(0.4)}
                    className="row-span-1 flex justify-center items-center relative bobbing-animation-1"
                  >
                    <a
                      href="https://www.rbcroyalbank.com/personal.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition ease-in-out duration-700 hover:scale-110"
                    >
                      <Image
                        src={"/images/sponsor logos/rbc_logo_2.svg"}
                        alt="RBC Logo"
                        layout="responsive"
                        objectFit="contain"
                        priority
                        width={50}
                        height={50}
                      />
                    </a>
                  </motion.div>

                  {/* Right column split into smaller rows for other logos */}
                  <div className="row-span-1 grid grid-rows-3 content-center gap-2">
                    {/* CSE logo */}
                    <motion.div
                      {...fadeInConfigImage}
                      transition={transitionConfig(0.5)}
                      className="flex justify-center items-center bobbing-animation-2"
                    >
                      <a
                        href="https://www.cse-cst.gc.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition ease-in-out duration-700 hover:scale-110"
                      >
                        <Image
                          src={"/images/sponsor logos/cse_logo.svg"}
                          alt="CSE Logo"
                          layout="responsive"
                          objectFit="contain"
                          priority
                          width={50}
                          height={50}
                        />
                      </a>
                    </motion.div>
                    {/* Kinaxis logo */}
                    <motion.div
                      {...fadeInConfigImage}
                      transition={transitionConfig(0.6)}
                      className="flex justify-center items-center bobbing-animation-3"
                    >
                      <a
                        href="https://www.kinaxis.com/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition ease-in-out duration-700 hover:scale-110"
                      >
                        <Image
                          src={"/images/sponsor logos/kinaxis_logo.svg"}
                          alt="Kinaxis Logo"
                          layout="responsive"
                          objectFit="contain"
                          priority
                          width={50}
                          height={50}
                        />
                      </a>
                    </motion.div>
                    {/* Accenture and Fellow logos */}
                    <div className="grid grid-cols-2 gap-2">
                      <motion.div
                        {...fadeInConfigImage}
                        transition={transitionConfig(0.7)}
                        className="flex justify-center items-center bobbing-animation-4"
                      >
                        <a
                          href="https://www.accenture.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition ease-in-out duration-700 hover:scale-110"
                        >
                          <Image
                            src={"images/sponsor logos/accenture_logo.svg"}
                            alt="Accenture Logo"
                            layout="responsive"
                            objectFit="contain"
                            priority
                            width={50}
                            height={50}
                          />
                        </a>
                      </motion.div>
                      <motion.div
                        {...fadeInConfigImage}
                        transition={transitionConfig(0.8)}
                        className="flex justify-center items-center bobbing-animation-5"
                      >
                        <a
                          href="https://fellow.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition ease-in-out duration-700 hover:scale-110"
                        >
                          <Image
                            src={"images/sponsor logos/fellow_logo.svg"}
                            alt="Fellow Logo"
                            layout="responsive"
                            objectFit="contain"
                            priority
                            width={50}
                            height={50}
                          />
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  {/* Blank bottom row */}
                  <div className="row-span-1 col-span-2"></div>
                </div>
              </BlueBorderSquareBox>
            </motion.div>
          </div>

          <div className="md:text-right mx-auto md:pl-10">
            <motion.h2
              {...animateInConfig(true)}
              transition={transitionConfig(0)}
              className="text-[28px] md:text-[40px] font-semibold hidden md:block"
            >
              CUSEC 2024 Sponsors
            </motion.h2>
            <motion.hr
              {...animateInConfig(true)}
              transition={transitionConfig(0.3)}
              className="hidden md:block max-w-[3rem] md:max-w-[4rem] h-2 bg-orange-300 mb-2 mt-2 ml-auto"
            />
            <motion.p
              {...animateInConfig(true)}
              transition={transitionConfig(0.5)}
              className="md:text-[20px] font-regular pt-10 pb-6"
            >
              Over the last 22 years, CUSEC has collaborated with an extensive
              array of industry leaders. These partnerships have helped make
              CUSEC possible while providing students invaluable opportunities
              to create lasting connections with seasoned professionals.
            </motion.p>
            <motion.div
              {...animateInConfig(true)}
              transition={transitionConfig(0.7)}
              className="flex justify-center md:justify-end"
            >
              <Link
                href={"/sponsors"}
                className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#AD65E3] px-3 min-[390px]:px-5 md:px-8 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-goldenApricot hover:text-white"
              >
                Learn&nbsp;More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

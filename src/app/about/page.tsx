"use client";

import type { Metadata } from "next";
import Fade from "@/components/Fade";
import Image from "next/image";
// import bottom_right_gradient_lines from "bottom_right_gradient_lines.svg";
// import top_left_gradient_lines from "top_left_gradient_lines.svg";
import grid_gradient_fill_lines from "./grid_gradient_fill_lines.svg";
import Main from "@/app/about/Main";
import AboutUs from "@/app/about/AboutUs";
import Team from "./Team";
import WhyJoin from "./WhyJoin";
import { useEffect, useState } from "react";

// Had to remove this import because the file was too large to upload to GitHub.
// import carousel_about_us from "./Carousel Images/carousel_about_us.svg";

const metadata: Metadata = {
  title: "CUSEC 2024",
  description:
    "Official website for the 2024 edition of the Canadian University Software Engineering Conference.",
};

export default function About() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    // Update the window width when the component mounts
    setWindowWidth(window.innerWidth);

    // Listen for window resize events
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMediumScreen = windowWidth > 768;

  return (
    <div className="overflow-hidden w-full">
        <title>About Us</title>
        <meta
          name="description"
          content="Official website for the 2024 edition of the Canadian University Software Engineering Conference."
        ></meta>
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

        {/* Grid Lines behind curve*/}
        <Image
          src={grid_gradient_fill_lines}
          alt="grid gradient fill lines"
          className="absolute bottom-10 right-0 z-0"
          />

        {/* https://yqnn.github.io/svg-path-editor/ */}

        <svg width="0" height="0">
          <defs>
            <clipPath id="gradientClip" clipPathUnits="objectBoundingBox">
              <path
                d="
               M 0 0 
               L 1 0 
               L 1 0.07 
               C 0.955 0.342 
               0.897 0.902 
               0.467 0.902 
               L 0 0.9 
               Z
                "
              />
            </clipPath>
          </defs>
        </svg>

        <div
          style={{
            filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5))",
          }}
        >
          <div
            className="bg-gradient-to-tr from-royalPurple via-roseQuartz to-goldenApricot flex items-center justify-center min-h-[calc(100vh+50px)]"
            style={{
              clipPath: isMediumScreen ? "url(#gradientClip)" : "none",
              WebkitClipPath: isMediumScreen ? "url(#gradientClip)" : "none", // for Safari
              filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5))",
            }}
          >
            <Fade>
              <Main isMediumScreen={isMediumScreen} />
            </Fade>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full mt-20 md:-mt-3 mb-16">
            <Fade>
              <AboutUs />
            </Fade>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="max-w-screen-lg md:max-w-screen-2xl">
            <Fade>
              <WhyJoin />
            </Fade>
        </div>
          </div>
        <div className="flex flex-col items-center">
          <div className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full mt-20 md:-mt-3 mb-16">
            <Fade>
              <Team />
            </Fade>
          </div>
        </div>
    </div>
  );
}

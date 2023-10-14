"use client";

import Fade from "@/components/Fade";
import Main from "@/components/Landing Page/Main";
import About from "@/components/Landing Page/About";
import Sponsor from "@/components/Landing Page/Sponsor";
import Tickets from "@/components/Landing Page/Tickets";
import Contact from "@/components/Landing Page/Contact";
import Faq from "@/components/Landing Page/Faq";
import { useFadeBackground } from "./layout";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function Home() {
  const fadeBackground = useFadeBackground();

  const animationControls = useAnimation();

  const handleViewportEnter = (inView: boolean) => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  };

  return (
    <>
      <title>Home</title>
      <meta
        name="description"
        content="Official website for the 2024 edition of the Canadian University Software Engineering Conference."
      />

      <div className="w-full">
        <div
          className={`${
            fadeBackground
              ? "homeMainGradientBackground"
              : "homeMainGradientGridBackground"
          } flex items-center justify-center min-h-[calc(100vh+50px)]`}
        >
          <motion.div
            className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full"
            id="home"
          >
            <Fade>
              <Main />
            </Fade>
          </motion.div>
        </div>

        <div className="flex flex-col items-center mt-[-70px] md:mt-[-100px]">
          <motion.div
            className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full"
            id="about"
          >
            <Fade>
              <About />
            </Fade>
          </motion.div>
          <motion.div className="w-full gradientBackground" id="sponsor">
            <Fade>
              <Sponsor />
            </Fade>
          </motion.div>
          <motion.div className="mx-6 lg:mx-24 max-w-screen-lg" id="tickets">
            <Fade>
              <Tickets />
            </Fade>
          </motion.div>
          <motion.div
            className="w-full gradientBackground"
            style={{
              boxShadow:
                "0px 3px 8px 4px rgba(0, 0, 0, 0.5), 0px -3px 8px 4px rgba(0, 0, 0, 0.5)",
            }}
            id="faq"
          >
            <Fade>
              <Faq />
            </Fade>
          </motion.div>
        </div>
        <div
          className={`${
            fadeBackground ? "gradientBackground" : "gradientGridBackground"
          } flex justify-center`}
          id="contact"
        >
          <motion.div className="my-20 mx-6 lg:mx-24 max-w-screen-md">
            <Fade>
              <Contact />
            </Fade>
          </motion.div>
        </div>
      </div>
    </>
  );
}

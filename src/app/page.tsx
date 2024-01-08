"use client";

import Fade from "@/components/Fade";
import Main from "@/components/Landing Page/Main";
import GetToKnowUs from "@/components/Landing Page/GetToKnowUs";
import Sponsor from "@/components/Landing Page/Sponsor";
import Tickets from "@/components/Landing Page/Tickets";
import Contact from "@/components/Landing Page/Contact";
import Faq from "@/components/Landing Page/Faq";
import { useFadeBackground } from "./layout";

export default function Home() {
  const fadeBackground = useFadeBackground();
  return (
    <>
      <title>Home - CUSEC 2024</title>
      <meta
        name="description"
        content="Official website for the 2024 edition of the Canadian University Software Engineering Conference."
      />

      <div className="w-full overflow-hidden">
        <div
          className={`${
            fadeBackground
              ? "homeMainGradientBackground"
              : "homeMainGradientGridBackground"
          } flex items-center justify-center min-h-[calc(100vh+50px)]`}
        >
          <div
            className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full"
            id="home"
          >
            <Fade>
              <Main />
            </Fade>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[-70px] md:mt-[-100px]">
          <div
            className="mx-6 lg:mx-24 max-w-screen-lg lg:w-full"
            id="about"
          >
            <Fade>
              <GetToKnowUs />
            </Fade>
          </div>
          <div className="w-full gradientBackground" id="sponsor">
            <Fade>
              <Sponsor />
            </Fade>
          </div>
          <div className="mx-6 lg:mx-24 max-w-screen-lg" id="tickets">
            <Fade>
              <Tickets />
            </Fade>
          </div>
          <div
            className="w-full gradientBackground"
            style={{
              boxShadow:
                "0px 3px 8px 4px rgba(0, 0, 0, 0.5), 0px -3px 8px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Fade>
              <Faq />
            </Fade>
          </div>
        </div>
        <div
          className={`${
            fadeBackground ? "gradientBackground" : "gradientGridBackground"
          } flex justify-center`}
          id="contact"
        >
          <div className="my-20 mx-6 lg:mx-24 max-w-screen-md">
            <Fade>
              <Contact />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

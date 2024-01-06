import Image from "next/image";
import Link from "next/link";
import logoPrimaryDark from "src/assets/logo-primary-dark.svg";
import greyEllipse from "src/assets/grey-ellipse.svg";
import BlueBorderSquareBox from "./BlueBorderSquareBox";
import { motion } from "framer-motion";

const fadeInConfig = {
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

const signUpLink = "https://www.tickettailor.com/events/cusec/943944";

// Commented out after deadline to sign up as a speaker
// const speakerSignUpLink ="https://docs.google.com/forms/d/e/1FAIpQLSekk6WN5YEMg-tRza9SbMTIar_mHFEUQ9jjLIgw8eF3YNmIog/viewform";

const sponsorEmailLink =
  "mailto:sponsor@cusec.net?subject=CUSEC 2024 Sponsorship Information Request";
const locationLink = "https://maps.app.goo.gl/sCnZJ3VJRAM4Z1699";

const Landingbox = () => {
  return (
    <motion.main {...fadeInConfig} transition={transitionConfig()}>
      <BlueBorderSquareBox>
        <section className="py-8 px-8 text-center space-y-5 flex flex-col justify-center items-center">
          <motion.div {...fadeInConfig} transition={transitionConfig(0.2)}>
            <Image
              src={logoPrimaryDark}
              alt="CUSEC 2024 logo primary dark"
              layout="responsive"
              className="max-w-lg mx-auto"
              priority
            />
          </motion.div>
          <motion.p
            {...fadeInConfig}
            transition={transitionConfig(0.4)}
            className="font-semibold text-[18px] leading-[25px] tracking-wider"
          >
            Canadian University Software Engineering Conference
          </motion.p>
          <motion.p
            {...fadeInConfig}
            transition={transitionConfig(0.6)}
            className="text-[15px] text-[#615757]"
          >
            January 11-13
            <Image
              src={greyEllipse}
              alt="Grey Ellipse Icon"
              className="inline-block mx-3"
            />
            <Link
              href={locationLink}
              className="hover:text-blue-500 transition ease-in-out duration-500"
            >
              Le Centre Sheraton, Montreal, QC
            </Link>
          </motion.p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <motion.div
              {...fadeInConfig}
              transition={transitionConfig(0.8)}
              className="flex justify-center"
            >
              <Link
                href={"/schedule"}
                className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex justify-center items-center bg-[#FDF3FF] border-2 border-royalPurple px-[4rem] md:px-[6rem] py-3 text-center rounded-full uppercase text-[18px] font-semibold text-royalPurple tracking-wide transition ease-in-out duration-500 hover:scale-105 hover:bg-royalPurple hover:text-white whitespace-nowrap"
              >
              Schedule
              </Link>
            </motion.div>

            <motion.div
              {...fadeInConfig}
              transition={transitionConfig(1)}
              className="flex justify-center"
            >
              <Link
                href={"/speakers"}
                className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex justify-center items-center bg-[#FDF3FF] border-2 border-royalBlue px-[4rem] md:px-[6rem] py-3 text-center rounded-full uppercase text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-105 hover:bg-royalBlue hover:text-white whitespace-nowrap"
              >
              Speakers
              </Link>
            </motion.div>

            <motion.div
              {...fadeInConfig}
              transition={transitionConfig(1.2)}
              className="flex justify-center"
            >
              <Link
                href={"/sponsors"}
                className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] justify-center items-center bg-[#FDF3FF] border-2 border-fuchsia-500 px-[4.1rem] md:px-[6rem] py-3 md:py-4 text-center rounded-full uppercase text-[18px] font-semibold text-fuchsia-500 tracking-wide transition ease-in-out duration-500 hover:scale-105 hover:bg-fuchsia-500 hover:text-white"
              >
                Sponsors
              </Link>
            </motion.div>
          </div>
        </section>
      </BlueBorderSquareBox>
    </motion.main>
  );
};

export default Landingbox;

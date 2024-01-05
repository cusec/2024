import Image from "next/image";
import cusec_2023_keynote_speaker from "./cusec_2023_keynote_speaker.png";
import { motion } from "framer-motion";

const animateInConfigText = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

const animateInConfigImage = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.1,
});

const {
  white,
  purple400,
  roseQuartz,
  goldenApricot,
  getMotionProps = (color: string) => ({
    initial: { color: white },
    animate: { color },
  }),
} = {
  white: "#ffffff",
  purple400: "#c084fc",
  roseQuartz: "#E087BB",
  goldenApricot: "#FFB963",
};

export default function Main() {
  return (
    <div className="relative min-h-[96vh] w-screen">
      <div className="absolute inset-0 md:mx-4">
        <motion.div {...animateInConfigImage} transition={transitionConfig()}>
          <Image
            className="brightness-50"
            src={cusec_2023_keynote_speaker}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="CUSEC 2023 Group Photo"
          />
        </motion.div>
        <div className="absolute inset-0 z-1 flex justify-center items-center lg:mx-1">
          {/* Text */}
          <motion.h1
            {...animateInConfigText}
            transition={transitionConfig()}
            className="uppercase text-center text-white font-semibold text-[24px] md:text-[36px] lg:text-[50px]"
          >
            Building Brighter Futures <br className="lg:block" />
            <motion.span
              {...getMotionProps(purple400)}
              transition={transitionConfig(0.3)}
              className="text-purple-400"
            >
              Meet
            </motion.span>{" "}
            <motion.span
              {...getMotionProps(roseQuartz)}
              transition={transitionConfig(0.6)}
              className="text-roseQuartz"
            >
              Our
            </motion.span>{" "}
            <motion.span
              {...getMotionProps(goldenApricot)}
              transition={transitionConfig(0.9)}
              className="text-goldenApricot"
            >
              Sponsors
            </motion.span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

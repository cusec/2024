import Image from "next/image";
import cusec_2023_group_photo from "./cusec_2023_group_photo.png";
import { motion } from "framer-motion";

interface MainProps {
  isMediumScreen: boolean;
}

const animateInConfigImage = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
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

export default function Main({ isMediumScreen }: MainProps) {
  return (
    <div className="relative min-h-[96vh] w-[calc(100vw-10px)] translate-y-6 md:-translate-x-[1vw]">
      <svg width="0" height="0">
        <defs>
          <clipPath id="imageClip" clipPathUnits="objectBoundingBox">
            <path
              d="
               M .015 0 
               L 1 0 
               C 0.955 0.342 
               0.897 0.902 
               0.467 0.902 
               L 0.015 0.9 
               Z
                "
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute inset-0 lg:mx-1"
        style={{
          clipPath: isMediumScreen ? "url(#imageClip)" : "none",
          WebkitClipPath: isMediumScreen ? "url(#imageClip)" : "none", // for Safari
        }}
      >
        <motion.div {...animateInConfigImage} transition={transitionConfig(0)}>
        <Image
          className="brightness-50"
          src={cusec_2023_group_photo}
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
            transition={transitionConfig(0)}
            className="uppercase text-white font-semibold text-[24px] ml-10 sm:mr-24 lg:ml-24 lg:mr-52 lg:text-[50px]"
          >
            Fueling a journey of{" "}
            <motion.span
              {...getMotionProps(purple400)}
              transition={transitionConfig(0.3)}
            >
              knowledge
            </motion.span>
            ,
            <br className="hidden lg:block" />{" "}
            <motion.span
              {...getMotionProps(roseQuartz)}
              transition={transitionConfig(0.6)}
              >
              inspiration
            </motion.span>
            , &{" "}
            <motion.span
              {...getMotionProps(goldenApricot)}
              transition={transitionConfig(0.9)}
            >
              opportunity
            </motion.span>{" "}
            for students <br className="hidden 2xl:block" />
            across Canada
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

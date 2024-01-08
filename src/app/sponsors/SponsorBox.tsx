import Image from "next/image";
import { motion } from "framer-motion";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";
import { Sponsor } from "./Sponsors";

// Animation configurations
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

const sizeClasses = {
  lg: "w-full 2xs:w-full",
  md: "w-3/4 2xs:w-3/4",
  sm: "w-2/3 2xs:w-2/3",
  xs: "w-1/2 xs:w-3/4",
};

interface SponsorBoxProps extends Sponsor {
  animationClass: string;
}

const SponsorBox = ({ logo, link, size, animationClass }: SponsorBoxProps) => (
  <motion.div
    {...animateInConfigImage}
    transition={transitionConfig(0.6)}
    className={`flex relative mx-auto w-full ${sizeClasses[size]}`}
  >
    {/* This div acts as a container for the BlueBorderSquareBox and its gradient background */}
    <div className="relative w-full">
      {/* Gradient Background */}
      <motion.div
        {...animateInConfigText}
        transition={transitionConfig(0.8)}
        className="bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-full h-full scale-75 md:scale-[.99] top-[-17px] right-[-18px] absolute"
      ></motion.div>

      {/* BlueBorderSquareBox */}
      <BlueBorderSquareBox>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <motion.div
            {...animateInConfigImage}
            transition={transitionConfig(0.9)}
            className="z-10 p-6 md:p-10 "
          >
            <div className="group-hover:scale-110 transition ease-in-out duration-700">
              <Image
                src={logo.src}
                alt={logo.alt}
                layout="responsive"
                priority
                className={` ${animationClass}`}
                width={100}
                height={100}
              />
            </div>
          </motion.div>
        </a>
      </BlueBorderSquareBox>
    </div>
  </motion.div>
);

export default SponsorBox;

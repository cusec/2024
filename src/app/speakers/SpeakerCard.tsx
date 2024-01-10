import Image from "next/image";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaGlobe, FaTwitter } from "react-icons/fa";
import Popup from "reactjs-popup";

type SpeakerCardProps = {
  name: string;
  role: string;
  image: string;
  description: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
};

const animateInConfig1 = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

const animateInConfig2 = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

// type definition for the contact icons
type IconConfig = {
  prop: keyof SpeakerCardProps;
  classes: string;
  IconComponent: React.ElementType;
};

const iconConfigs: IconConfig[] = [
  {
    prop: "twitter",
    classes: "border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2]",
    IconComponent: FaTwitter,
  },
  {
    prop: "linkedin",
    classes: "border-[#05a7ff] text-[#05a7ff] hover:bg-[#05a7ff]",
    IconComponent: FaLinkedinIn,
  },
  {
    prop: "github",
    classes: "border-gray-500 text-gray-500 hover:bg-gray-500",
    IconComponent: FaGithub,
  },
  {
    prop: "website",
    classes: "border-green-500 text-green-500 hover:bg-green-500",
    IconComponent: FaGlobe,
  },
];

// Base classes common to all icons
const baseIconClasses =
  "w-8 h-8 transition duration-700 ease-in-out border rounded-full flex justify-center items-center p-1 hover:text-white hover:scale-125";

export default function SpeakerCard(props: SpeakerCardProps) {
  // Dynamically render the icons based on what contact info is provided
  const renderedIcons = iconConfigs.reduce<React.ReactNode[]>(
    (acc, { prop, classes, IconComponent }, index) => {
      // Skip if the prop does not exist on the props object
      if (!props[prop]) return acc;

      // Determine the href link
      const href = props[prop];

      // Push a new icon into the accumulator
      acc.push(
        <a
          key={prop}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseIconClasses} ${classes}`}
        >
          <IconComponent className="w-5 h-5" />
        </a>
      );
      return acc;
    },
    []
  );

  return (
    <motion.div
      {...animateInConfig1}
      transition={transitionConfig(0)}
      className="sm:mt-8 mt-8 group hover:cursor-pointer"
    >
      <Popup
        trigger={
          <div>
            <BlueBorderSquareBox teamCard={true}>
              <div>
                <div className="flex flex-col justify-center items-center mx-6 mt-8 self-start mb-2">
                  <div className="aspect-square rounded-full bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-[140px] md:w-[165px] relative transition-opacity duration-700 ease-in-out">
                    {/* Picture of speaker */}
                    {props.image && (
                      <Image
                        src={props.image}
                        alt={"Image of " + props.name}
                        layout="fill"
                        objectFit="cover"
                        className="overflow-none p-1"
                      />
                    )}
                  </div>

                  {/* Name */}
                  <motion.div
                    {...animateInConfig2}
                    transition={transitionConfig(0)}
                  >
                    <div className="relative">
                      <span
                        className="whitespace-nowrap font-semibold md:text-[20px]
              absolute transition-opacity duration-700 ease-in-out top-0 left-1/2 transform -translate-x-1/2 mt-2"
                      >
                        {props.name}
                      </span>
                    </div>
                  </motion.div>

                  {/* Role text */}
                  <motion.div
                    {...animateInConfig2}
                    transition={transitionConfig(0.1)}
                  >
                    <div className="text-center transition-opacity duration-700 ease-in-out text-[12px] md:text-[18px] mt-8 md:mt-10">
                      {props.role}
                    </div>
                  </motion.div>

                  {/* Learn More Button */}
                  <motion.div
                  {...animateInConfig2}
                    transition={transitionConfig(0.2)}>
                    <button
                      aria-label="Learn More Button"
                      className="mt-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-2 border-royalPurple group-hover:bg-royalPurple px-3 min-[390px]:px-4 md:px-5 py-2 text-center rounded-full uppercase text-[10px] xs:text-[12px] font-semibold text-royalPurple tracking-wide transition ease-in-out duration-500 group-hover:scale-110 group-hover:text-pink-50 whitespace-nowrap"
                    >
                      Learn more
                    </button>
                  </motion.div>
                </div>
              </div>
            </BlueBorderSquareBox>
          </div>
        }
        position="right center"
        modal
        closeOnDocumentClick={false}
      >
        {/* Not sure if this is the best way to do this, but it works for now. */}
        {
        // @ts-ignore
          (close) => (
          <BlueBorderSquareBox>
            <div className="bg-pink-50">
              <div className="flex flex-col items-center transition-opacity duration-700 ease-in-out px-4 py-6 text-[12px] md:text-[16px] max-h-[60vh] overflow-y-auto">
                <div className="flex justify-between items-center w-full">
                  {/* Invisible Spacer button to align the icons to the center */}
                  <div
                    className="invisible"
                    // className="invisible hidden sm390:block"
                  >
                    <button
                      aria-label="Invisible Spacer"
                      className="opacity-0 pointer-events-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-2 border-royalPurple hover:bg-royalPurple rounded-full uppercase px-3 text-[30px] font-semibold text-royalPurple transition ease-in-out duration-500 hover:scale-110 hover:text-pink-50"
                    >
                      &times;
                    </button>
                  </div>
                  {/* Wrapper for centering icons */}
                    {/* Dynamically rendered Social Media Icons */}
                    <span className="flex justify-center space-x-5 xs:space-x-2 sm:space-x-5">
                      {renderedIcons}
                    </span>

                  {/* Cross Button aligned to the right */}
                  <button
                    onClick={() => {
                      close();
                    }}
                    aria-label="Close Speaker Description Button Cross Symbol"
                    className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-2 border-royalPurple hover:bg-royalPurple rounded-full uppercase px-3 text-[30px] font-semibold text-royalPurple transition ease-in-out duration-500 hover:scale-110 hover:text-pink-50"
                  >
                    &times;
                  </button>
                </div>

                {/* Description text */}
                <div className="mt-4">
                  {props.description.split("\\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                      <br />
                    </span>
                  ))}
                </div>
                {/* Close Button */}
                <motion.div>
                  <button
                    onClick={() => {
                      close();
                    }}
                    aria-label="Close Speaker Description Button"
                    className="mt-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-2 border-royalPurple hover:bg-royalPurple px-3 min-[390px]:px-4 md:px-5 py-2 text-center rounded-full uppercase text-[10px] xs:text-[12px] font-semibold text-royalPurple tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:text-pink-50 whitespace-nowrap"
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            </div>
          </BlueBorderSquareBox>
        )}
      </Popup>
    </motion.div>
  );
}

import Image from "next/image";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaGlobe, FaTwitter } from "react-icons/fa";

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
    <BlueBorderSquareBox teamCard={true}>
      <div>
        <div className="absolute opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 px-4 -mt-4 text-[12px] md:text-[14px] overflow-y-auto max-h-[230px] md:max-h-[250px] scrollbar-thin scrollbar-thumb-lavenderFog">
          {/* Dynamically rendered Social Media Icons */}
          <span className="flex justify-center space-x-5">{renderedIcons}</span>

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
        </div>

        <div className="flex flex-col justify-center items-center mx-6 mt-8 group self-start mb-2">
          <div className="aspect-square rounded-full bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-[140px] md:w-[165px] relative transition-opacity duration-700 ease-in-out group-hover:opacity-0 ">
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

          {/* Replacing text on hover with fade in/out animation */}
          {/* Name */}
          <motion.div {...animateInConfig2} transition={transitionConfig(0.5)}>
            <div className="relative">
              <span
                className="whitespace-nowrap font-semibold md:text-[20px]
            absolute transition-opacity duration-700 ease-in-out group-hover:opacity-0 top-0 left-1/2 transform -translate-x-1/2 mt-2"
              >
                {props.name}
              </span>
            </div>
          </motion.div>

          {/* Role text */}
          <motion.div {...animateInConfig2} transition={transitionConfig(0.75)}>
            <div className="text-center transition-opacity duration-700 ease-in-out group-hover:opacity-0 text-[12px] md:text-[18px] mt-8 md:mt-10">
              {props.role}
            </div>
          </motion.div>

          {/* Pagination circles */}
          <motion.div
            {...animateInConfig1}
            transition={transitionConfig(0.75)}
            className="flex space-x-1 sm:mt-8 mt-8"
          >
            <span className="block h-3 w-3 rounded-full bg-purple-400 group-hover:bg-gray-300 transition ease-in-out duration-1000"></span>
            <span className="block h-3 w-3 rounded-full bg-gray-300 group-hover:bg-purple-400 transition ease-in-out duration-100"></span>
          </motion.div>
        </div>
      </div>
    </BlueBorderSquareBox>
  );
}

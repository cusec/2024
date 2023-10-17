import BlueBorderSquareBox from "./BlueBorderSquareBox";
import Link from "next/link";
import Image from "next/image";
import sponsor_logos from "@/assets/sponsor_logos.png";
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
            transition={transitionConfig(0.3)}
            className="flex justify-center text-[28px] font-semibold pb-10 md:hidden"
          >
            <h2 className="w-fit">
              Past CUSEC Sponsors
              <hr className="max-w-[3rem] md:max-w-[4rem] h-2 bg-orange-300 mb-2 mt-2 ml-auto" />
            </h2>
          </motion.span>
          <div className="mx-4 md:mx-0">
            <motion.div
              {...animateInConfig(false)}
              transition={transitionConfig(0.3)}
              className="relative max-w-md aspect-square mx-auto w-full"
            >
              {/* This div is for the background gradient */}
              <motion.div
                {...fadeInConfigImage}
                transition={transitionConfig(0.5)}
                className="absolute max-w-md aspect-square top-[-17px] right-[-18px] bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-full h-full scale-[95%]"
              ></motion.div>
              <BlueBorderSquareBox>
                <motion.div
                  {...fadeInConfigImage}
                  transition={transitionConfig(0.7)}
                  className="aspect-square flex flex-col justify-center items-center relative right-4"
                >
                  <Image
                    src={sponsor_logos}
                    height={40}
                    width={40}
                    alt="Sponsor Logos"
                    layout="responsive"
                    className=""
                    priority
                  />
                </motion.div>
              </BlueBorderSquareBox>
            </motion.div>
          </div>

          <div className="md:text-right mx-auto md:pl-10">
            <motion.h2
              {...animateInConfig(true)}
              transition={transitionConfig(0.3)}
              className="text-[28px] md:text-[40px] font-semibold hidden md:block"
            >
              Past CUSEC Sponsors
            </motion.h2>
            <motion.hr
              {...animateInConfig(true)}
              transition={transitionConfig(0.5)}
              className="hidden md:block max-w-[3rem] md:max-w-[4rem] h-2 bg-orange-300 mb-2 mt-2 ml-auto"
            />
            <motion.p
              {...animateInConfig(true)}
              transition={transitionConfig(0.7)}
              className="md:text-[20px] font-regular pt-10 pb-6"
            >
              Over the last 21 years, CUSEC has collaborated with an extensive
              array of industry leaders. These partnerships have helped make
              CUSEC possible while providing students invaluable opportunities
              to create lasting connections with seasoned professionals.
            </motion.p>
            <motion.div
              {...animateInConfig(true)}
              transition={transitionConfig(0.9)}
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

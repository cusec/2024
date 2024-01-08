import decagon_gradient_1 from "@/assets/decagon_gradient_1.svg";
import decagon_gradient_2 from "@/assets/decagon_gradient_2.svg";
import decagon_gradient_3 from "@/assets/decagon_gradient_3.svg";
import decagon_gradient_4 from "@/assets/decagon_gradient_4.svg";
import large_decagon from "@/assets/large_decagon.svg";
import circle_grid_v1 from "@/assets/circle_grid_v1.svg";
import circle_grid_v2 from "@/assets/circle_grid_v2.svg";
import Image from "next/image";
import Decagon1 from "./Decagon1";
import Decagon2 from "./Decagon2";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInConfigDecagon = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

const fadeInConfigText = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

const fadeInConfigButton = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

export default function GetToKnowUs() {
  return (
    <div className="">
      {/* Vertical grid of grey circles */}
      <motion.div {...fadeInConfigDecagon} transition={transitionConfig(0)}>
        <Image
          src={circle_grid_v1}
          alt="Vertical grid of grey circles"
          className="relative top-[70px] w-[40px] h-[80px] md:h-[120px] md:top-[80px] md:right-[40px] lg:top-[100px] lg:right-[40px] lg:h-[160px]"
        />
      </motion.div>

      <section className="lg:max-w-[1024px] max-w-[768px] pl-12 ">
        <motion.p
          {...fadeInConfigText}
          transition={transitionConfig(0)}
          className="font-semibold text-[28px]"
        >
          Get To Know Us
        </motion.p>
        <motion.hr
          {...fadeInConfigText}
          transition={transitionConfig(0.3)}
          className="block max-w-[3rem] md:max-w-[2.5rem] h-2 bg-roseQuartz mb-10 mt-2"
        />
        <motion.section
          {...fadeInConfigText}
          transition={transitionConfig(0.6)}
          className="space-y-6"
        >
          <p className="font-regular text-[15px]">
            CUSEC is a student-led software engineering conference for students
            across Canada that has educated and inspired many for the last 22
            years. Founded in 2002 by tech enthusiasts, it offers diverse tech
            knowledge shared by speakers, a chance to network with sponsoring
            companies, and make lifelong friendships within a safe and
            comfortable space.
          </p>
        </motion.section>
      </section>

      {/* Decagons */}
      <div className="flex flex-col justify-center items-center py-8 space-y-2">
        <section className="flex space-x-6">
          <motion.div
            {...fadeInConfigDecagon}
            transition={transitionConfig(0.5)}
            className="bobbing-animation-1"
          >
            <Decagon1
              image={decagon_gradient_1}
              TitleText={"10K+"}
              SubtitleText={"Attendees"}
              countUpDelay={0.5}
            />
          </motion.div>
          <motion.div
            {...fadeInConfigDecagon}
            transition={transitionConfig(0.7)}
            className="bobbing-animation-4"
          >
            <Decagon1
              image={decagon_gradient_2}
              TitleText={"220+"}
              SubtitleText={"Speakers"}
              countUpDelay={0.7}
            />
          </motion.div>
        </section>
        <section className="flex items-center space-x-4">
          <motion.div
            {...fadeInConfigDecagon}
            transition={transitionConfig(0.3)}
            className="bobbing-animation-3"
          >
            <Decagon1
              image={decagon_gradient_3}
              TitleText={"280+"}
              SubtitleText={"Sponsors"}
              countUpDelay={0.3}
            />
          </motion.div>
          <motion.div
            {...fadeInConfigDecagon}
            transition={transitionConfig(1.1)}
            className="bobbing-animation-1"
          >
            <Decagon2
              image={large_decagon}
              TitleText={"22"}
              SubtitleText={"Years"}
              countUpDelay={1.1}
            />
          </motion.div>
          <motion.div
            {...fadeInConfigDecagon}
            transition={transitionConfig(0.9)}
            className="bobbing-animation-5"
          >
            <Decagon1
              image={decagon_gradient_4}
              TitleText={"500+"}
              SubtitleText={"VIP Members"}
              countUpDelay={0.9}
            />
          </motion.div>
        </section>
      </div>

      <motion.div
        {...fadeInConfigButton}
        transition={transitionConfig(0.9)}
        className="flex justify-center"
      >
        <Link
          className={`drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-royalBlue hover:bg-goldenApricot mx-auto px-5 md:px-10 py-1 mt-3 md:mt-6 text-center rounded-full uppercase md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:text-white`}
          href={`/about`}
        >
          Learn More
        </Link>
      </motion.div>

      <motion.span
        className="flex justify-end pb-8"
        {...fadeInConfigDecagon}
        transition={transitionConfig(0.3)}
      >
        <Image
          src={circle_grid_v2}
          alt="circle grid v2"
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] "
        />
      </motion.span>
    </div>
  );
}

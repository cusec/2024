import SpeakerCard from "./SpeakerCard";
import speakers from "./speakers.json";
import circle_grid_v1 from "@/assets/circle_grid_v1.svg";
// import circle_grid_v2 from "@/assets/circle_grid_v2.svg";
// import circle_grid_v3 from "@/assets/circle_grid_v3.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const animateInConfig = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

const animateInConfig2 = {
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
  bounce: 0.5,
});

const TOTAL_ANIMATION_DURATION = 0.6; // 0.6 seconds for all cards to appear
const STAGGER_DELAY = TOTAL_ANIMATION_DURATION / speakers.length;

export default function Team() {
  return (
    <>
      <section className="lg:max-w-[1024px] max-w-[768px] px-6 md:px-12 md:mb-20">
        <motion.p
          {...animateInConfigText}
          transition={transitionConfig(0)}
          className="font-semibold text-[28px] md:text-[40px] tracking-tight"
        >
          CUSEC Speakers
        </motion.p>
        <motion.hr
          {...animateInConfigText}
          transition={transitionConfig(0.2)}
          className="block max-w-[2.5rem] md:max-w-[3.75rem] h-2 bg-goldenApricot mb-10"
        />
        <motion.p
          {...animateInConfigText}
          transition={transitionConfig(0.4)}
          className="font-regular text-[15px] md:text-[20px]"
        >
          Distinguished speakers are at the heart of CUSEC, igniting minds and
          inspiring futures. These leaders, innovators, and pioneers in the
          technology industry bring a wealth of knowledge and experience to the
          stage. Their insightful presentations, engaging workshops, and
          stimulating discussions elevate the conference experience, offering
          students and professionals invaluable opportunities to dive deep into
          the latest trends and emerging technologies. Our speakers are central
          to fostering a vibrant, educational, and thought-provoking
          environment, ensuring that CUSEC remains an essential event for anyone
          eager to shape the future of technology and innovation.
        </motion.p>
      </section>
      <motion.div
        {...animateInConfig2}
        transition={transitionConfig(0.7)}
        className="hidden lg:flex absolute "
      >
        <Image
          src={circle_grid_v1}
          alt="Horizontal grid of grey circles"
          className="scale-[0.9] relative right-[9rem] -top-[28rem] opacity-50"
          priority
        />
      </motion.div>

      {/* Render team member cards */}
      <div
        // className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 md:-mt-10"
        className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:-mt-10"
      >
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            {...animateInConfig}
            transition={transitionConfig(index * STAGGER_DELAY)}
          >
            <SpeakerCard
              name={speaker.name}
              role={speaker.role}
              image={`/images/speaker images/${speaker.image}`}
              description={speaker.description}
              twitter={speaker.twitter}
              linkedin={speaker.linkedin}
              github={speaker.github}
              website={speaker.website}
            />
          </motion.div>
        ))}
      </div>

      {/* <Image
          src={circle_grid_v3}
          alt="Horizontal grid of grey circles"
          className="hidden lg:flex scale-[0.8] relative -right-[12rem] -top-[124rem] opacity-50"
          priority
        />

         <Image
          src={circle_grid_v3}
          alt="Horizontal grid of grey circles"
          className="hidden lg:flex scale-[0.8] relative -right-[43rem] -top-[100rem] opacity-50 rotate-90"
          priority
        /> */}
    </>
  );
}

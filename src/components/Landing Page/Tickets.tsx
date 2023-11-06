import Image from "next/image";
import circle_grid_v2 from "@/assets/circle_grid_v2.svg";
import TicketCard from "./TicketCard";
import { motion } from "framer-motion";

function animateInConfig(text: boolean) {
  return {
    initial: { opacity: 0, x: text ? -100 : 0, scale: text ? 1 : 0.8 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    viewport: { once: true },
  };
}

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

export default function Sponsor() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10 md:my-10">
          <motion.h2
            {...animateInConfig(true)}
            transition={transitionConfig(0)}
            className="text-[28px] md:text-[40px] font-semibold tracking-tight"
          >
            Attend Our 2024 Event
          </motion.h2>
          <motion.hr
            {...animateInConfig(true)}
            initial={{ opacity: 0, x: -50 }}
            transition={transitionConfig(0.2)}
            className="block max-w-[3rem] md:max-w-[4rem] h-2 bg-purple-500 mb-6 mt-1"
          />
          <motion.p
            {...animateInConfig(true)}
            transition={transitionConfig(0.4)}
            className="md:text-[24px] font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-royalPurple to-roseQuartz tracking-tight"
          >
            Pricing Plans
          </motion.p>
        </div>

        <motion.span
          {...animateInConfig(false)}
          transition={transitionConfig(0.3)}
          className="flex justify-end mr-[-8px] mb-4"
        >
          <Image
            src={circle_grid_v2}
            alt="Horizontal grid of grey circles"
            className="scale-125"
          />
        </motion.span>
      </div>

      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <motion.div
          {...animateInConfig(false)}
          transition={transitionConfig(0)}
        >
          <TicketCard
            title={"Basic"}
            description={"Learn, network, and grow with CUSEC"}
            studentPrice={80}
            professionalPrice={200}
            features={[
              "Social Events",
              "Networking Benefits",
              "Workshops & Talks hosted by sponsors",
            ]}
            buttonLink="https://www.tickettailor.com/events/cusec/943944"
            themeColor="roseQuartz"
          />
        </motion.div>
        <motion.div
          {...animateInConfig(false)}
          transition={transitionConfig(0)}
        >
          <TicketCard
            title={"VIP"}
            description={"Get an exclusive CUSEC experience"}
            studentPrice={110}
            professionalPrice={230}
            features={[
              "All Basic Benefits",
              "Priority Networking",
              "Exclusive CUSEC 2024 Merchandise",
            ]}
            buttonLink="https://www.tickettailor.com/events/cusec/943944"
            themeColor="goldenApricot"
          />
        </motion.div>
      </div>
      <motion.span
        {...animateInConfig(false)}
        transition={transitionConfig(0.3)}
        className="flex mb-4 ml-[-1rem]"
      >
        <Image
          src={circle_grid_v2}
          alt="Horizontal grid of grey circles"
          className="scale-125"
          id="faq"
        />
      </motion.span>
    </>
  );
}

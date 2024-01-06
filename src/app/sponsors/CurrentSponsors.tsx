import Image from "next/image";
import { motion } from "framer-motion";
import SponsorBox from "./SponsorBox";
import { sponsors } from "./Sponsors";
import circle_grid_v1 from "@/assets/circle_grid_v1.svg";
import circle_grid_v2 from "@/assets/circle_grid_v2.svg";

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

export default function CurrentSponsors() {
  return (
    <div className="relative -mb-24 md:my-0">
      {/* Circle Grid Images */}
      <motion.div
        {...animateInConfigImage}
        transition={transitionConfig(0.6)}
        className="absolute -right-[6vw] -bottom-28 hidden md:block"
      >
        <Image
          src={circle_grid_v2}
          alt="Horizontal grid of grey circles"
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
          priority
        />
      </motion.div>

      {/* Sponsor Section */}
      <section className="lg:max-w-[1024px] max-w-[768px] px-6 md:px-12 md:mb-20">
        <motion.p
          {...animateInConfigText}
          transition={transitionConfig(0)}
          className="font-semibold text-[28px] md:text-[40px] tracking-tight"
        >
          CUSEC 2024 Sponsors
        </motion.p>
        <motion.hr
          {...animateInConfigText}
          transition={transitionConfig(0.2)}
          className="block max-w-[2.5rem] md:max-w-[3.75rem] h-2 bg-roseQuartz mb-10"
        />
        <motion.p
          {...animateInConfigText}
          transition={transitionConfig(0.4)}
          className="font-regular text-[15px] md:text-[20px]"
        >
          Each year our sponsors play a crucial role in making CUSEC an exciting
          and enriching experience for tech-savvy students. Their generous
          support fuels the conference&apos;s activities and enhances the
          overall atmosphere for students and professionals to connect, learn,
          and explore new horizons in software engineering. Our sponsors are
          essential in keeping the conference dynamic and full of opportunities,
          ensuring that CUSEC continues to be a must-attend event for those
          passionate about technology and innovation.
        </motion.p>
      </section>

      <motion.div
        {...animateInConfigImage}
        transition={transitionConfig(0.6)}
        className="absolute -top-0 -left-10 scale-125 w-[40px] h-[80px] md:h-[120px] md:top-[80px] md:right-[40px] lg:-top-[20px] lg:right-[40px] lg:h-[160px]"
      >
        <Image src={circle_grid_v1} alt="Vertical grid of grey circles" />
      </motion.div>

      {/* Sponsor Logos */}
      {/* The reason they're rendered one by one instead of mapping is because I had to give each a different animation */}
      <section className="mt-10">
        <div className="flex flex-col justify-center">
          {/* Manually render RBC */}
          <div className="flex justify-center w-full my-5 group">
            <SponsorBox
              {...sponsors.find((sponsor) => sponsor.name === "RBC")!}
            animationClass="bobbing-animation-1" 
            />
          </div>

          {/* Manually render CSE */}
          <div className="flex justify-center w-full my-5 group">
            <SponsorBox
              {...sponsors.find((sponsor) => sponsor.name === "CSE")!}
            animationClass="bobbing-animation-2" 
            />
          </div>

          {/* Manually render Kinaxis */}
          <div className="flex justify-center w-full my-5 group">
            <SponsorBox
              {...sponsors.find((sponsor) => sponsor.name === "Kinaxis")!}
            animationClass="bobbing-animation-3" 
            />
          </div>
        </div>

        {/* Container for Accenture and Fellow */}
        <div className="flex space-x-4 mt-15">
          {/* Manually render Accenture */}
          <div className="w-1/2 my-5 group">
            <SponsorBox
              {...sponsors.find((sponsor) => sponsor.name === "Accenture")!}
            animationClass="bobbing-animation-4" 
            />
          </div>

          {/* Manually render Fellow */}
          <div className="w-1/2 my-5 group">
            <SponsorBox
              {...sponsors.find((sponsor) => sponsor.name === "Fellow")!}
            animationClass="bobbing-animation-5" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

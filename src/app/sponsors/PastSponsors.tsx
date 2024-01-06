import Image from "next/image";
import circle_grid_v1 from "@/assets/circle_grid_v1.svg";
import circle_grid_v2 from "@/assets/circle_grid_v2.svg";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";
import sponsor_logos from "@/assets/sponsor_logos.png";
import { motion } from "framer-motion";

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

export default function PastSponsors() {
  return (
    <div className="relative">
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

      <section className="lg:max-w-[1024px] max-w-[768px] px-6 md:px-12 md:mb-20">
        <motion.p
          {...animateInConfigText}
          transition={transitionConfig(0)}
          className="font-semibold text-[28px] md:text-[40px] tracking-tight"
        >
          Past CUSEC Sponsors
        </motion.p>
        <motion.hr
          {...animateInConfigText}
          transition={transitionConfig(0.2)}
          className="block max-w-[2.5rem] md:max-w-[3.75rem] h-2 bg-roseQuartz mb-10"
        />
      </section>
      <motion.div
        {...animateInConfigImage}
        transition={transitionConfig(0.6)}
        className="absolute -top-0 -left-10 scale-125 w-[40px] h-[80px] md:h-[120px] md:top-[80px] md:right-[40px] lg:-top-[20px] lg:right-[40px] lg:h-[160px]"
      >
        <Image src={circle_grid_v1} alt="Vertical grid of grey circles" />
      </motion.div>

      <motion.div 
      {...animateInConfigImage}
        transition={transitionConfig(0.6)}
      className="flex justify-end mt-6 translate-x-3 md:hidden">
        <Image src={circle_grid_v2} alt="Horizontal grid of grey circles" />
      </motion.div>

      <motion.div
        {...animateInConfigImage}
        transition={transitionConfig(0.6)}
        className="relative max-w-xl aspect-square mx-auto w-full"
      >
        <motion.div
          {...animateInConfigText}
          transition={transitionConfig(0.8)}
          className="bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-full h-full scale-95 md:scale-[.99] top-[-17px] right-[-18px] absolute"
        ></motion.div>

        <BlueBorderSquareBox>
          <motion.div
            {...animateInConfigImage}
            transition={transitionConfig(0.9)}
            className="aspect-square flex flex-col justify-center items-center relative right-4 bobbing-animation-4"
          >
            <Image
              src={sponsor_logos}
              height={20}
              width={20}
              alt="Sponsor Logos"
              layout="responsive"
              priority
            />
          </motion.div>
        </BlueBorderSquareBox>
      </motion.div>
    </div>
  );
}

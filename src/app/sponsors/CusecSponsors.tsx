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

export default function CusecSponsors() {
  const sponsorLogos = [
    {
      src: "/images/sponsor logos/rbc_logo.svg",
      alt: "RBC Logo",
      styles: "w-[70px] h-[90px] md:w-[200px] md:h-[260px]",
    },
    {
      src: "/images/sponsor logos/d2l_logo.svg",
      alt: "D2L Logo",
      styles: "w-[57px] h-[24px] md:w-[165px] md:h-[70px]",
    },
    {
      src: "/images/sponsor logos/accenture_logo.svg",
      alt: "Accenture Logo",
      styles: "w-[79px] h-[20px] md:w-[230px] md:h-[60px]",
    },
    {
      src: "/images/sponsor logos/unity_logo.svg",
      alt: "Unity Logo",
      styles: "w-[114px] h-[43px] md:w-[337px] md:h-[125px]",
    },
    {
      src: "/images/sponsor logos/csc_logo.svg",
      alt: "CSC Logo",
      styles: "w-[45px] h-[45px] md:w-[130px] md:h-[130px] md:left-20",
    },
    {
      src: "/images/sponsor logos/morgan_stanley_logo.svg",
      alt: "Morgan Stanley Logo",
      styles: "w-[114px] h-[18px] md:w-[330px] md:h-[50px]",
    },
    {
      src: "/images/sponsor logos/nokia_logo.svg",
      alt: "Nokia Logo",
      styles: "w-[80px] h-[14px] md:w-[235px] md:h-[40px]",
    },
    {
      src: "/images/sponsor logos/stickermule_logo.svg",
      alt: "Sticker Mule Logo",
      styles: "w-[97px] h-[56px] md:w-[285px] md:h-[165px]",
    },
    {
      src: "/images/sponsor logos/deloitte_logo.svg",
      alt: "Deloitte Logo",
      styles: "w-[98px] h-[22px] md:w-[288px] md:h-[55px]",
    },
    {
      src: "/images/sponsor logos/fellow_logo.svg",
      alt: "Fellow Logo",
      styles: "w-[112px] h-[30px] md:w-[330px] md:h-[88px]",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute -right-[6vw] -bottom-28 hidden md:block">
        <Image
          src={circle_grid_v2}
          alt="Horizontal grid of grey circles"
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
          priority
        />
      </div>

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
          transition={transitionConfig(0.3)}
          className="block max-w-[2.5rem] md:max-w-[3.75rem] h-2 bg-roseQuartz mb-10"
        />
        <motion.p
          {...animateInConfigText}
          transition={transitionConfig(0.6)}
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
        <Image
          src={circle_grid_v1}
          alt="Vertical grid of grey circles"
          className="absolute -top-0 -left-10 scale-125 w-[40px] h-[80px] md:h-[120px] md:top-[80px] md:right-[40px] lg:-top-[20px] lg:right-[40px] lg:h-[160px]"
        />

      <div className="flex justify-end mt-6 translate-x-3 md:hidden">
        <Image src={circle_grid_v2} alt="Horizontal grid of grey circles" />
      </div>

      <motion.div
          {...animateInConfigImage}
          transition={transitionConfig(0.8)}
       className="relative max-w-xl aspect-square mx-auto w-full">
        <motion.div
          {...animateInConfigText}
          transition={transitionConfig(0.8)}
        className="bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-full h-full scale-95 md:scale-[.99] top-[-17px] right-[-18px] absolute"></motion.div>

        <BlueBorderSquareBox>
          {/* <div className="h-[257px] md:h-[500px] md:gap-8 py-5 px-8 md:py-10 md:px-12 relative"> */}
          {/* {sponsorLogos.map((logo) => (
              <div key={logo.src} className={`absolute ${logo.styles}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))} */}
          <motion.div
          {...animateInConfigImage}
          transition={transitionConfig(1)}
           className="aspect-square flex flex-col justify-center items-center relative right-4">
            <Image
              // src={sponsor_logos}
              src={sponsor_logos}
              height={20}
              width={20}
              alt="Sponsor Logos"
              layout="responsive"
              priority
            />
          </motion.div>
          {/* </div> */}
        </BlueBorderSquareBox>
      </motion.div>
    </div>
  );
}

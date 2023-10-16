import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";

// import "swiper/css";
import "swiper/css/bundle";

import WhyJoinDecagon from "./WhyJoinDecagon";
import learn_decagon from "@/components/About Us/Carousel Images/learn_decagon.svg";
import learn_icon from "@/components/About Us/Carousel Images/learn_icon.svg";
import connect_decagon from "@/components/About Us/Carousel Images/connect_decagon.svg";
import connect_icon from "@/components/About Us/Carousel Images/connect_icon.svg";
import discover_decagon from "@/components/About Us/Carousel Images/discover_decagon.svg";
import discover_icon from "@/components/About Us/Carousel Images/discover_icon.svg";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WhyJoin() {
  const [stretchValue, setStretchValue] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      setStretchValue(window.innerWidth > 1024 ? 300 : 100);
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animateInConfig1 = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };

  const animateInConfig2 = {
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

  return (
    // The 'WhyJoinSwiperOverride' class is located in the 'globals.css' file
    <section className="flex flex-col items-center SwiperNavigationOverride">
      <motion.h2
        {...animateInConfig1}
        transition={transitionConfig(0.3)}
        className="flex items-center font-semibold text-[28px] md:text-[40px] tracking-tight mb-16"
      >
        <hr className="block w-2 h-10 bg-orange-300 mr-4" />
        Why Join?
      </motion.h2>

      {/* Decagon Carousel*/}
      <motion.div
        {...animateInConfig2}
        transition={transitionConfig(0.6)}
        className="w-full h-[270px] md:h-[450px]"
      >
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard, EffectCoverflow]}
          slidesPerView={2}
          grabCursor={true}
          initialSlide={1}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: stretchValue,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          keyboard={true}
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <WhyJoinDecagon
                BackgroundImage={learn_decagon}
                IconImage={learn_icon}
                TitleText="Learn"
                SubtitleText="from world-renowned experts"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <WhyJoinDecagon
                BackgroundImage={connect_decagon}
                IconImage={connect_icon}
                TitleText="Connect"
                SubtitleText="with like-minded individuals"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <WhyJoinDecagon
                BackgroundImage={discover_decagon}
                IconImage={discover_icon}
                TitleText="Discover"
                SubtitleText="opportunities with companies"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>

      <motion.div
        {...animateInConfig1}
        transition={transitionConfig(0.9)}
        className="flex flex-col items-center mt-16"
      >
        <p className="md:text-[24px] text-center">
          Be a part of our 2024 event this January!
        </p>
        <p className="font-semibold text-[20px] md:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot w-fit">
          Register Now
        </p>
        <Link
          className={`drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-royalBlue hover:bg-goldenApricot mx-auto px-5 md:px-10 py-1 mt-3 md:mt-6 text-center rounded-full uppercase md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:text-white`}
          href={`https://www.tickettailor.com/events/cusec/943944`}
          target="_blank"
        >
          Sign Up
        </Link>
      </motion.div>
    </section>
  );
}

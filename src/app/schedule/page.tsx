"use client";
import { useState, useRef } from "react";
import Fade from "@/components/Fade";
import { motion } from "framer-motion";
import DayButton from "./DayButton";
import DaySchedule from "./DaySchedule";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";

// import "swiper/css";
import "swiper/css/bundle";

export default function Schedule() {
  const fadeInConfig = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
  };

  const fadeInConfigText = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };

  const transitionConfig = (delay = 0) => ({
    duration: 1.5,
    delay: delay,
    type: "spring",
    bounce: 0.2,
  });

  // Selected Day 
  const [selectedDay, setSelectedDay] = useState<string>("Day One");

  // @ts-ignore
  const swiperRef = useRef<Swiper>(null);

  const handleDayButtonClick = (day: "Day One" | "Day Two" | "Day Three") => {
    setSelectedDay(day);
    const dayIndexMap = {
      "Day One": 0,
      "Day Two": 1,
      "Day Three": 2,
    };

    const index = dayIndexMap[day];

    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index); // Navigate to the corresponding slide
    }
  };

  const handleSlideChange = () => {
    return (swiper: any) => {
      const dayIndex = swiper.activeIndex;
      const day = ["Day One", "Day Two", "Day Three"][dayIndex];
      setSelectedDay(day);
    };
  };

  const colors = [
    "border-royalPurple",
    "border-roseQuartz",
    "border-goldenApricot",
  ];

  // Map the selectedDay string to a day index
  const dayIndexMap: { [key: string]: number } = {
    "Day One": 0,
    "Day Two": 1,
    "Day Three": 2,
  };

  const selectedDayIndex = dayIndexMap[selectedDay] ?? 0; // Default to 0 if not found

  return (
    <div className="bg-pink-100 overflow-hidden">
      <title>Schedule - CUSEC 2024</title>
      <meta
        name="description"
        content="Official schedule for the 2024 edition of the Canadian University Software Engineering Conference."
      />
      <div className="flex justify-center mx-6 lg:mx-24">
        <div className="w-full mt-20 max-w-screen-2xl">
          <Fade>
            {/* Title */}
            <motion.span
              {...fadeInConfig}
              transition={transitionConfig()}
              className="flex justify-center"
            >
              <h1 className="text-center text-[28px] md:text-[40px] font-semibold tracking-tight w-fit">
                January 2024 Schedule{" "}
                {/* <section className="tooltip tooltip-bottom border border-red-500 text-[20px]" data-tip="Hover/Click on an event to add it to your calendar!">
                  <button> Info</button>
                </section> */}
                <motion.hr
                  {...fadeInConfigText}
                  transition={transitionConfig(0.2)}
                  className="max-w-[3rem] md:max-w-[4rem] h-2 bg-pink-300 mb-2 ml-[9rem] md:ml-[13rem]"
                />
              </h1>
              &nbsp;
            </motion.span>

            {/* Buttons to select the day */}
            <motion.div
              {...fadeInConfigText}
              transition={transitionConfig(0.4)}
              className="my-10 rounded-lg bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot p-[2px] shadow-[0_0px_8px_rgba(0,0,0,0.5)]"
            >
              <motion.div
                {...fadeInConfig}
                transition={transitionConfig(0.6)}
                className="flex bg-white justify-evenly rounded-lg py-5 px-6"
              >
                {/* Day One Button */}
                <motion.div
                  {...fadeInConfig}
                  transition={transitionConfig(0.8)}
                >
                  <DayButton
                    titleText="Day One"
                    Day="Thu"
                    Date="11"
                    selected={selectedDay === "Day One"}
                    onDayButtonClick={() => handleDayButtonClick("Day One")}
                  />
                </motion.div>

                {/* Dotted line */}
                <motion.div
                  {...fadeInConfig}
                  transition={transitionConfig(1.6)}
                  className="flex-1 border-b-4 md:border-b-8 border-dotted border-gray-400 my-[50px] md:my-[58px] mx-2 md:mx-0"
                ></motion.div>

                {/* Day Two Button */}
                <motion.div
                  {...fadeInConfig}
                  transition={transitionConfig(1.2)}
                >
                  <DayButton
                    titleText="Day Two"
                    Day="Fri"
                    Date="12"
                    selected={selectedDay === "Day Two"}
                    onDayButtonClick={() => handleDayButtonClick("Day Two")}
                  />
                </motion.div>

                {/* Dotted Line */}
                <motion.div
                  {...fadeInConfig}
                  transition={transitionConfig(1.8)}
                  className="flex-1 border-b-4 md:border-b-8 border-dotted border-gray-400 my-[50px] md:my-[58px] mx-2 md:mx-0"
                ></motion.div>

                {/* Day Three Button */}
                <motion.div
                  {...fadeInConfig}
                  transition={transitionConfig(1.4)}
                >
                  <DayButton
                    titleText="Day Three"
                    Day="Sat"
                    Date="13"
                    selected={selectedDay === "Day Three"}
                    onDayButtonClick={() => handleDayButtonClick("Day Three")}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Schedule of events */}
            <motion.div
              {...fadeInConfigText}
              transition={transitionConfig(0.6)}
            >
              <Swiper
                spaceBetween={50}
                modules={[Navigation, Pagination, A11y, Keyboard]}
                grabCursor={true}
                initialSlide={0}
                navigation={true}
                keyboard={true}
                scrollbar={{ draggable: true }}
                onSlideChange={handleSlideChange()}
                ref={swiperRef}
                autoHeight={true}
                className="SwiperScheduleNavigation"
              >
                <SwiperSlide>
                  <DaySchedule dayIndex={0} />
                </SwiperSlide>
                <SwiperSlide>
                  <DaySchedule dayIndex={1} />
                </SwiperSlide>
                <SwiperSlide>
                  <DaySchedule dayIndex={2} />
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

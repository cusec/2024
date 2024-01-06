"use client";
import { useState } from "react";
import Fade from "@/components/Fade";
import { motion } from "framer-motion";
import DayButton from "./DayButton";
import DaySchedule from "./DaySchedule";


import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from "swiper/modules";

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

  // Assume the identifier is the titleText for simplicity, you can use more unique identifiers if necessary
  const [selectedDay, setSelectedDay] = useState<string>("Day One");

  const handleDayButtonClick = (day: string) => {
    setSelectedDay(day);
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
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-2xl mx-6 lg:mx-24 mt-20">
          <Fade>
            {/* Title */}
            <motion.span
              {...fadeInConfig}
              transition={transitionConfig()}
              className="flex justify-center"
            >
              <h1 className="text-center text-[28px] md:text-[40px] font-semibold tracking-tight w-fit">
                January 2024 Schedule
                <motion.hr
                  {...fadeInConfigText}
                  transition={transitionConfig(0.2)}
                  className="max-w-[3rem] md:max-w-[4rem] h-2 bg-pink-300 mb-2 ml-[9rem] md:ml-[13rem]"
                />
              </h1>
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
              className="my-10 rounded-lg bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot p-[2px] shadow-[0_0px_8px_rgba(0,0,0,0.5)]"
            >
              <div className="bg-white rounded-lg py-5 px-6">
                <DaySchedule dayIndex={selectedDayIndex} />
              </div>
            </motion.div>
          </Fade>

          {/* Back to Top Button */}
          <div className="flex justify-center mb-10">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#AD65E3] px-3 min-[390px]:px-5 md:px-8 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-goldenApricot hover:text-white"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import Fade from "@/components/Fade";
import Image from "next/image";
import { motion } from "framer-motion";
import DayButton from "./DayButton";
import schedule from "./schedule.json";
import DaySchedule from "./DaySchedule";

export default function Schedule() {
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
    <div className="bg-pink-100">
      <title>Schedule - CUSEC 2024</title>
      <meta
        name="description"
        content="Official schedule for the 2024 edition of the Canadian University Software Engineering Conference."
      />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-2xl mx-6 lg:mx-24 mt-20">
          <Fade>
            {/* Title */}
            <motion.span className="flex justify-center">
              <h1 className="text-center text-[28px] md:text-[40px] font-semibold tracking-tight w-fit">
                January 2024 Schedule
                <hr className="max-w-[3rem] md:max-w-[4rem] h-2 bg-pink-300 mb-2 ml-[9rem] md:ml-[13rem]" />
              </h1>
            </motion.span>

            {/* Button to select the day */}
            <motion.div className="my-10 rounded-lg bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot p-[2px] shadow-[0_0px_8px_rgba(0,0,0,0.5)]">
              <div className="flex bg-white justify-evenly rounded-lg py-5 px-6">
                <DayButton
                  titleText="Day One"
                  Day="Thu"
                  Date="11"
                  selected={selectedDay === "Day One"}
                  onDayButtonClick={() => handleDayButtonClick("Day One")}
                />
                <div className="flex-1 border-b-4 md:border-b-8 border-dotted border-gray-400 my-[50px] md:my-[58px] mx-2 md:mx-0"></div>
                <DayButton
                  titleText="Day Two"
                  Day="Fri"
                  Date="12"
                  selected={selectedDay === "Day Two"}
                  onDayButtonClick={() => handleDayButtonClick("Day Two")}
                />
                <div className="flex-1 border-b-4 md:border-b-8 border-dotted border-gray-400 my-[50px] md:my-[58px] mx-2 md:mx-0"></div>
                <DayButton
                  titleText="Day Three"
                  Day="Sat"
                  Date="13"
                  selected={selectedDay === "Day Three"}
                  onDayButtonClick={() => handleDayButtonClick("Day Three")}
                />
              </div>
            </motion.div>

            {/* Schedule of events */}
            <motion.div className="my-10 rounded-lg bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot p-[2px] shadow-[0_0px_8px_rgba(0,0,0,0.5)]">
              <div className="bg-white rounded-lg py-5 px-6">
                <DaySchedule dayIndex={selectedDayIndex} />
              </div>
            </motion.div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

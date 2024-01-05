"use client";
import { useState } from "react";
import Fade from "@/components/Fade";
import Image from "next/image";
import { motion } from "framer-motion";
import DayButton from "./DayButton";
import schedule from "./schedule.json";

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

  return (
    <div className="bg-pink-100">
      <title>Schedule - CUSEC 2024</title>
      <meta
        name="description"
        content="Official schedule for the 2024 edition of the Canadian University Software Engineering Conference."
      />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-2xl mx-6 lg:mx-24 overflow-hidden mt-20">
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
                <h2 className="text-[16px] md:text-[30px]">
                  <span className="font-semibold">{schedule[0]["Date"]}, </span>{" "}
                  <span>{schedule[0]["Day"]}</span>
                </h2>
                {schedule[0].items.map((item, index) =>
                  (() => {
                    // Determine the color class for the border based on the current index
                        const borderColorClass = colors[index % colors.length]; // Cycle through colors
                        
                    switch (item.category) {
                      // Category 1 events
                      case "1":
                        return (
                          <div key={index} className="m-1 flex">
                            {/* Time column */}
                                <div className={`flex flex-col pr-4 border-r-2 ${borderColorClass}`}>
                              <span>{item.start_time}</span>
                              <span>{item.end_time}</span>
                            </div>

                            {/* Event info column */}
                            <div className="flex flex-col ml-4">
                              <span className="font-semibold">
                                {item.title}
                              </span>
                              <span className="text-zinc-400 text-[12px]">
                                {item.location}
                              </span>
                            </div>
                          </div>
                        );

                      //   Category 2 events
                      case "2":
                        return (
                          <div key={index} className="m-1 flex">
                            {/* Time column */}
                            <div className={`flex flex-col pr-4 border-r-2 ${borderColorClass}`}>
                              <span>{item.start_time}</span>
                              <span>{item.end_time}</span>
                            </div>

                            {/* Event Info column */}
                            <div className="flex flex-col ml-4">
                              <span className="font-semibold">
                                {item.speaker}
                              </span>
                              <span className="text-zinc-500">
                                {item.title}
                              </span>
                              <span className="text-zinc-400 text-[12px]">
                                {item.location}
                              </span>
                            </div>
                          </div>
                        );

                      //Category 3 events
                      case "3":
                        return (
                          <div
                            key={index}
                            className="m-1 flex"
                          >
                            {/* Time column */}
                            <div className={`flex flex-col pr-4 border-r-2 ${borderColorClass}`}>
                              <span>{item.start_time}</span>
                              <span>{item.end_time}</span>
                            </div>

                            {/* Events container */}
                            <div className="flex ml-4">
                              {/* First event */}
                              <div className="flex flex-col pr-4">
                                <span className="font-semibold">
                                  {item.items &&
                                    item.items.length > 0 &&
                                    item.items[0].title}
                                </span>
                                <span className="text-zinc-500 text-[12px]">
                                  {item.items &&
                                    item.items.length > 0 &&
                                    item.items[0].location}
                                </span>
                              </div>
                              {/* Second event */}
                              <div className="flex flex-col pl-4 border-l-2 border-royalBlue">
                                <span className="font-semibold">
                                  {item.items &&
                                    item.items.length > 0 &&
                                    item.items[1].title}
                                </span>
                                <span className="text-zinc-500 text-[12px]">
                                  {item.items &&
                                    item.items.length > 0 &&
                                    item.items[1].location}
                                </span>
                              </div>
                              <span className="font-semibold">
                                {item.title}
                              </span>
                              <span className="text-zinc-500 text-[12px]">
                                {item.location}
                              </span>
                            </div>
                          </div>
                        );
                      // Category 4 events
                      case "4":
                        return <div>Category 4 Component</div>;
                      default:
                        return null; // Or some default component for other categories
                    }
                  })()
                )}
              </div>
            </motion.div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

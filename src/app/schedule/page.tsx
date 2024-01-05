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
                              
                <h2 className="text-[16px] md:text-[30px]">
                  <span className="font-semibold">{schedule[0]["Date"]}, </span>{" "}
                  <span>{schedule[0]["Day"]}</span>
                </h2>
                {schedule[0].items.map((item, index) => {
                  // Determine the color class for the border based on the current index
                  const borderColorClass = colors[index % colors.length]; // Cycle through colors

                  return (() => {
                    switch (item.category) {
                      case "1":
                        // Category 1 events
                        return (
                          <div
                            key={index}
                            className="m-1 grid grid-cols-[minmax(100px,_1fr)_10fr] md:grid-cols-[minmax(100px,_1.5fr)_10fr] gap-4 align-items-center my-6"
                          >
                            {/* Time column */}
                            <div
                              className={`flex flex-col justify-center pr-4 border-r-2 md:text-[20px] ${borderColorClass}`}
                            >
                              <span>{item.start_time}</span>
                              <span>{item.end_time}</span>
                            </div>

                            {/* Event info column */}
                            <div className="flex flex-col md:text-[24px] md:pl-10">
                              <span className="font-semibold">
                                {item.title}
                              </span>
                              <span className="text-zinc-400 text-[12px] md:text-[20px]">
                                {item.location}
                              </span>
                            </div>
                          </div>
                        );

                      case "2":
                        // Category 2 events
                        return (
                          <div
                            key={index}
                            className="m-1 grid grid-cols-[minmax(100px,_1fr)_10fr] gap-4 align-items-center md:grid-cols-[minmax(100px,_1.5fr)_10fr] my-6"
                          >
                            {/* Time column */}
                            <div
                              className={`flex flex-col justify-center pr-4 border-r-2 md:text-[20px] ${borderColorClass}`}
                            >
                              <span>{item.start_time}</span>
                              <span>{item.end_time}</span>
                            </div>

                            {/* Event Info column */}
                            <div className="flex flex-col md:text-[24px] md:pl-10">
                              <span className="font-semibold">
                                {item.speaker}
                              </span>
                              <span className="text-zinc-500">
                                {item.title}
                              </span>
                              <span className="text-zinc-400 text-[12px] md:text-[20px]">
                                {item.location}
                              </span>
                            </div>
                          </div>
                        );

                      case "3":
                        // Category 3 events
                        return (
                          <div
                            key={index}
                            className="m-1 grid grid-cols-[minmax(100px,_1fr)_10fr] gap-4 align-items-center md:grid-cols-[minmax(100px,_1.5fr)_10fr] my-6"
                          >
                            {/* Time column */}
                            <div
                              className={`flex flex-col justify-center pr-4 border-r-2 md:text-[20px] ${borderColorClass}`}
                            >
                              <span>{item.start_time}</span>
                              <span>{item.end_time}</span>
                            </div>

                            {/* Events container */}
                            <div className="flex md:pl-10">
                              {/* Iterate through sub-events */}
                              {item.items &&
                                item.items.map((subItem, subIndex, array) => (
                                  <div
                                    key={subIndex}
                                    className={`flex flex-col  md:text-[24px] ${
                                      subIndex === array.length - 1
                                        ? "pl-4 border-l-2 border-royalBlue"
                                        : "mr-4"
                                    }`}
                                  >
                                    <span className="font-semibold">
                                      {subItem.title}
                                    </span>
                                    <span className="text-zinc-500 text-[12px] md:text-[20px]">
                                      {subItem.location}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        );

                      case "4a":
                        // Category 4 events
                        return (
                          <div
                            key={index}
                            className="m-1 grid grid-cols-[minmax(100px,_1fr)_10fr] gap-4 align-items-center md:grid-cols-[minmax(100px,_1.5fr)_10fr] my-6"
                          >
                            {/* Time column */}
                            <div
                              className={`flex flex-col justify-center pr-4 border-r-2 md:text-[20px] ${borderColorClass}`}
                            >
                              <div className="flex flex-col">
                                <span className="pb-12">{item.start_time}</span>
                                <span>{item.mid_time_1}</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="pb-12">{item.mid_time_2}</span>
                                <span>{item.end_time}</span>
                              </div>
                            </div>

                            {/* Events container */}
                            <div className="grid grid-cols-2 h-full md:pl-10">
                              {/* First half split into two horizontally */}
                              <div className="flex flex-col h-full">
                                {/* First event (top of the first half) */}
                                {item.items && item.items.length >= 1 && (
                                  <div className="flex flex-col md:text-[24px]">
                                    <span className="font-semibold">
                                      {item.items[0].title}
                                    </span>
                                    <span className="text-zinc-500 text-[12px] md:text-[20px]">
                                      {item.items[0].location}
                                    </span>
                                  </div>
                                )}

                                {/* Third event (bottom of the first half) */}
                                {item.items && item.items.length >= 3 && (
                                  <div className="flex flex-col md:text-[24px] pl-4 ml-1 border-l-2 border-royalBlue my-[9px] md:my-[14px]">
                                    <span className="font-semibold">
                                      {item.items[2].title}
                                    </span>
                                    <span className="text-zinc-500 text-[12px] md:text-[20px]">
                                      {item.items[2].location}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Second column split into two vertically */}
                              <div className="grid grid-rows-2 h-full">
                                {/* Second event (top half of the second column) */}
                                {item.items && item.items.length >= 2 && (
                                  <div className="flex flex-col md:text-[24px] pl-4 ml-4 border-l-2 border-goldenApricot">
                                    <span className="font-semibold">
                                      {item.items[1].title}
                                    </span>
                                    <span className="text-zinc-500 text-[12px] md:text-[20px]">
                                      {item.items[1].location}
                                    </span>
                                  </div>
                                )}

                                {/* Bottom half of the second column left blank */}
                                <div></div>
                              </div>
                            </div>
                          </div>
                        );

                      case "4b":
                        // Category 4b events
                        return (
                          <div
                            key={index}
                            className="m-1 grid grid-cols-[minmax(100px,_1fr)_10fr] gap-4 align-items-center md:grid-cols-[minmax(100px,_1.5fr)_10fr] my-6"
                          >
                            {/* Time column */}
                            <div
                              className={`flex flex-col justify-center pr-4  border-r-2 md:text-[20px] ${borderColorClass}`}
                            >
                              <div className="flex flex-col">
                                <span className="pb-12">{item.start_time}</span>
                                <span>{item.mid_time_1}</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="pb-12">{item.mid_time_2}</span>
                                <span>{item.end_time}</span>
                              </div>
                            </div>

                            {/* Events container */}
                            <div className="grid grid-cols-2 h-full md:pl-10">
                              {/* First half split into two horizontally */}
                              <div className="flex flex-col h-full">
                                {/* First event (top of the first half) */}
                                {item.items && item.items.length >= 1 && (
                                  <div className="flex flex-col md:text-[24px]">
                                    <span className="font-semibold">
                                      {item.items[0].title}
                                    </span>
                                    <span className="text-zinc-500 text-[12px] md:text-[20px]">
                                      {item.items[0].location}
                                    </span>
                                  </div>
                                )}

                                {/* Second event (bottom of the first half) */}
                                {item.items && item.items.length >= 2 && (
                                  <div className="flex flex-col md:text-[24px] pl-4 ml-1 border-l-2 border-royalBlue my-[33px] md:my-[14px]">
                                    <span className="font-semibold">
                                      {item.items[1].title}
                                    </span>
                                    <span className="text-zinc-500 text-[12px] md:text-[20px]">
                                      {item.items[1].location}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Second column split into two vertically */}
                              <div className="grid grid-rows-2 h-full">
                                {/* Bottom half of the second column left blank */}
                                <div></div>
                              </div>
                            </div>
                          </div>
                        );

                      default:
                        // Default case for other categories
                        return null;
                    }
                  })();
                })}
                              
                              
              </div>
            </motion.div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

import scheduleData from "./schedule.json";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import Popup from "reactjs-popup";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";
import Image from "next/image";

// Define the types for your schedule items
type ScheduleItem = {
  category: string;
  start_time: string;
  mid_time: string;
  mid_time_1: string;
  mid_time_2: string;
  end_time: string;
  title: string;
  location: string;
  speaker?: string;
  items?: ScheduleItem[];
};

type Schedule = {
  Date: string;
  Day: string;
  items: ScheduleItem[];
};

type DayScheduleProps = {
  dayIndex: number; // Accepts a number from 0 to 2
};

// Color array for dividers
const colors = [
  "border-royalPurple",
  "border-roseQuartz",
  "border-goldenApricot",
];

const DaySchedule: React.FC<DayScheduleProps> = ({ dayIndex }) => {
  if (dayIndex < 0 || dayIndex > 2) {
    console.error("dayIndex must be between 0 and 2");
    return null;
  }

  const daySchedule: Schedule = scheduleData[dayIndex] as unknown as Schedule;
  const gridLayoutClasses =
    "grid grid-cols-[minmax(50px,_1fr)_10fr] xs:grid-cols-[minmax(70px,_1fr)_10fr] sm:grid-cols-[minmax(100px,_1.5fr)_10fr] gap-4 my-6";
  const timeColumnClasses =
    "flex flex-col justify-center pr-4 border-r-2 md:border-r-[3px] xs:text-[20px]";
  const eventInfoClasses =
    "flex flex-col md:pl-10 justify-center break-words sm272:break-normal";
  const titleClasses =
    "font-semibold text-[14px] xs:text-[16px] sm:text-[24px]";
  const subTitleClasses =
    "text-zinc-500 text-[14px] xs:text-[16px] sm:text-[24px]";
  const locationTextClasses =
    "text-zinc-400 text-[12px] xs:text-[14px] sm:text-[20px]";

  // Rendering function for Time Column
  const renderTimeColumn = (
    item: ScheduleItem,
    isCategory4: boolean,
    colorIndex: number
  ) => (
    <div
      className={`${timeColumnClasses} ${colors[colorIndex % colors.length]}`}
    >
      <span className={`${isCategory4 ? "pb-12" : ""}  `}>
        {item.start_time}
      </span>
      {!isCategory4 && <span>{item.end_time}</span>}
      {isCategory4 && (
        <>
          <span>{item.mid_time}</span>
          <span>{item.mid_time_1}</span>
          <span className="pb-12">{item.mid_time_2}</span>
          <span>{item.end_time}</span>
        </>
      )}
    </div>
  );

  // Rendering function for Event Information
  const renderEventInfo = (item: ScheduleItem, isSpeaker: boolean) => {
    // Function to convert 12 hour time to 24 hour time (for AddToCalendarButton)
    const convertTo24Hour = (time: string | undefined): string => {
      // Guard clause for undefined or empty time strings
      if (!time || typeof time !== "string") {
        console.error("Invalid time provided:", time);
        return "00:00"; // Return a default or error value
      }

      let [hoursStr, minutes] = time.match(/\d+/g) || ["0", "0"];
      const modifier = (time.match(/[APap][mM]/) || [""])[0].toUpperCase();

      // Convert hours to number
      let hours = parseInt(hoursStr, 10);

      // Adjust hours based on the period (AM/PM)
      if (modifier === "PM" && hours < 12) {
        hours += 12;
      } else if (modifier === "AM" && hours === 12) {
        hours = 0;
      }

      // Return the formatted time
      return `${hours.toString().padStart(2, "0")}:${minutes}`;
    };

    // Define AddToCalendarButton
    const addToCalendarButton = (
      <span className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-700 ml-2">
        <AddToCalendarButton
          name={item.speaker ? `${item.speaker} - ${item.title}` : item.title}
          description="Event at CUSEC 2024"
          startDate={`2024-01-${dayIndex + 11}`}
          startTime={convertTo24Hour(item.start_time)}
          endTime={convertTo24Hour(item.end_time)}
          timeZone="America/Toronto"
          location={item.location}
          options="'Apple','Google','iCal','Outlook.com','Yahoo','Microsoft365','MicrosoftTeams'"
          hideTextLabelButton
          hideTextLabelList
          hideBackground
          inline
          hideBranding
          size="0"
          // debug
        />
      </span>
    );

    return (
      <div
        className={`${eventInfoClasses} transition ease-in-out duration-500 hover:scale-105 hover:text-purple-600 group`}
      >
        <span className={titleClasses}>
          {isSpeaker ? item.speaker : item.title}
        </span>
        <span
          className={
            isSpeaker
              ? `${subTitleClasses} group-hover:text-pink-500`
              : "font-semibold"
          }
        >
          {isSpeaker && item.title}
        </span>
        <span className={`${locationTextClasses} group-hover:text-roseQuartz`}>
          {item.location}
          {addToCalendarButton}
        </span>
      </div>
    );
  };

  // Rendering function for Event Details
  const renderEventCategory = (item: ScheduleItem, index: number) => {
    if (["1", "2", "3"].includes(item.category)) {
      if (item.category !== "3") {
        return renderEventInfo(item, item.category === "2");
      } else {
        return (
          <div className="grid grid-cols-2">
            {item.items?.slice(0, 2).map((subItem, subIndex) => (
              <div
                key={subIndex}
                className={`flex flex-col ${
                  subIndex === 1
                    ? "ml-2 pl-4 md:pl-2 border-l-2 md:border-l-[3px] border-royalBlue"
                    : ""
                }`}
              >
                {renderEventInfo(subItem, false)}
              </div>
            ))}
          </div>
        );
      }
    }

    if (item.category === "4a") {
      return (
        <div className="grid grid-cols-2 h-full">
          {/* First column for the first and last events */}
          <div className="flex flex-col h-full">
            {/* First event */}
            {item.items && item.items.length >= 1 && (
              <div>{renderEventInfo(item.items[0], false)}</div>
            )}
            {/* Last event (with blue border) */}
            {item.items && (
              <div className="pl-4 md:pl-0 md:ml-10 border-l-2 md:border-l-[3px] border-royalBlue my-[9px] md:my-[14px]">
                {renderEventInfo(item.items[item.items.length - 1], false)}
              </div>
            )}
          </div>
          {/* Second column for the second event */}
          {item.items && item.items.length > 1 && (
            <div className="flex flex-col pl-4 ml-4 border-l-2 md:border-l-[3px] border-goldenApricot md:pl-0">
              {renderEventInfo(item.items[1], false)}
            </div>
          )}
          {/* Ensure the grid layout is maintained */}
          <div></div>
        </div>
      );
    }

    // Deprecated, the game night + jeopardy event had 4 times, I changed it to have 3 times so it became a category 4c event
    // if (item.category === "4b") {
    //   return (
    //     <div className="grid grid-cols-2 h-full">
    //       {/* First column for the first and last events */}
    //       <div className="flex flex-col h-full">
    //         {/* First event */}
    //         {item.items && item.items.length >= 1 && (
    //           <div>{renderEventInfo(item.items[0], false)}</div>
    //         )}
    //         {/* Last event (with blue border and added margin-top) */}
    //         {item.items && (
    //           <div className="pl-4 md:ml-10 md:pl-0 border-l-2 md:border-l-[3px] border-royalBlue my-[9px] md:my-[14px] mt-[2.2rem]">
    //             {renderEventInfo(item.items[item.items.length - 1], false)}
    //           </div>
    //         )}
    //       </div>
    //       {/* Second column left blank */}
    //       <div></div>
    //     </div>
    //   );
    // }

    if (item.category === "4c") {
      return (
        <div key={index}>
          {/* Grid split into 40/60 rows */}
          <div className="grid grid-rows-[2fr_3fr] h-full">
            {/* First event in the first row */}
            {item.items && item.items.length >= 1 && (
              <div className="row-span-1 w-full">
                {renderEventInfo(item.items[0], false)}
              </div>
            )}
            {/* Last event (with blue border) spanning the entire second row */}
            {item.items && item.items.length >= 2 && (
              <div className="row-span-1 pl-4 md:pl-0 ml-1 md:ml-10 border-l-2 md:border-l-[3px] border-royalBlue my-[9px] md:my-[14px]">
                {renderEventInfo(item.items[item.items.length - 1], false)}
              </div>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="my-10 rounded-lg bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot p-[2px] shadow-[0_0px_8px_rgba(0,0,0,0.5)]">
      <div className="bg-white rounded-lg py-5 px-6">
        <div className="flex justify-between">
          {/* Text for the date and day */}
          <h2 className="text-[16px] md:text-[30px]">
            <span className="font-semibold">{daySchedule["Date"]}, </span>
            <span>{daySchedule["Day"]}</span>
          </h2>

          {/* View Map Button */}
          <Popup
            trigger={
              <button
                aria-label="View Map Button"
                className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-2 border-royalPurple hover:bg-royalPurple px-3 min-[390px]:px-5 md:px-8 2xs:py-2 text-center rounded-full uppercase text-[10px] xs:text-[12px] sm:text-[14px] md:text-[18px] font-semibold text-royalPurple tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:text-pink-50 whitespace-nowrap"
              >
                View Map
              </button>
            }
            position="right center"
            modal
          >
            {/* Map Popup */}
            {/* Styled in globals.css */}
            <BlueBorderSquareBox>
              <div className="w-sm">

              <Image
                src="/images/conference_map.png"
                alt="Conference Map"
                layout="responsive"
                width={1000}
                height={1000}
                />
                </div>
            </BlueBorderSquareBox>
          </Popup>
        </div>
        {/* Render all events and times */}
        {daySchedule.items.map((item, index) => (
          <div key={index} className={gridLayoutClasses}>
            {/* Column of times */}
            {renderTimeColumn(
              item,
              ["4a", "4b", "4c"].includes(item.category),
              index
            )}
            {/* Event details */}
            {renderEventCategory(item, index)}
          </div>
        ))}
        {/* Back to Top Button */}
        <div className="flex justify-center mt-10">
          <button
            aria-label="Back to Top Button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#AD65E3] px-3 min-[390px]:px-5 md:px-8 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-goldenApricot hover:text-white"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default DaySchedule;

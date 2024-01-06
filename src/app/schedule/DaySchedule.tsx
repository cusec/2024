import scheduleData from "./schedule.json"; // Adjust the path if necessary

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
    return null; // or render an error message
  }

  const daySchedule: Schedule = scheduleData[dayIndex] as unknown as Schedule;
  const gridLayoutClasses =
    "m-1 grid grid-cols-[minmax(100px,_1fr)_10fr] md:grid-cols-[minmax(100px,_1.5fr)_10fr] gap-4  my-6";
  const timeColumnClasses =
    "flex flex-col justify-center pr-4 border-r-2 md:border-r-[3px] md:text-[20px]";
  const eventInfoClasses =
    "flex flex-col md:text-[24px] md:pl-10 justify-center";
  const locationTextClasses = "text-zinc-400 text-[12px] md:text-[20px]";
  const speakerTitleClasses = "text-zinc-500 md:text-[24px]";
  const speakerClasses = "md:text-[24px] font-semibold";

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
  const renderEventInfo = (item: ScheduleItem, isSpeaker: boolean) => (
    <div className={`${eventInfoClasses} transition ease-in-out duration-500 hover:scale-105 hover:text-purple-600 cursor-pointer group`
}>
      {isSpeaker && <span className={speakerClasses}>{item.speaker}</span>}
      <span className={isSpeaker ? `${speakerTitleClasses} group-hover:text-pink-500` : "font-semibold"}>
        {item.title}
      </span>
      <span className={`${locationTextClasses} group-hover:text-roseQuartz`}>{item.location}</span>
    </div>
  );

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
                className={`flex flex-col md:text-[24px] ${
                  subIndex === 1
                    ? "pl-4 md:pl-2 border-l-2 md:border-l-[3px] border-royalBlue"
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

    if (["4a", "4b"].includes(item.category)) {
      return (
        <div className="grid grid-cols-2 h-full">
          {/* First column for the first and last events */}
          <div className="flex flex-col h-full md:text-[24px]">
            {/* First event */}
            {item.items && item.items.length >= 1 && (
              <div>{renderEventInfo(item.items[0], false)}</div>
            )}
            {/* Last event (with blue border) */}
            {item.items && (
              <div
                className={`pl-4 md:ml-10 md:pl-0 border-l-2 md:border-l-[3px] border-royalBlue my-[9px] md:my-[14px] ${
                  item.category === "4b" ? "mt-[2.2rem]" : ""
                }`}
              >
                {renderEventInfo(item.items[item.items.length - 1], false)}
              </div>
            )}
          </div>
          {/* Second column for the second event (only for category 4a) */}
          {item.category === "4a" && item.items && item.items.length > 1 && (
            <div className="flex flex-col md:text-[24px] pl-4 ml-4 border-l-2 md:border-l-[3px] border-goldenApricot md:pl-0">
              {renderEventInfo(item.items[1], false)}
            </div>
          )}
          {/* Ensure the grid layout is maintained */}
          <div></div>
        </div>
      );
    }

    if (item.category === "4c") {
      return (
        <div key={index} className={gridLayoutClasses}>
          {/* Grid split into 40/60 rows */}
          <div className="grid grid-rows-[2fr_3fr] h-full md:text-[24px]">
            {/* First event in the first row */}
            {item.items && item.items.length >= 1 && (
              <div className="row-span-1">
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
    <>
      {/* Text for the date and day */}
      <h2 className="text-[16px] md:text-[30px]">
        <span className="font-semibold">{daySchedule["Date"]}, </span>
        <span>{daySchedule["Day"]}</span>
      </h2>
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
    </>
  );
};

export default DaySchedule;

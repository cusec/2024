import { motion } from "framer-motion";

type DayButtonProps = {
  titleText: string;
  Day: string;
  Date: string;
  selected: boolean;
  onDayButtonClick: () => void;
};

export default function DayButton(props: DayButtonProps) {
  // Determine the class names based on the 'selected' prop
  const bgColor = props.selected
    ? "bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
    : "bg-gray-200 group-hover:bg-pink-300";
  const textColor = props.selected ? "text-transparent" : "text-black";
  const dotColor = props.selected ? "bg-pink-50" : "bg-transparent";
  const dayTextColor = props.selected
    ? "text-transparent"
    : "text-gray-600 group-hover:text-purple-400";

  return (
    <section
      className="flex flex-col justify-center items-center rounded-lg hover:cursor-pointer transition-all ease-in-out duration-1000 group"
      onClick={props.onDayButtonClick}
    >
      {/* Text for day of the conference, for example: 'Day One' */}
      <span
        className={`text-[16px] md:text-[24px] font-semibold ${dayTextColor} transition-all ease-in-out duration-1000 text-center bg-clip-text bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot`}
      >
        {props.titleText}
      </span>

      {/* Pill Button with Day and Date */}
      <p
        className={`flex flex-col items-center justify-center rounded-t-full rounded-b-full font-medium py-3 px-8 md:px-10 max-w-[60px] ${bgColor} transition-all ease-in-out duration-1000`}
      >
        <span
          className={`text-[20px] md:text-[24px] ${textColor} transition-all ease-in-out duration-1000 bg-clip-text bg-pink-50`}
        >
          {props.Day}
        </span>
        <span
          className={`text-[24px] md:text-[32px] -mt-1 mb-1 ${textColor} transition-all ease-in-out duration-1000 bg-clip-text bg-pink-50`}
        >
          {props.Date}
        </span>

        {/* Little dot that shows the user whether the pill is selected or not */}
        <span
          className={`h-2 w-2 rounded-full ${dotColor} transition-all ease-in-out duration-1000`}
        ></span>
      </p>
    </section>
  );
}

import { useFadeBackground } from "@/app/layout";
import Image from "next/image";
import circle_grid_vertical from "@/assets/circle_grid_vertical.svg";
import circle_grid_horizontal from "@/assets/circle_grid_horizontal.svg";
import TicketCard from "./TicketCard";

export default function Sponsor() {
  const fadeBackground = useFadeBackground();

  return (
    <div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      }`}
    >
      <h2 className="text-[28px] font-semibold tracking-tight">
        Attend Our 2024 Event
      </h2>
      <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-royalPurple to-roseQuartz tracking-tight">
        Pricing Plans
      </p>

      <span className="flex justify-end mr-[-45px]">
        <Image
          src={circle_grid_horizontal}
          alt="Horizontal grid of grey circles"
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] "
        />
      </span>

      <div>
        <TicketCard/>
      </div>

    </div>
  );
}

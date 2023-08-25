import { useFadeBackground } from "@/app/layout";
import Image from "next/image";
import circle_grid_vertical from "@/assets/circle_grid_vertical.svg";
import circle_grid_horizontal from "@/assets/circle_grid_horizontal.svg";

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

      <span className="flex justify-end mr-[-40px]">
        <Image
          src={circle_grid_horizontal}
          alt="Horizontal grid of grey circles"
        />
      </span>

      <div className="bg-black bg-opacity-60 shadow mx-auto px-20 text-white">
        
      </div>
    </div>
  );
}

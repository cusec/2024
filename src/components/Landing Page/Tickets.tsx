import { useFadeBackground } from "@/app/layout";
import BlueBorderSquareBox from "./BlueBorderSquareBox";

export default function Sponsor() {
  const fadeBackground = useFadeBackground();
  return (
    <div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      }`}
    >
    <h2 className="text-[28px] font-semibold pb-10 block md:hidden">Attend Our 2024 Event</h2>
      <div className="bg-black bg-opacity-60 shadow mx-auto px-20 text-white">
       
      </div>
    </div>
  );
}

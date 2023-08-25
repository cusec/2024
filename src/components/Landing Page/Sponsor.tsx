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
      <div className="bg-black bg-opacity-60 shadow mx-auto px-20 text-white">
        <h2 className="text-[28px] text-center font-semibold py-14 px-10">
          Sponsor CUSEC 2024
        </h2>

        <div className="relative max-w-md aspect-square mx-auto">
          <div className="absolute top-[-17px] right-[-18px] bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-full h-full scale-[95%]">
            {/* This div is for the background gradient */}
          </div>
          <BlueBorderSquareBox>
            <div className="p-24 aspect-square">Some content here</div>
          </BlueBorderSquareBox>
        </div>

        <p className="font-regular text-center pt-10 pb-6 max-w-sm mx-auto">
          Over the last 21 years, CUSEC has collaborated with an extensive array
          of industry leaders. These partnerships have helped make CUSEC
          possible while providing students invaluable opportunities to create
          lasting connections with seasoned professionals.
        </p>
      </div>
    </div>
  );
}

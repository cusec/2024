import Link from "next/link";
import { useState } from "react";
import { useFadeBackground } from "@/app/layout";
import FaqCard from "./FaqCard";

export default function Faq() {
  const fadeBackground = useFadeBackground();
  const [isCardClicked, setIsCardClicked] = useState(true);
  const toggleCardClicked = () => {
    setIsCardClicked(!isCardClicked);
  };

  return (
    <div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="min-h-screen bg-black bg-opacity-60 shadow text-white flex flex-col items-center px-8">
        <h2 className="text-[28px] text-center font-semibold py-14 px-10">
          Frequently Asked Questions
        </h2>
        <span className="w-[355px] h-[0.75px] bg-white mb-10"></span>

        <div>
          <FaqCard
            toggleCardClicked={toggleCardClicked}
            isCardClicked={isCardClicked}
            question="When & Where is CUSEC 2024 happening?"
            content={
              <>
                <p>
                  <em>When: </em> January 12, 13, and 14.
                </p>
                <p className="flex">
                  <span className="block">
                    <em>Where:&nbsp;</em>
                  </span>
                  <span className="block">
                    Hotel Bonaventure located in Downtown Montreal, QC.
                  </span>
                </p>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

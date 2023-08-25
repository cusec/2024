/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { useFadeBackground } from "@/app/layout";
import FaqCard from "./FaqCard";

export default function Faq() {
  const fadeBackground = useFadeBackground();

  return (
    <div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-black bg-opacity-60 shadow text-white px-8">
        <h2 className="text-[28px] text-center font-semibold py-14 px-10">
          Frequently Asked Questions
        </h2>
        <span className="block max-w-[600px] h-[0.75px] bg-white mb-10 mx-auto"></span>

        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <FaqCard
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
          <FaqCard
            question="Who can attend? Are there any costs?"
            content={<></>}
          />
          <FaqCard question="Where should I book rooms?" content={<></>} />
          <FaqCard
            question="Can I get a refund or resell my ticket?"
            content={<></>}
          />
        </div>

        <p className="text-center font-medium p-16">
          Don't see a question you're looking for? Send us an email at{" "}
          <Link
            href={"mailto:info@cusec.net"}
            className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot hover:text-blue-400 transition-colors ease-in-out duration-500"
          >
            info@cusec.net
          </Link>
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import decagon_1 from "/src/assets/decagon_1.svg";
import { useFadeBackground } from "@/app/layout";

export default function About() {
  const fadeBackground = useFadeBackground();
  return (

              <div
          className={`transition-opacity ease-in-out duration-[1500ms] ${
            fadeBackground ? "opacity-0" : "opacity-100"
          }`}
        >
      <section className="lg:max-w-[1024px] max-w-[768px] mx-12 mt-14 space-y-6">
        <p className="font-semibold text-[28px] ">Get To Know Us</p>
        <p className="font-regular text-[15px]">
          CUSEC is a student-led software engineering conference for students
          across Canada that has educated and inspired many for the last 21
          years. Founded in 2002 by tech enthusiasts, it offers diverse tech
          knowledge shared by speakers, a chance to network with sponsoring
          companies, and make lifelong friendships within a safe and comfortable
          space.
        </p>

        {/* <div className="decagon bg-gradient-to-tr from-royalPurple to-goldenApricot absolute top-0 left-0">40+ Speakers</div> */}

        <div
          className="relative border border-red-900 flex items-center justify-center w-100"
          style={{
            backgroundImage: `url(${decagon_1.src})`,
            backgroundSize: "cover",
            height: "200px", 
            width: "200px", 
          }}
          >
          <p className="font-semibold text-[24px]">
            400+
          </p>
          <br />
          <p className="font-medium text-[12px]">
          Attendees
          </p>
              </div>
              
      </section>
      </div>
  );
}

import decagon_gradient_1 from "@/assets/decagon_gradient_1.svg";
import decagon_gradient_2 from "@/assets/decagon_gradient_2.svg";
import decagon_gradient_3 from "@/assets/decagon_gradient_3.svg";
import decagon_gradient_4 from "@/assets/decagon_gradient_4.svg";
import large_decagon from "@/assets/large_decagon.svg";
import { useFadeBackground } from "@/app/layout";
import Decagon1 from "./Decagon1";
import Decagon2 from "./Decagon2";

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
      </section>

      <div className="flex flex-col justify-center items-center py-10 space-y-2">
        <section className="flex space-x-6">
          <Decagon1
            image={decagon_gradient_1}
            TitleText={"400+"}
            SubtitleText={"Attendees"}
          />
          <Decagon1
            image={decagon_gradient_2}
            TitleText={"40+"}
            SubtitleText={"Speakers"}
          />
        </section>
        <section className="flex items-center space-x-4">
          <Decagon1
            image={decagon_gradient_3}
            TitleText={"50+"}
            SubtitleText={"Sponsors"}
          />
          <Decagon2
            image={large_decagon}
            TitleText={"21"}
            SubtitleText={"Events"}
          />
          <Decagon1
            image={decagon_gradient_4}
            TitleText={"30+"}
            SubtitleText={"VIP Members"}
          />
        </section>
      </div>
    </div>
  );
}

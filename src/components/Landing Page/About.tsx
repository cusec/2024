import decagon_1 from "@/assets/decagon_1.svg";
import { useFadeBackground } from "@/app/layout";
import Decagon1 from "./Decagon1";

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
        
      <section className="flex">
        <Decagon1 image={decagon_1} TitleText={'400+'} SubtitleText={'Attendees'} />
        <Decagon1 image={decagon_1} TitleText={'40+'} SubtitleText={'Speakers'} />
        <Decagon1 image={decagon_1} TitleText={'50+'} SubtitleText={'Sponsors'} />
        <Decagon1 image={decagon_1} TitleText={'30+'} SubtitleText={'VIP Members'} />
      </section>
    </div>
  );
}

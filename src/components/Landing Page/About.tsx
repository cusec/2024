import decagon_gradient_1 from "@/assets/decagon_gradient_1.svg";
import decagon_gradient_2 from "@/assets/decagon_gradient_2.svg";
import decagon_gradient_3 from "@/assets/decagon_gradient_3.svg";
import decagon_gradient_4 from "@/assets/decagon_gradient_4.svg";
import large_decagon from "@/assets/large_decagon.svg";
import circle_grid_v1 from "@/assets/circle_grid_v1.svg";
import circle_grid_v2 from "@/assets/circle_grid_v2.svg";
import Image from "next/image";
import Decagon1 from "./Decagon1";
import Decagon2 from "./Decagon2";
import Link from "next/link";

export default function About() {
  return (
    <>

      {/* Vertical grid of grey circles */}
      <Image
        src={circle_grid_v1}
        alt="Vertical grid of grey circles"
        className="relative top-[70px] w-[40px] h-[80px] md:h-[120px] md:top-[80px] md:right-[40px] lg:top-[100px] lg:right-[40px] lg:h-[160px]"
      />
      <section className="lg:max-w-[1024px] max-w-[768px] space-y-6 pl-12 ">
        <p className="font-semibold text-[28px]">Get To Know Us</p>
        <p className="font-regular text-[15px]">
          CUSEC is a student-led software engineering conference for students
          across Canada that has educated and inspired many for the last 21
          years. Founded in 2002 by tech enthusiasts, it offers diverse tech
          knowledge shared by speakers, a chance to network with sponsoring
          companies, and make lifelong friendships within a safe and comfortable
          space.
        </p>
      </section>

      {/* Decagons */}
      <div className="flex flex-col justify-center items-center py-8 space-y-2">
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
          <div className="">
            <Decagon2
              image={large_decagon}
              TitleText={"21"}
              SubtitleText={"Events"}
            />
          </div>
          <Decagon1
            image={decagon_gradient_4}
            TitleText={"30+"}
            SubtitleText={"VIP Members"}
          />
        </section>
      </div>
      <div className="flex justify-center">
        <Link
          className={`drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-royalBlue hover:bg-goldenApricot mx-auto px-5 md:px-10 py-1 mt-3 md:mt-6 text-center rounded-full uppercase md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:text-white`}
          href={`/`}
        >
          Learn More
        </Link>
      </div>


      <span className="flex justify-end pb-8">
        <Image
          src={circle_grid_v2}
          alt="circle grid v2"
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] "
        />
      </span>
    </>
  );
}

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
        <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="mt-10 md:my-10">
        <h2 className="text-[28px] font-semibold tracking-tight">
          Attend Our 2024 Event
        </h2>
        <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-royalPurple to-roseQuartz tracking-tight">
          Pricing Plans
        </p>
      </div>

      <span className="flex justify-end mr-[-8px] mb-4">
        <Image
          src={circle_grid_horizontal}
          alt="Horizontal grid of grey circles"
          />
      </span>
          </div>

    <div className="mb-10 md:flex space-y-5 md:space-y-0 md:space-x-4 items-stretch">
  <div className="flex-1">
    <TicketCard
      title={"Basic"}
      description={"Learn, network, and grow with CUSEC"}
      studentPrice={80}
      professionalPrice={100}
      features={[
        "Social Events",
        "Networking Benefits",
        "Workshops & Talks hosted by sponsors",
      ]}
      buttonLink="/"
      themeColor="roseQuartz"
    />
  </div>
  <div className={`flex-1 `}>
    <TicketCard
      title={"VIP"}
      description={"Get an exclusive CUSEC experience"}
      studentPrice={110}
      professionalPrice={230}
      features={[
        "All Basic Benefits",
        "Priority Networking",
        "Exlusive CUSEC 2024 Merchandise",
      ]}
      buttonLink="/"
      themeColor="goldenApricot"
    />
  </div>
</div>


    </div>
  );
}

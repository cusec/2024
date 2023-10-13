import Image from "next/image";
import circle_grid_v2 from "@/assets/circle_grid_v2.svg";
import TicketCard from "./TicketCard";

export default function Sponsor() {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10 md:my-10">
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight">
            Attend Our 2024 Event
          </h2>
              <hr className="block max-w-[3rem] md:max-w-[4rem] h-2 bg-purple-500 mb-6 mt-1" />
          <p className="md:text-[24px] font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-royalPurple to-roseQuartz tracking-tight">
            Pricing Plans
          </p>
        </div>

        <span className="flex justify-end mr-[-8px] mb-4">
          <Image
            src={circle_grid_v2}
            alt="Horizontal grid of grey circles"
          />
        </span>
      </div>

      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="">
          <TicketCard
            title={"Basic"}
            description={"Learn, network, and grow with CUSEC"}
            studentPrice={80}
            professionalPrice={200}
            features={[
              "Social Events",
              "Networking Benefits",
              "Workshops & Talks hosted by sponsors",
            ]}
            buttonLink="https://www.youtube.com/watch?v=BBJa32lCaaY&ab_channel=LegacyPNDA"
            themeColor="roseQuartz"
          />
        </div>
        <div className="">
          <TicketCard
            title={"VIP"}
            description={"Get an exclusive CUSEC experience"}
            studentPrice={110}
            professionalPrice={230}
            features={[
              "All Basic Benefits",
              "Priority Networking",
              "Exclusive CUSEC 2024 Merchandise",
            ]}
            buttonLink="https://www.youtube.com/watch?v=BBJa32lCaaY&ab_channel=LegacyPNDA"
            themeColor="goldenApricot"
          />
        </div>
      </div>
      <span className="flex mb-4 ml-[-1rem]">
        <Image
          src={circle_grid_v2}
          alt="Horizontal grid of grey circles"
        />
      </span>
    </>
  );
}

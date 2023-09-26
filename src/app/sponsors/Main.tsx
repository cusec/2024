import Image from "next/image";
import cusec_2023_keynote_speaker from "./cusec_2023_keynote_speaker.png";

export default function Main(){
  return(
    
     <div className="relative min-h-[96vh] w-screen">
      <div
        className="absolute inset-0 mx-4"
      >
        <Image
          className="brightness-50"
          src={cusec_2023_keynote_speaker}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="CUSEC 2023 Group Photo"
        />
        <div className="absolute inset-0 z-1 flex justify-center items-center lg:mx-1">
          {/* Text */}
          <h1 className="uppercase text-center text-white font-semibold text-[24px] lg:text-[50px]">
            Help Spark inspiration{" "}<br className="lg:block" />
            <span className="text-purple-400">Become</span>
            {" "}
            <span className="text-roseQuartz">A</span>{" "}
            <span className="text-goldenApricot">Sponsor</span>
          </h1>
        </div>
      </div>
    </div>
  )  
}
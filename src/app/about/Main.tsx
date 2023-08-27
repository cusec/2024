import Image from "next/image";
import cusec_2023_group_photo from "./cusec_2023_group_photo.svg";

interface MainProps {
  isMediumScreen: boolean;
}

export default function Main({ isMediumScreen }: MainProps) {

  return (
    <div className="relative min-h-[96vh] w-[calc(100vw-10px)] translate-y-6 md:-translate-x-[1vw]">
      <svg width="0" height="0">
        <defs>
          <clipPath id="imageClip" clipPathUnits="objectBoundingBox">
            <path
              d="
               M .015 0 
               L 1 0 
               C 0.955 0.342 
               0.897 0.902 
               0.467 0.902 
               L 0.015 0.9 
               Z
                "
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute inset-0 lg:mx-1"
        style={{
          clipPath: isMediumScreen ? "url(#imageClip)" : "none",
          WebkitClipPath: isMediumScreen ? "url(#imageClip)" : "none", // for Safari
        }}
      >
        <Image
          className="brightness-50"
          src={cusec_2023_group_photo}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="CUSEC 2023 Group Photo"
        />
        <div className="absolute inset-0 z-1 flex justify-center items-center lg:mx-1">
          {/* Text */}
          <h1 className="uppercase text-white font-semibold text-[24px] ml-10 sm:mr-24 lg:ml-24 lg:mr-52 lg:text-[50px]">
            Fueling a journey of{" "}
            <span className="text-purple-400">knowledge</span>,
            <br className="hidden lg:block" />{" "}
            <span className="text-roseQuartz">inspiration</span>, &{" "}
            <span className="text-goldenApricot">opportunity</span> for students{" "}
            <br className="hidden lg:block" />
            across Canada
          </h1>
        </div>
      </div>
    </div>
  );
}

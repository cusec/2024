import Image from "next/image";
import cusec_2023_group_photo from "./cusec_2023_group_photo.svg";
import grid_gradient_fill_lines from "./grid_gradient_fill_lines.svg";

interface MainProps {
  isMediumScreen: boolean;
}

export default function Main({ isMediumScreen }: MainProps) {

  console.log("isMediumScreen inside Main:", isMediumScreen);

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

      {/* Image */}
      <div
        className="absolute inset-0 lg:mx-1"
        style={{
          clipPath: isMediumScreen ? "url(#imageClip)" : "none",
          WebkitClipPath: isMediumScreen ? "url(#imageClip)" : "none", // for Safari
        }}
      >
        <Image
          src={cusec_2023_group_photo}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="CUSEC 2023 Group Photo"
        />
      </div>

      {/* Tint */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70 z-1 flex justify-center items-center lg:mx-1"
        style={{
          clipPath: isMediumScreen ? "url(#imageClip)" : "none",
          WebkitClipPath: isMediumScreen ? "url(#imageClip)" : "none", // for Safari
        }}
      >
        {/* Text */}
        <h1 className="uppercase text-white font-semibold text-[24px] mx-6 lg:ml-24 lg:mr-52 lg:text-[50px]">
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
  );
}

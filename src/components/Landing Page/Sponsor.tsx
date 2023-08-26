import BlueBorderSquareBox from "./BlueBorderSquareBox";
import Link from "next/link";

export default function Sponsor() {
  return (
    <>
      <div className="bg-black bg-opacity-60 shadow mx-auto px-5 sm:px-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 py-14 md:py-32 max-w-6xl mx-auto">
          <h2 className="text-center text-[28px] font-semibold pb-10 block md:hidden">
            Sponsor CUSEC 2024
          </h2>
          <div className="mx-4 md:mx-0">
            <div className="relative max-w-md aspect-square mx-auto w-full">
              <div className="absolute max-w-md aspect-square top-[-17px] right-[-18px] bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-full h-full scale-[95%]">
                {/* This div is for the background gradient */}
              </div>
              <BlueBorderSquareBox>
                <div className="aspect-square">Some content here</div>
              </BlueBorderSquareBox>
            </div>
          </div>

          <div className="md:text-right mx-auto md:pl-10">
            <h2 className="text-[28px] md:text-[40px] font-semibold hidden md:block">
              Sponsor CUSEC 2024
            </h2>
            <p className="md:text-[20px] font-regular pt-10 pb-6">
              Over the last 21 years, CUSEC has collaborated with an extensive
              array of industry leaders. These partnerships have helped make
              CUSEC possible while providing students invaluable opportunities
              to create lasting connections with seasoned professionals.
            </p>
            <div className="text-center md:text-right">
              <Link
                href={"/"}
                className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#AD65E3] px-3 min-[390px]:px-5 md:px-20 py-3 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-goldenApricot hover:text-white"
              >
                Learn&nbsp;More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

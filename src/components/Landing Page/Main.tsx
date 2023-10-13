import Image from "next/image";
import Link from "next/link";
import logoPrimaryDark from "src/assets/logo-primary-dark.svg";
import greyEllipse from "src/assets/grey-ellipse.svg";
import BlueBorderSquareBox from "./BlueBorderSquareBox";

const Landingbox = () => {
  return (
    <main className="">
      <BlueBorderSquareBox>
        <section className="py-8 px-8 text-center space-y-5 flex flex-col justify-center items-center">
          <Image
            src={logoPrimaryDark}
            alt="CUSEC 2024 logo primary dark"
            layout="responsive"
            className="max-w-lg mx-auto"
            priority
          />
          <p className="font-semibold text-[18px] leading-[25px] tracking-wider">
            Canadian University Software Engineering Conference
          </p>
          <p className="text-[15px] text-[#615757]">
            January 12-24
            <Image
              src={greyEllipse}
              alt="Grey Ellipse Icon"
              className="inline-block mx-3"
            ></Image>
            Montreal, QC
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
            <a
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSekk6WN5YEMg-tRza9SbMTIar_mHFEUQ9jjLIgw8eF3YNmIog/viewform"
              }
              target="_blank"
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#AD65E3] px-3 min-[390px]:px-5 md:px-20 py-3 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-goldenApricot hover:text-white"
            >
              Become a Speaker
            </a>
            <a
              href="mailto:sponsor@cusec.net?subject=CUSEC 2024 Sponsorship Information Request"
              className="md:hidden block text-royalBlue font-semibold underline underline-offset-2 decoration-2"
            >
              Interested in Sponsoring?
            </a>
            <a
              href="mailto:sponsor@cusec.net"
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hidden md:inline bg-[#FDF3FF] border-2 border-royalBlue ml-9 px-[85px] py-3 text-center rounded-full uppercase text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-royalBlue hover:text-white "
            >
              Sponsor
            </a>
          </div>
        </section>
      </BlueBorderSquareBox>
    </main>
  );
};

export default Landingbox;

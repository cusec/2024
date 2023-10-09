import Image from "next/image";
import circle_grid_v1 from "@/assets/circle_grid_v1.svg";
import circle_grid_v2 from "@/assets/circle_grid_v2.svg";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";

export default function CusecSponsors() {
  return (
    <div className="relative">
      <div className="absolute -right-[6vw] -bottom-28 hidden md:block">
        <Image
          src={circle_grid_v2}
          alt="Horizontal grid of grey circles"
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
          priority
        />
      </div>
      <section className="lg:max-w-[1024px] max-w-[768px] px-6 md:px-12 ">
        <p className="font-semibold text-[28px] md:text-[40px] tracking-tight">
          CUSEC Sponsors
        </p>
        <hr className="block max-w-[2.5rem] md:max-w-[3.75rem] h-2 bg-roseQuartz mb-10" />
        <p className="font-regular text-[15px] md:text-[20px]">
          Each year our sponsors play a crucial role in making CUSEC an exciting
          and enriching experience for tech-savvy students. Their generous
          support fuels the conference&apos;s activities and enhances the
          overall atmosphere for students and professionals to connect, learn,
          and explore new horizons in software engineering. Our sponsors are
          essential in keeping the conference dynamic and full of opportunities,
          ensuring that CUSEC continues to be a must-attend event for those
          passionate about technology and innovation.
        </p>
      </section>

      <Image
        src={circle_grid_v1}
        alt="Vertical grid of grey circles"
        className="absolute -top-0 -left-10 scale-125 w-[40px] h-[80px] md:h-[120px] md:top-[80px] md:right-[40px] lg:-top-[20px] lg:right-[40px] lg:h-[160px]"
      />
      <div className="flex justify-end mt-6 translate-x-3 md:hidden">
        <Image src={circle_grid_v2} alt="Horizontal grid of grey circles" />
      </div>

      <div className="relative mx-auto w-full">
        {/* This div is for the background gradient */}
        <div className="absolute top-[-17px] right-[-18px] bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-full h-full scale-[95%]"></div>
        <BlueBorderSquareBox>
  
            <Image
            src = {"/images/sponsor logos/accenture_logo.svg"}
            alt="Accenture Logo"
            height={100}
            width={100}
            />

        </BlueBorderSquareBox>
      </div>
    </div>
  );
}

import Image from "next/image";

type Props = {
  BackgroundImage: { src: string };
  IconImage: { src: string };
  TitleText: string;
  SubtitleText: string;
};

export default function WhyJoinDecagon({
  BackgroundImage,
  IconImage,
  TitleText,
  SubtitleText,
}: Props) {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${BackgroundImage.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}

      // This approach breaks responsiveness of the Swiper component, but the background image fills the entire slide.
      // className="relative flex flex-col justify-center items-center w-[250px] h-[270px] md:w-[420px] md:h-[450px]"

      // This approach doesn't break responsiveness of the Swiper component, but the background image doesn't fill the entire slide.
      className="relative flex flex-col justify-center items-center"
    >
      {/* Doing the following covers up the content */}
      {/* <Image src={BackgroundImage.src} alt="Background" fill={true} /> */}

      {/* <p className="text-[24px] md:text-[40px] text-white font-semibold tracking-tight text-center">
        {TitleText}
      </p>
      <Image
        src={IconImage.src}
        alt="Icon"
        width={50}
        height={50}
        className="w-[100px] h-[100px] md:w-[165px] md:h-[165px]"
      />
      <p className="text-[16px] md:text-[20px] text-white font-medium text-center max-w-[159px] md:max-w-[266px]">
        {SubtitleText}
      </p> */}


      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage.src}
          alt="Background"
          fill={true}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center">
        <p className="text-[24px] md:text-[40px] text-white font-semibold tracking-tight text-center">
          {TitleText}
        </p>
        <Image
          src={IconImage.src}
          alt="Icon"
          width={50}
          height={50}
          className="w-[100px] h-[100px] md:w-[165px] md:h-[165px]"
        />
        <p className="text-[16px] md:text-[20px] text-white font-medium text-center max-w-[159px] md:max-w-[266px]">
          {SubtitleText}
        </p>
      </div>
    </div>
  );
}

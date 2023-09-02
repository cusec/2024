import Image from "next/image";

type Props = {
  BackgroundImage: { src: string };
  IconImage: { src: string };
  //   AltText: string;
  TitleText: string;
  SubtitleText: string;
};

export default function WhyJoinDecagon({
  BackgroundImage,
  IconImage,
  //   AltText,
  TitleText,
  SubtitleText,
}: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center justify-center w-[250px] h-[270px]"
    >
      <p className="text-[24px] md:text-[40px] text-white font-semibold tracking-tight text-center">
        {TitleText}
      </p>
      <Image
        src={IconImage.src}
        alt="Icon"
        width={50}
        height={50}
        className="w-[100px] h-[100px]"
      />{" "}
      <p className="text-[16px] md:text-[20px] text-white font-medium text-center max-w-[159px]">
        {SubtitleText}
      </p>
    </div>
  );
}

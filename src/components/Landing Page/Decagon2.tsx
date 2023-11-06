import CountUp from 'react-countup';

type Decagon2Props = {
  image: {src: string};
  TitleText: string;
  SubtitleText: string;
  countUpDelay?: number;
};

export default function Decagon2({ image, TitleText, SubtitleText, countUpDelay}:Decagon2Props) {
    
    // Didn't pursue the route of using a CSS-generated decagon because it just didn't look the same as the design, and it was also a pain to get it to be responsive.
    {/* <article className="decagon bg-gradient-to-tr from-royalPurple to-goldenApricot flex items-center justify-center">
      <div>
      40+ Speakers
      </div>
    </article> */}

  return (
      <article
        className="flex items-center justify-center h-[100px] w-[90px] min-[390px]:h-[145px] min-[390px]:w-[130px] md:h-[250px] md:w-[230px] pb-2"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <p className="font-semibold text-[30px] min-[390px]:text-[40px] md:text-[80px] tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot">
          {<CountUp end={parseInt(TitleText)} delay={countUpDelay} duration={4} enableScrollSpy scrollSpyOnce/>}+
          </p>
          <p className="font-regular text-[10px] min-[390px]:text-[12px] md:text-[24px] tracking-tight text-center text-white">
            {SubtitleText}
          </p>
        </div>
      </article>

    );
}

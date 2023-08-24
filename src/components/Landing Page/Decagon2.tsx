import React from "react";

type Decagon1Props = {
  image: {src: string};
  TitleText: string;
  SubtitleText: string;
};

export default function Decagon1({ image, TitleText, SubtitleText}:Decagon1Props) {
    
    // Didn't pursue the route of using a CSS-generated decagon because it just didn't look the same as the design, and it was also a pain to get it to be responsive.
    {/* <article className="decagon bg-gradient-to-tr from-royalPurple to-goldenApricot flex items-center justify-center">
      <div>
      40+ Speakers
      </div>
    </article> */}

  return (
      <article
        className="relative flex items-center justify-center h-[135px] w-[125px] md:h-[225px] md:w-[212px] pb-2"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <p className="font-semibold text-[40px] md:text-[50px] tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot">
          { TitleText}
          </p>
          <p className="font-regular text-[12px] md:text-[19px] tracking-tight text-center text-white">
            {SubtitleText}
          </p>
        </div>
      </article>

    );
}

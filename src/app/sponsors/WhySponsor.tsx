
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";

// import "swiper/css";
import "swiper/css/bundle";

import WhyJoinDecagon from "../about/WhyJoinDecagon";
import learn_decagon from "@/components/About Us/Carousel Images/learn_decagon.svg";
import influence_icon from "./influence_icon.svg";
import connect_decagon from "@/components/About Us/Carousel Images/connect_decagon.svg";
import recruit_icon from "./recruit_icon.svg";
import discover_decagon from "@/components/About Us/Carousel Images/discover_decagon.svg";
import promote_icon from "./promote_icon.svg";


import { useState, useEffect } from "react";

export default function WhyJoin() {
  const [stretchValue, setStretchValue] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      setStretchValue(window.innerWidth > 1024 ? 300 : 100);
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col items-center">
      <h2 className="flex items-center font-semibold text-[28px] md:text-[40px] tracking-tight mb-16">
        <hr className="block w-2 h-10 bg-orange-300 mr-4" />
        Why Sponsor?
      </h2>


        <div className="flex flex-col items-center">
          <div className="max-w-screen-lg md:max-w-screen-2xl">
      {/* Decagon Carousel*/}
      <div className="w-full h-[270px] md:h-[450px]">
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard, EffectCoverflow]}
          slidesPerView={2}
          initialSlide={1}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: stretchValue,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          keyboard={true}
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <WhyJoinDecagon
                BackgroundImage={learn_decagon}
                IconImage={influence_icon}
                TitleText="Influence"
                SubtitleText="through your leadership"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <WhyJoinDecagon
                BackgroundImage={connect_decagon}
                IconImage={recruit_icon}
                TitleText="Recruit"
                SubtitleText="top tech talent"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <WhyJoinDecagon
                BackgroundImage={discover_decagon}
                IconImage={promote_icon}
                TitleText="Promote"
                SubtitleText="your next big idea"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
          </div>
    </section>
  );
}

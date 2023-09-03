import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard, EffectCoverflow} from "swiper/modules";

// import "swiper/css";
import "swiper/css/bundle";

import WhyJoinDecagon from "./WhyJoinDecagon";
import connect_decagon from "./Carousel Images/connect_decagon.svg";
import connect_icon from "./Carousel Images/connect_icon.svg";

export default function WhyJoin() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="flex items-center font-semibold text-[28px] md:text-[40px] tracking-tight">
        <hr className="block w-2 h-10 bg-orange-300 mr-4" />
        Why Join?
      </h2>

      {/* Image Carousel */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard, EffectCoverflow]}
        // spaceBetween={5}
        initialSlide={1}
        speed={1000}
        slidesPerView={"auto"}
        // slidesPerView={1}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          // slideShadows: true,
        }}

        className="w-50 h-50"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <WhyJoinDecagon
              BackgroundImage={connect_decagon}
              IconImage={connect_icon}
              TitleText="Connect"
              SubtitleText="with like-minded individuals"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <WhyJoinDecagon
              BackgroundImage={connect_decagon}
              IconImage={connect_icon}
              TitleText="Connect"
              SubtitleText="with like-minded individuals"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <WhyJoinDecagon
              BackgroundImage={connect_decagon}
              IconImage={connect_icon}
              TitleText="Connect"
              SubtitleText="with like-minded individuals"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex flex-col items-center">
        <p className="md:text-[24px]">
          Be a part of our 2024 event this January!
        </p>
        <p className="font-semibold text-[20px] md:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot w-fit">
          Register Now⬇
        </p>
        <Link
          className={`drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-royalBlue hover:bg-goldenApricot mx-auto px-5 md:px-10 py-1 mt-3 md:mt-6 text-center rounded-full uppercase md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:text-white`}
          href={`/`}
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
}

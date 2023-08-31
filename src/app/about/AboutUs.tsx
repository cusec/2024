import Image from "next/image";
import circle_grid_v1 from "@/assets/circle_grid_v1.svg";
import circle_grid_v2 from "@/assets/circle_grid_v2.svg";
import carousel_image_1 from "./Carousel Images/carousel_image_1.png";
import carousel_image_2 from "./Carousel Images/carousel_image_2.png";
import carousel_image_3 from "./Carousel Images/carousel_image_3.png";
import carousel_image_4 from "./Carousel Images/carousel_image_4.png";
import carousel_image_5 from "./Carousel Images/carousel_image_5.png";
import carousel_image_6 from "./Carousel Images/carousel_image_6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
  Keyboard,
} from "swiper/modules";

// import "swiper/css";
import "swiper/css/bundle";

export default function AboutUs() {
  return (
    <div className="relative">
      <div className="absolute -right-[0vw] -top-10 hidden md:block">
        <Image
          src={circle_grid_v2}
          alt="Horizontal grid of grey circles"
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] "
          priority
        />
      </div>
      <section className="lg:max-w-[1024px] max-w-[768px] space-y-6 px-6 md:px-12 ">
        <p className="font-semibold text-[28px] md:text-[40px] tracking-tight">
          About Us
        </p>
        <p className="font-regular text-[15px] md:text-[20px]">
          CUSEC is an annual software engineering conference organized by
          students for students across Canada. A small team of tech enthusiasts
          founded CUSEC in 2002 on a mission to educate, inspire, and expose
          students to a diverse range of areas in software engineering and
          computer science.
        </p>

        <p className="font-regular text-[15px] md:text-[20px]">
          These set of values have been integrated into CUSEC for the last 21
          years while enabling attendees to discover knowledgeable speakers,
          connect with sponsoring companies, and make lifelong friends in a safe
          and comfortable space.
        </p>
      </section>
      <Image
        src={circle_grid_v1}
        alt="Vertical grid of grey circles"
        className="hidden md:block absolute bottom-0 -left-10 scale-125 w-[40px] h-[80px] md:h-[120px] md:top-[80px] md:right-[40px] lg:top-[100px] lg:right-[40px] lg:h-[160px]"
      />
      <div className="flex justify-end mt-6 translate-x-3 md:hidden">
        <Image src={circle_grid_v2} alt="Horizontal grid of grey circles" />
      </div>

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFlip,
          Keyboard,
        ]}
        spaceBetween={10}
        speed={1000}
        slidesPerView={"auto"}
        grabCursor={true}
        loop={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
        // className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
        className="mx-auto my-10"
      >
        <SwiperSlide>
          <Image src={carousel_image_1} alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel_image_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel_image_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel_image_4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

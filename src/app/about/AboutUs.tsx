import Image from "next/image";
import circle_grid_v1 from "@/assets/circle_grid_v1.svg";
import circle_grid_v2 from "@/assets/circle_grid_v2.svg";
import carousel_image_1 from "@/components/About Us/Carousel Images/carousel_image_1.png";
import carousel_image_2 from "@/components/About Us/Carousel Images/carousel_image_2.png";
import carousel_image_3 from "@/components/About Us/Carousel Images/carousel_image_3.png";
import carousel_image_4 from "@/components/About Us/Carousel Images/carousel_image_4.png";
import carousel_image_5 from "@/components/About Us/Carousel Images/carousel_image_5.png";
import carousel_image_6 from "@/components/About Us/Carousel Images/carousel_image_6.png";
import {motion} from "framer-motion";

const animateInConfigText = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

const animateInConfigCarousel = {
  initial: { opacity: 0, scale: 0.8},
  whileInView: { opacity: 1, scale: 1},
  viewport: { once: true },
};

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.1,
});

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
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

      <div
        className="bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot px-2 py-3 mt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        style={{
          boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Image Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
          spaceBetween={5}
          speed={1000}
          slidesPerView={"auto"}
          // slidesPerView={2}
          grabCursor={true}
          loop={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center lg:block">
              <Image
                src={carousel_image_1}
                alt="People seated watching keynote speech"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center lg:block">
              <Image
                src={carousel_image_2}
                alt="CUSEC 2023 team holding up banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center lg:block">
              <Image src={carousel_image_3} alt="People playing board games" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center lg:block">
              <Image src={carousel_image_4} alt="People during a workshop" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center lg:block">
              <Image src={carousel_image_5} alt="Attendees under chandelier" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center lg:block">
              <Image src={carousel_image_6} alt="People playing card games" />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-20"
        >
          <SwiperSlide className="border border-black">Slide 1</SwiperSlide>
          <SwiperSlide className="border border-black">Slide 2</SwiperSlide>
          <SwiperSlide className="border border-black">Slide 3</SwiperSlide>
          <SwiperSlide className="border border-black">Slide 4</SwiperSlide>
          <SwiperSlide className="border border-black">Slide 5</SwiperSlide>
          <SwiperSlide className="border border-black">Slide 6</SwiperSlide>
          <SwiperSlide className="border border-black">Slide 7</SwiperSlide>
          <SwiperSlide className="border border-black">Slide 8</SwiperSlide>
          <SwiperSlide className="border border-black">Slide 9</SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
}

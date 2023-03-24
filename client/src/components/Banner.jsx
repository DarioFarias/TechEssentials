import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="flex relative w-screen h-72  justify-center"
    >
      <SwiperSlide>
        <img
          className=" object-contain h-full w-full  h-72  transition duration-700 "
          src="/swp1.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className=" object-contain h-full w-full  transition duration-700 "
          src="/swp2.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className=" object-contain h-full w-full  transition duration-700 "
          src="/swp3.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className=" object-contain h-full w-full  transition duration-700 "
          src="/swp4.svg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

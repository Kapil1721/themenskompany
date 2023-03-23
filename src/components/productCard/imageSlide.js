import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { PDC_IMAGE } from "../../constants/path-constant";

export default function ImageSlide({ image }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop
      >
        {image.map((e, i) => (
          <SwiperSlide
            style={{ borderRadius: "10px", overflow: "hidden" }}
            key={i}
          >
            <img src={PDC_IMAGE + e.image} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

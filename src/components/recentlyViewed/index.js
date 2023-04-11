import { Col, Row } from "antd";
import React from "react";
import ProductCard from "../../components/productCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation } from "swiper";

const Index = () => {
  let recentitem = JSON.parse(localStorage.getItem("__x77yy"));

  return (
    <>
      <Row justify="start" style={{ marginBottom: "2.4rem" }}>
        <Col>
          <div className="lasd">Recently Viewed</div>
        </Col>
      </Row>

      <Swiper
        slidesPerView={5}
        spaceBetween={40}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper fliip"
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1900: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {recentitem !== null &&
          recentitem?.reverse().map((items, index) => (
            <SwiperSlide key={index}>
              <ProductCard data={items} textCls="psmall_size" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Index;

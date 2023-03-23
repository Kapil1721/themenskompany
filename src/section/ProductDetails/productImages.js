import { Col, Row } from "antd";
import React from "react";

import InnerImageZoom from "react-inner-image-zoom";

import Holder from "../productCustomise/holder";

import { PDC_IMAGE } from "../../constants/path-constant";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

const ProductImages = ({
  customise,
  setCustomise,
  setStyleCustomise,
  state,
  productCustomization,
}) => {
  return (
    <Row gutter={[10, 10]} justify="start">
      {!customise ? (
        <>
          {state.map((e) => (
            <Col xxl={12} xl={12} lg={12} md={12} key={e.id}>
              <InnerImageZoom
                className="lkksdlas"
                zoomType={"hover"}
                zoomScale={0.7}
                src={PDC_IMAGE + e.image}
                zoomSrc={PDC_IMAGE + e.image}
                alt="shirt"
              />
            </Col>
          ))}
          <Col sm={24}>
            <Swiper
              loop
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper dsadasdsa"
              style={{
                userSelect: "none",
                webkitUserSelect: "none",
                khtmlUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                oUserSelect: "none",
              }}
            >
              {state.map((slider) => (
                <SwiperSlide key={slider.id}>
                  <img src={PDC_IMAGE + slider.image} alt="banner images" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </>
      ) : (
        <Col span={24}>
          <Holder
            setCustomise={setCustomise}
            setStyleCustomise={setStyleCustomise}
            productCustomization={productCustomization}
          />
        </Col>
      )}
    </Row>
  );
};

export default ProductImages;

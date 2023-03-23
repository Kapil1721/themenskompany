import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

export default function Testmonial() {
  return (
    <>
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
        className="mySwiper"
        style={{
          backgroundColor: "#F2F2F2",
          height: "100%",
          userSelect: "none",
          webkitUserSelect: "none",
          khtmlUserSelect: "none",
          mozUserSelect: "none",
          msUserSelect: "none",
          oUserSelect: "none",
        }}
      >
        {silderData.map((slider) => (
          <SwiperSlide className="woodod" key={slider.id}>
            <div
              className="testmonial"
              dangerouslySetInnerHTML={{ __html: slider.text }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const silderData = [
  {
    id: 1,
    text: "<p>If you want to give your male connections stylish clothes,<br> then The Men’s Kompany is the best place. Their special customization<br> is just awesome. </p>",
  },
  {
    id: 2,
    text: "<p>Last month I ordered a kurta and trousers from The Men’s Kompany <br>on one of my friend’s recommendations, and now <br>they are the best piece I own.</p>",
  },
  {
    id: 3,
    text: "<p>The Men’s Kompany offers the best formal and casual shirts.<br> I ordered linen and striped shirts,<br> and they turned out to be the best in my wardrobe.</p>",
  },
];

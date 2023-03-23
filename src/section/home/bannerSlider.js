import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { STATIC_DATA } from "../../constants/path-constant";

const silderData = [
  {
    id: 1,
    navigateTo: "#",
    imgUrl: "Banner-1.webp",
  },
  {
    id: 2,
    navigateTo: "#",
    imgUrl: "Banner-2.webp",
  },
  {
    id: 3,
    navigateTo: "#",
    imgUrl: "Banner-3.webp",
  },
  {
    id: 4,
    navigateTo: "#",
    imgUrl: "Banner-4.webp",
  },
  {
    id: 5,
    navigateTo: "#",
    imgUrl: "Banner-5.webp",
  },
];

const mobileSlider = [
  {
    id: 1,
    navigateTo: "#",
    imgUrl: "Mbanner1.webp",
  },
  {
    id: 2,
    navigateTo: "#",
    imgUrl: "Mbanner2.webp",
  },
  {
    id: 3,
    navigateTo: "#",
    imgUrl: "Mbanner3.webp",
  },
  {
    id: 4,
    navigateTo: "#",
    imgUrl: "Mbanner4.webp",
  },
  {
    id: 5,
    navigateTo: "#",
    imgUrl: "Mbanner5.webp",
  },
];

export default function SwiperSlider() {
  const [loaded, setLoaded] = React.useState(false);

  let screenWidth = window.screen.width;

  return (
    <>
      <Swiper
        loop
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
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        style={{
          userSelect: "none",
          webkitUserSelect: "none",
          khtmlUserSelect: "none",
          mozUserSelect: "none",
          msUserSelect: "none",
          oUserSelect: "none",
        }}
      >
        {(screenWidth < 1000 ? mobileSlider : silderData).map((slider) => (
          <SwiperSlide key={slider.id}>
            <img
              width="100%"
              height="100%"
              onLoad={() => setLoaded(true)}
              loading="eager"
              src={
                loaded
                  ? STATIC_DATA + slider.imgUrl
                  : screenWidth < 1000
                  ? "/images/bkujsi.webp"
                  : "/images/stt.webp"
              }
              alt={"banner images" + slider.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

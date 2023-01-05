import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./project.scss";
import "swiper/css";

export const ProjectComponent = () => {
  return (
    <div className="projects container">
      <div className="title text-center">
        <label>Portfolio</label>
        <h2>My Masterpieces Collection</h2>
        <p className="subtext">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "assets/cartoon_1.png"} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "assets/thumb.png"} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "assets/cartoon_2.png"} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "assets/thumb.png"} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "assets/cartoon_1.png"} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "assets/thumb.png"} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "assets/thumb.png"} alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

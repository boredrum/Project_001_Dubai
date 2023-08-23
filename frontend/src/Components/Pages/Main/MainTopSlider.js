import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import MainTopSliderNavBtns from "./MainTopSlider/MainTopSliderNavBtns";
import BookConsultaion from "../../BookConsultation";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import swiperImageSlide1 from "../../../Pictures/main_topSlider_image1.png";
import swiperImageSlide2 from "../../../Pictures/main_topSlider_image2.jpg";
import swiperImageSlide3 from "../../../Pictures/main_topSlider_image3.jpg";

const paginatorTxt = [
  { text: "Lorem Ipsum Dolorem apset" },
  { text: "Lorem Ipsum Dolorem apset" },
  { text: "Lorem Ipsum Dolorem apset" },
];

function MainTopSlider() {
  const [isBookConsultOpen, setIsBookConsultOpen] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        "<span class=\"" +
				className +
				"\">" +
				"<h2>" +
				"0" +
				(index + 1) +
				"</h2>" +
				"<h3>" +
				paginatorTxt[index].text +
				"</h3>" +
				"</span>"
      );
    },
  };
  return (
    <div id="main_slides_topSlider">
      <Swiper
        className="main_slides_topSlider_swiper"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        loop={true}
      >
        <SwiperSlide>
          <img src={swiperImageSlide1} alt="Dubai day view" />
          <div className="main_slides_topSlider_swiper_slide_links"></div>
          <div className="main_slides_topSlider_swiper_slide_main">
            <div className="main_slides_topSlider_swiper_slide_main_rectangle"></div>
            <h3>Lorem ipsum</h3>
            <h1>
							Welcome home <span>to</span> luxury
            </h1>
            <button className="main_slides_topSlider_swiper_slide_consult" onClick={() => setIsBookConsultOpen(true)}>
							Book a consultation
            </button>
          </div>
          <MainTopSliderNavBtns />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImageSlide2} alt="Dubai day view" />
          <div className="main_slides_topSlider_swiper_slide_links"></div>
          <div className="main_slides_topSlider_swiper_slide_main">
            <div className="main_slides_topSlider_swiper_slide_main_rectangle"></div>
            <h3>Lorem ipsum</h3>
            <h1>
							Welcome home <span>to</span> luxury
            </h1>
            <button className="main_slides_topSlider_swiper_slide_consult" onClick={() => setIsBookConsultOpen(true)}>
							Book a consultation
            </button>
          </div>
          <MainTopSliderNavBtns />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImageSlide3} alt="Dubai night view" />
          <div className="main_slides_topSlider_swiper_slide_links"></div>
          <div className="main_slides_topSlider_swiper_slide_main">
            <div className="main_slides_topSlider_swiper_slide_main_rectangle"></div>
            <h3>Lorem ipsum</h3>
            <h1>
							Welcome home <span>to</span> luxury
            </h1>
            <button className="main_slides_topSlider_swiper_slide_consult" onClick={() => setIsBookConsultOpen(true)}>
							Book a consultation
            </button>
          </div>
          <MainTopSliderNavBtns />
        </SwiperSlide>
      </Swiper>
      {isBookConsultOpen && (
        <BookConsultaion setIsBookConsultOpen={setIsBookConsultOpen} />
      )}
    </div>
  );
}

export default MainTopSlider;
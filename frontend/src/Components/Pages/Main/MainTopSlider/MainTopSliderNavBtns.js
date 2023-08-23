import React from "react";
import { useSwiper } from "swiper/react";

function MainTopSliderNavBtns() {
  const swiper = useSwiper();
  return (
    <div className="main_slides_topSlider_swiper_navBtns">
      <button className="main_slides_topSlider_swiper_navBtns_prev" onClick={() => swiper.slidePrev()}>PREV</button>
      <button className="main_slides_topSlider_swiper_navBtns_next"  onClick={() => swiper.slideNext()}>NEXT</button>
    </div>
  );
}

export default MainTopSliderNavBtns;

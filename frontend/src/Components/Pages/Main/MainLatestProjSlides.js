import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  A11y,
} from "swiper/modules";
import { getMainProjSlidesDatas } from "../../actions/MainSlidesData";
import MainProjSlidesDataContainer from "./MainProjSlides/MainProjSlidesDataContainer";

function MainLatestProjSlides() {
  const dispatch = useDispatch();
  const mainProjSlidesDatas = useSelector(
    (state) => state.mainDatas.projSlidesMainItems,
  );

  const [swiperWidth, setSwiperWidth] = useState(1800);
  const [swiperMargin, setSwiperMargin] = useState(30);

  useEffect(() => {
    dispatch(getMainProjSlidesDatas());
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        "<span class=\"" +
				className +
				"\">" +
				"<h2>" +
				"0" +
				(index + 3) +
				"</h2>" +
				"</span>"
      );
    },
  };

  const breakPointTablet = 768;
  const breakPointPhone = 320;

  useEffect(()=>{
    if (window.innerWidth <= breakPointPhone){
      setSwiperWidth(288);
      setSwiperMargin(7);
    } else if(window.innerWidth <= breakPointTablet){
      setSwiperWidth(691);
      setSwiperMargin(10);
    } else {
      setSwiperWidth(1800);
      setSwiperMargin(30);
    }
  }, []);
  

  return (
    <div id="main_slides_proj">
      <div className="main_slides_proj_header">
        <h2>Latest projects</h2>
        <nav>
          <div>
            <p>All</p>
          </div>
          <div>
            <p>Building</p>
          </div>
          <div>
            <p>Interior</p>
          </div>
          <div>
            <p className="main_slides_proj_header_italic">View all projects</p>
          </div>
        </nav>
      </div>
      <div className="main_slides_proj_slider">
        <Swiper
          className="main_slides_proj_slider_swiper"
          modules={[Pagination, A11y, Autoplay]}
          width={swiperWidth}
          spaceBetween={swiperMargin}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={true}
          pagination={{ pagination }}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          initialSlide={0}
        >
          {mainProjSlidesDatas.map((data) => {
            return (
              <SwiperSlide
                key={data._id}
                className="main_slides_proj_slider_swiper_slide"
              >
                {" "}
                <MainProjSlidesDataContainer data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default MainLatestProjSlides;

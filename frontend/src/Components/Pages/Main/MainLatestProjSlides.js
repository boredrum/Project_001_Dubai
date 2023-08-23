import React, { useEffect } from "react";
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
          width={1800}
          spaceBetween={30}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={true}
          pagination={{ pagination }}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
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
          {/* <SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default MainLatestProjSlides;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCarouselDatas } from "../../actions/CategoryData";
import CategoryInfoCarouselItem from "./data/CategoryInfoCarouselItem";

function CategoryInfoCarousel() {
  const dispatch = useDispatch();
  const categoryCarouselDatas = useSelector(
    (state) => state.categoryDatas.carouselCategoryItems,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const blocksPerPage = 4;
  const lastIndex = currentPage * blocksPerPage;
  const firstIndex = lastIndex - blocksPerPage;
  const records = categoryCarouselDatas.slice(firstIndex, lastIndex);
  const npage = Math.ceil(categoryCarouselDatas.length / blocksPerPage); // Total pages

  let timeoutID;

  const prePage = function () {
    clearTimeout(timeoutID);
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(npage);
    }
  };

  const nextPage = function () {
    clearTimeout(timeoutID);
    if (currentPage !== npage) {
      setCurrentPage(+currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const maxVisiblePages = 6; // How many pages we want to see at the same time
  const pageNumbers = [];

  const getPageNumbers = () => {
    if (npage <= maxVisiblePages) {
      for (let i = 1; i <= npage; i++) {
        pageNumbers.push(i);
      }
    }
    return pageNumbers;
  };

  useEffect(() => {
    dispatch(getCategoryCarouselDatas());
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutID);
    setIsTransitioning(false);
  };

  const handleMouseLeave = () => {
    setIsTransitioning(true);
  };

  // Set infinite timeout to change page every 3 sec
  useEffect(() => {
    if (isTransitioning) {
      timeoutID = setTimeout(() => {
        nextPage();
      }, 3000);
    }
  });

  return (
    <>
      <div id="categoryInfo_appartsSlider">
        <h2>All Apartments Category</h2>
        <div id="categoryInfo_appartsSlider_main">
          <button
            id="categoryInfo_appartsSlider_main_left"
            onClick={prePage}
          ></button>
          <div
            id="categoryInfo_appartsSlider_main_blocks"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {records.map((data) => {
              return <CategoryInfoCarouselItem key={data._id} data={data} />;
            })}
            <button
              id="categoryInfo_appartsSlider_main_right"
              onClick={nextPage}
            ></button>
          </div>
        </div>
        <div className="categoryInfo_appartsSlider_switcher">
          <ul>
            {getPageNumbers().map((number, index) => (
              <li key={index}>
                <button
                  className={`${currentPage === number ? "active" : "none"}`}
                  onClick={() => changeCurrentPage(number)} // We set up here an arrow function to avoid infinite loop due to re-renders
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CategoryInfoCarousel;

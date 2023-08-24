import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryDatas } from "../../actions/CategoryData";
import CategoryDataContainer from "./data/CategoryDataContainer";

function CategoryMainPaginator() {
  const dispatch = useDispatch();
  const categoryDatas = useSelector((state) => state.categoryDatas.mainCategoryItems);

  const breakPointTablet = 768;
  const breakPointPhone = 320;

  const [currentPage, setCurrentPage] = useState(1);
  const [blocksPerPage, setBlocksPerPage] = useState(12);
  
  const lastIndex = currentPage * blocksPerPage;
  const firstIndex = lastIndex - blocksPerPage;
  const records = categoryDatas.slice(firstIndex, lastIndex);
  const npage = Math.ceil(categoryDatas.length / blocksPerPage); // Total pages

  useEffect(() => {
    dispatch(getCategoryDatas());
  }, []);

  const prePage = function () {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = function () {
    if (currentPage !== npage) {
      setCurrentPage(+currentPage + 1);
    }
  };

  const changeCurrentPage = (id) => {
    if (id === "... ") {
      setCurrentPage(currentPage + 2);
    } else if (id === "...") {
      setCurrentPage(currentPage - 2);
    } else {
      setCurrentPage(id);
    }
  };

  useEffect(()=>{
    if (window.innerWidth <= breakPointPhone){
      setBlocksPerPage(2);
    } else if(window.innerWidth <= breakPointTablet){
      setBlocksPerPage(4);
    } else {
      setBlocksPerPage(12);
    }
  }, []);

  const maxVisiblePages = 6; // How many pages we want to see at the same time
  const pageNumbers = [];

  const getPageNumbers = () => {
    if (npage <= maxVisiblePages) {
      // We're checking if total pages are less or equal to the amount of pages we want to see
      for (let i = 1; i <= npage; i++) {
        // If it is so - we just add them all
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= maxVisiblePages - 4) {
        // We're checking if current page close to the beginning
        for (let i = 1; i <= maxVisiblePages - 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("... ");
        pageNumbers.push(npage - 2);
        pageNumbers.push(npage - 1);
        pageNumbers.push(npage);
      } else if (currentPage >= npage - maxVisiblePages + 5) {
        // We're checking if current page close to the end
        pageNumbers.push(1);
        pageNumbers.push(2);
        pageNumbers.push(3);
        pageNumbers.push("...");
        for (let i = npage - maxVisiblePages + 4; i <= npage; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("... ");
        pageNumbers.push(npage);
      }
    }
    return pageNumbers;
  };

  return (
    <div id="category_offers">
      <h1>Best Offers</h1>
      <div id="category_offers_info">
        {records.map((data) => {
          return <CategoryDataContainer key={data._id} data={data} />;
        })}
      </div>
      <nav>
        <ul>
          <li className="button_left">
            <button onClick={prePage}></button>
          </li>
          {getPageNumbers().map((number, index) => (
            <li key={index}>
              <button
                className={`${
                  currentPage === number ? "page_item_active" : "page_item"
                }`}
                onClick={() => changeCurrentPage(number)} // We set up here an arrow function to avoid infinite loop due to re-renders
              >
                {number}
              </button>
            </li>
          ))}
          <li className="button_right">
            <button onClick={nextPage}></button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CategoryMainPaginator;

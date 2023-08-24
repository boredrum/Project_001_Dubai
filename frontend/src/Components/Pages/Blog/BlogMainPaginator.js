import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogDatas } from "../../actions/BlogData";
import BlogDataContainer from "./data/BlogDataContainer";

function BlogMainPaginator() {
  const dispatch = useDispatch();
  const blogDatas = useSelector((state) => state.blogDatas.items);

  const breakPointTablet = 768;
  const breakPointPhone = 320;

  const [currentPage, setCurrentPage] = useState(1);
  const [blocksPerPage, setBlocksPerPage] = useState(12);


  const lastIndex = currentPage * blocksPerPage;
  const firstIndex = lastIndex - blocksPerPage;
  const records = blogDatas.slice(firstIndex, lastIndex);
  const npage = Math.ceil(blogDatas.length / blocksPerPage); // Total pages

  useEffect(() => {
    dispatch(getBlogDatas());
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
      setBlocksPerPage(5);
    } else if(window.innerWidth <= breakPointTablet){
      setBlocksPerPage(6);
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
    <div>
      <div id="blog_main_apparts">
        {records.map((data) => {
          return <BlogDataContainer key={data._id} data={data} />;
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

export default BlogMainPaginator;

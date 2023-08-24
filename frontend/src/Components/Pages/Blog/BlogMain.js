import React from "react";
import BlogMainPaginator from "./BlogMainPaginator";

function BlogMain() {

  return (
    <div id="blog_main">
      {window.innerWidth <= 768 ? 
        <h2>
          <a href="/">Main</a>
          <a href="#">Services</a>
          <a href="#">Rent</a>
          Furnished Apartments in Dubai
        </h2> : null}
      <div id="blog_main_header">
        <h1>Blog</h1>
        <input id="blog_main_header_search" placeholder="Search..."></input>
      </div>
      <BlogMainPaginator />
    </div>
  );
}

export default BlogMain;

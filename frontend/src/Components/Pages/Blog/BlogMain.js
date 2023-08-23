import React from "react";
import BlogMainPaginator from "./BlogMainPaginator";

function BlogMain() {

  return (
    <div id="blog_main">
      <div id="blog_main_header">
        <h1>Blog</h1>
        <input id="blog_main_header_search" placeholder="Search..."></input>
      </div>
      <BlogMainPaginator />
    </div>
  );
}

export default BlogMain;

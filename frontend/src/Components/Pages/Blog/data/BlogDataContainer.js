import React from "react";

const BlogDataContainer = (props) => {
  const data = props.data;
  return (
    <div id="blog_main_apparts_blocks">
      <div>
        <img src={data.image} alt={data.name} />
        <div>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <a>Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default BlogDataContainer;

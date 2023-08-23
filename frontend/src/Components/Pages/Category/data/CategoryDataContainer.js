import React from "react";

const CategoryDataContainer = (props) => {
  const data = props.data;
  return (
    <div id="category_offers_info_blocks">
      <div>
        <img src={data.image} alt={data.name} />
        <div
          className={data.priority === "top" ? "apparts_top_priority" : null}
        >
          <h4>{data.type}</h4>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <a>Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default CategoryDataContainer;

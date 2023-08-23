import React, { useState, useEffect } from "react";

const CategoryInfoCarouselItem = (props) => {
  const data = props.data;
  const [isVisible, setIsVisible] = useState(false);

  const blockstyle = {
    backgroundImage: `url(${data.image})`,
  };

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div
      style={blockstyle}
      className={`${isVisible ? "active" : "inactive"} ${
        data.image ? null : "categoryInfo_appartsSlider_main_blocks_apparts"
      }`}
    >
      <h3>{data.type}</h3>
      {data.description ? <p>{data.description}</p> : null}
      <a>Learn more</a>
    </div>
  );
};

export default CategoryInfoCarouselItem;

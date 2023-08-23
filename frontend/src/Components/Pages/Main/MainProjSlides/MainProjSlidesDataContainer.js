import React from "react";

const MainProjSlidesDataContainer = (props) => {
  const data = props.data;
  return (
    <div>
      {data.image ? <img src={data.image} /> : null}
      {data.type ? <h2>{data.type}</h2> : null}
      {data.name ? <h3>{data.name}</h3> : null}
      {data.description ? (
        <div>
          <p>{data.description}</p>
          <a>Learn more</a>
        </div>
      ) : null}
    </div>
  );
};

export default MainProjSlidesDataContainer;

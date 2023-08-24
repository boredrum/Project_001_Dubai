import React from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";

const MainProjSlidesDataContainer = (props) => {
  const data = props.data;
  return (
    <div>
      {data.image ? <img src={isWebpSupported ? data.imagewebp : data.image} /> : null}
      {data.type ? <h2>{data.type}</h2> : null}
      {data.name ? <h3>{data.name}</h3> : null}
      {data.description ? (
        <div>
          <p>{data.description}</p>
          <a>See project</a>
        </div>
      ) : null}
    </div>
  );
};

export default MainProjSlidesDataContainer;

import React from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";

import paulPhoto from "../../../Pictures/info_review_Paul.png";
import robertPhoto from "../../../Pictures/info_review_Robert.png";

import paulPhotowebp from "../../../Pictures/webp/info_review_Paul.webp";
import robertPhotowebp from "../../../Pictures/webp/info_review_Robert.webp";

function MainInfoArticles() {
  return (
    <>
      <div id="info_articles">
        <div id="info_articles_head">
          <h2>Useful articles</h2>
          <a href="#">
            <div>View all articles</div>
          </a>
        </div>
        <div id="info_articles_blocks">
          <div id="info_articles_block_left">
            <h2>Discover Architecture</h2>
          </div>
          <div id="info_articles_block_mid">
            <h3>Jule 03, 2022</h3>
            <h2>Discover Architecture</h2>
            <p>
							Projects for many large domestic and foreign corporations,
							enterprises in many elds such
            </p>
            <a href="#">
              <div>Learn more</div>
            </a>
          </div>
          <div id="info_articles_block_right">
            <h2>Discover Architecture</h2>
          </div>
        </div>
      </div>
      <div id="info_review">
        <div>
          <img src={isWebpSupported ? paulPhotowebp : paulPhoto} alt="Photo Paul" />
          <h2>Paul</h2>
          <h3>
						Owner in <span>Paul.com</span>
          </h3>
          <p>
						Projects for many large domestic and foreign corporations,
						enterprises in many elds such as nance, banking, F&B, education,
						communication.
          </p>
        </div>
        <div>
          <img src={isWebpSupported ? robertPhotowebp : robertPhoto} alt="Photo Robert" />
          <h2>Robert</h2>
          <h3>
						Founder in <span>Apple inc.</span>
          </h3>
          <p>
						Founded in 2007, Sparch is specializing in providing innovative
						services such as website design, brand identity and marketing
          </p>
        </div>
      </div>
    </>
  );
}

export default MainInfoArticles;

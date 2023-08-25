import React from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";

import ServicesMainInfoPhoto from "../../../Pictures/ServicesMainInfo_main_photo.png";
import Services_threePhotosView_left_top from "../../../Pictures/Services_threePhotosView_left_top.png";
import Services_threePhotosView_left_bot from "../../../Pictures/Services_threePhotosView_left_bot.png";
import Services_threePhotosView_right from "../../../Pictures/Services_threePhotosView_right.png";

import ServicesMainInfoPhotowebp from "../../../Pictures/webp/ServicesMainInfo_main_photo.webp";
import Services_threePhotosView_left_topwebp from "../../../Pictures/webp/Services_threePhotosView_left_top.webp";
import Services_threePhotosView_left_botwebp from "../../../Pictures/webp/Services_threePhotosView_left_bot.webp";
import Services_threePhotosView_rightwebp from "../../../Pictures/webp/Services_threePhotosView_right.webp";

function ServicesMainInfo() {
  return (
    <>
      <div id="services_appartPreview">
        <div id="services_appartPreview_txt">
          <h2>Rent</h2>
          <h3>
						Furnished Apartments <span>in Dubai</span>
          </h3>
        </div>
      </div>
      <div id="services_topInfo">
        <div id="services_topInfo_links">
          <h2>
            <a href="/">Main</a>
            <a href="#">Services</a>
            <a href="#">Rent</a>
						Furnished Apartments in Dubai
          </h2>
        </div>
        <div id="services_topInfo_txt">
          {window.innerWidth <= 768 ? (
            <>
              <h2>
                <span>Service</span> Buying property in Dubai
              </h2>
              <h3>Real estate investment in Dubai, UAE</h3>
            </>
          ) : null}
          <div id="services_topInfo_txt_top">
            <p>
							This response is important for our ability to learn from mistakes,
							but it alsogives rise to self-criticism, because it is part of the
							threat-protection system. In other words, what keeps us safe can
							go too far, and keep us too safe. In fact it can trigger
							self-censoring.
            </p>
            <p>
							One touch of a red-hot stove is usually all we need to avoid that
							kind of discomfort in the future. The same is true as we
							experience the emotional sensation of stress from our first
							instances of social rejection or ridicule. We quickly learn to
							fear and thus automatically avoid potentially stressful situations
							of all kinds, including the most common of all:
            </p>
          </div>
          
          {window.innerWidth > 768 ? (
            <div id="services_topInfo_txt_bot">
              <p>
								This response is important for our ability to learn from
								mistakes, but it alsogives rise to self-criticism, because it is
								part of the threat-protection system. In other words, what keeps
								us safe can go too far, and keep us too safe. In fact it can
								trigger self-censoring.
              </p>
              <p>
								One touch of a red-hot stove is usually all we need to avoid
								that kind of discomfort in the future. The same is true as we
								experience the emotional sensation of stress from our first
								instances of social rejection or ridicule. We quickly learn to
								fear and thus automatically avoid potentially stressful
								situations of all kinds, including the most common of all:
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div id="ServicesMainInfoPhoto">
        <img src={isWebpSupported ? ServicesMainInfoPhotowebp : ServicesMainInfoPhoto} alt="Photo of Dubai view" />
      </div>
      <div id="services_methods_txt">
        <h2>Methods for Everyone</h2>
        <p>
					Everything along the way, to and from, fascinated her: every pebble,
					ant, stick, leaf, blade of grass, and crack in the sidewalk was
					something to be picked up, looked at, tasted, smelled, and shaken.
					Everything was interesting to her. She knew nothing. I knew
					everything…been there, done that. She was in the moment, I was in the
					past. She was mindful. I was mindless.{" "}
        </p>
        <p>
					One touch of a red-hot stove is usually all we need to avoid that kind
					of discomfort in the future. The same is true as we experience the
					emotional sensation of stress from our first instances of social
					rejection or ridicule. We quickly learn to fear and thus automatically
					avoid potentially stressful situations of all kinds, including the
					most common of all: making mistakes.
        </p>
      </div>
      <div id="services_review">
        <div id="services_review_inner">
          <div id="services_review_inner_comas">
            <p>”</p>
          </div>
          <div>
            <div id="services_review_inner_mainTxt">
              <p>
								Our greatest weakness lies in giving up. The most certain way to
								succeed is always to try just one more time. emotional sensation
								of stress from our firs
              </p>
              <h2>Paul</h2>
              <h3>Elite Author</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="services_threePhotosView">
        <div id="services_threePhotosView_left">
          <img src={isWebpSupported ? Services_threePhotosView_left_topwebp : Services_threePhotosView_left_top} alt="Dubai night view" />
          <img src={isWebpSupported ? Services_threePhotosView_left_botwebp : Services_threePhotosView_left_bot} alt="Dubai sunrise" />
        </div>
        <div id="services_threePhotosView_right">
          <img src={isWebpSupported ? Services_threePhotosView_rightwebp : Services_threePhotosView_right} alt="Dubai daylight" />
        </div>
      </div>
      <div id="services_skills">
        <div id="services_skills_card_left">
          <h2>20</h2>
          <p>YEARS WORKING</p>
        </div>
        <div id="services_skills_card_mid">
          <h2>7</h2>
          <p>TALANTED MANAGERS</p>
        </div>
        <div id="services_skills_card_right">
          <h2>100</h2>
          <p>COMPLITLY PROJECTS</p>
        </div>
      </div>
      <div id="service_challenge">
        <div id="service_challenge_topTxt">
          <h2>Challenge</h2>
          <p>
						To and from, fascinated her: every pebble, ant, stick, leaf, blade
						of grass, and crack in the sidewalk was something to be picked up,
						looked at, tasted, smelled, and shaken. Everything was interesting
						to her. She knew nothing. I knew everything…been there, done that.
						She was in the moment, I was in the past. She was mindful. I was
						mindless.
          </p>
          <h3>Everything along the way</h3>
          <p>
						One touch of a red-hot stove is usually all we need to avoid that
						kind of discomfort in the future. The same is true as we experience
						the emotional sensation of stress from our first instances of social
						rejection or ridicule. We quickly learn to fear and thus
						automatically avoid potentially stressful situations of all kinds,
						including the most common of all: making mistakes.
          </p>
        </div>
        <div id="service_challenge_botTxt">
          <ul>
            <li>
							Everything along the way, to and from, fascinated her: every
							pebble, ant, stick, leaf, blade of grass, and crack in the
							sidewalk was something to be picked up, looked at, tasted,
							smelled, and shaken.{" "}
            </li>
            <li>
							Everything was interesting to her. She knew nothing. I knew
							everything…been there, done that. She was in the moment, I was in
							the past. She was mindful. I was mindless.
            </li>
            <li>
              {" "}
							One touch of a red-hot stove is usually all we need to avoid that
							kind of discomfort in the future. The same is true as we
							experience the emotional sensation of stress from our first
							instances of social rejection or ridicule.
            </li>
            <li>
              {" "}
							We quickly learn to fear and thus automatically avoid potentially
							stressful situations of all kinds, including the most common of
							all: making mistakes.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ServicesMainInfo;

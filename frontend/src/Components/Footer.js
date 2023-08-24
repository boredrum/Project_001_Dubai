import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/header_logo.svg";
import BookConsultaion from "./BookConsultation";

function Footer() {

  const [isBookConsultOpen, setIsBookConsultOpen] = useState(false);

  return (
    <footer>
      <div id="logo">
        <Link to="/">
          <img src={logo}/>
          <div id="logo_text">
            <h2>DubaiRealty</h2>
            <p>Real Estate</p>
          </div>
        </Link>
      </div>
      <div id="footer_menu">
        <div id="footer_buy">
          <h3>
            Buy
          </h3>
          <a href="#">
            Apartment in Dubai
          </a>
          <a href="#">
            House in Dubai
          </a>
          <a href="#">
            Apartments in Dubai
          </a>
          <a href="#">
            Loft in Dubai
          </a>
          <a href="#">
            Penthouse in Dubai
          </a>
          <a href="#">
            Villa in Dubai
          </a>
        </div>
        <div id="footer_services">
          <h3>
            Services
          </h3>
          <a href="#">
            Property management in Dubai, UAE
          </a>
          <a href="#">
            Sell property in Dubai, UAE
          </a>
          <a href="#">
            Rent property in Dubai, UAE
          </a>
          <a href="#">
            Investments in Dubai, UAE
          </a>
          <a href="#">
            Real estate for cryptocurrency in Dubai
          </a>
          <a href="#">
            Moving to Dubai, UAE
          </a>
        </div>
        <div id="footer_info">
          <h3>
            Information
          </h3>
          <a href="#">
            Video
          </a>
          <a href="#">
            Podcasts
          </a>
          <a href="#">
            Laws
          </a>
          <a href="#">
            Questions and answers
          </a>
          <a href="#">
            Books
          </a>
          <a href="#">
            Articles
          </a>
        </div>
        <div id="footer_about">
          <h3>
            About company
          </h3>
          <a href="#">
            Jobs
          </a>
          <a href="#">
            Story
          </a>
          <a href="#">
            Licenses
          </a>
          <a href="#">
            Why are we
          </a>
          <a href="#">
            Real estate agency
          </a>
        </div>
        <div id="footer_contact">
          <h3>
            Contact
          </h3>
          <a href="#">
            964 Worthington Drive Dubai, UAE
          </a>
          <a href="mailto:dubairealty@mail.com">
            dubairealty@mail.com
          </a>
          <button id="btn_consultate" onClick={()=>setIsBookConsultOpen(true)}>
            Book a consultation
          </button>
        </div>
      </div>
      {isBookConsultOpen && <BookConsultaion setIsBookConsultOpen={setIsBookConsultOpen} />}
      <div id="footer_lower">
        <div id="footer_copy">
          <p>
            Copyright © 2023 Dubai Realty
          </p>
        </div>
        <div id="footer_socials">
          <a className="facebook" href="https://facebook.com/" />
          <a className="twitter"  href="https://twitter.com/" />
          <a className="youtube"  href="https://youtube.com/" />
          <a className="instagram"  href="https://linkedin.com/" />
          <a className="linkedin"  href="https://instagram.com/" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

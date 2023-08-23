import React, { useState } from "react";
import logo from "../Pictures/header_logo.svg";
import { Link } from "react-router-dom";
import BookConsultaion from "./BookConsultation";

function Header() {
  const [isNavBuyActive, setIsNavBuyActive] = useState(false);
  const [isNavBlogActive, setIsNavBlogActive] = useState(false);
  const [isNavAboutActive, setIsNavAboutActive] = useState(false);
  const [isNavContactActive, setIsNavContactActive] = useState(false);
  const [isBookConsultOpen, setIsBookConsultOpen] = useState(false);

  return (
    <header>
      <div id="logo">
        <Link to="/">
          <img src={logo} />
          <div id="logo_text">
            <h2>DubaiRealty</h2>
            <p>Real Estate</p>
          </div>
        </Link>
      </div>
      <nav>
        <div
          id="nav_buy"
          onPointerEnter={() => setIsNavBuyActive(true)}
          onPointerLeave={() => setIsNavBuyActive(false)}
        >
          <h2 className={isNavBuyActive ? "nav_drop_active" : undefined}>
						BUY
          </h2>
          {isNavBuyActive && (
            <div
              id="nav_drop"
              onPointerEnter={() => setIsNavBuyActive(true)}
              onPointerLeave={() => setIsNavBuyActive(false)}
            >
              <div>
                <h3>Category number one</h3>
              </div>
              <div>
                <Link to="/category">
                  <h3>Apartments in Dubai</h3>
                </Link>
              </div>
              <div>
                <h3>Category number twenty five</h3>
              </div>
            </div>
          )}
        </div>
        <div
          id="nav_blog"
          onPointerEnter={() => setIsNavBlogActive(true)}
          onPointerLeave={() => setIsNavBlogActive(false)}
        >
          <Link to="/blog">
            <h2 className={isNavBlogActive ? "nodrop_active" : undefined}>
							BLOG
            </h2>
          </Link>
        </div>
        <div
          id="nav_about"
          onPointerEnter={() => setIsNavAboutActive(true)}
          onPointerLeave={() => setIsNavAboutActive(false)}
        >
          <Link to="/services">
            <h2 className={isNavAboutActive ? "nodrop_active" : undefined}>
							ABOUT
            </h2>
          </Link>
        </div>
        <div
          id="nav_contact"
          onPointerEnter={() => setIsNavContactActive(true)}
          onPointerLeave={() => setIsNavContactActive(false)}
        >
          <Link to="/contact">
            <h2 className={isNavContactActive ? "nodrop_active" : undefined}>
							CONTACT
            </h2>
          </Link>
          {isNavContactActive}
        </div>
      </nav>
      <button id="btn_consultate" onClick={() => setIsBookConsultOpen(true)}>
				Book a consultation
      </button>
      {isBookConsultOpen && (
        <BookConsultaion setIsBookConsultOpen={setIsBookConsultOpen} />
      )}
      <div id="header_set_lang">
        <a href="#">EN</a>
        <a href="#">UA</a>
      </div>
      <div id="header_phone">
        <a href="tel:+380991111111">+3 (099) 111-11-11</a>
      </div>
    </header>
  );
}

export default Header;

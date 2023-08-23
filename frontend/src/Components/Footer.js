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
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="200" height="19" viewBox="0 0 200 19" fill="none">
            <path d="M8.88215 9.80206L9.37504 6.64838H6.29324V4.60186C6.29324 3.73908 6.72375 2.89807 8.10399 2.89807H9.50503V0.213059C9.50503 0.213059 8.23362 0 7.01803 0C4.48007 0 2.82114 1.51047 2.82114 4.24484V6.64838H0V9.80206H2.82114V17.4259H6.29324V9.80206H8.88215Z" fill="#E8E8E8"/>
            <path d="M54.6346 4.84783C54.6457 5.01669 54.6457 5.18559 54.6457 5.35445C54.6457 10.505 51.0522 16.4396 44.4843 16.4396C42.4608 16.4396 40.5812 15.8003 39 14.6906C39.2875 14.7268 39.5639 14.7388 39.8624 14.7388C41.532 14.7388 43.069 14.1237 44.2963 13.0743C42.7262 13.0381 41.4104 11.9163 40.9571 10.3723C41.1782 10.4085 41.3994 10.4326 41.6316 10.4326C41.9522 10.4326 42.2729 10.3844 42.5714 10.3C40.935 9.93807 39.7076 8.37 39.7076 6.47623V6.428C40.1831 6.7175 40.736 6.89843 41.3219 6.92252C40.36 6.2229 39.7297 5.02876 39.7297 3.67778C39.7297 2.95406 39.9066 2.29064 40.2162 1.71165C41.9743 4.07584 44.617 5.61978 47.5802 5.78868C47.5249 5.49918 47.4917 5.19766 47.4917 4.8961C47.4917 2.749 49.084 1 51.0632 1C52.0915 1 53.0202 1.47042 53.6726 2.23034C54.4798 2.06148 55.2538 1.73579 55.9393 1.28949C55.6739 2.19418 55.11 2.9541 54.3692 3.43655C55.0879 3.35216 55.7845 3.13499 56.4258 2.83347C55.9394 3.60542 55.3312 4.29294 54.6346 4.84783Z" fill="#E8E8E8"/>
            <path d="M197.652 0H181.354C180.607 0 180 0.589644 180 1.31348V16.9045C180 17.6283 180.607 18.218 181.354 18.218H197.652C198.399 18.218 199.01 17.6283 199.01 16.9045V1.31348C199.01 0.589644 198.399 0 197.652 0ZM185.745 15.6154H182.928V6.9212H185.75V15.6154H185.745ZM184.337 5.73378C183.433 5.73378 182.703 5.03027 182.703 4.16817C182.703 3.30607 183.433 2.60257 184.337 2.60257C185.236 2.60257 185.97 3.30607 185.97 4.16817C185.97 5.03434 185.24 5.73378 184.337 5.73378ZM196.307 15.6154H193.49V11.3862C193.49 10.3777 193.468 9.08052 192.026 9.08052C190.557 9.08052 190.332 10.1785 190.332 11.313V15.6154H187.515V6.9212H190.218V8.10862H190.256C190.634 7.42545 191.555 6.70568 192.925 6.70568C195.777 6.70568 196.307 8.50714 196.307 10.8495V15.6154Z" fill="#E8E8E8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M92.9884 11.5861V5.9743C94.9806 6.91173 96.5236 7.8173 98.3485 8.79363C96.8433 9.62834 94.9806 10.5649 92.9884 11.5861ZM104.091 3.18328C103.747 2.73052 103.162 2.37809 102.538 2.26141C100.705 1.91336 89.271 1.91237 87.4392 2.26141C86.9391 2.35515 86.4938 2.58173 86.1113 2.93377C84.4996 4.42967 85.0047 12.4517 85.3931 13.7511C85.5565 14.3136 85.7677 14.7193 86.0336 14.9855C86.3763 15.3376 86.8455 15.5799 87.3844 15.6886C88.8935 16.0008 96.668 16.1753 102.506 15.7355C103.044 15.6418 103.52 15.3916 103.896 15.0246C105.386 13.5347 105.284 5.06213 104.091 3.18328Z" fill="#E8E8E8"/>
            <path d="M151 4.96273C151 4.01242 150.789 3.48447 150.578 2.85093C150.366 2.32298 150.05 1.79503 149.627 1.37267C149.205 0.84472 148.677 0.63354 148.149 0.42236C147.621 0.21118 146.988 0.10559 146.037 0C145.087 0 144.77 0 142.447 0C140.23 0 139.913 0 138.963 0C138.012 0 137.484 0.21118 136.851 0.42236C136.323 0.63354 135.795 0.95031 135.373 1.37267C134.95 1.90062 134.634 2.32298 134.422 2.95652C134.211 3.48447 134.106 4.11801 134 4.96273C134 5.91304 134 6.22981 134 8.4472C134 10.7702 134 11.087 134 11.9317C134 12.882 134.211 13.4099 134.422 14.0435C134.634 14.5714 134.95 15.0994 135.373 15.5217C135.901 16.0497 136.323 16.2609 136.851 16.472C137.379 16.6832 138.012 16.7888 138.963 16.8944C139.913 16.8944 140.124 16.8944 142.447 16.8944C144.77 16.8944 145.087 16.8944 145.932 16.8944C146.882 16.8944 147.41 16.6832 148.043 16.472C148.571 16.2609 149.099 15.9441 149.522 15.5217C150.05 14.9938 150.261 14.5714 150.472 14.0435C150.683 13.5155 150.789 12.882 150.894 11.9317C151 10.9814 150.894 10.7702 150.894 8.4472C150.894 6.12422 151 5.91304 151 4.96273ZM142.447 12.882C140.019 12.882 138.118 10.8758 138.118 8.5528C138.118 6.12422 140.124 4.2236 142.447 4.2236C144.876 4.2236 146.776 6.22981 146.776 8.5528C146.882 10.8758 144.876 12.882 142.447 12.882ZM146.988 4.96273C146.46 4.96273 145.932 4.54037 145.932 3.90683C145.932 3.37888 146.354 2.85093 146.988 2.85093C147.516 2.85093 148.043 3.27329 148.043 3.90683C148.043 4.54037 147.621 4.96273 146.988 4.96273Z" fill="#E8E8E8"/>
            <path d="M145.298 8.44847C145.298 10.0323 144.03 11.2994 142.447 11.2994C140.863 11.2994 139.596 10.0323 139.596 8.44847C139.596 6.86462 140.968 5.70312 142.447 5.70312C144.03 5.70312 145.298 6.97021 145.298 8.44847Z" fill="#E8E8E8"/>
          </svg> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from "react";

const ContactMapModal = ({setIsMapModalConsultOpen}) => {

  return (
    <>
      <div id="map_modal_block" onClick={()=> setIsMapModalConsultOpen(false)}></div>
      <div id="map_modal">
        <h2>Dubai, <span>UAE</span></h2>
        <p>
					269 King Str, 05th Floor, Utral Hosue Building, Dubai, VIC 3000, UAE.
        </p>
        <div>
          <a href="tel:+9903449564050">+99 (0) 344 956 4050</a>
        </div>
        <h3>
					Email: <a href="mailto:info@sparch.co">info@sparch.co</a>
        </h3>
        <h3>Follow us:</h3>
        <h3>
					Work Hours:  <span>Monday - Friday : 08h00 - 17h30</span>
        </h3>
      </div>
    </>
  );
};

export default ContactMapModal;

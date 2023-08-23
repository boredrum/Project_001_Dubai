import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ContactMap from "./Contact/ContactMap";
import ContactMapModal from "./Contact/ContactMapModal";
import ContactContactForm from "./Contact/ContactContactForm";

function Contact() {
  
  const [isMapModalConsultOpen, setIsMapModalConsultOpen] = useState(true);

  return (
    <>
      <Header />
      <h1 id="contact_title">Contact</h1>
      <div id="map">
        {isMapModalConsultOpen && <ContactMapModal setIsMapModalConsultOpen={setIsMapModalConsultOpen} />}
        <ContactMap />
      </div>
      <ContactContactForm />
      <Footer />
    </>
  );
}

export default Contact;

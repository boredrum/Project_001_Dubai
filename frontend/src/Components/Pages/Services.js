import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ServicesMainInfo from "./Services/ServicesMainInfo";
import ContactUs from "../ContactUs";
import ServicesPackages from "./Services/ServicesPackages";
import ServicesProposals from "./Services/ServicesProposals";

function Services() {
  return (
    <>
      <Header />
      <ServicesMainInfo />
      <ContactUs />
      <ServicesPackages />
      <ServicesProposals />
      <Footer />
    </>
  );
}

export default Services;

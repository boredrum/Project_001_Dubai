import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import MainTopSlider from "./Main/MainTopSlider";
import MainLatestProjSlides from "./Main/MainLatestProjSlides";
import MainReview from "./Main/MainReview";
import MainPlayer from "./Main/MainPlayer";
import MainAppartments from "./Main/MainAppartments";
import ContactUs from "../ContactUs";
import MainInfoArticles from "./Main/MainInfoArticles";
import MainInfoArticlesFAQ from "./Main/MainInfoArticlesFAQ";

function Main() {
  return (
    <>
      <Header />
      <section id="main_slides">
        <MainTopSlider />
        <MainLatestProjSlides />
      </section>
      <main>
        <MainReview />
        <MainPlayer />
        <MainAppartments />
        <ContactUs />
      </main>
      <MainInfoArticles />
      <MainInfoArticlesFAQ />
      <Footer />
    </>
  );
}

export default Main;

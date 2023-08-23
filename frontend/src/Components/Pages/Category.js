import React from "react";
import Header from "../Header";
import CategoryInfo from "./Category/CategoryInfo";
import Footer from "../Footer";
import CategoryMainPaginator from "./Category/CategoryMainPaginator";
import CategoryAbout from "./Category/CategoryAbout";
import ContactUs from "../ContactUs";
import CategoryInfoCarousel from "./Category/CategoryInfoCarousel";

function Category() {
  return (
    <>
      <Header />
      <CategoryInfo />
      <CategoryInfoCarousel />
      <CategoryMainPaginator />
      <CategoryAbout />
      <div id="category_contactus">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default Category;

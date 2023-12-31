import React, { useEffect } from "react";

const BookConsultaion = ({setIsBookConsultOpen}) => {

  // On mount of this component we're adding noScroll class to remove scrolling
  useEffect(() => {
    document.body.classList.add("noScroll");

    return () => {
      document.body.classList.remove("noScroll");
    };
  }, []);

  return (
    <>
      <div className="book_consult" onClick={()=> setIsBookConsultOpen(false)} />
      <div className="book_consult_center">
        <h2>
          Leave your contacts
        </h2>
        <h3>
          we will contact you within three hours
        </h3>
        <input type="text" placeholder="Name" />
        <input type="phone" placeholder="Phone" />
        <button type="submit" className="book_consult_btn_send">Send</button>
        <button className="book_consult_btn_close" onClick={()=> setIsBookConsultOpen(false)}>
          <div></div>
        </button>
      </div>
    </>
  );
};

export default BookConsultaion;
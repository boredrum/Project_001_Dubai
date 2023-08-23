import React from "react";

function ContactContactForm(){

  return (
    <div id="contact_contact_form">
      <h2>
        Be in touch <br />
        <span>with us</span>
      </h2>
      <div id="contact_contact_form_inputs">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email *" />
        <input type="text" placeholder="Subject" />
      </div>
      <input type="text" placeholder="Message *" />
      <button type="submit">SUBMIT</button>
    </div>
  );
}

export default ContactContactForm;

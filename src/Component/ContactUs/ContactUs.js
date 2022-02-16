import React from "react";
import "./Contact.css";
import ContactBlog from "./SubCompo/ContactBlog";
import ContactInfo from "./SubCompo/ContactInfo";

const ContactUs = () => {
  return (
    <div>
      <div className="contact-header">
        <h2 className="text-4xl text-center text-white font-bold ">
          Contact Us
        </h2>
      </div>
      <div className="md:mx-20 mx-4">
        <ContactInfo />
        <ContactBlog />
      </div>
    </div>
  );
};

export default ContactUs;

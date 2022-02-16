import React from "react";
import separator from "../../../images/separator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  return (
    <div>
      <div className="text-left mt-14 mb-6">
        <h2 className="contact-heading text-2xl font-medium">Contact us</h2>
        <img src={separator} alt="" />
      </div>
      <div className="grid md:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1 mb-20">
        <div className="flex gap-x-8 items-center border py-10 px-4">
          <div className="text-red-600">
            <FontAwesomeIcon icon={faHome} size="2x" />
          </div>
          <div>
            <h5 className="mb-2 text-lg">Gulshan North Badda -1212</h5>
            <h5 className="text-lg">Dhaka Bangladesh</h5>
          </div>
        </div>
        <div className="flex gap-x-8 items-center border py-10 px-4">
          <div className="text-red-600">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </div>
          <div>
            <h5 className="mb-2 text-lg">Gulshan North Badda -1212</h5>
            <h5 className="text-lg">Dhaka Bangladesh</h5>
          </div>
        </div>
        <div className="flex gap-x-8 items-center border py-10 px-4">
          <div className="text-red-600">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </div>
          <div>
            <h5 className="mb-2 text-lg">+880163233**</h5>
            <h5 className="text-lg">+880163233**</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

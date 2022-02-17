import React from "react";
import separator from "../../../images/separator.png";

const ContactBlog = () => {
  return (
    <div className="mb-20 mt-10">
      <div className="text-left mt-14 mb-6">
        <h2 className="contact-heading text-2xl font-medium">Our Existence</h2>
        <img src={separator} alt="" />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
        <div>
          <img
            height="300px"
            src="https://i.ibb.co/R0Yzf6P/photo-1574958269340-fa927503f3dd-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-lg">
            Body weight of at least 45 kg. In good physical and mental health
            with no chronic medical illness. Not on long term medications and
            has not been intoxicated by alcohol within 24 hours prior to
            donation. Should not be fasting and have had enough sleep (more than
            5 hours) the night before donating Roughly 1 pint is given during a
            donation. A healthy donor may donate red blood cells every 56 days,
            or double red cells every 112 days. A healthy donor may donate
            platelets as few as 7 days apart, but a maximum of 24 times a year.
            <br />
            <br /> Roughly 1 pint is given during a donation. A healthy donor
            may donate red blood cells every 56 days, or double red cells every
            112 days. A healthy donor may donate platelets as few as 7 days
            apart, but a maximum of 24 times a year.Roughly 1 pint is given
            during a donation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBlog;

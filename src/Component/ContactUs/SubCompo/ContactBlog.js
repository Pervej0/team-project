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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat,
            <br />
            <br /> odit, tenetur error, harum nesciunt ipsum debitis quas
            aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
            laudantium molestias eos sapiente officiis modi at sunt excepturi
            expedita sint? Sed quibusdam recusandae alias error harum maxime
            adipisci amet laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBlog;

import React from "react";
import { Link } from "react-router-dom";

const BloodPost = ({ post }) => {
  return (
    <div className="border p-4">
      <div className="flex gap-x-5">
        <div>
          <img width="50px" src={post.profile} alt="profile" />
        </div>
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{post.name}</h3>
            <div className="flex gap-x-8 text-sm">
              <p>Blood Bags: {post.bags}</p>
              <p>Blood group: {post.bloodGroup}</p>
            </div>
            <small>{post.time}</small>
          </div>
          <div>
            <p className="py-4">{post.message}</p>
          </div>
          <div>
            <Link to="/chitchat" className="border px-5 py-1">
              Chit Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPost;

import React from "react";
import { Link } from "react-router-dom";

const BloodPost = ({ post }) => {
  return (
    <div className="border p-4 mb-2">
      <div className="flex gap-x-5">
        <div>
          <img
            className="rounded-full"
            width="50px"
            src={post.photo}
            alt="profile"
          />
        </div>
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{post.name}</h3>
            <div className="flex gap-x-8 text-sm mt-2 text-gray-500">
              <p>Email: {post.email}</p>
              <p>Phone: {post.phone}</p>
            </div>
            <small className="sm:mr-10 mr-0 text-sm text-gray-500">
              {post.time}
            </small>
            <small className="text-sm text-gray-500">{post.group}</small>
          </div>
          <div>
            <p className="py-4">{post.message}</p>
          </div>
          <div>
            <Link to={`/chitchat/${post._id}`} className="border px-5 py-1">
              Chit Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPost;

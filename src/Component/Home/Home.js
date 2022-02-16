import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import BloodPost from "./subCompo/BloodPost";

const Home = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);
  console.log(postData);
  return (
    <div className="lg:w-3/5 md:w-4/5 sm:w-5/6 sm:mx-auto w-full mx-4">
      <h1 className="text-3xl text-center py-5">Post a blood request</h1>
      {postData.map((post, index) => (
        <BloodPost post={post} key={index} />
      ))}
    </div>
  );
};

export default Home;

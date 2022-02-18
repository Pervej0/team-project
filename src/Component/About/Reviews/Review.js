import React from "react";

const Review = ({ review }) => {
  const { name, DonerORReceiver, profession, description } = review;

  return (
    <>
      <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md">
          <div class="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
            <h2 className="text-center text-3xl text-red-500">
              {DonerORReceiver} opinion
            </h2>
          </div>

          <div class="p-6 bg-white  border-gray-200">
            <div class="px-6  bg-whiteborder-gray-200 font-bold uppercase">
              <h2 className="text-center mb-3 text-xl text-gray-900">{name}</h2>
            </div>

            <p>{description}</p>
          </div>
          <div class="p-6 bg-white border-gray-200 text-right">
            <p className="text-center text-xl ">{profession}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;

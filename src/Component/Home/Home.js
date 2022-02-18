import React, { useEffect, useState } from "react";
import Banner from "../Home/Banner/Banner";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 5;

  useEffect(() => {
    fetch(
      `https://polar-tor-73503.herokuapp.com/post?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPostData(data.post);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page, postData]);
  // console.log(pageCount);
  return (
    <>
      <Banner />
      <PostForm />

      <div className="py-14 px-4 md:mx-12 mx-4 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-2xl dark:text-white lg:text-xl font-semibold leading-7 lg:leading-9 text-gray-800">
            All Post
          </h1>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="bg-gray-50 flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              {postData?.map((post) => (
                <Post key={post.id} post={post}></Post>
              ))}

              <div className="flex mt-5">
                {[...Array(pageCount)?.keys()]?.map((number) => (
                  <button
                    key={number}
                    onClick={() => setPage(number)}
                    className={
                      number === page
                        ? "h-10 px-5 mr-2 transition-colors duration-150 bg-indigo-600 text-white border  border-indigo-600 focus:shadow-outline"
                        : "h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 focus:shadow-outline mr-2"
                    }
                  >
                    {number + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* sidebar */}
          <div className="sticky top-0 bg-gray-100 border dark:bg-violet-900 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col h-4/5">
            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
              Top Donner
            </h3>
            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                  className="rounded-full"
                    src="https://lh3.googleusercontent.com/a/AATXAJzv0OxW890sHSqrc3bLvrUM0ILY20-2Yc6yUzNh=s96-c"
                    alt="avatar"
                  />
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                    Bablu Mia
                    </p>
                    <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                      10 Previous Orders
                    </p>
                  </div>
                </div>
                <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 ">
                  anytingforgame@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      1200 Farmgate, Dhaka 
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                      Billing Address
                    </p>
                    <p className="mb-6 w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      180 North King Street, Northhampton MA 1060
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

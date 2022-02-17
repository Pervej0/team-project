import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
// import swal from "sweetalert";
import AllpostsTable from "../../Allposts/AllpostsTable";

const MyPostss = () => {
  const { user } = useAuth();
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch(`https://ghastly-monster-29562.herokuapp.com/Post`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setAllPosts(data);
        const MyPosts = data.filter((dt) => dt.email === user.email);
        setAllPosts(MyPosts);
      });
  }, [user.email]);

 
  // const {email,name,userphotoURL,status,title,department, _id} =allPosts
  return (
    <div>
      <h1 className="mt-3 mb-3 text-4xl font-bold text-center pt-3 text-gray-900">
        My Post List
      </h1>
      <div className="flex flex-col container mx-auto my-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {allPosts.map((allPost) => (
                    <AllpostsTable
                      allPost={allPost}
                      key={allPost._id}
                    ></AllpostsTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostss;

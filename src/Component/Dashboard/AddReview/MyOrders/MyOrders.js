import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
// import swal from "sweetalert";
import AllOrdersTable from "../../AllOrders/AllOrdersTable";

const MyOrders = () => {
  const { user } = useAuth();
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch(`https://serene-spire-70074.herokuapp.com/post`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setAllBookings(data);
        const mybooking = data.filter((dt) => dt.email === user.email);
        setAllBookings(mybooking);
      });
  }, [user.email]);

 
  // const {email,name,userphotoURL,status,title,department, _id} =allBookings
  return (
    <div>
      <h1 className="mt-3 mb-3 text-4xl font-bold text-center pt-3 text-gray-900">
        My MyPost List
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
                      Message
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Group
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {allBookings.map((allBooking) => (
                    <AllOrdersTable
                      allBooking={allBooking}
                      key={allBooking._id}
                    ></AllOrdersTable>
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

export default MyOrders;

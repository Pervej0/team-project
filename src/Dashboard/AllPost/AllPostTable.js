import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";

const AllPostTable = ({ allBooking }) => {
  console.log(allBooking);
  const [allBookings, setAllBookings] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [updateForm, setupdateForm] = useState(false);
  const [userUpdate, setUserUpdate] = useState({});

  const history = useLocation();
  const Onlyedit = history.pathname === "/mypost";

  const { register, handleSubmit, reset } = useForm();

  const handleEditButton = (id) => {
    // reset();
    fetch(`http://localhost:4000/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const statusUpdate = allBookings.filter(()=>allbook.data === data.status)
        setUserUpdate(data);
      });
  };
  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllBookings(data);
        setIsLoading(false);
      });
  }, [isLoading]);

  const onSubmit = (data) => {
    console.log(data);
    let updateStatus = { ...userUpdate };
    updateStatus.status = data.status;
    setUserUpdate(updateStatus);
    // console.log(updateStatus);

    const url = `http://localhost:4000/post/${data._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((datan) => {
        if (datan.modifiedCount > 0) {
          setIsLoading(true);
          swal("Change successfully!!", "done", "success", {
            button: false,
            timer: 1300,
          });
          reset();
          setUserUpdate({});
          // setIsLoading(false);
        }
      });

    setupdateForm(false);
  };

  const handleDeleteButton = (id) => {
    swal({
      title: "Do you want delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:4000/post/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = allBookings?.filter(
                (booking) => booking._id !== id
              );
              setAllBookings(remaining);
              swal("You have Successfully Cancel Booking!", "Well Done!", {
                icon: "success",
                timer: 1200,
              });
            }
          });
      }
    });
  };

  return (
    <>
      <tr key={allBooking?._id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src={allBooking?.photo}
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {allBooking?.name}
              </div>
              <div className="text-sm text-gray-500">{allBooking?.email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-wrap">

 <div className="text-sm text-gray-900">{allBooking?.message}</div>
         
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{allBooking?.type}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{allBooking?.date}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{allBooking?.group}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{allBooking?.phone}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{allBooking?.time}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{allBooking?.title}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {!updateForm && (
            <span
              className={
                allBooking?.status === "New"
                  ? "py-2 px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-grey-900"
                  : "font-bold py-2 px-3 inline-flex text-xs leading-5  rounded-full bg-green-500 bg-opacity-100 text-white"
              }
            >
              {allBooking?.status || ""}
            </span>
          )}
          {updateForm && (
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("status")}>
                  <option value="New">New</option>
                  <option value="Donated">Donated</option>
                </select>
                <button
                  type="submit"
                  className="bg-purple-700 text-white mt-2  font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
              </form>
            </div>
          )}
        </td>
        {!Onlyedit && (
          <td className="px-6 flex justify-center space-x-2 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              onClick={() => {
                setupdateForm(true);
                handleEditButton(allBooking?._id);
              }}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteButton(allBooking?._id)}
              className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </td>
        )}
        {Onlyedit && (
          <td className="px-6 flex justify-center space-x-2 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              onClick={() => handleDeleteButton(allBooking?._id)}
              className=" mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </td>
        )}
      </tr>
    </>
  );
};

export default AllPostTable;

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const GiveReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.type === "Choose") {
      alert("Please choose your type");
      return;
    }
    swal({
      title: "Do you want to add a new place?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("https://polar-tor-73503.herokuapp.com/review/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((resp) => resp.json())
          .then((res) => {
            if (res.insertedId) {
              console.log(data);
              swal("You have Added a New Place", "Well Done!", {
                icon: "success",
                timer: 1300,
              });
              reset();
              navigate("/home");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:w-2/6 mx-auto">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add a Review
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="Name" className="block font-semibold mb-2">
                  Name
                </label>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("name", { required: true })}
                  placeholder="Name here.."
                />
                {errors.name && (
                  <span className="text-red-500 text-sm italic">
                    Name is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label
                  htmlFor="title-tour"
                  className="block font-semibold mb-2"
                >
                  Profession
                </label>
                <input
                  id="title-tour"
                  name="profession"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("profession", { required: true })}
                  placeholder="Profession here.."
                />
                {errors.title && (
                  <span className="text-red-500 text-sm italic">
                    Title is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="pb-0">
              <label className="block font-semibold mb-2">
                Select your type
              </label>
              <select
                required
                className="m-0 border w-full py-2 rounded"
                {...register("type", { required: true })}
              >
                <option disabled selected>
                  Choose
                </option>
                <option value="Donor">Donor</option>
                <option value="Receipient">Receipient</option>
              </select>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="place-details" className="sr-only mb-2">
                  Description-details
                </label>
                <textarea
                  id="place-details"
                  name="place-details"
                  type="text"
                  cols="30"
                  rows="10"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("description", { required: true })}
                  placeholder="Share your exprience.."
                />
                {errors.description && (
                  <span className="text-red-500 text-sm italic">
                    Description is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center mb-0 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default GiveReview;

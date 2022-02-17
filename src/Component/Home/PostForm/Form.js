import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Form = () => {
  const { user } = useAuth();
  const bloodRef = useRef();
  const typeRef = useRef();
  const dateRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    if (data.name === "" || data.email === "") {
      data.name = user.displayName;
      data.email = user.email;
    }
    data.group = bloodRef.current.value;
    data.type = typeRef.current.value;
    data.date = new Date(dateRef.current.value).toLocaleDateString();
    data.photo = user.photoURL;
    let local = new Date().toLocaleString();
    data.time = local.split(",")[1];

    fetch("https://serene-spire-70074.herokuapp.com/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Post uploaded",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  return (
    <>
      <div className=" p-5 bg-white border ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                for="name"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Your Name (Click here)
              </label>
              <input
                {...register("name")}
                defaultValue={user.displayName}
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                autocomplete="given-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/2">
              <label
                for="email"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Email (Click here)
              </label>
              <input
                {...register("email")}
                defaultValue={user.email}
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                autocomplete="family-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <div className="flex justify-between gap-3 mt-5">
            <span className="w-1/2">
              <label
                for="phone"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Phone
              </label>
              <input
                {...register("phone")}
                id="phone"
                type="text"
                name="phone"
                placeholder="Phone Number"
                autocomplete="given-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/2">
              <label
                for="group"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Blood Group
              </label>
              <select
                ref={bloodRef}
                required
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              >
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
                <option>A-</option>
                <option>B-</option>
                <option>O-</option>
                <option>AB-</option>
              </select>
            </span>
          </div>
          <div className="flex justify-between gap-3 mt-5">
            <span className="w-1/2">
              <label
                for="type"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Type
              </label>
              <select
                ref={typeRef}
                required
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              >
                <option>Donor</option>
                <option>Recipient</option>
              </select>
            </span>
            <span className="w-1/2">
              <label
                for="date"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Date
              </label>
              <input
                ref={dateRef}
                id="date"
                type="date"
                name="date"
                placeholder="Blood Group"
                autocomplete="family-name"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <div>
            <textarea
              {...register("message")}
              id="description"
              cols="30"
              rows="2"
              placeholder="Whrite here.."
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;

import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserStore } from "../stores/userStore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().min(8).max(30).required(),
  phone: yup.string().min(10).max(10).required(),
  userName: yup.string().required(),
  password: yup.string().min(8).required(),
  // role: yup.string().required(),
});
const RegistrationForm = () => {
  const callAddUserAPI = useUserStore((state) => state.addUserAPI);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onsubmitHandler = (data) => {
    console.log(data);
    callAddUserAPI(data);
    navigate("/login");
    // setShowModal(false);
  };
  return (
    // <!-- component -->
    <div className="bg-gradient-to-r from-emerald-400 to-teal-600  min-h-screen flex flex-col">
      <div className="container my-5 w-[500px] mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="text-3xl text-center">Register</h1>
          <form onSubmit={handleSubmit(onsubmitHandler)}>
            <div className="px-3 mb-1">
              <label for="" className="text-base">
                First name
              </label>
              <div className="flex">
                <div className="z-10 pl-3 text-center pointer-events-none flex items-center justify-center">
                  <FaRegUser className="text-base text-teal-700" />
                </div>
                <input
                  type="text"
                  className="w-[900px] -ml-8 pl-10  py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                  placeholder="First Name"
                  {...register("firstName")}
                />
              </div>
            </div>
            <div className="px-3 mb-1">
              <label for="" className="text-base">
                Last name
              </label>
              <div className="flex">
                <div className="z-10 pl-3 text-center pointer-events-none flex items-center justify-center">
                  <FaRegUser className="text-base  text-teal-700" />
                </div>
                <input
                  type="text"
                  className="w-[900px] -ml-8 pl-10  py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                  placeholder="Last Name"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="px-3 mb-1">
              <label for="" className="text-base">
                Email
              </label>
              <div className="flex">
                <div className="z-10 pl-3 text-center pointer-events-none flex items-center justify-center">
                  <MdOutlineMailOutline className="text-base  text-teal-700" />
                </div>
                <input
                  type="email"
                  className="w-[900px] -ml-8 pl-10  py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                  placeholder="Email"
                  {...register("email")}
                />
              </div>
            </div>
            <div className="px-3 mb-1">
              <label for="" className="text-base">
                Phone
              </label>
              <div className="flex">
                <div className="z-10 pl-3 text-center pointer-events-none flex items-center justify-center">
                  <FiPhone className="text-base  text-teal-700" />
                </div>
                <input
                  type="phone"
                  className="w-[900px] -ml-8 pl-10  py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                  placeholder="Phone"
                  {...register("phone")}
                />
              </div>
            </div>
            <div className="px-3 mb-1">
              <label for="" className="text-base">
                User name
              </label>
              <div className="flex">
                <div className="z-10 pl-3 text-center pointer-events-none flex items-center justify-center">
                  <FaRegUser className="text-base  text-teal-700" />
                </div>
                <input
                  type="text"
                  className="w-[900px] -ml-8 pl-10  py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                  placeholder="User Name"
                  {...register("userName")}
                />
              </div>
            </div>
            <div className="px-3 mb-1">
              <label for="" className="text-base">
                Password
              </label>
              <div className="flex">
                <div className="z-10 pl-3 text-center pointer-events-none flex items-center justify-center">
                  <RiLockPasswordLine className="text-base  text-teal-700" />
                </div>
                <input
                  type="text"
                  className="w-[900px] -ml-8 pl-10  py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
            </div>
            <div className="ml-2">
              <label for="role" className="text-base ml-1">
                Select an Role
              </label>
              <select
                id="role"
                className="w-[415px] pl-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                {...register("role")}
              >
                <option key={1} value={"Customer"}>
                  {" "}
                  Customer
                </option>
                <option key={2} value={"Shopkeeper"}>
                  {" "}
                  Shopkeeper
                </option>
              </select>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-1 mt-8">
                <button
                  type="submit"
                  className="block w-full max-w-xs mx-auto gradient-form bg-gradient-to-r from-emerald-400 to-teal-600 hover:bg-emerald-700 focus:bg-emerald-700 text-white rounded-lg px-3 py-3 font-semibold"
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;

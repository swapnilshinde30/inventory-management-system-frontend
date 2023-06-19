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
  firstName: yup.string().required("Please enter First Name"),
  lastName: yup.string().required("Please enter Last Name"),
  email: yup.string().email().min(8).max(30).required(),
  phone: yup.string().min(10).max(10).required(),
  userName: yup.string().required("Please enter User Name"),
  password: yup.string().min(8).required(),
  role: yup.string().required("Please select Role"),
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
              <label htmlFor="" className="text-base">
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
              <p className="text-red-500">{errors.firstName?.message}</p>
            </div>
            <div className="px-3 mb-1">
              <label htmlFor="" className="text-base">
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
              <p className="text-red-500">{errors.lastName?.message}</p>
            </div>
            <div className="px-3 mb-1">
              <label htmlFor="" className="text-base">
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
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="px-3 mb-1">
              <label htmlFor="" className="text-base">
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
              <p className="text-red-500">{errors.phone?.message}</p>
            </div>
            <div className="px-3 mb-1">
              <label htmlFor="" className="text-base">
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
              <p className="text-red-500">{errors.userName?.message}</p>
            </div>
            <div className="px-3 mb-5">
              <label htmlFor="" className="text-base">
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
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            <div className="flex justify-center">
              <label htmlFor="" className="text-base mr-5">
                Select Role:
              </label>
              {/* <!--First radio--> */}
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="role"
                  id="inlineRadio1"
                  value="shopkeeper"
                  checked={true}
                  {...register("role")}
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio1"
                >
                  Shopkeeper
                </label>
              </div>

              {/* <!--Second radio--> */}
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="role"
                  id="inlineRadio2"
                  value="customer"
                  {...register("role")}
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio2"
                >
                  Customer
                </label>
              </div>
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

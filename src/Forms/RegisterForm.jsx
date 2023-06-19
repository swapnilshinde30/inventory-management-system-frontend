import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "../stores/userStore";
import image from "../../src/images/images/register.jpg";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().min(8).max(30).required(),
  phone: yup.string().min(10).max(10).required(),
  userName: yup.string().required(),
  password: yup.string().min(8).required(),
});
const RegisterForm = (props) => {
  const { showModal, setShowModal } = props;

  const navigate = useNavigate();

  const callAddUserAPI = useUserStore((state) => state.addUserAPI);

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
  };

  return (
    <>
      {showModal ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex  justify-center text-center sm:items-center sm:p-0">
              <div className="transform w-[800px] h-[600px] overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
                <div className="bg-gray-100 text-gray-500">
                  <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 gradient-form bg-gradient-to-r from-emerald-400 to-teal-600">
                      <img
                        className="w-[580px] h-[620px]"
                        src={
                          process.env.PUBLIC_URL +
                          "/images/categories/" +
                          "register" +
                          ".jpg"
                        }
                      />
                    </div>
                    <div className="w-full md:w-1/2 py-6 px-5 md:px-10">
                      <div className="text-center mb-1">
                        <h1 className="font-bold text-3xl text-gray-900">
                          REGISTER
                        </h1>
                      </div>
                      <div>
                        <form onSubmit={handleSubmit(onsubmitHandler)}>
                          <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-2">
                              <label
                                for=""
                                className="text-xs font-semibold px-1"
                              >
                                First name
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <FaRegUser className="text-base" />
                                </div>
                                <input
                                  type="text"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                                  placeholder="First Name"
                                  {...register("firstName")}
                                />
                              </div>
                            </div>
                            <div className="w-1/2 px-3 mb-2">
                              <label
                                for=""
                                className="text-xs font-semibold px-1"
                              >
                                Last name
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <FaRegUser className="text-base" />
                                </div>
                                <input
                                  type="text"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                                  placeholder="Last Name"
                                  {...register("lastName")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">
                              <label
                                for=""
                                className="text-xs font-semibold px-1"
                              >
                                Email
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <MdOutlineMailOutline className="text-xl" />
                                </div>
                                <input
                                  type="email"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                                  placeholder="Email"
                                  {...register("email")}
                                />
                                <p>{errors.email?.message}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">
                              <label
                                for=""
                                className="text-xs font-semibold px-1"
                              >
                                Phone
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <FiPhone className="text-xl" />
                                </div>
                                <input
                                  type="phone"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                                  placeholder="Phone No"
                                  {...register("phone")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">
                              <label
                                for=""
                                className="text-xs font-semibold px-1"
                              >
                                User Name
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <FaRegUser className="text-base" />
                                </div>
                                <input
                                  type="text"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                                  placeholder="User Name"
                                  {...register("userName")}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex -mx-3">
                            <div className="w-full px-3 mb-2">
                              <label
                                for=""
                                className="text-xs font-semibold px-1"
                              >
                                Password
                              </label>
                              <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                  <RiLockPasswordLine className="text-xl" />
                                </div>
                                <input
                                  type="password"
                                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-emerald-500"
                                  placeholder="Enter Password"
                                  {...register("password")}
                                />
                              </div>
                            </div>
                          </div>

                          <label
                            for="role"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Select an Role
                          </label>
                          <select
                            id="role"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RegisterForm;

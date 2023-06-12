import React from "react";
import { SlClose } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserStore } from "../stores/userStore";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().min(8).max(30).required(),
  phone: yup.string().min(10).max(10).required(),
  userName: yup.string().required(),
  password: yup.string().min(8).required(),
  role: yup.string().required(),
});
const EditUserForm = () => {
  const [showModal] = useState(true);
  const navigate = useNavigate();

  const callAddUserAPI = useUserStore((state) => state.addUserAPI);
  const users = useUserStore((state) => state.users);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    callAddUserAPI(data);
    navigate("/users");
  };

  // const users = [
  //   {
  //     _id: 1,
  //     firstName: "Sachin",
  //     lastName: "Chavan",
  //     Role: "ShopKeeper",
  //     LastLoggedIn: "08-06-2023",
  //   },
  //   {
  //     _id: 2,
  //     firstName: "Swapnil",
  //     lastName: "Shinde",
  //     Role: "ShopKeeper",
  //     LastLoggedIn: "08-06-2023",
  //   },
  //   {
  //     _id: 3,
  //     firstName: "Sadanand",
  //     lastName: "Fulari",
  //     Role: "Customer",
  //     LastLoggedIn: "08-06-2023",
  //   },
  //   {
  //     _id: 4,
  //     firstName: "Dhiraj",
  //     lastName: "Shinde",
  //     Role: "Customer",
  //     LastLoggedIn: "08-06-2023",
  //   },
  //   {
  //     _id: 5,
  //     firstName: "Surya",
  //     lastName: "Lad",
  //     Role: "Customer",
  //     LastLoggedIn: "08-06-2023",
  //   },
  //   {
  //     _id: 6,
  //     firstName: "Himanshu",
  //     lastName: "Patil",
  //     Role: "Customer",
  //     LastLoggedIn: "08-06-2023",
  //   },
  // ];
  return (
    <>
      {showModal ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-l transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex border border-b-black">
                  <div className="font-semibold text-black mt-6 ml-6">
                    <p>REGISTER</p>
                  </div>
                  <div className="ml-[360px] mt-6 mb-4">
                    <SlClose
                      className="w-7 h-7 text-neutral-500 cursor-pointer"
                      onClick={() => navigate("/users")}
                    />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="mx-5 my-5 font-normal">
                    <input
                      type="text"
                      placeholder="First Name"
                      // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                      className="w-full py-2 px-3 mb-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                      className="w-full py-2 px-3 mb-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                      className="w-full py-2 px-3 mb-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                      className="w-full py-2 px-3 mb-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                      className="w-full py-2 px-3 mb-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                    />

                    <input
                      type="text"
                      placeholder="User Name"
                      // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                      className="w-full py-2 px-3 mb-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                      className="w-full py-2 px-3 mb-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                    />

                    <select
                      id="Role"
                      className="w-full py-2 px-3 mb-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                    >
                      {" "}
                      <option selected>Role</option>
                      {users.map((role) => (
                        <option key={role._id} value={role._id}>
                          {role.role}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex p-8">
                    <button
                      type="button"
                      className="ml-64 rounded-full text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                      onClick={() => navigate("/users")}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 rounded-full bg-teal-500 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                      //   onClick={() => setShowModal(false)}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditUserForm;

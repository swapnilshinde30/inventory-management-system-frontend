import React from "react";
import { SlClose } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserStore } from "../stores/userStore";

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter First Name"),
  lastName: yup.string().required("Please enter Last Name"),
  address: yup.string().required("Please enter address"),
  email: yup
    .string()
    .email()
    .min(8)
    .max(30)
    .required("Please enter correct Email"),
  phone: yup.string().min(10).max(10).required("Enter valid Phone No"),
  userName: yup.string().required("User Name is required"),
  password: yup.string().min(8).required("Password is required"),
  role: yup.string().required("Please select your role"),
});
const EditUserForm = (props) => {
  const { showModal, setShowModal } = props;
  // const [showModal] = useState(true);
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
    setShowModal(false);
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
                  <div className="font-semibold text-xl text-teal-500 mt-6 ml-6 ">
                    <p>MANAGE USER</p>
                  </div>
                  <div className="ml-[300px] mt-6 mb-4">
                    <SlClose
                      className="w-7 h-7 text-teal-500 cursor-pointer"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="mx-5 my-5 font-normal">
                    <div className="flex mx-2 space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">First Name:</span>
                        <input
                          type="text"
                          placeholder="First Name"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[220px] py-2 px-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        />

                        <p className="text-red-500">
                          {errors.firstName?.message}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">Last Name:</span>
                        <input
                          type="text"
                          placeholder="Last Name"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        />
                        <p className="text-red-500">
                          {errors.lastName?.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex mx-2 space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">Address:</span>
                        <input
                          type="text"
                          placeholder="Address"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[220px] py-2 px-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        />
                        <p className="text-red-500">
                          {errors.address?.message}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">Email:</span>
                        <input
                          type="text"
                          placeholder="Email"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        />
                        <p className="text-red-500">{errors.email?.message}</p>
                      </div>
                    </div>
                    <div className="flex mx-2 space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">Phone:</span>
                        <input
                          type="text"
                          placeholder="Phone"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        />
                        <p className="text-red-500">{errors.phone?.message}</p>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">User Name:</span>
                        <input
                          type="text"
                          placeholder="User Name"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        />
                        <p className="text-red-500">
                          {errors.userName?.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex mx-2 space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">Password:</span>
                        <input
                          type="password"
                          placeholder="Password"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        />
                        <p className="text-red-500">
                          {errors.password?.message}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">Role:</span>
                        <select
                          id="Role"
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        >
                          {" "}
                          <option selected>Role</option>
                          {users.map((role) => (
                            <option key={role._id} value={role._id}>
                              {role.role}
                            </option>
                          ))}
                        </select>
                        <p className="text-red-500">{errors.role?.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 mb-5">
                    <button
                      type="button"
                      className="ml-64 rounded-full text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                      onClick={() => setShowModal(false)}
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

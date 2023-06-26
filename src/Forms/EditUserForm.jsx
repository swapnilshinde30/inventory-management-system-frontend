import React, { useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserStore } from "../stores/userStore";
import "react-toastify/dist/ReactToastify.css";
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().min(8).max(30).required(),
  phone: yup.string().min(10).max(10).required(),
  userName: yup.string().required(),
  role: yup.string().required(),
});

const EditUserForm = (props) => {
  const { showModal, setShowModal, userId } = props;
  const navigate = useNavigate();
  const user = useUserStore((state) => state.currentUser);
  const callGetUserAPI = useUserStore((state) => state.getUserAPI);
  const callAddUserAPI = useUserStore((state) => state.addUserAPI);
  const callEditUserAPI = useUserStore((state) => state.editUserAPI);

  const userErrorMessage = useUserStore((state) => state.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log("hi");
    if (data._id) {
      console.log(data);
      callEditUserAPI(data);
    } else {
      console.log("in add");
      callAddUserAPI(data);
    }
    navigate("/users");
    setShowModal(false);
  };
  const closeAndReset = () => {
    setShowModal(false);
    navigate(-1);
    reset();
  };
  useEffect(() => {
    if (!userId) return;
    console.log("here");
    callGetUserAPI(userId);
    setValue("firstName", user.firstName);
    setValue("lastName", user.lastName);
    setValue("_id", user._id);
    setValue("email", user.email);
    setValue("phone", user.phone);
    setValue("userName", user.userName);
    setValue("role", user.role);
  }, [userId, user.firstName, showModal]);

  return (
    <>
      {userErrorMessage}
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
                      onClick={() => {
                        closeAndReset();
                      }}
                    />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="mx-5 my-5 font-normal">
                    <div className="flex mx-2 space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">
                          First Name:{" "}
                          <span id="compulsory" className="text-red-500">
                            *
                          </span>
                        </span>
                        <input
                          type="text"
                          placeholder="First Name"
                          className="w-[220px] py-2 px-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("firstName")}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">
                          Last Name:{" "}
                          <span id="compulsory" className="text-red-500">
                            *
                          </span>
                        </span>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("lastName")}
                        />
                      </div>
                    </div>
                    <div className="flex mx-2 space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">
                          Email:{" "}
                          <span id="compulsory" className="text-red-500">
                            *
                          </span>
                        </span>
                        <input
                          type="text"
                          placeholder="Email"
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("email")}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">
                          Phone:{" "}
                          <span id="compulsory" className="text-red-500">
                            *
                          </span>
                        </span>
                        <input
                          type="text"
                          placeholder="Phone"
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("phone")}
                        />
                      </div>
                    </div>
                    <div className="flex mx-2 space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500">
                          User Name:{" "}
                          <span id="compulsory" className="text-red-500">
                            *
                          </span>
                        </span>
                        <input
                          type="text"
                          placeholder="User Name"
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("userName")}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">
                          Role:{" "}
                          <span id="compulsory" className="text-red-500">
                            *
                          </span>
                        </span>
                        <select
                          id="Role"
                          className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md appearance-none"
                          {...register("role")}
                        >
                          {" "}
                          <option value={""} hidden>
                            Role
                          </option>
                          <option key={1} value={"shopkeeper"}>
                            Shopkeeper
                          </option>
                          <option key={2} value={"customer"}>
                            Customer
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex p-2 mb-5">
                    <button
                      type="button"
                      className="ml-64 rounded-full text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                      onClick={() => {
                        closeAndReset();
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 rounded-full bg-teal-500 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
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

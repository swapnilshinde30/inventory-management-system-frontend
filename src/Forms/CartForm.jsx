import React, { useEffect, useState } from "react";
import { SlClose } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CartForm = (props) => {
  const { showModal, setShowModal } = props;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(),
  });

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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex border border-b-black">
                  <div className="font-semibold text-xl text-teal-500 mt-6 ml-6 w-64">
                    <p>Add Item To Cart</p>
                  </div>
                  <div className="ml-[240px] mt-6 mr-5 mb-4">
                    <SlClose
                      className="w-7 h-7 text-teal-500 cursor-pointer"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                </div>
                {/* <form onSubmit={handleSubmit(onSubmitHandler)}> */}
                <div className="mx-7 my-5">
                  <div className="flex mx-2 space-x-2 my-5">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Shop Item:</span>
                      <select
                        id="itemClasses"
                        className="w-[220px] py-2 px-3 mb-3 appearance-none shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        //   {...register("category")}
                      >
                        {" "}
                        <option>Shop Item</option>
                        {/* {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))} */}
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500">
                        Prefered Delivery Date:
                      </span>
                      <input
                        type="date"
                        placeholder="Prefered Delivery Date"
                        className="w-[220px] py-2 px-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                      />

                      <p className="text-red-500">
                        {/* {errors.firstName?.message} */}
                      </p>
                    </div>
                  </div>
                  <div className="flex mx-2 space-x-2 my-5">
                    <div className="flex flex-col">
                      <span className="text-gray-500">Amount:</span>
                      <input
                        type="text"
                        placeholder="Amount"
                        className="w-[220px] py-2 px-3  text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                      />

                      <p className="text-red-500">
                        {/* {errors.firstName?.message} */}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500"> Unit:</span>
                      <input
                        type="text"
                        placeholder="Unit"
                        className="w-[220px] py-2 px-3 text-black shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                      />
                      <p className="text-red-500">
                        {/* {errors.lastName?.message} */}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex p-8">
                  <button
                    type="button"
                    className="ml-64 rounded-full text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                    onClick={() => {
                      setShowModal(false);
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
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CartForm;

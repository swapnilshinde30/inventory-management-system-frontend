import React from "react";
import { SlClose } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import { useEffect } from "react";
import * as yup from "yup";
import { useShopStore } from "../stores/shopStore";
import { useCategoryStore } from "../stores/categoryStore";
import { useParams } from "react-router-dom";
import { useUserStore } from "../stores/userStore";

const schema = yup.object().shape({
  name: yup.string().required("Please enter Name"),
  addressLine1: yup.string().required("Please enter address1"),
  addressLine2: yup.string().required("Please enter address2"),
  area: yup.string().required("Please enter area"),
  city: yup.string().required("Please enter city"),
  state: yup.string().required("Please enter state"),
  zipcode: yup.string().required("Please enter zipcode"),
  category: yup.string().required("Please select Category"),
  // owner: yup.string().required("Please select Owner"),
  contactPerson: yup.object().shape({
    name: yup.string().required("Please enter name"),
    phone: yup.string().required("Please enter phone No"),
  }),
});

const ShopForm = (props) => {
  const { showModal, setShowModal } = props;
  const params = useParams();
  const shopId = params.id;
  const navigate = useNavigate();

  const callGetShopAPI = useShopStore((state) => state.getShopAPI);
  const callAddShopAPI = useShopStore((state) => state.addShopAPI);
  const callEditShopAPI = useShopStore((state) => state.editShopAPI);
  const shop = useShopStore((state) => state.currentShop);
  const errorMessage = useShopStore((state) => state.error);

  const callgetAllCategoriesAPI = useCategoryStore(
    (state) => state.getAllCategoriesAPI
  );
  const categories = useCategoryStore((state) => state.categories);

  const callgetAllUsersAPI = useUserStore((state) => state.getAllUsersAPI);
  const users = useUserStore((state) => state.users);
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user);
  // console.log(callgetAllUsersAPI);
  // console.log(callgetAllCategoriesAPI);
  // console.log(categories);
  // console.log(users);

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
    console.log(data);
    if (data._id) {
      callEditShopAPI(data);
    } else {
      data.owner = user._id;
      console.log(data);
      callAddShopAPI(data);
    }
    navigate("/shops");
    setShowModal(false);
  };
  const closeAndReset = () => {
    setShowModal(false);
    navigate("/shops");
    reset();
  };
  useEffect(() => {
    callgetAllCategoriesAPI();
    callgetAllUsersAPI();
    if (!shopId) return;
    callGetShopAPI(shopId);
    if (!shop._id) return;
    setValue("_id", shop._id);
    setValue("name", shop.name);
    setValue("shopId", shop.shopId);
    setValue("addressLine1", shop.addressLine1);
    setValue("addressLine2", shop.addressLine2);
    setValue("area", shop.area);
    setValue("city", shop.city);
    setValue("state", shop.state);
    setValue("zipcode", shop.zipcode);
    setValue("category", shop.category);
    // setValue("owner", shop.owner);
    setValue("contactPerson.name", shop.contactPerson["name"]);
    setValue("contactPerson.phone", shop.contactPerson["phone"]);
  }, [shopId, shop?.name, errorMessage]);

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
                  <div className="font-semibold text-xl text-teal-500 mt-6 ml-6">
                    <p> MANAGE SHOP</p>
                  </div>
                  <div className="ml-[280px] mt-6 mb-4">
                    <SlClose
                      className="w-7 h-7 text-teal-500 cursor-pointer"
                      onClick={() => closeAndReset()}
                    />
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="mx-7 space-y-2 my-5">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-base">Name:</span>
                      <input
                        type="text"
                        placeholder="Name"
                        // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                        className="w-full py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        {...register("name")}
                      />
                      <p className="text-red-500">{errors.name?.message}</p>
                    </div>

                    <div className="flex space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-base">
                          Address Line 1:
                        </span>
                        <input
                          type="text"
                          placeholder="Address Line 1"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[224px] py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("addressLine1")}
                        />
                        <p className="text-red-500">
                          {errors.addressLine1?.message}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-base">
                          Address Line 2:
                        </span>
                        <input
                          type="text"
                          placeholder="Address Line 2"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[224px] py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("addressLine2")}
                        />
                        <p className="text-red-500">
                          {errors.addressLine2?.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-base">Area:</span>
                        <input
                          type="text"
                          placeholder="Area"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[224px] py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("area")}
                        />
                        <p className="text-red-500">{errors.area?.message}</p>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-base">City:</span>
                        <input
                          type="text"
                          placeholder="City"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[224px] py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("city")}
                        />
                        <p className="text-red-500">{errors.city?.message}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 my-5">
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-base">State:</span>
                        <input
                          type="text"
                          placeholder="State"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[224px] py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("state")}
                        />
                        <p className="text-red-500">{errors.state?.message}</p>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-base">
                          Zipcode:
                        </span>
                        <input
                          type="text"
                          placeholder="ZipCode"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-[224px] py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("zipcode")}
                        />
                        <p className="text-red-500">
                          {errors.zipcode?.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-base">Category:</span>
                      <select
                        id="Category"
                        className="w-full py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md appearance-none"
                        {...register("category")}
                      >
                        {" "}
                        <option className="" value={""} hidden>
                          Select Category
                        </option>
                        {categories.map((category) => (
                          <option
                            className="text-gray-500 text-base"
                            key={category._id}
                            value={category._id}
                          >
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <p className="text-red-500">{errors.category?.message}</p>
                    </div>
                    {/* <select
                      id="Owner"
                      className="w-full py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                      {...register("owner")}
                    >
                      {" "}
                      <option selected>Owner</option>
                      {users.map((owners) => (
                        <option key={owners._id} value={owners._id}>
                          {owners.firstName}
                        </option>
                      ))}
                    </select> */}
                    <div className="">
                      <span className="text-gray-500 text-base">
                        Contact Person:
                      </span>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Name"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-full py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("contactPerson.name")}
                        />
                        {/* <p className="text-red-500">
                          {errors.contactPerson["name"]?.message}
                        </p> */}
                        <input
                          type="text"
                          placeholder="Phone"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-full py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("contactPerson.phone")}
                        />
                        {/* <p className="text-red-500">
                          {errors.contactPerson["phone"]?.message}
                        </p> */}
                      </div>
                    </div>
                  </div>

                  <div className="flex p-8">
                    <button
                      type="button"
                      className="ml-64 rounded-full text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                      onClick={() => closeAndReset()}
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
                    {errorMessage && (
                      <p className="mr-10 text-center text-red-500">
                        {errorMessage}
                      </p>
                    )}
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

export default ShopForm;

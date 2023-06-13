import React from "react";
import { SlClose } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as yup from "yup";
import { useShopStore } from "../stores/shopStore";
import { useCategoryStore } from "../stores/categoryStore";

const schema = yup.object().shape({
  name: yup.string().required("Please enter Name"),
  addressLine1: yup.string().required("Please enter address1"),
  addressLine2: yup.string().required("Please enter address2"),
  area: yup.string().required("Please enter area"),
  city: yup.string().required("Please enter city"),
  state: yup.string().required("Please enter state"),
  zipcode: yup.string().required("Please enter zipcode"),
  // category: myJoiObjectId().required(),
  // owner: myJoiObjectId().required(),
  contactPerson: yup.object().shape({
    name: yup.string().required("Please enter name"),
    phone: yup.string().required("Please enter phone No"),
  }),
});

const ShopForm = (props) => {
  const { showModal, setShowModal } = props;
  // const [showModal] = useState(true);
  const navigate = useNavigate();
  const callAddShopAPI = useShopStore((state) => state.addShopAPI);
  const categories = useCategoryStore((state) => state.categories);
  const callgetAllCategoriesAPI = useCategoryStore(
    (state) => state.getAllCategoriesAPI
  );

  // const callgetAllUsersAPI = useUserStore((state) => state.getAllUsersAPI);
  // const users = useUserStore((state) => state.users);
  // console.log(callgetAllUsersAPI);
  // console.log(callgetAllCategoriesAPI);
  // console.log(categories);
  // console.log(users);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log(data);
    callAddShopAPI(data);
    navigate("/shops");
    setShowModal(false);
  };
  useEffect(() => {
    callgetAllCategoriesAPI();
    // callgetAllUsersAPI("shopkeeper");
  }, []);

  // const shops = [
  //   {
  //     _id: 1,
  //     shop: "Sadanand Kirana Store",
  //     category: "Grocery",
  //     owner: "Sadanand",
  //     shopId: "SADA01",
  //   },
  //   {
  //     _id: 1,
  //     shop: "Surya Sweets",
  //     category: "Sweets",
  //     owner: "Surya",
  //     shopId: "SURYA02",
  //   },
  //   {
  //     _id: 1,
  //     shop: "Dhiraj Cafe",
  //     category: "Beverage",
  //     owner: "Dhiraj",
  //     shopId: "DHI03",
  //   },
  //   {
  //     _id: 1,
  //     shop: "Himanshu Medical",
  //     category: "Medical",
  //     owner: "Himanshu",
  //     shopId: "HIM04",
  //   },
  //   {
  //     _id: 1,
  //     shop: "Vaishnavi Fruits",
  //     category: "Fruits",
  //     owner: "Vaishnavi",
  //     shopId: "VAIS05",
  //   },
  //   {
  //     _id: 1,
  //     shop: "Swapnil Bakery",
  //     category: "Bakery",
  //     owner: "Swapnil",
  //     shopId: "SWAP06",
  //   },
  //   {
  //     _id: 1,
  //     shop: "Sachin Vegitables",
  //     category: "Vegitables",
  //     owner: "Sachin",
  //     shopId: "SAC07",
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
                      onClick={() => setShowModal(false)}
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
                        className="w-full py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                        {...register("category")}
                      >
                        {" "}
                        <option className="">
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
                      {errors.contactPerson.name?.message}
                    </p> */}
                        <input
                          type="number"
                          placeholder="Phone"
                          // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                          className="w-full py-1 px-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                          {...register("contactPerson.phone")}
                        />
                        {/* <p className="text-red-500">
                      {errors.contactPerson.phone?.message}
                    </p> */}
                      </div>
                    </div>
                  </div>

                  <div className="flex p-8">
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

export default ShopForm;

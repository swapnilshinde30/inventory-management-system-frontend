import React from "react";
import { SlClose } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopItemsForm = (props) => {
  const {showModal,setShowModal}=props

  // const [showModal] = useState(true);
  const navigate = useNavigate();
  const items = [
    {
      _id: 1,
      name: "blue lagoon",
      itemClass: "Mocktail",
      imagePath: "bluelagoon.jpg",
      avlQuantity: 5,
    },
    {
      _id: 2,
      name: "fruit cake",
      itemClass: "Cake",
      imagePath: "fruitcake.jpg",
      avlQuantity: 2,
    },
    {
      _id: 3,
      name: "chocolate cake",
      itemClass: "Cake",
      imagePath: "chocolate cake.jpg",
      avlQuantity: 5,
    },
    {
      _id: 4,
      name: "coughsils",
      itemClass: "Cough Syrup",
      imagePath: "coughsils.jpg",
      avlQuantity: 6,
    },
    {
      _id: 5,
      name: "benadryl",
      itemClass: "Cough Syrup",
      imagePath: "benadryl.jpg",
      avlQuantity: 3,
    },
    {
      _id: 6,
      name: "mango burfi",
      itemClass: "Burfi",
      imagePath: "mangoburfi.jpg",
      avlQuantity: 5,
    },
  ];

  const shops = [
    { _id: 1, name: "Sadanand Kirana Store" },
    { _id: 2, name: "Surya Sweets" },
    { _id: 3, name: "Dhiraj Cafe" },
    { _id: 4, name: "Himanshu Medical" },
    { _id: 5, name: "Vaishnavi Fruits" },
    { _id: 6, name: "Swapnil Bakery" },
    { _id: 7, name: "Sachin Vegitables" },
  ];

  return (
    <>
      {showModal ? (
        // <div className=" absolute bottom-1 right-1 h-auto w-full transition-all ease-in-out max-w-[500px]">
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
                    <p>MANAGE SHOP ITEMS</p>
                  </div>
                  <div className="ml-[220px] mt-6 mb-4">
                    <SlClose
                      className="w-7 h-7 text-teal-500 cursor-pointer"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                </div>

                <div className="my-5 mx-7">
                  <select
                    id="shops"
                    className="w-full py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-lg"
                  >
                    {" "}
                    <option selected>Select Shop</option>
                    {shops.map((shop) => (
                      <option key={shop._id} value={shop._id}>
                        {shop.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="my-2 mx-7">
                  <select
                    id="item"
                    className="w-full py-2 px-3 mb-2 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-lg"
                  >
                    {" "}
                    <option selected>Select Items</option>
                    {items.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-row">
                  <div className="ml-[50px]">
                    <p className="text-xl font-semibold text-emerald-500">
                      Quantity Addition
                    </p>
                  </div>
                  <div className="ml-[70px]">
                    <p className="text-xl font-semibold text-emerald-500">
                      Available Quantity
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 my-2 mx-7 ">
                  <div className="form-outline mb-1">
                    <input
                      type="Quantity Addition"
                      placeholder="Ammount"
                      className="border rounded-lg w-[100px] h-9 pl-4  border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="form-outline mb-1 ">
                    <input
                      type="Quantity Addition"
                      placeholder="Unit"
                      className="border rounded-lg w-[100px] h-9 pl-8 mr-7 border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="form-outline mb-1">
                    <input
                      type="Available Quantity"
                      placeholder="Ammount"
                      className="border rounded-lg w-[100px] h-9 pl-4  border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="form-outline mb-1 ">
                    <input
                      type="Available Quantity"
                      placeholder="Unit"
                      className="border rounded-lg w-[100px] h-9 pl-8  border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="flex p-5">
                  <button
                    type="button"
                    className="ml-[50px] rounded-full text-neutral-500 border border-neutral-500 px-10 pb-1 pt-1"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ml-[120px] rounded-full bg-teal-500 px-11 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                    //   onClick={() => setShowModal(false)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          //{" "}
        </div>
      ) : null}
    </>
  );
};

export default ShopItemsForm;

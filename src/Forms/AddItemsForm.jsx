import React from "react";
import { SlClose } from "react-icons/sl";

const AddItemsForm = ({ isModalOpen, handleModalClose }) => {
  const itemClasses = [
    {
      _id: 1,
      name: "Mocktail",
      category: "beverage",
      imagePath: "mocktail.jpg",
    },
    {
      _id: 2,
      name: "Colddrink",
      category: "bevarage",
      imagePath: "colddrink.jpg",
    },
    { _id: 3, name: "Khari", category: "bakery", imagePath: "khari.jpeg" },
    { _id: 4, name: "Cake", category: "bakery", imagePath: "cake.jpg" },
    { _id: 5, name: "Burfi", category: "sweets", imagePath: "burfi.jpg" },
    { _id: 6, name: "Namkeen", category: "sweets", imagePath: "namkeen.jpg" },
    { _id: 7, name: "Rice", category: "grains", imagePath: "rice.jpg" },
    { _id: 8, name: "Wheat", category: "grains", imagePath: "wheat.jpg" },
    {
      _id: 9,
      name: "Leafy greens",
      category: "vegetables",
      imagePath: "leafy greens.jpg",
    },
    {
      _id: 10,
      name: "Cough Syrup",
      category: "medicine",
      imagePath: "coughsyrup.jpg",
    },
  ];

  if (!isModalOpen) return null;
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        id="modal-body"
        onClick={(e) => e.target.id === "modal-body" && handleModalClose()}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="flex border border-b-black">
                <div className="font-semibold mt-6 ml-6">
                  <p>ADD ITEMS</p>
                </div>
                <div className="ml-[350px] mt-6 mb-4">
                  <SlClose
                    className="w-7 h-7 text-neutral-500 cursor-pointer"
                    onClick={() => handleModalClose()}
                  />
                </div>
              </div>
              <div className="flex mx-7 space-x-2 my-5">
                <input
                  type="text"
                  placeholder="Name"
                  // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                  className="w-full py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                />
                <select
                  id="itemClasses"
                  className="w-full py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                >
                  <option selected>Item Class</option>
                  {itemClasses.map((itemClass) => (
                    <option key={itemClass._id} value={itemClass._id}>
                      {itemClass.category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mx-7 space-x-2 my-2">
                {" "}
                <input
                  type="text"
                  placeholder="Description"
                  // className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                  className="w-[450px] py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                />
              </div>
              <div className="w-full md:w-[450px] md:max-w-full mx-auto">
                <div>
                  <form
                    method="POST"
                    // action="https://herotofu.com/start"
                    // enctype="multipart/form-data"
                  >
                    <label className="">
                      <input
                        required
                        name="photo"
                        type="file"
                        className=" w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </label>
                  </form>
                </div>
              </div>
              <div className="flex p-8">
                <button
                  type="button"
                  className="ml-64 rounded-full text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                  onClick={() => handleModalClose()}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="ml-3 rounded-full bg-teal-500 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                  //   onClick={() => setShowModal(false)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItemsForm;

import React from "react";
import { SlClose } from "react-icons/sl";

const AddItemClassesForm = ({ isModalOpen, handleModalClose }) => {
  //   const [showModal, setShowModal] =useState(true);
  const itemClasses = [
    {
      _id: 1,
      name: "mocktail",
      category: "beverage",
      imagePath: "mocktail.jpg",
    },
    {
      _id: 2,
      name: "colddrink",
      category: "bevarage",
      imagePath: "colddrink.jpg",
    },
    { _id: 3, name: "khari", category: "bakery", imagePath: "khari.jpeg" },
    { _id: 4, name: "cake", category: "bakery", imagePath: "cake.jpg" },
    { _id: 5, name: "burfi", category: "sweets", imagePath: "burfi.jpg" },
    { _id: 6, name: "namkeen", category: "sweets", imagePath: "namkeen.jpg" },
    { _id: 7, name: "rice", category: "grains", imagePath: "rice.jpg" },
    { _id: 8, name: "wheat", category: "grains", imagePath: "wheat.jpg" },
    {
      _id: 9,
      name: "leafy greens",
      category: "vegetables",
      imagePath: "leafy greens.jpg",
    },
    {
      _id: 10,
      name: "cough syrup",
      category: "medicine",
      imagePath: "coughsyrup.jpg",
    },
  ];

  if (!isModalOpen) return null;
  return (
    <>
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        id="modal-body"
        onClick={(e) => e.target.id === "modal-body" && handleModalClose()}
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="flex border border-b-black">
                <div className="font-semibold mt-6 ml-6">
                  <p>ADD ITEM CLASSE</p>
                </div>
                <div className="ml-72 mt-6 mb-4">
                  <SlClose
                    className="w-7 h-7 text-neutral-500 cursor-pointer"
                    onClick={() => handleModalClose()}
                  />
                </div>
              </div>
              <div className="mx-7 my-5">
                <input
                  type="text"
                  placeholder="Name"
                  // class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                  className="w-full py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                />
                <select
                  id="itemClasses"
                  class="w-full py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                >
                  {" "}
                  <option selected>Category</option>
                  {itemClasses.map((categories) => (
                    <option key={categories._id} value={categories._id}>
                      {categories.category}
                    </option>
                  ))}
                </select>
              </div>
              <div class="w-full md:w-96 md:max-w-full mx-auto">
                <div>
                  <form
                    method="POST"
                    // action="https://herotofu.com/start"
                    // enctype="multipart/form-data"
                  >
                    <label class="">
                      <input
                        required
                        name="photo"
                        type="file"
                        class=" w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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

export default AddItemClassesForm;

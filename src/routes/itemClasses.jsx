import { Link } from "react-router-dom";
import Items from "./items";

import React from "react";
import { SlClose } from "react-icons/sl";
const ItemClasses = () => {
  const [showModal, setShowModal] = React.useState(false);
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
  return (
    <>
      <div className="flex sm:flex-column md:flex-row">
        <div className="flex-none w-56 h-16 border-r border-b border-slate-200">
          {/* 1 */}
        </div>

        <div className="flex-1 h-16 border-b border-slate-200">
          {/* Search box */}
          <div className="flex flex-row content-between">
            <div className="flex-1">
              <div className="pt-2 relative mx-auto text-gray-600">
                <input
                  className="w-30 h-5 ml-12  md:ml-12 md:w-80 md:h-7  mt-3 rounded-full border border-solid border-slate-400 bg-transparent  text-sm focus:outline-none placeholder:text-gray-500 pl-8"
                  type="search"
                  name="search"
                  placeholder="Search"
                />

                <svg
                  className=" absolute text-slate-300 h-2 w-2  md:h-4 md:w-4 fill-current ml-14 "
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ marginTop: "-22px" }}
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <button
                type="button"
                className="ml-10  md:ml-96 mt-5 rounded-full bg-teal-500 px-6 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                onClick={() => setShowModal(true)}
              >
                Add Item class
              </button>

              {showModal ? (
                <>
                  <div
                    class="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
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
                                onClick={() => setShowModal(false)}
                              />
                            </div>
                          </div>
                          <div className="mx-7 my-5">
                            <input
                              type="text"
                              placeholder="ITEM CLASS"
                              // class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none "
                              className="w-full py-2 px-3 mb-3 shadow-sm border border-teal-300 focus:ring-teal-500 focus:outline-none focus:border-teal-500 rounded-md"
                            />
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
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="ml-3 rounded-full bg-teal-500 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                              onClick={() => setShowModal(false)}
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-none w-56 h-screen border-r border-slate-200">
          {/* 3 */}
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-6 ">
            {itemClasses.map((itemclass) => (
              <div
                key={itemclass._id}
                className=" card ml-12 mt-10 text-slate-600 w-32 h-32 rounded-xl overflow-hidden border border-slate-300"
              >
                {" "}
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/itemclass/" +
                    itemclass.imagePath
                  }
                  alt="fruits"
                  className="mt-2 w-32 h-16 hover:scale-110 transition-all duration-500 cursor-pointer"
                />
                <div className="ml-2 mb-1 text-gray-400 ">{itemclass.name}</div>
                <div className="flex w-auto">
                  <div
                    className=" badge text-gray-400 bg-slate-300 w-52 text-center p-1 hover:bg-slate-500 hover:text-white"
                    style={{ marginTop: "-4px" }}
                  >
                    <button className="hover:font-bold ">Delete</button>
                  </div>
                  <div
                    className="badge text-white bg-teal-400 w-52 text-center p-1 hover:bg-teal-600"
                    style={{ marginTop: "-4px" }}
                  >
                    <button className="hover:font-bold">Edit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemClasses;

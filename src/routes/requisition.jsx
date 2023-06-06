import React from "react";
import { SlClose } from "react-icons/sl";
import { useState } from "react";
const Requisitions = () => {
  const [showModal, setShowModal] = useState(false);
  const [shopName, setShopName] = useState("");
  const shops = [
    { _id: 1, name: "Sadanand Kirana Store", category: "Grocery" },
    { _id: 2, name: "Surya Sweets", category: "Sweets" },
    { _id: 3, name: "Dhiraj Cafe", category: "Beverage" },
    { _id: 4, name: "Himanshu Medical", category: "Medical" },
  ];
  const users = [
    {
      _id: 1,
      firstName: "Sachin",
      lastName: "Chavan",
      Role: "Shopkeeper",
      mobile: "9922992210",
      date: "05/06/2023",
      Address: "Pashan",
      Status:"PLACED"
    },
    {
      _id: 2,
      firstName: "Swapnil",
      lastName: "Shinde",
      Role: "Customer",
      mobile: "9922992211",
      date: "06/06/2023",
      Address: "Bavdhan",
      Status:"DISPATCHED"
    },
  ];

  const handleSelectShop = (name) => {
    console.log(name);
    setShopName(name);
  };
  return (
    <>
      <div className="flex sm:flex-column md:flex-row">
        <div className="flex-none w-56 h-16 border-r border-b border-slate-200">
          <p className="mx-12 my-5 font-semibold">Filter</p>
        </div>
        <div className="flex-1 h-16 border-b border-slate-200">
          {/* Search box */}
          <div className="flex flex-row content-between">
            <div className="flex-1">
              <div className="pt-2 relative mx-auto text-gray-600">
                <input
                  className="w-30 h-5 ml-12  md:ml-5 md:w-80 md:h-7  mt-3 rounded-full border border-solid border-slate-400 bg-transparent  text-sm focus:outline-none placeholder:text-gray-500 pl-8"
                  type="search"
                  name="search"
                  placeholder="Search"
                />

                <svg
                  className=" absolute text-slate-300 h-2 w-2  md:h-4 md:w-4 fillCurrent ml-7 "
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
          </div>
          <div className="flex flex-row">
            <div className="pr-10 w-[650px]">
              <div className="mt-5 w-auto">
                <div class="flex flex-row space-x-2 pl-5 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {shops.map((shop) => (
                      <div
                        id={shop._id}
                        key={shop._id}
                        className="border rounded-lg w-28 h-20 px-2 py-2  hover:border-teal-400 focus:outline-none cursor-pointer"
                        onClick={() => handleSelectShop(shop.name)}
                      >
                        <a>
                          <div>{shop.name}</div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pl-5 pt-2 text-gray-400 dark:text-gray-500">
                <p>
                  You Have new Order in{" "}
                  <span className="font-semibold">{`${shopName}`}</span>
                </p>
              </div>
              <div>
                <div class="flex flex-col pl-5 pt-2 space-y-2 w-auto">
                  {users.map((user) => (
                    <div
                      id={user._id}
                      key={user._id}
                      className="border rounded-lg h-20 px-2 py-2
                 hover:border-teal-400 focus:outline-none cursor-pointer"
                      onClick={() => setShowModal(true)}
                    >
                      <div className="flex flex-row space-x-5  pt-2">
                        <div>
                          {" "}
                          <img
                            src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                            className="rounded-full"
                            style={{ height: "40px", width: "40px" }}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className=" text-gray-400 dark:text-gray-500">
                            Name
                          </p>
                          <div>{user.firstName + " " + user.lastName}</div>
                        </div>
                        <div>
                          <p className=" text-gray-400 dark:text-gray-500">
                            Mobile
                          </p>
                          <div>{user.mobile}</div>
                        </div>
                        <div>
                          <p className=" text-gray-400 dark:text-gray-500">
                            Date
                          </p>
                          <div>{user.date}</div>
                        </div>
                        <div>
                          <p className=" text-gray-400 dark:text-gray-500">
                            Address
                          </p>
                          <div>{user.Address}</div>
                        </div>
                        <div>
                          <p className=" text-gray-400 dark:text-gray-500">
                            Status
                          </p>
                          <div className={user.Status==="PLACED" ? "text-teal-500 font-semibold" : "text-green-500 font-semibold"}>{user.Status}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            
              </div>
            
            </div>
            {/* <div className="h-screen border-r border-slate-200"> */}
            <div>
              {showModal ? (
                <>
                  <div class=" absolute mt-3 h-auto w-[420px] transition-all ease-in-out">
                    <div
                      class="relative"
                      aria-labelledby="modal-title"
                      role="dialog"
                      aria-modal="true"
                    >
                      <div class="flex min-h-full items-end justify-center text-center sm:items-center">
                        <div class="overflow-hidden bg-white text-left border border-cyan-800 transition-all my-1 w-96">
                          <div className="py-4 px-4">
                            <div className="flex flex-col">
                              <div className="text-center" id="Image">
                                <img
                                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                                  className="rounded-full mx-auto"
                                  style={{ height: "65px", width: "65px" }}
                                  alt=""
                                  loading="lazy"
                                />
                                <div id="details" className="text-center mb-5">
                                  Sachin Chavan 9929929921
                                </div>
                                <div className="flex flex-row mb-5 pl-5 space-x-[210px] bg-neutral-100 rounded-lg h-10">
                                  <div className="font-bold">Rs.460</div>
                                  <div className="font-semibold">02 Items</div>
                                </div>
                                <div className="flex flex-col pl-5 mb-2 bg-neutral-50 rounded-lg h-[60px]">
                                  <div className="text-start text-teal-600">
                                    Wheat(Punjab Sihor){" "}
                                  </div>
                                  <div className="flex flex-row space-x-14">
                                    <div className="font-bold">Rs.60/Kg</div>
                                    <span>Ordered:5 KG</span>
                                    <div className="font-semibold">Rs.300</div>
                                  </div>
                                </div>
                                <div className="flex flex-col pl-5 mb-2 bg-neutral-50 rounded-lg h-[60px]">
                                  <div className="text-start  text-teal-600">
                                    Rice(Basmati){" "}
                                  </div>
                                  <div className="flex flex-row space-x-14">
                                    <div className="font-bold">Rs.80/Kg</div>
                                    <span>Ordered:2 KG</span>
                                    <div className="font-semibold">Rs.160</div>
                                  </div>
                                </div>
                                <div className="flex flex-col pl-5 mb-5 rounded-lg h-[60px]">
                                  <div className="text-start  text-teal-600">
                                    Bill Summary{" "}
                                  </div>
                                  <div className="flex flex-row space-x-[200px]">
                                    <div className="font-bold">Item Total</div>
                                    <div className="font-semibold">Rs.460</div>
                                  </div>
                                </div>
                                <div className="flex flex-col pl-5 bg-neutral-100 rounded-lg h-[120px]">
                                  <div className="flex flex-row mt-5 mb-5 space-x-[210px]">
                                    <div className="font-bold  text-teal-600">Total</div>
                                    <div className="font-semibold">Rs.460</div>
                                  </div>
                                  <div className="flex space-x-[120px]">
                                    <button
                                      type="button"
                                      className="ml rounded-full text-white border border-neutral-500 bg-orange-400 px-6 pb-1 pt-1"
                                      onClick={() => setShowModal(false)}
                                    >
                                      Reject
                                    </button>
                                    <button
                                      type="button"
                                      className="ml rounded-full text-white border border-neutral-500 bg-teal-600 px-6 pb-1 pt-1"
                                      onClick={() => setShowModal(false)}
                                    >
                                      Accept
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
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
      {/* </div> */}

      <div className="flex flex-col">
        <div className="flex-none w-56 h-screen border-r border-slate-200  space-y-2">
          <div class="flex items-center ml-5 mt-5">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="disabled-checked-checkbox"
              class="ml-2 font-base text-gray-400 dark:text-gray-500"
            >
              All
            </label>
          </div>
          <div class="flex items-center ml-5">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="disabled-checked-checkbox"
              class="ml-2 font-base text-gray-400 dark:text-gray-500"
            >
              Placed
            </label>
          </div>
          <div class="flex items-center ml-5">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="disabled-checked-checkbox"
              class="ml-2 font-base text-gray-400 dark:text-gray-500"
            >
              Dispatched
            </label>
          </div>
          <div className="flex flex-col">
            <div className="flex w-56 border-r border-b border-slate-200 space-y-2"></div>
            <div>
              {" "}
              <div class="flex items-center ml-5 mt-5">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Today
                </label>
              </div>
              <div class="flex items-center ml-5">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Yesterday
                </label>
              </div>
              <div class="flex items-center ml-5">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Last Week
                </label>
              </div>
              <div class="flex items-center ml-5">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Custom Date
                </label>
              </div>
              <div class="flex items-center ml-5">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Date Range
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requisitions;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RequisitionForm = () => {
  const navigate = useNavigate();
  const [showModal] = useState(true);
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
                <div className="flex flex-col">
                  <div className="text-center" id="Image">
                    <img
                      src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                      className="rounded-full mx-auto mt-5"
                      style={{ height: "65px", width: "65px" }}
                      alt=""
                      loading="lazy"
                    />
                    <div id="details" className="text-center mb-5">
                      Sachin Chavan 9929929921
                    </div>
                    <div className="flex flex-row mb-5 pl-5 space-x-[250px] bg-neutral-100 rounded-lg h-10">
                      <div className="font-bold ml-10">Rs.460</div>
                      <div className="font-semibold">02 Items</div>
                    </div>
                    <div className="flex flex-col pl-5 mb-2 bg-neutral-50 rounded-lg h-[60px]">
                      <div className="text-start text-teal-600 ml-10">
                        Wheat(Punjab Sihor){" "}
                      </div>
                      <div className="flex flex-row space-x-[75px] ml-10">
                        <div className="font-bold">Rs.60/Kg</div>
                        <span>Ordered:5 KG</span>
                        <div className="font-semibold">Rs.300</div>
                      </div>
                    </div>
                    <div className="flex flex-col pl-5 mb-2 bg-neutral-50 rounded-lg h-[60px]">
                      <div className="text-start  text-teal-600 ml-10">
                        Rice(Basmati){" "}
                      </div>
                      <div className="flex flex-row space-x-[75px] ml-10">
                        <div className="font-bold">Rs.80/Kg</div>
                        <span>Ordered:2 KG</span>
                        <div className="font-semibold">Rs.160</div>
                      </div>
                    </div>
                    <div className="flex flex-col pl-5 mb-5 rounded-lg h-[60px]">
                      <div className="text-start  text-teal-600 ml-10">
                        Bill Summary{" "}
                      </div>
                      <div className="flex flex-row space-x-[235px]">
                        <div className="font-bold ml-10">Item Total</div>
                        <div className="font-semibold">Rs.460</div>
                      </div>
                    </div>
                    <div className="flex flex-col pl-5 bg-neutral-100 rounded-lg h-[120px]">
                      <div className="flex flex-row mt-5 mb-5 space-x-[273px]">
                        <div className="font-bold  text-teal-600 ml-10">
                          Total
                        </div>
                        <div className="font-semibold">Rs.460</div>
                      </div>

                      <div className="flex space-x-[180px]">
                        <button
                          type="button"
                          className="ml-10 rounded-full text-white border border-neutral-500 bg-orange-400 px-6 pb-1 pt-1"
                          //   onClick={() => setvisible(true)}
                          onClick={() => navigate("/requisitions")}
                        >
                          Reject
                        </button>
                        <button
                          type="button"
                          className="ml rounded-full text-white border border-neutral-500 bg-teal-600 px-6 pb-1 pt-1"
                          //   onClick={() => setShowModal(false)}
                          // onClick={() => handleModalClose()}
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
      ) : null}
    </>
  );
};

export default RequisitionForm;

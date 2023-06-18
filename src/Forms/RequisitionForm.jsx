import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequisitionStore } from "../stores/requisitionStore";

const RequisitionForm = (props) => {
  const { showModal, setShowModal, requisitionDetails } = props;

  console.log(requisitionDetails);
  const callPatchRequisitionsAPI = useRequisitionStore(
    (state) => state.patchRequisitionsAPI
  );

  const [textAccept, setTextAccept] = useState("Accept");
  const [textReject, setTextReject] = useState("Reject");

  //  const navigate = useNavigate();
  // const [showModal] = useState(true);

  // useEffect(() => {
  //   if (requisitionDetails && requisitionDetails.status === "created") {
  //     setTextAccept("Accept");
  //   } else if (requisitionDetails && requisitionDetails.status === "accepted") {
  //     setTextAccept("Accepted");
  //   } else if (
  //     requisitionDetails &&
  //     requisitionDetails.status === "dispatched"
  //   ) {
  //     setTextAccept("Dispatched");
  //   }
  // }, [requisitionDetails]);

  const handleAcceptRequisition = (data, status, shopitems) => {
    if (!data) return;
    console.log(data);
    console.log(shopitems);
    const updatedRequisitions = data.map((requisition, index) => ({
      ...requisition,
      status: status === "created" ? "accepted" : "dispatched",
      shopItem: shopitems[index].shopItem,
      requiredQuantity: {
        amount: shopitems[index].requiredQuantity.amount,
        unit: shopitems[index].requiredQuantity.unit,
      },
    }));

    try {
      console.log(updatedRequisitions);
      updatedRequisitions.map((requisition) => {
        // const requisitionId = requisition.id; // Assuming the ID property is named 'id'
        console.log("in map");
        console.log(requisition);
        callPatchRequisitionsAPI(requisition);
      });
    } catch (error) {
      // Handle error if needed
      console.log(error);
    }

    const updatedStatus = status === "created" ? "accepted" : "dispatched";
    requisitionDetails.status = updatedStatus;

    if (updatedStatus === "created") {
      setTextAccept("Accept");
    } else if (updatedStatus === "accepted") {
      setTextAccept("Accepted");
    } else if (updatedStatus === "dispatched") {
      setTextAccept("Dispatched");
    }
    setShowModal(false);
  };

  if (!requisitionDetails) return null;

  const totalAmount = requisitionDetails.shopItems
    .map((requisition) => requisition.requiredQuantity.amount * 50)
    .reduce((prev, next) => prev + next, 0);

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
                    <div className="flex-col border border-b-black">
                      <img
                        src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                        className="border-double border-4 border-teal-500 rounded-full mx-auto mt-2"
                        style={{ height: "65px", width: "65px" }}
                        alt=""
                        loading="lazy"
                      />
                      <div id="details" className="text-center mb-2">
                        {`${requisitionDetails.user.firstName} ${requisitionDetails.user.lastName} ${requisitionDetails.user.phone}`}
                      </div>
                    </div>
                    <div className="flex flex-row mb-2 mt-1 pt-2 pl-5 space-x-[250px] bg-neutral-100 rounded-lg h-10">
                      <div className="font-bold ml-10">Rs. {totalAmount}</div>
                      <div className="font-semibold">02 Items</div>
                    </div>
                    {requisitionDetails.shopItems.map((item) => (
                      <div
                        key={item.itemName}
                        className="flex flex-col pl-5 mb-2 bg-neutral-50 rounded-lg h-[60px]"
                      >
                        <div className="text-start text-teal-600 ml-10">
                          {item.itemName}
                        </div>
                        <div className="flex flex-row space-x-[75px] ml-10">
                          <div className="font-bold">
                            Rs.50/{item.requiredQuantity.unit}
                          </div>
                          <span>
                            Ordered:{" "}
                            {`${item.requiredQuantity.amount} ${item.requiredQuantity.unit}`}
                          </span>
                          <div className="font-semibold">
                            Rs.{`${item.requiredQuantity.amount}` * 50}
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex flex-col pl-5 mb-2 bg-neutral-50 rounded-lg h-[60px]">
                      <div className="text-start  text-teal-600 ml-10">
                        Bill Summary{" "}
                      </div>
                      <div className="flex flex-row space-x-[235px]">
                        <div className="font-bold ml-10">Item Total</div>
                        <div className="font-semibold">Rs.{totalAmount}</div>
                      </div>
                    </div>
                    <div className="flex flex-col pl-5 bg-neutral-100 rounded-lg h-[120px]">
                      <div className="flex flex-row mt-1 mb-1 space-x-[273px]">
                        <div className="font-bold  text-teal-600 ml-10">
                          Total
                        </div>
                        <div className="font-semibold">Rs.{totalAmount}</div>
                      </div>

                      <div className="flex space-x-[180px]">
                        <button
                          type="button"
                          className="ml-10 rounded-full text-black border border-neutral-500 bg-transperent px-6 pb-1 pt-1"
                          //   onClick={() => setvisible(true)}
                          disabled={requisitionDetails.status === "accepted"}
                          onClick={() => setShowModal(false)}
                        >
                          {textReject}
                        </button>
                        <button
                          type="button"
                          className="ml rounded-full text-white border border-neutral-500 bg-teal-600 px-6 pb-1 pt-1"
                          //   onClick={() => setShowModal(false)}
                          // onClick={() => handleModalClose()}
                          onClick={() =>
                            handleAcceptRequisition(
                              requisitionDetails.requisitionIds,
                              requisitionDetails.status,
                              requisitionDetails.shopItems
                            )
                          }
                        >
                          {textAccept}
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

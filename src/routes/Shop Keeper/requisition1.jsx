import React, { useEffect } from "react";
import { useState } from "react";
import { useRequisitionStore } from "../../stores/requisitionStore";
import RequisitionForm from "../../Forms/RequisitionForm";
import { useShopStore } from "../../stores/shopStore";
import { useUserStore } from "../../stores/userStore";
import { isEqual } from "lodash";

const Requisitions1 = () => {
  const [showModal, setShowModal] = useState(false);
  // const [selectedShop, setSelectedShop] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedShop, setSelectedShop] = useState(null);
  const [shopRequisitionCounts, setShopRequisitionCounts] = useState({});
  //Applying filters
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const [previousShopRequisitionCounts, setPreviousShopRequisitionCounts] =
    useState({});

  const getAllRequisitions = useRequisitionStore(
    (state) => state.getAllRequisitionsAPI
  );
  const requisitions = useRequisitionStore((state) => state.requisitions);
  console.log(requisitions);
  const callGetAllShopsAPI = useShopStore((state) => state.getAllShopsAPI);
  const shops = useShopStore((state) => state.shops);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const callGetAllUsersAPI = useUserStore((state) => state.getAllUsersAPI);
  const users = useUserStore((state) => state.users);

  useEffect(() => {
    const fetchData = async () => {
      await getAllRequisitions();
      await callGetAllShopsAPI(user._id);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updatedShopRequisitionCounts = {};

    shops.forEach((shop) => {
      const uniqueRequisitionNumbers = new Set();

      const newRequisitions = requisitions.filter(
        (requisition) =>
          requisition.shopName === shop?.name &&
          requisition.status === "created" &&
          !uniqueRequisitionNumbers.has(requisition.requisitionNumber)
      );

      if (newRequisitions.length > 0) {
        newRequisitions.forEach((requisition) => {
          uniqueRequisitionNumbers.add(requisition.requisitionNumber);
        });

        const count = uniqueRequisitionNumbers.size;
        updatedShopRequisitionCounts[shop.name] = count;
      }
    });

    // Compare previous and current shopRequisitionCounts
    if (!isEqual(updatedShopRequisitionCounts, previousShopRequisitionCounts)) {
      setShopRequisitionCounts(updatedShopRequisitionCounts);
      setPreviousShopRequisitionCounts(updatedShopRequisitionCounts);
    }
  }, [requisitions, shops]);
  useEffect(() => {
    callGetAllShopsAPI(user._id);
    console.log(shops);
  }, []);

  useEffect(() => {
    getAllRequisitions();
    callGetAllUsersAPI();
  }, []);
  useEffect(() => {
    console.log(selectedStatuses);
  }, [selectedStatuses]);

  const handleSelectShop = (shopName) => {
    setSelectedShop(shopName);
    setSelectedStatus(null);
    let selectedRequisitions = [];
    if (requisitions) {
      selectedRequisitions = requisitions.filter(
        (requisition) => requisition.shopName === shopName
      );
      console.log(selectedRequisitions);
    }

    const groupedRequisitions = {};
    selectedRequisitions.forEach((requisition) => {
      console.log(requisition.user);
      const user = users.find((u) => u._id === requisition.user);
      const requisitionNumber = requisition.requisitionNumber;
      if (!groupedRequisitions[requisitionNumber]) {
        groupedRequisitions[requisitionNumber] = {
          user,
          shopItems: [],
          orderDate: requisition.orderDate,
          status: requisition.status,
          requisitionIds: [],
        };
      }
      groupedRequisitions[requisitionNumber].shopItems.push({
        shopItem: requisition.shopItem,
        itemName: requisition.itemName,

        requiredQuantity: {
          amount: requisition.requiredQuantity.amount,
          unit: requisition.requiredQuantity.unit,
        },
      });
      groupedRequisitions[requisitionNumber].requisitionIds.push({
        id: requisition._id,
      });
    });

    const usersData = Object.entries(groupedRequisitions).map(
      ([requisitionNumber, data]) => ({
        requisitionNumber,
        ...data,
      })
    );
    setUsersData(usersData);

    console.log(usersData);
  };

  const handleUserClick = (requisition) => {
    setSelectedUser(requisition);
    console.log(requisition);
    setShowModal(true);
  };

  const handleFilterStatus = (status) => {
    console.log(status);
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status));
    } else {
      setSelectedStatuses([...selectedStatuses, status]);
    }
    console.log(selectedStatuses);
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="flex sm:flex-column md:flex-row">
        <div className="flex-none w-56 h-16 border-r border-b border-slate-200">
          <p className="mx-12 my-5 font-semibold">Filter</p>
        </div>
        <div className="flex-1 h-16 border-b border-slate-200 w-[900px]">
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
            <div className="pr-10 w-[1100px]">
              <div className="mt-5 w-auto">
                <div className="flex flex-row space-x-2 pl-5 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {shops.map((shop) => (
                      <>
                        <div
                          id={shop._id}
                          key={shop._id}
                          className={`relative border rounded-lg w-28 h-20 px-2 py-2 hover:border-teal-400 focus:outline-none cursor-pointer ${
                            selectedShop === shop.name
                              ? "text-teal-500 font-semibold border-teal-600"
                              : ""
                          }`}
                          onClick={() => handleSelectShop(shop.name)}
                        >
                          <a href="#">
                            <div>{shop.name}</div>
                          </a>
                          {shopRequisitionCounts[shop.name] > 0 && (
                            <span className="badge bg-teal-400 text-neutral-800 rounded-full px-2  absolute top-0 right-0 -mt-2 -mr-2">
                              {shopRequisitionCounts[shop.name]}
                            </span>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pl-5 pt-2 text-gray-400 dark:text-gray-500">
                {/* <p>
                  You Have new Order in{" "}
                  <span className="font-semibold">{`${selectedShop}`}</span>
                </p>  */}
              </div>
              <div>
                <div className="flex flex-col pl-5 pt-2 space-y-2 w-auto">
                  {usersData
                    .filter((requisition) => {
                      if (selectedStatuses.length === 0) {
                        return true;
                      } else {
                        return selectedStatuses.includes(requisition.status);
                      }
                    })
                    .map((requisition) => (
                      <>
                        <div
                          //id={user._id}
                          key={requisition.user._id + Math.random()}
                          className="relative border rounded-lg h-20 px-2 py-2
                 hover:border-teal-400 focus:outline-none cursor-pointer bg-neutral-100"
                          onClick={() => handleUserClick(requisition)}
                        >
                          <div className="flex flex-row space-x-5  pt-2 ">
                            <div className="pl-8">
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
                              <div>
                                {requisition.user.firstName +
                                  " " +
                                  requisition.user.lastName}
                              </div>
                            </div>
                            <div className="pl-32">
                              <p className=" text-gray-400 dark:text-gray-500">
                                Mobile
                              </p>
                              <div>{requisition.user.phone}</div>
                            </div>
                            <div className="pl-32">
                              <p className=" text-gray-400 dark:text-gray-500">
                                Date
                              </p>
                              <div>{requisition.orderDate}</div>
                            </div>

                            <div className="pl-32">
                              <p className=" text-gray-400 dark:text-gray-500">
                                Status
                              </p>
                              <div
                                className={
                                  requisition.status === "dispatched"
                                    ? "text-teal-500 font-semibold"
                                    : requisition.status === "cancelled"
                                    ? "text-red-500 font-semibold"
                                    : requisition.status === "accepted"
                                    ? "text-purple-700 font-semibold"
                                    : requisition.status === "created"
                                    ? "text-green-500 font-semibold"
                                    : ""
                                }
                              >
                                {requisition.status.toUpperCase()}
                              </div>
                            </div>
                          </div>
                          {requisition.status === "created" && (
                            <span className="badge bg-green-400 text-neutral-600 rounded-full px-2 absolute top-0 right-0 mt-7 mr-5">
                              New
                            </span>
                          )}
                        </div>
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}

      <div className="flex flex-col">
        <div className="flex-none w-56 h-screen border-r border-slate-200  space-y-2">
          <div className="flex items-center ml-5 mt-5">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={selectedStatuses.length === 0}
              onChange={() => setSelectedStatuses([])}
            />
            <label
              for="disabled-checked-checkbox"
              className="ml-2 font-base text-gray-400 dark:text-gray-500"
            >
              All
            </label>
          </div>
          <div className="flex items-center ml-5">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={selectedStatuses.includes("created")}
              onChange={() => handleFilterStatus("created")}
            />
            <label
              for="disabled-checked-checkbox"
              className="ml-2 font-base text-gray-400 dark:text-gray-500"
            >
              Placed
            </label>
          </div>
          <div className="flex items-center ml-5">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={selectedStatuses.includes("accepted")}
              onChange={() => handleFilterStatus("accepted")}
            />
            <label
              for="disabled-checked-checkbox"
              className="ml-2 font-base text-gray-400 dark:text-gray-500"
            >
              Accepted
            </label>
          </div>

          <div className="flex items-center ml-5">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={selectedStatuses.includes("dispatched")}
              onChange={() => handleFilterStatus("dispatched")}
            />
            <label
              for="disabled-checked-checkbox"
              className="ml-2 font-base text-gray-400 dark:text-gray-500"
            >
              Dispatched
            </label>
          </div>
          <div className="flex items-center ml-5">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={selectedStatuses.includes("cancelled")}
              onChange={() => handleFilterStatus("cancelled")}
            />
            <label
              for="disabled-checked-checkbox"
              className="ml-2 font-base text-gray-400 dark:text-gray-500"
            >
              Cancelled
            </label>
          </div>
          {/* <div className="flex flex-col">
            <div className="flex w-56 border-r border-b border-slate-200 space-y-2"></div>
            <div>
              {" "}
              <div className="flex items-center ml-5 mt-5">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Today
                </label>
              </div>
              <div className="flex items-center ml-5">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Yesterday
                </label>
              </div>
              <div className="flex items-center ml-5">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Last Week
                </label>
              </div>
              <div className="flex items-center ml-5">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Custom Date
                </label>
              </div>
              <div className="flex items-center ml-5">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 font-base text-gray-400 dark:text-gray-500">
                  Date Range
                </label>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <RequisitionForm
        showModal={showModal}
        setShowModal={setShowModal}
        requisitionDetails={selectedUser}
      />
    </>
  );
};

export default Requisitions1;

import { useEffect, useState } from "react";
import ListGroup from "../common/listgroup";
import React from "react";
import { useShopitemStore } from "../../stores/shopitemStore";
import { Link, NavLink } from "react-router-dom";
import ShopItemsForm from "../../Forms/ShopItemsForm";
import { useItemClassStore } from "../../stores/itemClasseStore";
import { useItemStore } from "../../stores/itemStore";
import { useShopStore } from "../../stores/shopStore";

const ShopItems1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [shop, setShop] = useState("");
  const callGetAllShopItemsAPI = useShopitemStore(
    (state) => state.getAllShopitemsAPI
  );
  const shopitems = useShopitemStore((state) => state.shopitems);

  const callGetAllItemClassesAPI = useItemClassStore(
    (state) => state.getAllItemClassesAPI
  );
  const itemClasses = useItemClassStore((state) => state.itemClasses);

  const callGetAllItemsAPI = useItemStore((state) => state.getAllItemsAPI);
  const items = useItemStore((state) => state.items);

  const callGetAllShopsAPI = useShopStore((state) => state.getAllShopsAPI);
  const shops = useShopStore((state) => state.shops);

  const callDeleteAshopitemAPI = useShopitemStore(
    (state) => state.deleteShopitemAPI
  );

  useEffect(() => {
    callGetAllShopItemsAPI(shop); // Pass the selected shop to the API call
  }, [callGetAllShopItemsAPI, shop]);

  const filteredShopItems = shopitems.filter((shopitem) => {
    if (searchField === "") {
      return shopitem;
    } else if (
      shopitem.itemName.toLowerCase().includes(searchField.toLowerCase())
    ) {
      return shopitem;
    }
  });

  console.log(filteredShopItems);
  const user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    callGetAllItemClassesAPI();
    callGetAllShopsAPI(user._id);
  }, []);

  let count = 0;

  let arrayitem = [];

  itemClasses.map((itemclass) => {
    let noOfItems = items.filter(
      (item) => item.itemClass === itemclass._id
    ).length;
    arrayitem[count] = { name: itemclass.name, quantity: noOfItems };
    count++;
  });

  const handleSelectShop = (name) => {
    setShop(name);
    //  callGetAllShopItemsAPI(name);
    console.log(shopitems);
    console.log(name);
    console.log(shop);
  };

  useEffect(() => {
    callGetAllShopItemsAPI();
    console.log(shopitems);
  }, [shop]);
  return (
    <>
      <div className="flex sm:flex-column md:flex-row">
        <div className="flex-none w-56 h-16 border-r border-b border-slate-200">
          {/* 1 */}
        </div>

        <div className="flex-1 h-16 border-b border-slate-200">
          <div className="flex flex-row content-between">
            <div className="flex-1">
              <div className="pt-2 relative mx-auto text-gray-600">
                <input
                  onChange={(event) => setSearchField(event.target.value)}
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
                className="ml-10  md:ml-96 mt-5 rounded-full bg-teal-500 px-6 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                onClick={() => setShowModal(true)}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-none w-56 h-screen border-r border-slate-200">
          {/* 3 */}
          <div className="my-4">
            <h4 className="text-center text-teal-700 mb-3 font-semibold">
              Shops
            </h4>
            <ListGroup
              items={[...shops]}
              onSelectItem={handleSelectShop}
              selectedItem={shop}
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-6 ">
            {filteredShopItems.map((item) => (
              <div
                key={item._id}
                className=" card ml-12 mt-10 text-slate-600 w-32 h-36 rounded-xl overflow-hidden border border-slate-300"
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/items/" +
                    item.itemName +
                    ".jpg"
                  }
                  alt={item.itemName}
                  className="mt-6 w-32 h-16 hover:scale-110 transition-all duration-500 cursor-pointer"
                  onError={(e) => {
                    e.target.src =
                      process.env.PUBLIC_URL + "/images/defaultImage.jpg";
                  }}
                />

                <div className="ml-2 mb-1 text-gray-400 ">{item.itemName}</div>

                <div className="flex w-auto ">
                  <div
                    className=" badge text-gray-400 bg-slate-300 w-52 text-center p-1 hover:bg-slate-500 hover:text-white"
                    style={{ marginTop: "-4px" }}
                  >
                    <button
                      className="hover:font-bold "
                      onClick={() => callDeleteAshopitemAPI(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                  <div
                    className="badge text-white bg-teal-400 w-52 text-center p-1 hover:bg-teal-600"
                    style={{ marginTop: "-4px" }}
                  >
                    <Link
                      to={`/shopitems/${item._id}`}
                      className="hover:font-bold"
                      onClick={() => setShowModal(true)}
                    >
                      Edit
                    </Link>
                  </div>
                </div>
                <span
                  className={
                    item.availableQuantity.amount < 5
                      ? "relative -top-36 p-1 badge bg-red-500 rounded-full border border-none text-sm"
                      : "relative -top-36 p-1 badge bg-emerald-200 rounded-full border border-none text-sm"
                  }
                >
                  Quantity : {item.availableQuantity.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ShopItemsForm showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ShopItems1;

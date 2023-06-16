// import { SearchIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import NavBar from "../navbar";
import { useCartStore } from "../../stores/cartStore";
import { useEffect, useState } from "react";
import { useRequisitionStore } from "../../stores/requisitionStore";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [btnText, setBtnText] = useState("Place Order");
  const [disable, setDisable] = useState(false);

  const callDeleteCartItemAPI = useCartStore(
    (state) => state.deleteCartItemAPI
  );
  const callAddRequisitionsAPI = useRequisitionStore(
    (state) => state.addRequisitionsAPI
  );
  useEffect(
    () => {
      let cartItem = JSON.parse(sessionStorage.getItem("cartItems"));
      setCartItems(cartItem);
      console.log(cartItems);
    },
    [cartItems.length],
    btnText
  );

  const handleDelete = (itemName) => {
    console.log(cartItems);
    let cartItem = cartItems.filter((item) => item.itemName != itemName);
    console.log(cartItem);
    setCartItems(cartItem);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItem));
  };

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  const addRequisition = () => {
    const randomString = Math.random().toString(36).substring(2, 6);
    console.log(cartItems);
    const requisitionNumber = cartItems[0].shopId + randomString;
    console.log(requisitionNumber);
    cartItems.forEach((item) => {
      item.requisitionNumber = requisitionNumber;
      item.orderDate = today;
      delete item.shopId;
      delete item.shop;
      delete item.shopName;
      console.log(item);
      callAddRequisitionsAPI(item);
      setBtnText("Order Placed");
      setDisable(true);
    });
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="flex sm:flex-column md:flex-row">
        <div className="flex-none w-56 h-16 border-r border-b border-slate-200">
          {/* 1 */}
        </div>

        <div className="flex-1 h-16 border-b border-slate-200">
          {/* Search box */}
          <div className="flex flex-row content-between">
            <div className="flex-1"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-none w-56 h-[530px] border-r border-slate-200">
          {/* 3 */}
        </div>
        <div>
          {cartItems.length > 0 ? (
            <div className="grid grid-col mt-16 ml-16">
              <div className="grid grid-cols-2 md:grid-cols-12 bg-neutral-100">
                <div className="pt-4 pl-6 pr-1 text-neutral-400 col-span-10 text-xl bg-neutral-100 pb-4">
                  You are shopping from <b>{cartItems[0].shopName}</b>
                </div>
                <div className="pt-4 ml-4 text-neutral-400 col-span-2 pb-4">
                  {today}
                </div>
              </div>

              {cartItems.map((cartItem) => (
                <>
                  <div className=" bg-neutral-100 w-[900px] ">
                    <div className="grid grid-cols-2 md:grid-cols-12 bg-neutral-100 py-1">
                      <div className="col-span-2 pt-1 pl-6 text-teal-400">
                        {cartItem.itemName}
                      </div>
                      <div className="col-span-1 pt-1 pl-6 text-black font-light">
                        {50}/{cartItem.requiredQuantity.unit}
                      </div>

                      <div className="col-span-3 pt-1 pl-6 text-black font-light"></div>
                      <div className="col-span-2 pt-1 pl-6 text-neutral-400 ">
                        Quantity:
                        <span className="text-black font-light">
                          {cartItem.requiredQuantity.amount}
                        </span>
                      </div>
                      <div className="col-span-2 pt-1 pl-6 text-neutral-400">
                        Price:{" "}
                        <span className="text-black font-light">
                          ₹{50 * cartItem.requiredQuantity.amount}{" "}
                        </span>
                      </div>
                      <div className="col-span-1 pt-1 pl-6 text-neutral-400">
                        <button
                          className="text-blue-700 hover:text-red-500 ml-4"
                          onClick={() => handleDelete(cartItem.itemName)}
                          disabled={disable}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <div className=" bg-neutral-100">
                <hr className="ml-6 mr-8 bg-neutral-500 h-[2px] mt-4" />
              </div>
              <div className="h-12  bg-neutral-100"></div>
              <div className=" bg-neutral-100">
                <hr className="ml-6 mr-8  bg-neutral-500 h-[2px]" />
              </div>
              <div className=" bg-neutral-100 grid grid-cols-12 pt-4 pb-4 ">
                <div className="col-start-9 col-span-2  bg-neutral-100 ">
                  <span className="text-neutral-400 text-lg">
                    Please Pay{" "}
                    <span className="text-black font-medium">
                      {" "}
                      ₹
                      {cartItems
                        .map((item) => item.requiredQuantity.amount * 50)
                        .reduce((prev, next) => prev + next)}
                    </span>
                  </span>
                </div>
                <div className="col-span-2">
                  <button
                    id="placeOrder"
                    className="bg-teal-400 px-3 mt-1 ml-2 rounded-full hover:bg-teal-600 hover:text-white"
                    onClick={addRequisition}
                    disabled={disable}
                  >
                    {btnText}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

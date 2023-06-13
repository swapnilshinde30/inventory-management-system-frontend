// import { SearchIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import NavBar from "../navbar";

const Cart = () => {
  const shopName = "Om Sweets";
  const date = "06/05/2023";
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
          <div className="bg-neutral-100 w-[900px] h-10 mx-16 mt-12 pb-4">
            <div className="grid grid-cols-2 md:grid-cols-12 bg-neutral-100">
              <div className="pt-4 pl-6 pr-1 text-neutral-400 col-span-10 text-xl bg-neutral-100">
                You are shopping from <b>{`${shopName}`}</b>
              </div>
              <div className="pt-4 ml-4 text-neutral-400 col-span-2 ">
                {date}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-12 bg-neutral-100 pb-4 pt-4">
              <div className="col-span-3 pt-4 pl-6 text-teal-400">
                {" "}
                Fruit Cake
              </div>
              <div className="col-span-1 pt-4 pl-6 text-black font-light">
                300
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-2 pt-4 pl-6 text-neutral-400">
                Quantity: <span className="text-black font-light">5 Kg </span>
              </div>
              <div className="col-span-2 pt-4 pl-6 text-neutral-400">
                Price: <span className="text-black font-light">₹ 1500 </span>
              </div>
              <div className="col-span-2 pt-4 pl-6 text-neutral-400">
                <button className="text-blue-700 hover:text-red-500 ml-4">
                  Remove
                </button>
              </div>
            </div>
            <div className=" bg-neutral-100">
              <hr className="ml-6 mr-8 bg-neutral-500 h-[2px]" />
            </div>
            <div className="h-12  bg-neutral-100"></div>
            <div className=" bg-neutral-100">
              <hr className="ml-6 mr-8  bg-neutral-500 h-[2px]" />
            </div>
            <div className=" bg-neutral-100 grid grid-cols-12 pt-4 pb-4 ">
              <div className="col-start-9 col-span-2  bg-neutral-100 ">
                <span className="text-neutral-400 text-lg">
                  Please Pay{" "}
                  <span className="text-black font-medium"> ₹ 1500 </span>
                </span>
              </div>
              <div className="col-span-2">
                <button className="bg-teal-400 px-3 mt-1 ml-2 rounded-full hover:bg-teal-600 hover:text-white">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

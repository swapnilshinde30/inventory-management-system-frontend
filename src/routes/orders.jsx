// import { SearchIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Order = () => {
  const shopName = "Om Sweets";
  const date = "06/05/2023";
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
                  className="w-30 h-5 ml-16  md:ml-12 md:w-80 md:h-7  mt-3 rounded-full border border-solid border-slate-400 bg-transparent  text-sm focus:outline-none placeholder:text-gray-500 pl-8"
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
          </div>
        </div>
      </div>

      <div className="flex flex-column">
        <div className="flex-none w-56 h-[530px] border-r border-slate-200">
          {/* 3 */}
          <div className="my-4">
            <h4 className="text-center text-teal-700 mb-3 font-semibold">
              Sort
            </h4>
            <ul className="list-group ml-10 mt-2 mr-4">
              <li
                className="rounded-lg  text-left mb-2 text-neutral-500 transition duration-500 hover:bg-teal-100 hover:text-teal-700 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
                key="1"
                style={{ cursor: "pointer" }}
              >
                Lowest Price First
              </li>
              <li
                className="rounded-lg text-left mb-2 text-neutral-500 transition
                duration-500 hover:bg-teal-100 hover:text-teal-700
                focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0
                dark:hover:bg-neutral-600 dark:hover:text-neutral-200
                dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
                key="-1"
                style={{ cursor: "pointer" }}
              >
                Highest Price First
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          {/* One Order */}
          <div className="bg-neutral-100 w-[900px] h-10 mx-14 mt-12 pb-4 flex-1">
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
              <div className=" col-span-4 pt-4">
                ----------------------------------------------
              </div>
              <div className="col-span-1 pt-4 pl-6 text-black font-light">
                300
              </div>

              <div className="col-span-2 pt-4 pl-6 text-neutral-400">
                Quantity: <span className="text-black font-light">5 Kg </span>
              </div>
              <div className="col-span-2 pt-4 pl-6  text-neutral-400">
                Price: <span className="text-black font-light">₹ 1500 </span>
              </div>
            </div>
            <div className=" bg-neutral-100">
              <hr className="ml-6 mr-8 bg-neutral-500 h-[2px]" />
            </div>
            <div className="grid grid-col-8">
              <div className="col-start-7 ml-4 mt-4 h-12  bg-neutral-100 text-neutral-400 text-lg">
                Total :<span className="text-black font-bold">₹ 1500</span>
              </div>
            </div>
            <div className=" bg-neutral-100">
              <hr className="ml-6 mr-8  bg-neutral-500 h-[2px]" />
            </div>
            <div className=" bg-neutral-100 grid grid-cols-12 pt-4 pb-4 ">
              <div className="col-start-10 col-span-1  bg-neutral-100 ml-2">
                <span className="text-neutral-400 text-lg">Status</span>
              </div>
              <div className="col-span-2">
                <span className="text-teal-400 text-lg font-bold">PLACED</span>
              </div>
            </div>
          </div>

          {/* Second Order */}
          <div className="bg-neutral-100 w-[900px] h-10 mx-16 mt-12 pb-4 flex-1">
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
              <div className=" col-span-4 pt-4">
                ----------------------------------------------
              </div>
              <div className="col-span-1 pt-4 pl-6 text-black font-light">
                300
              </div>

              <div className="col-span-2 pt-4 pl-6 text-neutral-400">
                Quantity: <span className="text-black font-light">5 Kg </span>
              </div>
              <div className="col-span-2 pt-4 pl-6  text-neutral-400">
                Price: <span className="text-black font-light">₹ 1500 </span>
              </div>
            </div>
            <div className=" bg-neutral-100">
              <hr className="ml-6 mr-8 bg-neutral-500 h-[2px]" />
            </div>
            <div className="grid grid-col-8">
              <div className="col-start-7 ml-4 mt-4 h-12  bg-neutral-100 text-neutral-400 text-lg">
                Total :<span className="text-black font-bold">₹ 1500</span>
              </div>
            </div>
            <div className=" bg-neutral-100">
              <hr className="ml-6 mr-8  bg-neutral-500 h-[2px]" />
            </div>
            <div className=" bg-neutral-100 grid grid-cols-12 pt-4 pb-4 ">
              <div className="col-start-10 col-span-1  bg-neutral-100 ml-2">
                <span className="text-neutral-400 text-lg ">Status</span>
              </div>
              <div className="col-span-2 ">
                <span className="text-green-400 text-lg font-bold">
                  DISPATCHED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
// import { SearchIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const Shops = () => {
  const shops = [
    { _id: 1, shop:"Sadanand Kirana Store", category:"Grocery" },
    { _id: 1, shop:"Surya Sweets", category:"Sweets" },
    { _id: 1, shop:"Dhiraj Cafe", category:"Beverage" },
    { _id: 1, shop:"Himanshu Medical", category:"Medical" },
    { _id: 1, shop:"Vaishnavi Fruits", category:"Fruits" },
    { _id: 1, shop:"Swapnil Bakery", category:"Bakery" },
    { _id: 1, shop:"Sachin Vegitables", category:"Vegitables"},
 
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
              <Link
                to="/categories/new"
                className="nav-link"
                aria-current="page"
              >
                <button
                  type="button"
                  className="ml-10  md:ml-96 mt-5 rounded-full bg-teal-500 px-6 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                >
                  Add Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-none w-56 h-screen border-r border-slate-200">
          {/* 3 */}
        </div>
        <div>
          <div className="">
            {shops.map((shop) => (
              <div class="flex bg-neutral-50 rounded-lg h-12 mt-6 ml-11">
                <div class="ml-2 mt-2 w-10 ...">
                  <BsShop className="h-5 w-5 text-neutral-500"/>
                </div>
                <div class="mt-2 w-80 text-neutral-800">
                  <span className="text-neutral-500">Shop: </span>{shop.shop}
                </div>
                <div class="mt-2 w-64 text-neutral-800"><span className="text-neutral-500">Category: </span>{shop.category}</div>
                
                <Link
                  to="/categories/new"
                  className="nav-link mr-5"
                  aria-current="page"
                >
                  <button type="button"  className="mt-1 w-10 ml-64 bg-white rounded-full h-10">
                    <FiEdit className="ml-3 h-4 w-4 text-teal-500"/>
                  </button>
                </Link>
                <div class="mr-5">
                  <button type="button" className="mt-1 w-10 mr-2  bg-white rounded-full h-10">
                    <AiOutlineDelete className="ml-3 h-5 w-5 text-teal-500"/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shops;
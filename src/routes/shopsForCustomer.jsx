// import { SearchIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";
import ListGroup from "./common/listgroup";

const ShopsForCustomer = () => {
  const [shopName, setShopName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const items = [
    {
      _id: 1,
      name: "blue lagoon",
      itemClass: "Mocktail",
      imagePath: "bluelagoon.jpg",
      avlQuantity: 5,
      price: 80,
    },
    {
      _id: 2,
      name: "fruit cake",
      itemClass: "Cake",
      imagePath: "fruitcake.jpg",
      avlQuantity: 2,
      price: 320,
    },
    {
      _id: 3,
      name: "chocolate cake",
      itemClass: "Cake",
      imagePath: "chocolate cake.jpg",
      avlQuantity: 5,
      price: 350,
    },
    {
      _id: 4,
      name: "coughsils",
      itemClass: "Cough Syrup",
      imagePath: "coughsils.jpg",
      avlQuantity: 6,
      price: 85,
    },
    {
      _id: 5,
      name: "benadryl",
      itemClass: "Cough Syrup",
      imagePath: "benadryl.jpg",
      avlQuantity: 3,
      price: 90,
    },
    {
      _id: 6,
      name: "mango burfi",
      itemClass: "Burfi",
      imagePath: "mangoburfi.jpg",
      avlQuantity: 5,
      price: 600,
    },
  ];

  const shops = [
    { _id: 1, name: "Sadanand Kirana Store" },
    { _id: 2, name: "Surya Sweets" },
  ];
  const categories = [
    { _id: 1, name: "fruits", imagePath: "fruits.jpg" },
    { _id: 2, name: "vegetables", imagePath: "vege.jpg" },
    { _id: 3, name: "bakery", imagePath: "cake.jpg" },
    { _id: 4, name: "eggs & meat", imagePath: "egg.jpg" },
    { _id: 5, name: "grains", imagePath: "grains.jpg" },
    { _id: 6, name: "beverage", imagePath: "beverage.jpg" },
    { _id: 7, name: "sweets", imagePath: "sweets.jpg" },
    { _id: 8, name: "medicine", imagePath: "medicine.jpg" },
  ];

  const handleSelectCategory = (name) => {
    // console.log(name);
    setCategoryName(name);
    console.log(name);
    // dispatch(
    //   getAllShops({
    //     currentPage,
    //     pageSize,
    //     genreName: gName,
    //     title,
    //     sortColumn,
    //   })
    // );
  };
  const handleSelectShop = (name) => {
    // console.log(name);
    setShopName(name);
    console.log(name);
    // dispatch(
    //   getAllShops({
    //     currentPage,
    //     pageSize,
    //     genreName: gName,
    //     title,
    //     sortColumn,
    //   })
    // );
  };

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
            {/* <div className="flex-1">
              <Link
                to="/categories/new"
                className="nav-link"
                aria-current="page"
              >
                <button
                  type="button"
                  className="ml-10  md:ml-96 mt-5 rounded-full bg-teal-500 px-6 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] hover:bg-teal-600"
                >
                  Add Item
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-none w-56 h-screen border-r border-slate-200">
          {/* 3 */}
          <div className=" mt-4 ">
            <h4 className="ml-10 text-teal-700 mb-3 font-semibold">
              Categories
            </h4>
            <ListGroup
              items={[...categories]}
              onSelectItem={handleSelectCategory}
              selectedItem={categoryName}
            />
          </div>
        </div>
        <div className="border-r border-slate-200">
          <div className="mt-4 -ml-2 ">
            <h4 className="text-center text-teal-700 mb-3 font-semibold">
              Shops
            </h4>
            <ListGroup
              items={[...shops]}
              onSelectItem={handleSelectShop}
              selectedItem={shopName}
            />
          </div>
        </div>
        <div>
          <h4 className="text-gray-500 ml-12 mt-3">
            You are shopping from <b> {`${shopName}`}</b>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            {items.map((item) => (
              <>
                <div
                  key={item._id}
                  className=" card ml-12 mt-4 mb-3 text-slate-600 w-32 h-36 rounded-xl overflow-hidden border border-slate-300"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/items/" + item.imagePath
                    }
                    alt="fruits"
                    className="mt-6 w-32 h-16 hover:scale-110 transition-all duration-500 cursor-pointer"
                  />

                  <div className="ml-2 mb-1 text-gray-400 ">{item.name}</div>

                  <div className="flex w-auto ">
                    <div
                      className=" badge text-gray-400 bg-slate-300 w-52 text-center p-1 hover:bg-slate-500 hover:text-white"
                      style={{ marginTop: "-4px" }}
                    >
                      {/* <button className="hover:font-bold ">₹ {}</button> */}
                      <span>₹ {item.price}</span>
                    </div>
                    <div
                      className="badge text-white bg-teal-400 w-52 text-center p-1 hover:bg-teal-600"
                      style={{ marginTop: "-4px" }}
                    >
                      <button className="hover:font-bold">Add</button>
                    </div>
                  </div>
                  <span
                    className={
                      item.avlQuantity < 5
                        ? "relative -top-36 p-1 badge bg-red-500 rounded-full border border-none text-sm hover:bg-red-600 hover:text-black"
                        : "relative -top-36 p-1 badge bg-emerald-200 rounded-full border border-none text-sm"
                    }
                  >
                    Avl Quantity : {item.avlQuantity}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopsForCustomer;

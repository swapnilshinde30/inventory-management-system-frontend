import { useEffect, useState } from "react";
import ListGroup from "../common/listgroup";
import { useCategoryStore } from "../../stores/categoryStore";
import { useShopStore } from "../../stores/shopStore";
import { useShopitemStore } from "../../stores/shopitemStore";
import { useItemStore } from "../../stores/itemStore";
import CartForm from "../../Forms/CartForm";
import { useCartStore } from "../../stores/cartStore";
import { Link } from "react-router-dom";

const ShopsForCustomer = () => {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const [searchField, setSearchField] = useState("");
  const [category, setCategory] = useState("");
  const [shop, setShop] = useState("");

  const callGetAllShopitemsAPI = useShopitemStore(
    (state) => state.getAllShopitemsAPI
  );
  const shopitems = useShopitemStore((state) => state.shopitems);
  const handleSelectCategory = (category) => {
    setCategory(category);
    console.log(category);
    callGetAllShopsAPI(undefined, category);
  };

  const handleSelectShop = (shop) => {
    setShop(shop);
    callGetAllShopitemsAPI(shop);
  };

  const callGetAllCategories = useCategoryStore(
    (state) => state.getAllCategoriesAPI
  );
  const categories = useCategoryStore((state) => state.categories);
  const callGetAllShopsAPI = useShopStore((state) => state.getAllShopsAPI);
  const shops = useShopStore((state) => state.shops);

  const callGetAllItemsAPI = useItemStore((state) => state.getAllItemsAPI);
  const items = useItemStore((state) => state.items);
  useEffect(() => {
    callGetAllCategories();
    callGetAllShopitemsAPI();
  }, []);

  useEffect(() => {
    callGetAllShopsAPI();
  }, []);

  const callAddToCartAPI = useCartStore((state) => state.addToCartAPI);

  const cartItems = sessionStorage.getItem("cartItems");
  console.log(cartItems);

  const onAddToCart = (item) => {
    setProduct(item);
    console.log(product);
    setShowModal(true);
    //  }
  };

  const filteredShopFCust = shopitems.filter((item) => {
    if (searchField === "") {
      return item;
    } else if (
      item.itemName.toLowerCase().includes(searchField.toLowerCase())
    ) {
      return item;
    }
  });
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
              selectedItem={category}
            />
          </div>
        </div>
        <div className="flex-none w-40 border-r border-slate-200">
          <div className="mt-4 -ml-2 ">
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
          <h4 className="text-gray-500 ml-12 mt-3"></h4>
          {shopitems.length === 0 ? (
            <h3 className="text-slate-600 mx-4 my-4">
              <div className="ml-10 p-[10px] bg-white font-serif">
                <h1 className="text-blue-600 text-5xl">No items to show</h1>
              </div>
            </h3>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-4 ">
            {filteredShopFCust.map((item) => (
              <>
                <div
                  key={item._id}
                  className=" card ml-12 mt-4 mb-3 text-slate-600 w-32 h-36 rounded-xl overflow-hidden border border-slate-300"
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
                  />

                  <div className="ml-2 mb-1 text-gray-400 ">
                    {item.itemName}
                  </div>

                  <div className="flex w-auto ">
                    <div
                      className=" badge text-gray-400 bg-slate-300 w-52 text-left text-sm p-1 hover:bg-slate-500 hover:text-white"
                      style={{ marginTop: "-4px" }}
                    >
                      <span>₹ 50/ {item.availableQuantity.unit}</span>
                    </div>
                    <div
                      className="badge text-white bg-teal-400 w-52 text-center p-1 hover:bg-teal-600"
                      style={{ marginTop: "-4px" }}
                    >
                      <Link
                        to={`/shopsForCustomer/${item._id}`}
                        className="hover:font-bold"
                        onClick={() => {
                          onAddToCart(item);
                        }}
                      >
                        Add
                      </Link>
                    </div>
                  </div>
                  <span
                    className={
                      item.availableQuantity.amount < 5
                        ? "relative -top-36 p-1 badge bg-red-500 rounded-full border border-none text-sm hover:bg-red-600 hover:text-black"
                        : "relative -top-36 p-1 badge bg-emerald-200 rounded-full border border-none text-sm"
                    }
                  >
                    Avl Quantity : {item.availableQuantity.amount}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <CartForm
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
      />
    </>
  );
};

export default ShopsForCustomer;

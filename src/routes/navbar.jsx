import { Link, NavLink } from "react-router-dom";
import { useLoginStore } from "../stores/loginStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
const navLinkAdmin = [
  { id: 1, name: "CATEGORIES", pageLink: "/categories", role: "admin" },
  { id: 2, name: "ITEMCLASSES", pageLink: "/itemclasses", role: "admin" },
  { id: 3, name: "ITEMS", pageLink: "/items", role: "admin" },
  { id: 4, name: "USERS", pageLink: "/users", role: "admin" },
];
const navLinkCustomer = [
  {
    id: 5,
    name: "SHOPS FOR CUSTOMER",
    pageLink: "/shopsForCustomer",
    role: "customer",
  },
  { id: 6, name: "CART", pageLink: "/cart", role: "customer" },
  { id: 7, name: "ORDER", pageLink: "/orders", role: "customer" },
];
const NavLinksShopkeeper = [
  { id: 8, name: "SHOPITEMS", pageLink: "/shopitems", role: "shopkeeper" },
  {
    id: 9,
    name: "REQUISITION",
    pageLink: "/requisitions",
    role: "shopkeeper",
  },
  { id: 10, name: "SHOPS", pageLink: "/shops", role: "shopkeeper" },
];

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [navLinkNames, setNavLinkNames] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  // console.log(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    // console.log(user);
    if (user === null) {
      navigate("/login");
      return;
    }
    if (user.role === "admin") setNavLinkNames(navLinkAdmin);
    if (user.role === "customer") setNavLinkNames(navLinkCustomer);
    if (user.role === "shopkeeper") setNavLinkNames(NavLinksShopkeeper);
  }, [user]);

  const focusHandler = () => {
    setShowModal(true);
  };
  const blurHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* <p>Navbar</p> */}
      {/* <!-- Main navigation container --> */}
      {sessionStorage.getItem("token") ? (
        <nav
          className="flex-1 h-14 w-full items-center justify-between py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            {/* <!-- Hamburger button for mobile view --> */}
            <button
              className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <!-- Hamburger icon --> */}
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            {/* <!-- Collapsible navigation container --> */}
            <div
              className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContent1"
              data-te-collapse-item
            >
              {/* <!-- Logo --> */}
              <div className="w-56 ">
                <a
                  className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                  href="#"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/finalLogo.jpg"}
                    style={{ height: "35px" }}
                    alt=""
                    loading="lazy"
                    className="pl-12"
                  />
                </a>
              </div>

              {/* <!-- Left navigation links --> */}
              <ul
                className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row "
                data-te-navbar-nav-ref
              >
                {navLinkNames.map((x) => (
                  <li
                    id={x.id + Math.random()}
                    key={x.id}
                    className="mb-4 lg:mb-0 lg:pr-2"
                    data-te-nav-item-ref
                  >
                    {/* <!-- Dashboard link --> */}
                    <NavLink
                      to={x.pageLink}
                      aria-current="page"
                      className=" nav-link text-neutral-500 hover:text-neutral-700 hover:bottom-[5px]  focus:border-b-2 border-teal-500 pb-2  focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                      href="#"
                      data-te-nav-link-ref
                    >
                      {x.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* <!-- Right elements --> */}

            <div className="relative" data-te-dropdown-ref>
              {/* <!-- Second dropdown trigger --> */}
              <a
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                // onClick={handleLogout}
                // onClick={() => setShowModal(true)}
                onFocus={focusHandler}
                // onBlur={blurHandler}
              >
                {/* <!-- User avatar --> */}
                <div className="flex flex-col items-end">
                  <span className="pr-2 flex-1 text-sm">
                    {user.firstName + " " + user.lastName}
                  </span>
                  <span className="pr-2 flex-1 text-sm">{user.role}</span>
                </div>

                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: "40px", width: "40px" }}
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
            {showModal ? (
              <>
                <div class="relative inline-block text-left">
                  <div
                    class="absolute right-0 top-3 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1" role="none">
                      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}

                      <div className="flex-col">
                        <div className="flex flex-row">
                          {" "}
                          <img
                            src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                            className="border-double border-4 border-teal-500 rounded-full mx-auto mt-2"
                            style={{ height: "65px", width: "65px" }}
                            alt=""
                            loading="lazy"
                          />
                          <NavLink to={`/users/${user._id}`}>
                            <FiEdit
                              className="absolute right-5 top-5 text-lg cursor-pointer"
                              onClick={() => setShowModal(false)}
                            />
                          </NavLink>
                        </div>

                        <div
                          id="details"
                          className="text-center mb-2 flex flex-col"
                        >
                          <div className="font-bold p-2">
                            {user.firstName + " " + user.lastName}
                          </div>
                          <div className="text-teal-500">(+91{user.phone})</div>
                          <div>{user.email}</div>
                          <div className=" p-5">
                            <div className="flex flex-row ml-[60px]">
                              <span className="pr-2">User Name:</span>
                              <div>{user.userName}</div>
                            </div>
                            <div className="flex flex-row ml-[60px]">
                              <span className="pr-2">Password:</span>
                              <div>xxxxxxxxxx</div>
                            </div>
                          </div>
                          <div className="flex p-2 mb-5">
                            <button
                              type="button"
                              className="ml-[35px] rounded-lg text-neutral-500 border border-neutral-500 px-6 pb-1 pt-1"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="ml-3 rounded-lg bg-teal-500 px-6 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white hover:bg-teal-600"
                              onClick={() => handleLogout()}
                            >
                              Sign Out
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* <form method="POST" action="#" role="none">
                        <button
                          type="submit"
                          class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-3"
                        >
                          Sign out
                        </button>
                      </form> */}
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </nav>
      ) : null}
    </>
  );
}

{
  /* <svg
              className="absolute w-5 h-5 mt-8 stroke-slate-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              className=" ml-12 w-80 rounded-full border border-solid border-slate-400 bg-transparent hover:border-teal-600 focus:outline-none placeholder:text-gray-500 pl-8"
              type="search"
              placeholder="Search"
            /> */
}

// <ul
// className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row "
// data-te-navbar-nav-ref
// >
// <li
//   id="one"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   {/* <!-- Dashboard link --> */}
//   <Link
//     to="/categories"
//     aria-current="page"
//     className=" nav-link text-neutral-500 hover:text-neutral-700 hover:bottom-[5px]  focus:border-b-2 border-teal-500 pb-2  focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
//     href="#"
//     data-te-nav-link-ref
//   >
//     CATEGORIES
//   </Link>
// </li>
// {/* <!-- Team link --> */}
// <li
//   id="two"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   <Link
//     to="/itemclasses"
//     aria-current="page"
//     className="text-neutral-500  focus:border-b-2 border-teal-500 pb-2 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//     href="#"
//     data-te-nav-link-ref
//   >
//     ITEM CLASSES
//   </Link>
// </li>
// {/* <!-- Projects link --> */}
// <li
//   id="three"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   <Link
//     to="/items"
//     aria-current="page"
//     className=" text-neutral-500 focus:border-b-2 border-teal-500 pb-2 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//     href="#"
//     data-te-nav-link-ref
//   >
//     ITEMS
//   </Link>
// </li>

// <li
//   id="four"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   <Link
//     to="/users"
//     className="focus:border-b-2 border-teal-500 pb-2 text-neutral-500 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//     data-te-nav-link-ref
//   >
//     USERS
//   </Link>
// </li>
// {/* shop Owner */}

// <li
//   id="four"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   <Link
//     to="/shopitems"
//     className="focus:border-b-2 border-teal-500 pb-2 text-neutral-500 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//     data-te-nav-link-ref
//   >
//     SHOP ITEMS
//   </Link>
// </li>
// {/* <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
//   <Link
//     to="/requisitions"
//     className="focus:border-b-2 border-teal-500 pb-3 text-neutral-500 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//   ></Link>
// </li> */}

// <li
//   id="four"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   <Link
//     to="/requisitions"
//     className="focus:border-b-2 border-teal-500 pb-2 text-neutral-500 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//     data-te-nav-link-ref
//   >
//     REQUISITION
//   </Link>
// </li>
// <li
//   id="four"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   <Link
//     to="/shops"
//     className="focus:border-b-2 border-teal-500 pb-2 text-neutral-500 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//     data-te-nav-link-ref
//   >
//     SHOPS
//   </Link>
// </li>
// <li
//   id="four"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   <Link
//     to="/shopsForCustomer"
//     className="focus:border-b-2 border-teal-500 pb-2 text-neutral-500 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//     data-te-nav-link-ref
//   >
//     CSHOPS
//   </Link>
// </li>
// <li
//   id="four"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   <Link
//     to="/cart"
//     className="focus:border-b-2 border-teal-500 pb-2 text-neutral-500 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//     data-te-nav-link-ref
//   >
//     CART
//   </Link>
// </li>
// <li
//   id="four"
//   className="mb-4 lg:mb-0 lg:pr-2"
//   data-te-nav-item-ref
// >
//   <Link
//     to="/orders"
//     className="focus:border-b-2 border-teal-500 pb-2 text-neutral-500 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
//     data-te-nav-link-ref
//   >
//     ORDERS
//   </Link>
// </li>
// </ul>

import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      {/* <p>Navbar</p> */}
      {/* <!-- Main navigation container --> */}
      <nav
        className="flex-1 h-16 w-full items-center justify-between py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
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
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                {/* <!-- Dashboard link --> */}
                <Link
                  to="/categories"
                  aria-current="page"
                  className=" nav-link text-neutral-500 hover:text-neutral-700 hover:bottom-[5px] focus:border-b-2 border-teal-500 pb-3  focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  CATEGORIES
                </Link>
              </li>
              {/* <!-- Team link --> */}
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="text-neutral-500 focus:border-b-2 border-teal-500 pb-3 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  ITEM CLASSES
                </a>
              </li>
              {/* <!-- Projects link --> */}
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="text-neutral-500 focus:border-b-2 border-teal-500 pb-3 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  ITEMS
                </a>
              </li>

              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="focus:border-b-2 border-teal-500 pb-3 text-neutral-500 hover:text-neutral-700 focus:text-teal-500 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  USERS
                </a>
              </li>
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
            >
              {/* <!-- User avatar --> */}
              <div className="flex flex-col items-end">
                <span className="pr-2 flex-1 text-sm">Swapnil Shinde</span>
                <span className="pr-2 flex-1 text-sm">Admin</span>
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
        </div>
      </nav>
    </>
  );
}

// <svg
//               className="absolute w-5 h-5 mt-8 stroke-slate-300"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="w-6 h-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//               />
//             </svg>
//             <input
//               className=" ml-12 w-80 rounded-full border border-solid border-slate-400 bg-transparent hover:border-teal-600 focus:outline-none placeholder:text-gray-500 pl-8"
//               type="search"
//               placeholder="Search"
//             />

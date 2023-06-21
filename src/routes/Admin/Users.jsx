import { AiOutlineUser } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";

import EditUserForm from "../../Forms/EditUserForm";
import { useUserStore } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();
  const getAllUsers = useUserStore((state) => state.getAllUsersAPI);
  const users = useUserStore((state) => state.users);
  const calldeleteUserAPI = useUserStore((state) => state.deleteUserAPI);
  const callEditUserAPI = useUserStore((state) => state.editUserAPI);
  const errorMessage = useUserStore((state) => state.error);
  useEffect(() => {
    getAllUsers();
  }, [users.firstName]);

  const handleSelect = (role) => {
    getAllUsers(role);
  };
  const filteredUsers = users.filter((user) => {
    if (searchField === "") {
      return user;
    } else if (
      user.firstName.toLowerCase().includes(searchField.toLowerCase())
    ) {
      return user;
    }
  });

  const userFilter = [
    { id: 1, name: "All Users" },
    { id: 2, name: "ShopKeeper", role: "shopkeeper" },
    { id: 3, name: "Customer", role: "customer" },
  ];
  let a = Math.random();
  let data = {};
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
                  onChange={(event) => {
                    setSearchField(event.target.value);
                  }}
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
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-none w-56 h-screen border-r border-slate-200">
          {/* 3 */}
          <div className=" mt-4 ">
            <h4 className="ml-10 text-teal-700 mb-3 font-semibold">Users</h4>
            <ul className="list-group ml-10 mt-2 mr-4">
              {userFilter.map((user) => (
                <li
                  key={user.id + a}
                  className="rounded-lg  text-left py-2 text-neutral-500 transition duration-500 hover:bg-teal-100 hover:text-neutral-700 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelect(user.role)}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="">
            {/* <p className="absolute mr-10 text-center text-red-500">
              {errorMessage}
            </p> */}
            {filteredUsers.map((user) => (
              <div
                className="flex bg-neutral-100 rounded-lg h-12 mt-6 ml-5"
                key={user._id}
              >
                <div className="ml-2 mt-3 w-10 ...">
                  <AiOutlineUser
                    className={
                      user.isActive === true
                        ? "h-5 w-5 text-neutral-500"
                        : "h-5 w-5 text-red-500"
                    }
                  />
                </div>
                <div className="mt-3 w-[220px] text-neutral-800">
                  <span className="text-neutral-500">Name: </span>
                  {user.firstName + "  " + user.lastName}
                </div>
                <div className="mt-3 w-[220px] text-neutral-800">
                  <span className="text-neutral-500">Role: </span>
                  {user.role}
                </div>
                <div className="mt-3 w-[300px] text-neutral-800">
                  <span className="text-neutral-500">Last LoggedIn: </span>
                  {user.lastLoggedIn}
                </div>

                <div className="flex-1">
                  <button
                    className="w-8 ml-[130px] mr-3 mt-2 bg-white rounded-full h-8  hover:bg-teal-500"
                    onClick={() => {
                      setShowModal(true);
                      navigate(`/users/${user._id}`);
                    }}
                  >
                    <FiEdit className="ml-[8px] h-4 w-4 text-teal-500 hover:scale-110 transition-all hover:text-white" />
                  </button>
                </div>

                {/* </Link> */}
                <div className="mr-5">
                  <button
                    type="button"
                    className="mt-2 w-8 bg-white rounded-full h-8 hover:bg-teal-500"
                    onClick={() => (
                      (data._id = user._id),
                      (data.isActive = user.isActive),
                      callEditUserAPI(data)
                    )}
                  >
                    <AiOutlineDelete className="ml-[6px] h-5 w-5 text-teal-500 hover:scale-110 transition-all hover:text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EditUserForm showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Users;

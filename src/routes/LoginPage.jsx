import image from "../../src/images/images/loginPage1.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import RegisterForm from "../Forms/RegisterForm";

function LoginPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="gradient-form bg-gradient-to-r from-emerald-400 to-teal-600 h-full">
        <div className="flex items-center justify-center ">
          <div
            className="block mt-10 mb-10 shadow-md shadow-black"
            style={{
              backgroundImage: `url(${image})`,
              height: "620px",
              width: "1020px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-row-reverse space-x-4 space-x-reverse mr-9 mt-5">
              {/* <div className="italic text-sm font-semibold text-cyan-700">
              <a href="#!">LOGIN</a>
            </div>
            <div className="italic text-sm">
              <a href="#!">ABOUT US</a>
            </div> */}
            </div>
            <div className="relative">
              <div className="absolute top-[325px] left-[400px]">
                <div className="form w-[240px] h-56 bg-white">
                  <form>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-5 ">
                      <input
                        type="email"
                        id="form2Example1"
                        placeholder="username"
                        className="rounded-full border  w-52 h-9 mt-2 pl-8 hover:border-teal-400 focus:outline-none "
                      />
                      <AiOutlineUser className="-mt-6 ml-3" />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-5">
                      <input
                        type="password"
                        id="form2Example2"
                        placeholder="password"
                        className="border rounded-full w-52 h-9 pl-8  hover:border-teal-400 focus:outline-none"
                      />
                      <FiLock className="-mt-6 ml-3" />
                    </div>
                    {/* <!-- Submit button --> */}
                    <Link to="/" className="nav-link" aria-current="page">
                      <button
                        type="button"
                        className="btn text-white bg-teal-500 rounded-lg mb-2 w-52 h-9"
                      >
                        Login
                      </button>
                    </Link>

                    <div className="ml-14 mb-8 text-sm text-blue-600">
                      <button to={"/login/new"} onClick={()=>setShowModal(true)}>Create Account</button>
                    </div>

                    <div className="ml-14 text-xs  text-blue-600">
                      <button>
                        Forget Password?
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegisterForm showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default LoginPage;

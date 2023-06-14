import image from "../../src/images/images/loginPage1.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useLoginStore } from "../stores/loginStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

function LoginPage() {
  // const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const callloginUserAPI = useLoginStore((state) => state.loginUserAPI);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const token = sessionStorage.getItem("token");

  const onSubmitHandler = (data) => {
    data.strategy = "local";
    console.log(user);
    callloginUserAPI(data);
    //navigate("/login");
  };
  useEffect(() => {
    console.log(user);
    if (user === null) {
      return;
    }
    if (user.role === "admin") navigate("/categories");
    if (user.role === "shopkeeper") navigate("/shopitems");
    if (user.role === "customer") navigate("/shopsForCustomer");
  }, [user]);

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
                  <form onSubmit={handleSubmit(onSubmitHandler)}>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-5 ">
                      <input
                        type="email"
                        id="form2Example1"
                        placeholder="username"
                        className="rounded-full border  w-52 h-9 mt-2 pl-8 hover:border-teal-400 focus:outline-none "
                        {...register("email")}
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
                        {...register("password")}
                      />
                      <FiLock className="-mt-6 ml-3" />
                    </div>
                    {/* <!-- Submit button --> */}

                    <button
                      type="submit"
                      className="btn text-white bg-teal-500 rounded-lg mb-2 w-52 h-9"
                    >
                      Login
                    </button>

                    <div className="ml-14 mb-8 text-sm text-blue-600">
                      <NavLink
                        to={"/register"}
                        // onClick={() => setShowModal(true)}
                      >
                        Create Account
                      </NavLink>
                    </div>

                    <div className="ml-14 text-xs  text-blue-600">
                      <button>Forget Password?</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <RegisterForm showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

export default LoginPage;

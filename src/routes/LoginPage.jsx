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
import SendOTPForm from "../Forms/ForgotPassword";
import { toast } from "react-toastify";
import { useUserStore } from "../../src/stores/userStore";

const schema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required(),
});

function LoginPage() {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const callloginUserAPI = useLoginStore((state) => state.loginUserAPI);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const token = sessionStorage.getItem("token");
  const errorMessage = useLoginStore((state) => state.error);

  const callGetAllUsersAPI = useUserStore((state) => state.getAllUsersAPI);
  const users = useUserStore((state) => state.users);
  const onSubmitHandler = async (data) => {
    data.strategy = "local";
    try {
      const searchUser = users.find((u) => u.userName === data.userName);
      if (!searchUser) {
        toast.error("User is not present !");
        return;
      }
      if (searchUser.isActive === false) {
        toast.error("USer is inactive!");
      } else {
        await callloginUserAPI(data);
        toast.success("Login successful!");
      }
    } catch (err) {
      console.error(err);
      // toast.error("Invalid Login, Please Try Again");
      toast.error(err.response.data.message);
    }
  };
  useEffect(() => {
    console.log(user);
    callGetAllUsersAPI();
    if (user === {}) return;
    if (user === null) {
      return;
    }
    if (user.role === "admin") navigate("/categories");
    if (user.role === "shopkeeper") navigate("/shopitems");
    if (user.role === "customer") {
      let cartItems = [];
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      navigate("/shopsForCustomer");
    }
  }, [user, errorMessage]);

  return (
    <>
      <div>
        <section className="gradient-form bg-gradient-to-r from-emerald-400 to-teal-600 h-full">
          <div className="flex items-center justify-center ">
            <div
              className="block mt-[14px] mb-[14px] shadow-md shadow-black"
              style={{
                backgroundImage: `url(${image})`,
                height: "620px",
                width: "1020px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-row-reverse space-x-4 space-x-reverse mr-9 mt-5"></div>
              <div className="relative">
                <div className="absolute top-[325px] left-[400px]">
                  <div className="form w-[240px] h-56 bg-white">
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                      <div className="form-outline mb-5 ">
                        <input
                          type="text"
                          id="username"
                          placeholder="username"
                          className="rounded-full border  w-52 h-9 mt-2 pl-8 hover:border-teal-400 focus:outline-none "
                          {...register("userName")}
                        />
                        <AiOutlineUser className="-mt-6 ml-3" />
                      </div>

                      <div className="form-outline mb-5">
                        <input
                          type="password"
                          id="password"
                          placeholder="password"
                          className="border rounded-full w-52 h-9 pl-8  hover:border-teal-400 focus:outline-none"
                          {...register("password")}
                        />
                        <FiLock className="-mt-6 ml-3" />
                      </div>

                      <button
                        type="submit"
                        className="btn text-white bg-teal-500 rounded-lg mb-2 w-52 h-9"
                      >
                        Login
                      </button>

                      <div className="ml-14 mb-8 text-sm text-blue-600">
                        <NavLink to={"/register"}>Create Account</NavLink>
                      </div>

                      <div className="ml-14 text-xs  text-blue-600">
                        <button onClick={() => setShowModal(true)}>
                          Forget Password?
                        </button>
                      </div>

                      <p className="mr-10 text-center text-red-500">
                        {errorMessage}
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SendOTPForm showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default LoginPage;

import { useEffect, useState } from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import LoginPage from "../routes/LoginPage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserStore } from "../stores/userStore";
import { useForgotPasswordStore } from "../stores/forgotPasswordStore";

const schema = yup.object().shape({
  email: yup.string().email().min(8).max(30).required(),
  userName: yup.string().required(),
});
const SendOTPForm = (props) => {
  const { showModal, setShowModal } = props;
  const [showResetModal, setResetShowModal] = useState(false);
  const users = useUserStore((state) => state.users);
  const callOtpAuthenticationAPI = useForgotPasswordStore(
    (state) => state.otpAuthenticationAPI
  );
  let randomNumber = 0;
  let user;
  const callGetAllUsersAPi = useUserStore((state) => state.getAllUsersAPI);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log(data);
    user = users.find(
      (user) => user.userName === data.userName && user.email === data.email
    );
    console.log(user);
    if (user) {
      randomNumber = Math.floor(Math.random() * 9000 + 1000);
      console.log(randomNumber);
      sessionStorage.setItem("otp", randomNumber);
      setTimeout(() => {
        sessionStorage.removeItem("otp");
        randomNumber = 0;
        console.log("setInterval Executed");
      }, 300000);
      let payload = {};
      payload.email = data.email;
      payload.otp = randomNumber;
      console.log(payload);
      callOtpAuthenticationAPI(payload);
      setShowModal(false);
      setResetShowModal(true);
    }
  };
  useEffect(() => {
    callGetAllUsersAPi();
    console.log(users);
  }, [users.length]);

  return (
    <>
      {showModal ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <main
                id="content"
                role="main"
                className="w-full max-w-md mx-auto p-6"
              >
                <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-4 sm:p-7">
                    <div className="text-center">
                      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                        Forgot password?
                      </h1>
                    </div>

                    <div className="mt-5">
                      <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className="grid gap-y-4">
                          <div>
                            <label
                              for="userName"
                              className="block font-base -ml-[240px] mb-2 dark:text-white"
                            >
                              UserName
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                required
                                {...register("userName")}
                              />
                            </div>
                            <div>
                              <label
                                for="email"
                                className="block font-base -ml-[240px] mb-2 dark:text-white"
                              >
                                Email address
                              </label>
                              <div className="relative">
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                  required
                                  {...register("email")}
                                />
                              </div>
                              <p
                                className="hidden text-xs text-red-600 mt-2"
                                id="email-error"
                              >
                                Please include a valid email address so we can
                                get back to you
                              </p>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gradient-to-r from-emerald-400 to-teal-600 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      ) : null}
      ;
      <ResetPasswordForm
        showResetModal={showResetModal}
        setResetShowModal={setResetShowModal}
      />
    </>
  );
};
export default SendOTPForm;

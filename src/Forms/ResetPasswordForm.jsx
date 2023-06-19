import { useState } from "react";
const ResetPasswordForm = (props) => {
  const { showResetModal, setResetShowModal } = props;
  return (
    <>
      {showResetModal ? (
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
                        Reset Password
                      </h1>
                    </div>

                    <div className="mt-5">
                      <form>
                        <div className="grid gap-y-4">
                          <div>
                            <label
                              for="email"
                              className="block font-base -ml-[310px] mb-2 dark:text-white"
                            >
                              OTP
                            </label>
                            <div className="relative">
                              <input
                                type="number"
                                id="otp"
                                name="otp"
                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                required
                                aria-describedby="otp-error"
                              />
                            </div>
                            <label
                              for="password"
                              className="block font-base -ml-[240px] mb-2 dark:text-white"
                            >
                              New Password
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="password"
                                name="password"
                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                required
                                aria-describedby="email-error"
                              />
                            </div>
                            <label
                              for="confirm passowrd"
                              className="block font-base -ml-[210px] mb-2 dark:text-white"
                            >
                              Confirm Password
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                required
                                aria-describedby="email-error"
                              />
                            </div>
                            <p
                              className="hidden text-xs text-red-600 mt-2"
                              id="email-error"
                            >
                              Please include a valid email address so we can get
                              back to you
                            </p>
                          </div>
                          <button
                            type="button"
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gradient-to-r from-emerald-400 to-teal-600 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          >
                            Reset
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
    </>
  );
};
export default ResetPasswordForm;

// <!-- component -->
// <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
//   <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">

//   </div>
// </div>

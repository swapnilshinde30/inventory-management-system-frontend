import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForgotPasswordStore } from "../stores/forgotPasswordStore";
import { useNavigate } from "react-router";

const schema = yup.object().shape({
  otp: yup.number().required(),
  userName: yup.string().required(),

  newPassword: yup
    .string()
    .min(8)
    .required("Password must be at least 8 character"),
  confirmPassword: yup
    .string()
    .min(8)
    .required("Password must be at least 8 character"),
});

const ResetPasswordForm = (props) => {
  const { showResetModal, setResetShowModal } = props;
  const callForgotPasswordApi = useForgotPasswordStore(
    (state) => state.forgotPasswordAPI
  );
  const navigate = useNavigate();
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
    let validotp = sessionStorage.getItem("otp");
    console.log(validotp);
    console.log(data.otp);
    if (data.otp === parseInt(validotp)) {
      console.log("otp verified");
      delete data.otp;
      console.log(data);
      callForgotPasswordApi(data);
      setResetShowModal(false);
    }
  };
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
                      <form onSubmit={handleSubmit(onSubmitHandler)}>
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
                                {...register("otp")}
                              />
                            </div>
                            <label
                              for="userName"
                              className="block font-base -ml-[245px] mb-2 dark:text-white"
                            >
                              UserName
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="otp"
                                name="otp"
                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                required
                                {...register("userName")}
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
                                type="password"
                                id="password"
                                name="password"
                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                required
                                {...register("newPassword")}
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
                                type="password"
                                id="confirmPass"
                                name="confirmPass"
                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                required
                                {...register("confirmPassword")}
                              />
                            </div>
                            <p
                              className="hidden text-xs text-red-600 mt-2"
                              id="email-error"
                            >
                              Please include a valid user name so we can get
                              back to you
                            </p>
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
    </>
  );
};
export default ResetPasswordForm;

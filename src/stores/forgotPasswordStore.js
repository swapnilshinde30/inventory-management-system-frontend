import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
const apiEndPoint = process.env.REACT_APP_API_URL;
export const useForgotPasswordStore = create(
  devtools(
    immer((set) => ({
      error: "",
      otpAuthenticationAPI: async (payload) => {
        const response = await axios.post(
          apiEndPoint + "otp-authentication",
          payload
        );

        set((state) => {
          console.log(response.data.msg);
        });
        return response;
      },

      forgotPasswordAPI: async (payload) => {
        const response = await axios.post(
          apiEndPoint + "forgotPassword",
          payload
        );

        set((state) => {
          console.log(response.data);
        });
        return response;
      },
    }))
  )
);

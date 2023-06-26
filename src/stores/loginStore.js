import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
const apiEndPoint = process.env.REACT_APP_API_URL + "authentication";
export const useLoginStore = create(
  devtools(
    immer((set) => ({
      user: {},
      token: "",
      error: ``,
      loginUserAPI: async (payload) => {
        const response = await axios.post(apiEndPoint, payload);
        sessionStorage.setItem("token", response.data.accessToken);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        set((state) => {
          state.error = "";
          state.user = response.data.user;
          state.token = response.data.accessToken;
        });
      },
    }))
  )
);

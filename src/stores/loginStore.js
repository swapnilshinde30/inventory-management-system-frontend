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
        // const response = await axios.post(
        //   "http://localhost:3030/authentication",
        //   payload
        // );
        try {
          const response = await axios.post(apiEndPoint, payload);
          // console.log(response.data);
          sessionStorage.setItem("token", response.data.accessToken);
          sessionStorage.setItem("user", JSON.stringify(response.data.user));
          //  console.log(sessionStorage.getItem("token"));
          set((state) => {
            state.error = "";
            state.user = response.data.user;
            state.token = response.data.accessToken;
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
        // return response;
      },
    }))
  )
);

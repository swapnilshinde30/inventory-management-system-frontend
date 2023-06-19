import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useLoginStore = create(
  devtools(
    immer((set) => ({
      user: {},
      token: "",

      loginUserAPI: async (payload) => {
        console.log(payload);
        const response = await axios.post(
          "http://localhost:3030/authentication",
          payload
        );
        // console.log(response.data);
        sessionStorage.setItem("token", response.data.accessToken);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        //  console.log(sessionStorage.getItem("token"));
        set((state) => {
          state.user = response.data.user;
          state.token = response.data.accessToken;
        });
      },
    }))
  )
);

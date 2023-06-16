import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useRequisitionStore = create(
  devtools(
    immer((set) => ({
      requisitions: [],
      getAllRequisitionsAPI: async (user) => {
        const response = await axios.get("http://localhost:3030/requisitions", {
          params: { user },
        });
        set(() => ({ requisitions: response.data.data }));
      },

      addRequisitionsAPI: async (payload) => {
        console.log("in store");
        console.log(payload);
        const response = await axios.post(
          "http://localhost:3030/requisitions",
          payload
        );
        console.log(response.data);
        set((state) => {
          state.requisitions = [...state.requisitions, response.data];
        });
      },
    }))
  )
);

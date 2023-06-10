import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
//const http = axios.create({ baseURL: "http://localhost:3030" });

export const useItemClassStore = create(
  devtools(
    immer((set) => ({
      itemClasses: [],
      getItemClasses: async () => {
        const response = await axios.get("http://localhost:3030/itemclasses");
        set((state) => {
          state.itemClasses = response.data.data;
          console.log(state.itemClasses);
        });
      },

      addItemClasses: async (payload) => {
        const response = await axios.post(
          "http://localhost:3030/itemclasses",
          payload
        );
        set((state) => {
          state.itemClasses = [...state.itemClasses, response.data];
        });
      },
    }))
  )
);

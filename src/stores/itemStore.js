import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//const http = axios.create({ baseURL: "http://localhost:3030/" });

export const useItemStore = create(
  devtools(
    immer((set) => ({
      items: [],
      getAllItemsAPI: async () => {
        const response = await axios.get("http://localhost:3030/items");
        set((state) => {
          state.items = response.data.data;
          console.log(state.items);
        });
      },

      addItemAPI: async (payload) => {
        console.log("in store");
        console.log(payload);
        const response = await axios.post(
          "http://localhost:3030/items",
          payload
        );
        set((state) => {
          state.items = [...state.items, response.data];
        });
      },

      deleteItemAPI: async (id) => {
        const response = await axios.delete(
          `http://localhost:3030/items/${id}`
        );
        set((state) => {
          state.items = state.items.filter(
            (item) => item._id != response.data._id
          );
        });
      },
    }))
  )
);

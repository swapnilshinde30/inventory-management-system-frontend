import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// const http = axios.create({ baseURL: "http://localhost:3030" });

export const useShopStore = create(
  devtools(
    immer((set) => ({
      shops: [],
      getAllShopsAPI: async (owner, category) => {
        const data = { owner, category };
        const response = await axios.get("http://localhost:3030/shops", {
          params: data,
        });
        console.log(data);
        set((state) => {
          state.shops = response.data.data;
        });
      },
      addShopAPI: async (payload) => {
        const response = await axios.post(
          "http://localhost:3030/shops",
          payload
        );
        set((state) => {
          state.shops = [...state.shops, response.data];
        });
      },

      deleteShopAPI: async (id) => {
        const response = await axios.delete(
          `http://localhost:3030/shops/${id}`
        );
        set((state) => {
          state.shops = state.shops.filter(
            (shop) => shop._id !== response.data._id
          );
        });
      },
    }))
  )
);

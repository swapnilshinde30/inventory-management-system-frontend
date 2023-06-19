import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// const http = axios.create({ baseURL: "http://localhost:3030" });

export const useShopStore = create(
  devtools(
    immer((set) => ({
      shops: [],

      currentShop: {},

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
      getShopAPI: async (id) => {
        console.log(id);
        const response = await axios.get(`http://localhost:3030/shops/${id}`);
        console.log(response.data);
        set((state) => {
          state.currentShop = response.data;
          console.log(state.currentShop);
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
      editShopAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
        const response = await axios.patch(
          `http://localhost:3030/shops/${id}`,
          payload
        );
        set((state) => {
          const index = state.shops.findIndex(
            (c) => c._id === response.data._id
          );
          state.shops[index] = response.data;
        });
      },
    }))
  )
);

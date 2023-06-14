import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//const http = axios.create({ baseURL: "http://localhost:3030/" });

export const useItemStore = create(
  devtools(
    immer((set) => ({
      items: [],
      currentItem: {},
      getAllItemsAPI: async () => {
        const response = await axios.get("http://localhost:3030/items");
        set((state) => {
          state.items = response.data.data;
          console.log(state.items);
        });
      },
      getItemAPI: async (id) => {
        const response = await axios.get(`http://localhost:3030/items/${id}`);
        console.log(response.data);
        set((state) => {
          state.currentItem = response.data;
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
      editItemAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
        const response = await axios.patch(
          `http://localhost:3030/items/${id}`,
          payload
        );
        set((state) => {
          const index = state.items.findIndex(
            (c) => c._id === response.data._id
          );
          state.items[index] = response.data;
        });
      },
    }))
  )
);

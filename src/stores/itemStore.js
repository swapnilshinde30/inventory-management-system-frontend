import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//const http = axios.create({ baseURL: "http://localhost:3030/" });
const apiEndPoint = process.env.REACT_APP_API_URL + "items";
export const useItemStore = create(
  devtools(
    immer((set) => ({
      items: [],
      currentItem: {},
      error: ``,
      getAllItemsAPI: async () => {
        try {
          const response = await axios.get(apiEndPoint);
          set((state) => {
            state.items = response.data.data;
            console.log(state.items);
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
            //"Failed to fetch items."
          });
        }
      },
      getItemAPI: async (id) => {
        try {
          const response = await axios.get(`${apiEndPoint}/${id}`);
          console.log(response.data);
          set((state) => {
            state.currentItem = response.data;
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      addItemAPI: async (payload) => {
        console.log("in store");
        console.log(payload);
        try {
          const response = await axios.post(apiEndPoint, payload);
          set((state) => {
            state.items = [...state.items, response.data];
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      deleteItemAPI: async (id) => {
        try {
          const response = await axios.delete(`${apiEndPoint}/${id}`);
          set((state) => {
            state.items = state.items.filter(
              (item) => item._id != response.data._id
            );
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },
      editItemAPI: async (payload) => {
        try {
          const id = payload._id;
          delete payload._id;
          const response = await axios.patch(`${apiEndPoint}/${id}`, payload);
          set((state) => {
            const index = state.items.findIndex(
              (c) => c._id === response.data._id
            );
            state.items[index] = response.data;
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },
    }))
  )
);

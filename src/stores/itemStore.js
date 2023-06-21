import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const apiEndPoint = process.env.REACT_APP_API_URL + "items";
export const useItemStore = create(
  devtools(
    immer((set) => ({
      items: [],
      currentItem: {},
      error: ``,
      getAllItemsAPI: async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.get(apiEndPoint, config);
          set((state) => {
            state.items = response.data.data;
            console.log(state.items);
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
          });
        }
      },
      getItemAPI: async (id) => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.get(`${apiEndPoint}/${id}`, config);
          console.log(response.data);
          set((state) => {
            state.currentItem = response.data;
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
          });
        }
      },

      addItemAPI: async (payload) => {
        console.log("in store");
        console.log(payload);
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.post(apiEndPoint, payload, config);
        set((state) => {
          state.items = [...state.items, response.data];
        });
      },

      deleteItemAPI: async (id) => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.delete(`${apiEndPoint}/${id}`, config);
          set((state) => {
            state.items = state.items.filter(
              (item) => item._id != response.data._id
            );
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
          });
        }
      },

      editItemAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.patch(
            `${apiEndPoint}/${id}`,
            payload,
            config
          );
          set((state) => {
            const index = state.items.findIndex(
              (c) => c._id === response.data._id
            );
            state.items[index] = response.data;
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
          });
        }
      },
    }))
  )
);

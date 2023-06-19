import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// const http = axios.create({ baseURL: "http://localhost:3030" });
const apiEndPoint = process.env.REACT_APP_API_URL + "shops";
export const useShopStore = create(
  devtools(
    immer((set) => ({
      shops: [],
      error: "",
      currentShop: {},

      getAllShopsAPI: async (owner, category) => {
        const data = { owner, category };
        try {
          const response = await axios.get(apiEndPoint, {
            params: data,
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          });
          console.log(data);
          set((state) => {
            state.error = "";
            state.shops = response.data.data;
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
            console.log(err.response.data.message);
          });
        }
      },

      getShopAPI: async (id) => {
        console.log(id);
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        try {
          const response = await axios.get(`${apiEndPoint}/${id}`, config);
          console.log(response.data);
          set((state) => {
            state.error = "";
            state.currentShop = response.data;
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
            console.log(err.response.data.message);
          });
        }
      },
      addShopAPI: async (payload) => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.post(apiEndPoint, payload, config);
          set((state) => {
            state.error = "";
            state.shops = [...state.shops, response.data];
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
            console.log(err.response.data.message);
          });
        }
      },

      deleteShopAPI: async (id) => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.delete(`${apiEndPoint}/${id}`, config);
          set((state) => {
            state.error = "";
            state.shops = state.shops.filter(
              (shop) => shop._id !== response.data._id
            );
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
            console.log(err.response.data.message);
          });
        }
      },
      editShopAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        try {
          const response = await axios.patch(
            `${apiEndPoint}/${id}`,
            payload,
            config
          );
          set((state) => {
            state.error = "";
            const index = state.shops.findIndex(
              (c) => c._id === response.data._id
            );
            state.shops[index] = response.data;
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
            console.log(err.response.data.message);
          });
        }
      },
    }))
  )
);

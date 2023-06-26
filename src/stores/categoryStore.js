import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const apiEndPoint = process.env.REACT_APP_API_URL + "categories";
export const useCategoryStore = create(
  devtools(
    immer((set) => ({
      categories: [],
      currentCategory: {},
      error: ``,
      getAllCategoriesAPI: async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.get(`${apiEndPoint}`, config);
          console.log(response);
          set((state) => {
            state.error = "";
            state.categories = response.data.data;
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      getCategoryAPI: async (id) => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.get(`${apiEndPoint}/${id}`, config);
          // const response = await axios.get(
          //   "http://localhost:3030/categories/" + id,
          //   config
          // );
          console.log(response.data);
          set((state) => {
            state.error = "";
            state.currentCategory = response.data;
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      addCategoryAPI: async (payload) => {
        console.log(payload);
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.post(apiEndPoint, payload, config);
          set((state) => {
            state.error = "";
            state.categories = [...state.categories, response.data];
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      deleteCategoryAPI: async (id) => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.delete(`${apiEndPoint}/${id}`, config);
          set((state) => {
            state.error = "";
            state.categories = state.categories.filter(
              (category) => category._id != response.data._id
            );
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      patchCategoryAPI: async (payload) => {
        try {
          const id = payload._id;
          delete payload._id;
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
            state.error = "";
            const index = state.categories.findIndex(
              (c) => c._id === response.data._id
            );
            state.categories[index] = response.data;
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

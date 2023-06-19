import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//const http = axios.create({ baseURL: "http://localhost:3030/" });

export const useCategoryStore = create(
  devtools(
    immer((set) => ({
      categories: [],
      currentCategory: {},
      error: "",
      getAllCategoriesAPI: async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.get(
            "http://localhost:3030/categories",
            config
          );
          console.log(response);
          set((state) => {
            state.categories = response.data.data;
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
          });
        }
      },

      getCategoryAPI: async (id) => {
        console.log(id);
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          };
          const response = await axios.get(
            `http://localhost:3030/categories/${id}`,
            config
          );
          console.log(response.data);
          set((state) => {
            state.currentCategory = response.data;
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
          });
        }
      },

      addCategoryAPI: async (payload) => {
        console.log(payload);
        try {
          const response = await axios.post(
            "http://localhost:3030/categories",
            payload
          );
          set((state) => {
            state.categories = [...state.categories, response.data];
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
          });
        }
      },

      deleteCategoryAPI: async (id) => {
        try {
          const response = await axios.delete(
            `http://localhost:3030/categories/${id}`
          );
          set((state) => {
            state.categories = state.categories.filter(
              (category) => category._id != response.data._id
            );
          });
        } catch (err) {
          set((state) => {
            state.error = err.response.data.message;
          });
        }
      },

      patchCategoryAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
        try {
          const response = await axios.patch(
            `http://localhost:3030/categories/${id}`,
            payload
          );
          set((state) => {
            const index = state.categories.findIndex(
              (c) => c._id === response.data._id
            );
            state.categories[index] = response.data;
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

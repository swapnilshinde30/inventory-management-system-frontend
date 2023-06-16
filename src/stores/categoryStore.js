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
      getAllCategoriesAPI: async () => {
        const response = await axios.get("http://localhost:3030/categories");
        console.log(response);
        set((state) => {
          state.categories = response.data.data;
        });
      },
      getCategoryAPI: async (id) => {
        console.log(id);
        const response = await axios.get(
          `http://localhost:3030/categories/${id}`
        );
        console.log(response.data);
        set((state) => {
          state.currentCategory = response.data;
        });
      },

      addCategoryAPI: async (payload) => {
        console.log(payload);
        const response = await axios.post(
          "http://localhost:3030/categories",
          payload
        );
        set((state) => {
          state.categories = [...state.categories, response.data];
        });
      },

      deleteCategoryAPI: async (id) => {
        const response = await axios.delete(
          `http://localhost:3030/categories/${id}`
        );
        set((state) => {
          state.categories = state.categories.filter(
            (category) => category._id != response.data._id
          );
        });
      },
      patchCategoryAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
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
      },
    }))
  )
);

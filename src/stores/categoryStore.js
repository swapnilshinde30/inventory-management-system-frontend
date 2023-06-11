import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//const http = axios.create({ baseURL: "http://localhost:3030/" });

export const useCategoryStore = create(
  devtools(
    immer((set) => ({
      categories: [],
      getAllCategoriesAPI: async () => {
        const response = await axios.get("http://localhost:3030/categories");
        set((state) => {
          state.categories = response.data.data;
        });
      },

      addCategoryAPI: async (payload) => {
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
    }))
  )
);

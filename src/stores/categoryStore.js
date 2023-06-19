import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//const http = axios.create({ baseURL: "http://localhost:3030/" });
const apiEndPoint = process.env.REACT_APP_API_URL + "categories";
export const useCategoryStore = create(
  devtools(
    immer((set) => ({
      categories: [],
      currentCategory: {},
      error: "",
      getAllCategoriesAPI: async () => {
        // const response = await axios.get("http://localhost:3030/categories");
        console.log(apiEndPoint);
        try {
          const response = await axios.get(`${apiEndPoint}`);
          console.log(response);
          set((state) => {
            state.categories = response.data.data;
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      getCategoryAPI: async (id) => {
        console.log(id);
        // const response = await axios.get(
        //   `http://localhost:3030/categories/${id}`
        // );
        try {
          const response = await axios.get(`${apiEndPoint}/${id}`);
          console.log(response.data);
          set((state) => {
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
        // const response = await axios.post(
        //   "http://localhost:3030/categories",
        //   payload
        // );
        try {
          const response = await axios.post(apiEndPoint, payload);
          set((state) => {
            state.categories = [...state.categories, response.data];
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      deleteCategoryAPI: async (id) => {
        // const response = await axios.delete(
        //   `http://localhost:3030/categories/${id}`
        // );
        try {
          const response = await axios.delete(`${apiEndPoint}/${id}`);
          set((state) => {
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
        const id = payload._id;
        delete payload._id;
        // const response = await axios.patch(
        //   `http://localhost:3030/categories/${id}`,
        //   payload
        // );
        try {
          const response = await axios.patch(`${apiEndPoint}/${id}`, payload);
          set((state) => {
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

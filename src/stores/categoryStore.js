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
      error: "",
      getAllCategoriesAPI: async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.get(`${apiEndPoint}`, config);
        console.log(response);
        set((state) => {
          state.categories = response.data.data;
        });
      },

      getCategoryAPI: async (id) => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.get(`${apiEndPoint}/${id}`, config);
        console.log(response.data);
        set((state) => {
          state.currentCategory = response.data;
        });
      },

      addCategoryAPI: async (payload) => {
        console.log(payload);
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.post(apiEndPoint, payload, config);
        set((state) => {
          state.categories = [...state.categories, response.data];
        });
      },

      deleteCategoryAPI: async (id) => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.delete(`${apiEndPoint}/${id}`, config);
        set((state) => {
          state.categories = state.categories.filter(
            (category) => category._id != response.data._id
          );
        });
      },

      patchCategoryAPI: async (payload) => {
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
          const index = state.categories.findIndex(
            (c) => c._id === response.data._id
          );
          state.categories[index] = response.data;
        });
      },
    }))
  )
);

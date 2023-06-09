import { create } from "zustand";
import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:3030/" });

export const useCategoryStore = create((set) => ({
  categories: [],
  getCategories: async function () {
    const response = await http.get("categories");
    set(() => ({ categories: response.data.data }));
  },
}));

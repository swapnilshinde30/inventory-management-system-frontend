import axios from "axios";
import { create } from "zustand";
const http = axios.create({ baseURL: "http://localhost:3030/" });
export const useItemStore = create((set) => ({
  items: [],
  getItems: async function () {
    const response = await http.get("items");
    set(() => ({ items: response.data.data }));
  },
}));

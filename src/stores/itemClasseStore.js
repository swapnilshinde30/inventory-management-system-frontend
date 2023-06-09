import axios from "axios";
import { create } from "zustand";

const http = axios.create({ baseURL: "http://localhost:3030" });

export const useItemClassStore = create((set) => ({
  itemClasses: [],
  getItemClasses: async function () {
    const response = await http.get("itemclasses");
    set(() => ({ itemClasses: response.data.data }));
  },
}));

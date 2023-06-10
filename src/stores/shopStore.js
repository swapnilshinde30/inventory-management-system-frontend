import axios from "axios";
import { create } from "zustand";

const http = axios.create({ baseURL: "http://localhost:3030" });
export const useShopStore = create((set) => ({
  shops: [],
  getShops: async function () {
    const response = await http.get("shops");
    set(() => ({ shops: response.data.data }));
  },
}));

import { create } from "zustand";
import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:3030/" });

export const useUserStore = create((set) => ({
  users: [],
  getUsers: async () => {
    const response = await http.get("users");
    set(() => ({ users: response.data.data }));
  },
}));

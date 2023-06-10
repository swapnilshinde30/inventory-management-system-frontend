import { create } from "zustand";
import axios from "axios";

//const http = axios.create({ baseURL: "http://localhost:3030/" });

export const useUserStore = create((set) => ({
  users: [],
  getUsers: async (role) => {
    const response = await axios.get("http://localhost:3030/users", {
      params: { role },
    });
    set(() => ({ users: response.data.data }));
  },
}));

// export const useUserStore = create((set) => ({
//   users: [],
//   getUsers: async (role) => {
//     const response = await http.get("users", { params: { role } });
//     set(() => ({ users: response.data.data }));
//   },
// }));

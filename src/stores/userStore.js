import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//const http = axios.create({ baseURL: "http://localhost:3030/" });

export const useUserStore = create(
  devtools(
    immer((set) => ({
      users: [],
      getAllUsersAPI: async (role) => {
        const response = await axios.get("http://localhost:3030/users", {
          params: { role },
        });
        set((state) => {
          state.users = response.data.data;
        });
      },
      addUserAPI: async (payload) => {
        const response = await axios.post(
          "http://localhost:3030/users",
          payload
        );
        set((state) => {
          state.users = [...state.users, response.data];
        });
      },

      deleteUserAPI: async (id) => {
        const response = await axios.delete(
          `http://localhost:3030/users/${id}`
        );
        set((state) => {
          state.users = state.users.filter(
            (user) => user._id !== response.data._id
          );
        });
      },
    }))
  )
);

// export const useUserStore = create((set) => ({
//   users: [],
//   getUsers: async (role) => {
//     const response = await http.get("users", { params: { role } });
//     set(() => ({ users: response.data.data }));
//   },
// }));

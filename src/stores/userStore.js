import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//const http = axios.create({ baseURL: "http://localhost:3030/" });

export const useUserStore = create(
  devtools(
    immer((set) => ({
      users: [],
      currentUser: {},
      getAllUsersAPI: async (role) => {
        const response = await axios.get("http://localhost:3030/users", {
          params: { role },
        });
        set((state) => {
          state.users = response.data.data;
        });
      },
      getUserAPI: async (id) => {
        console.log(id);
        const response = await axios.get(`http://localhost:3030/users/${id}`);

        set((state) => {
          state.currentUser = response.data;
          console.log(state.currentUser);
        });
      },
      addUserAPI: async (payload) => {
        console.log(payload);
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
      editUserAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
        console.log(payload);
        const response = await axios.patch(
          `http://localhost:3030/users/${id}`,
          payload
        );
        set((state) => {
          const index = state.users.findIndex(
            (c) => c._id === response.data._id
          );
          state.users[index] = response.data;
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

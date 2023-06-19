import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//const http = axios.create({ baseURL: "http://localhost:3030/" });
const apiEndPoint = process.env.REACT_APP_API_URL + "users";
export const useUserStore = create(
  devtools(
    immer((set) => ({
      users: [],
      currentUser: {},
      error: "",

      getAllUsersAPI: async (role) => {
        try {
          const response = await axios.get(apiEndPoint, {
            params: { role },
          });
          set((state) => {
            state.users = response.data.data;
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },
      getUserAPI: async (id) => {
        console.log(id);
        try {
          const response = await axios.get(`${apiEndPoint}/${id}`);

          set((state) => {
            state.currentUser = response.data;
            console.log(state.currentUser);
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },
      addUserAPI: async (payload) => {
        console.log(payload);
        try {
          const response = await axios.post(apiEndPoint, payload);

          set((state) => {
            state.users = [...state.users, response.data];
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      deleteUserAPI: async (id) => {
        try {
          const response = await axios.delete(`${apiEndPoint}/${id}`);
          set((state) => {
            state.users = state.users.filter(
              (user) => user._id !== response.data._id
            );
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },
      editUserAPI: async (payload) => {
        try {
          const id = payload._id;
          delete payload._id;
          console.log(payload);
          const response = await axios.patch(`${apiEndPoint}/${id}`, payload);
          set((state) => {
            const index = state.users.findIndex(
              (c) => c._id === response.data._id
            );
            state.users[index] = response.data;
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

// export const useUserStore = create((set) => ({
//   users: [],
//   getUsers: async (role) => {
//     const response = await http.get("users", { params: { role } });
//     set(() => ({ users: response.data.data }));
//   },
// }));

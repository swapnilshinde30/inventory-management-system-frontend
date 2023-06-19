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
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
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
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        try {
          const response = await axios.get(`${apiEndPoint}/${id}`, config);

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
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.post(apiEndPoint, payload, config);

        set((state) => {
          state.users = [...state.users, response.data];
        });
      },

      deleteUserAPI: async (id) => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.delete(`${apiEndPoint}/${id}`, config);
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
          const index = state.users.findIndex(
            (c) => c._id === response.data._id
          );
          state.users[index] = response.data;
        });
      },
    }))
  )
);

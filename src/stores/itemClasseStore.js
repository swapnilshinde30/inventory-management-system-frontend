import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
//const http = axios.create({ baseURL: "http://localhost:3030" });
const apiEndPoint = process.env.REACT_APP_API_URL + "itemclasses";
export const useItemClassStore = create(
  devtools(
    immer((set) => ({
      itemClasses: [],
      currentItemclass: {},
      getAllItemClassesAPI: async () => {
        try {
          const response = await axios.get(`${apiEndPoint}`);
          set((state) => {
            state.itemClasses = response.data.data;
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },
      getItemClassAPI: async (id) => {
        console.log(id);
        try {
          const response = await axios.get(`${apiEndPoint}/${id}`);

          set((state) => {
            state.currentItemclass = response.data;
            console.log(state.currentItemclass);
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      addItemClassesAPI: async (payload) => {
        try {
          const response = await axios.post(apiEndPoint, payload);
          set((state) => {
            state.itemClasses = [...state.itemClasses, response.data];
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },

      deleteItemClassAPI: async (id) => {
        try {
          const response = await axios.delete(`${apiEndPoint}/${id}`);
          set((state) => {
            state.itemClasses = state.itemClasses.filter(
              (itemClass) => itemClass._id != response.data._id
            );
          });
        } catch (error) {
          set((state) => {
            state.error = error.response.data.message;
          });
        }
      },
      editItemClassAPI: async (payload) => {
        try {
          const id = payload._id;
          delete payload._id;
          const response = await axios.patch(`${apiEndPoint}/${id}`, payload);
          set((state) => {
            const index = state.itemClasses.findIndex(
              (c) => c._id === response.data._id
            );
            state.itemClasses[index] = response.data;
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

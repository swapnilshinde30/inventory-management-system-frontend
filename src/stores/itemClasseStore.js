import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
//const http = axios.create({ baseURL: "http://localhost:3030" });

export const useItemClassStore = create(
  devtools(
    immer((set) => ({
      itemClasses: [],
      currentItemclass: {},
      getAllItemClassesAPI: async () => {
        const response = await axios.get("http://localhost:3030/itemclasses");
        set((state) => {
          state.itemClasses = response.data.data;
        });
      },
      getItemClassAPI: async (id) => {
        console.log(id);
        const response = await axios.get(
          `http://localhost:3030/itemclasses/${id}`
        );

        set((state) => {
          state.currentItemclass = response.data;
          console.log(state.currentItemclass);
        });
      },

      addItemClassesAPI: async (payload) => {
        const response = await axios.post(
          "http://localhost:3030/itemclasses",
          payload
        );
        set((state) => {
          state.itemClasses = [...state.itemClasses, response.data];
        });
      },

      deleteItemClassAPI: async (id) => {
        const response = await axios.delete(
          `http://localhost:3030/itemclasses/${id}`
        );
        set((state) => {
          state.itemClasses = state.itemClasses.filter(
            (itemClass) => itemClass._id != response.data._id
          );
        });
      },
      editItemClassAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
        const response = await axios.patch(
          `http://localhost:3030/itemclasses/${id}`,
          payload
        );
        set((state) => {
          const index = state.itemClasses.findIndex(
            (c) => c._id === response.data._id
          );
          state.itemClasses[index] = response.data;
        });
      },
    }))
  )
);

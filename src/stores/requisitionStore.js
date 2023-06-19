import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
const apiEndPoint = process.env.REACT_APP_API_URL;
export const useRequisitionStore = create(
  devtools(
    immer((set) => ({
      requisitions: [],
      getAllRequisitionsAPI: async (user) => {
        const requisitions = await axios.get(`${apiEndPoint}/requisitions`, {
          params: { user },
        });
        const shops = await axios.get(`${apiEndPoint}/shops`);
        const shopItems = await axios.get(`${apiEndPoint}/shopitems`);

        const requisitionsDetails = requisitions.data.data.map(
          (requisition) => {
            let shopItem = shopItems.data.data.find(
              (shopItem) => shopItem._id === requisition.shopItem
            );
            let shop = shops.data.data.find(
              (shop) => shop._id === shopItem.shop
            );
            requisition.shopName = shop.name;

            console.log(shop.name);
            console.log(requisition.shopName);
            return requisition;
          }
        );

        set(() => ({ requisitions: requisitionsDetails }));
      },

      addRequisitionsAPI: async (payload) => {
        console.log("in store");
        console.log(payload);
        const response = await axios.post(
          `${apiEndPoint}/requisitions`,
          payload
        );
        console.log(response.data);
        set((state) => {
          state.requisitions = [...state.requisitions, response.data];
        });
      },

      patchRequisitionsAPI: async (payload) => {
        console.log(payload);
        const id = payload.id;
        console.log(id);
        delete payload.id;
        const response = await axios.patch(
          `${apiEndPoint}/requisitions/${id}`,
          payload
        );
        set((state) => {
          const index = state.requisitions.findIndex(
            (r) => r._id === response.data._id
          );
          state.requisitions[index] = response.data;
        });
      },
    }))
  )
);

import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useRequisitionStore = create(
  devtools(
    immer((set) => ({
      requisitions: [],
      getAllRequisitionsAPI: async (user) => {
        const requisitions = await axios.get(
          "http://localhost:3030/requisitions",
          {
            params: { user },
          }
        );
        const shops = await axios.get("http://localhost:3030/shops");
        const shopItems = await axios.get("http://localhost:3030/shopitems");

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
          "http://localhost:3030/requisitions",
          payload
        );
        console.log(response.data);
        set((state) => {
          state.requisitions = [...state.requisitions, response.data];
        });
      },
    }))
  )
);

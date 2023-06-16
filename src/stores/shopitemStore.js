import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useShopitemStore = create(
  devtools(
    immer((set) => ({
      shopitems: [],
      currentShopitem: {},
      getAllShopitemsAPI: async (shop) => {
        const shopItems = await axios.get("http://localhost:3030/shopitems", {
          params: { shop },
        });
        const shops = await axios.get("http://localhost:3030/shops");
        const items = await axios.get("http://localhost:3030/items");
        console.log(shopItems);
        const shopItemDetails = shopItems.data.data.map((si) => {
          let shop = shops.data.data.find((s) => s._id === si.shop);
          let item = items.data.data.find((i) => i._id === si.item);
          if (!shop) return;
          if (!item) return;
          si.shopName = shop.name;
          si.itemName = item.name;
          return si;
        });
        const user = JSON.parse(sessionStorage.getItem("user"));

        set((state) => {
          if (shop === undefined && user.role === "shopkeeper") return;
          state.shopitems = shopItemDetails;
          console.log(state.shopitems);
        });
      },

      getShopitemAPI: async (id) => {
        const response = await axios.get(
          `http://localhost:3030/shopitems/${id}`
        );
        console.log(response.data);
        set((state) => {
          state.currentShopitem = response.data;
        });
      },

      addShopitemAPI: async (payload) => {
        const response = await axios.post(
          "http://localhost:3030/shopitems",
          payload
        );

        console.log(response.data);
        let shop = response.data.shop;
        set((state) => {
          state.shopitems = [...state.shopitems, response.data];
        });

        const shopItems = await axios.get("http://localhost:3030/shopitems", {
          params: { shop },
        });
        const shops = await axios.get("http://localhost:3030/shops");
        const items = await axios.get("http://localhost:3030/items");
        console.log(shopItems);
        const shopItemDetails = shopItems.data.data.map((si) => {
          let shop = shops.data.data.find((s) => s._id === si.shop);
          let item = items.data.data.find((i) => i._id === si.item);
          si.shopName = shop.name;
          si.itemName = item.name;
          return si;
        });
        const user = JSON.parse(sessionStorage.getItem("user"));

        set((state) => {
          state.shopitems = shopItemDetails;
          console.log(state.shopitems);
        });
      },

      deleteShopitemAPI: async (id) => {
        const response = await axios.delete(
          `http://localhost:3030/shopitems/${id}`
        );
        set((state) => {
          state.shopitems = state.shopitems.filter(
            (shopitem) => shopitem._id != response.data._id
          );
        });
      },

      editShopitemAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
        const response = await axios.patch(
          `http://localhost:3030/shopitems/${id}`,
          payload
        );
        set((state) => {
          const index = state.shopitems.findIndex(
            (c) => c._id === response.data._id
          );
          state.shopitems[index] = response.data;
        });
      },
    }))
  )
);

// getAllShopItemsOfOwner: async (owner) => {
//   console.log(owner);
//   const shopItems = await axios.get("http://localhost:3030/shopitems");
//   const shops = await axios.get("http://localhost:3030/shops", {
//     params: { owner },
//   });
//   const filteredShopItems = [];
//   console.log(shops);
//   shops.data.data.forEach((s) => {
//     const shopitem = shopItems.data.data.filter(
//       (si) => si.shop === s._id
//     );
//     shopitem.forEach((sitem) => {
//       filteredShopItems.push(sitem);
//     });
//   });
//   console.log(filteredShopItems);
//   set((state) => {
//     // if (shop === undefined) return;
//     state.shopitems = filteredShopItems;
//     console.log(state.shopitems);
//   });
// },

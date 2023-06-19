import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
const apiEndPoint = process.env.REACT_APP_API_URL;
export const useShopitemStore = create(
  devtools(
    immer((set) => ({
      shopitems: [],
      currentShopitem: {},
      getAllShopitemsAPI: async (shop) => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const shopItems = await axios.get(`${apiEndPoint}/shopitems`, {
          params: { shop },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        const shops = await axios.get(`${apiEndPoint}/shops`, config);
        const items = await axios.get(`${apiEndPoint}/items`, config);
        console.log(shopItems);
        const shopItemDetails = shopItems.data.data.map((si) => {
          let shop = shops.data.data.find((s) => s._id === si.shop);
          let item = items.data.data.find((i) => i._id === si.item);
          if (!shop) return;
          if (!item) return;
          si.shopName = shop.name;
          si.shopId = shop.shopId;
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
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const shopItem = await axios.get(
          `http://localhost:3030/shopitems/${id}`,
          config
        );
        const shops = await axios.get("http://localhost:3030/shops", config);
        const items = await axios.get("http://localhost:3030/items", config);
        let item = items.data.data.find((i) => i._id === shopItem.data.item);
        let shop = shops.data.data.find((s) => s._id === shopItem.data.shop);
        shopItem.shopId = shop._id;
        shopItem.itemName = item.name;
        shopItem.shopName = shop.name;
        set((state) => {
          state.currentShopitem = shopItem.data;
        });
      },

      addShopitemAPI: async (payload) => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.post(
          `${apiEndPoint}/shopitems`,
          payload,
          config
        );

        console.log(response.data);
        let shop = response.data.shop;
        set((state) => {
          state.shopitems = [...state.shopitems, response.data];
        });

        const shopItems = await axios.get(`${apiEndPoint}/shopitems`, {
          params: { shop },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        const shops = await axios.get(`${apiEndPoint}/shops`, config);
        const items = await axios.get(`${apiEndPoint}/items`, config);
        console.log(shopItems);
        const shopItemDetails = shopItems.data.data.map((si) => {
          let shop = shops.data.data.find((s) => s._id === si.shop);
          let item = items.data.data.find((i) => i._id === si.item);
          si.shopName = shop.name;
          si.itemName = item.name;
          si.shopId = shop.shopId;

          return si;
        });
        const user = JSON.parse(sessionStorage.getItem("user"));

        set((state) => {
          state.shopitems = shopItemDetails;
          console.log(state.shopitems);
        });
      },

      deleteShopitemAPI: async (id) => {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.delete(
          `${apiEndPoint}/shopitems/${id}`,
          config
        );
        set((state) => {
          state.shopitems = state.shopitems.filter(
            (shopitem) => shopitem._id !== response.data._id
          );
        });
      },

      editShopitemAPI: async (payload) => {
        const id = payload._id;
        delete payload._id;
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.patch(
          `${apiEndPoint}/shopitems/${id}`,
          payload,
          config
        );
        let shop = response.data.shop;
        set((state) => {
          const index = state.shopitems.findIndex(
            (c) => c._id === response.data._id
          );
          state.shopitems[index] = response.data;
        });
        const shopItems = await axios.get(`${apiEndPoint}/shopitems`, {
          params: { shop },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        const shops = await axios.get(`${apiEndPoint}/shops`, config);
        const items = await axios.get(`${apiEndPoint}/items`, config);
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
    }))
  )
);

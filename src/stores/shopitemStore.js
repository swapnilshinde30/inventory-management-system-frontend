import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useShopitemStore = create(
  devtools(
    immer((set) => ({
      shopitems: [],
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
          si.shopName = shop.name;
          si.itemName = item.name;
          return si;
        });
        set((state) => {
          // if (shop === undefined) return;
          state.shopitems = shopItemDetails;
          console.log(state.shopitems);
        });
      },
    }))
  )
);

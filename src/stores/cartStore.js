import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],

  addToCartAPI: (item) => {
    set((state) => ({ cartItems: [...state.cartItems, item] }));
  },

  deleteCartItemAPI: (id) =>
    set(
      (state) =>
        (state.cartItems = state.cartItems.filter((item) => item._id != id))
    ),
  removeAllBears: () => set({ cartItems: 0 }),
}));

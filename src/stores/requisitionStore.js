import axios from "axios";
import { create } from "zustand";
const http = axios.create({ baseURL: "http://localhost:3030/" });
export const useRequisitionStore = create((set) => ({
  requisitions: [],
  getRequisition: async function () {
    const response = await http.get("requisitions");
    set(() => ({ requisitions: response.data.data }));
  },
}));

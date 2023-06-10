import axios from "axios";
import {create} from "zustand"
const http=axios.create({baseURL:"http://localhost:3030/"});
export const useShopItemStore = create((set)=>({
    shopitems:[],
    getShopItems: async function(){
        const response=await http.get("shopitems");
        set(()=>({shopitems:response.data.data}))
    }
}))
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./routes/categories";
import CategoryForm from "./routes/categoryForm";
import LoginPage from "./routes/LoginPage";
import HomePage from "./routes/HomePage";
import Users from "./routes/Users";
import Shops from "./routes/Shops";
import { ThemeProvider } from "@material-tailwind/react";
import ItemClasses from "./routes/itemClasses";
import ItemclassForm from "./routes/itemclassForm";
import Items from "./routes/items";

import ShopItems from "./routes/shopitems";
import ShopsForCustomer from "./routes/shopsForCustomer";
import Cart from "./routes/cart";
import Order from "./routes/orders";

import Requisitions from "./routes/requisition";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route index="true" element={<HomePage/>}/> */}
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route index={true} element={<Categories />} />
            <Route path="categories" element={<Categories />} />
            <Route path="users" element={<Users />} />
            <Route path="shops" element={<Shops />} />
            <Route path="categories/new" element={<CategoryForm />} />
            <Route path="itemclasses" element={<ItemClasses />} />
            <Route path="itemclasses/new" element={<ItemclassForm />} />
            <Route path="items" element={<Items />} />
            <Route path="shopitems" element={<ShopItems />} />
            <Route path="shopsForCustomer" element={<ShopsForCustomer />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Order />} />
          </Route>
        </Routes>

    
          <Route path="requisitions" element={<Requisitions />} />
       

      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

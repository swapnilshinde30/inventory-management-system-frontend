import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "../src/routes/Admin/categories";
// import CategoryForm from "./routes/categoryForm";
import LoginPage from "./routes/LoginPage";
import HomePage from "./routes/HomePage";
import Users from "../src/routes/Admin/Users";
import Shops from "./routes/Shop Keeper/Shops";
import { ThemeProvider } from "@material-tailwind/react";
import ItemClasses from "../src/routes/Admin/itemClasses";
import ItemclassForm from "./routes/itemclassForm";
import Items from "../src/routes/Admin/items";

import ShopItems from "./routes/Shop Keeper/shopitems";
import ShopsForCustomer from "../src/routes/Customer/shopsForCustomer";
import Cart from "../src/routes/Customer/cart";
import Order from "../src/routes/Customer/orders";

import Requisitions from "./routes/Shop Keeper/requisition";
import Error404 from "./routes/errorPage/404";
import Error403 from "./routes/errorPage/403";
import Error401 from "./routes/errorPage/401";
import Error500 from "./routes/errorPage/500";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route index="true" element={<HomePage/>}/> */}
            <Route path="login" element={<LoginPage />} />
            <Route index={true} element={<Categories />} />
            <Route path="categories" element={<Categories />} />
            <Route path="users" element={<Users />} />
            <Route path="shops" element={<Shops />} />
            <Route path="itemclasses" element={<ItemClasses />} />
            <Route path="itemclasses/new" element={<ItemclassForm />} />
            <Route path="items" element={<Items />} />
            <Route path="shopitems" element={<ShopItems />} />
            <Route path="shopsForCustomer" element={<ShopsForCustomer />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Order />} />
            <Route path="requisitions" element={<Requisitions />} />
            <Route path="home" element={<HomePage />} />
            <Route path="error404" element={<Error404 />} />
            <Route path="error403" element={<Error403 />} />
            <Route path="error401" element={<Error401 />} />
            <Route path="error500" element={<Error500 />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

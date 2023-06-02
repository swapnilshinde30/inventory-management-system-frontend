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
import CategoryModal from "./routes/categoryModal";
import { ThemeProvider } from "@material-tailwind/react";
import ItemClasses from "./routes/itemClasses";
import ItemclassForm from "./routes/itemclassForm";
import Items from "./routes/items";

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
          <Route path="users" element={<Users />}/>
          <Route path="shops" element={<Shops />}/>
          <Route path="categoryModal" element={<CategoryModal />}/>
          <Route path="categories/new" element={<CategoryForm />} />
          <Route path="itemclasses" element={<ItemClasses />} />
          <Route path="itemclasses/new" element={<ItemclassForm />} />
          <Route path="items" element={<Items />} />
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

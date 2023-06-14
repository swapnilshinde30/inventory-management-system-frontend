import logo from "./logo.svg";
import "./App.css";
import NavBar from "./routes/navbar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Categories from "./routes/Admin/categories";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import { useLoginStore } from "./stores/loginStore";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
    // console.log(user);
  }, [user]);
  return (
    <div>
      {token ? <NavBar /> : null}
      <Outlet />
    </div>
  );
}

export default App;

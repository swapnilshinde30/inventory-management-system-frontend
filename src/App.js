import logo from "./logo.svg";
import "./App.css";
import NavBar from "./routes/navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);
  return (
    <div>
      {token ? <NavBar /> : null}
      <Outlet />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./routes/navbar";
import { Outlet } from "react-router-dom";
import Categories from "./routes/categories";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

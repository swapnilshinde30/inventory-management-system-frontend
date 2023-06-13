import logo from "./logo.svg";
import "./App.css";
import NavBar from "./routes/navbar";
import { Outlet } from "react-router-dom";
import Categories from "./routes/Admin/categories";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import { useLoginStore } from "./stores/loginStore";

function App() {
  const user = useLoginStore((state) => state.user);

  return (
    <div>
      {console.log(sessionStorage.getItem("token"))}
      {sessionStorage.getItem("token") ? <NavBar /> : null}
      <Outlet />
    </div>
  );
}

export default App;

import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Context from "./Context/ContextProvider";
import Router from "./router/router";

function App() {
  return (
    <Context>
      <Router />
    </Context>
  );
}

export default App;

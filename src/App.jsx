import { Outlet, Link } from "react-router-dom";
import Context from "./Context/ContextProvider";
import Router from "./router/router";

import "./App.css";

function App() {
  return (
    <Context>
      <Router />
    </Context>
  );
}

export default App;

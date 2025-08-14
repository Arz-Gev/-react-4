import React, { useContext } from "react";
import { useState } from "react";
import { globalContext } from "../Context/ContextProvider";

import "./Header.css";

export default function Header() {
  const [data, setData] = useState(useContext(globalContext).sharedData);

  return (
    <header className="header">
      <div className="left">
        <div className="icon"></div>
        <h2>Personal Dashboard</h2>
      </div>
      {data.userData && <div className="right"></div>}
    </header>
  );
}

import React, { useContext } from "react";
import { useState } from "react";
import { globalContext } from "../Context/ContextProvider";

import "./Header.css";

export default function Header() {
  //   const [data, setData] = useState(useContext(globalContext).sharedData);

  const { sharedData, deleteUserData } = useContext(globalContext);

  return (
    <header className="header">
      <div className="left">
        <div className="icon"></div>
        <h2>Personal Dashboard</h2>
      </div>
      {sharedData.logged ? (
        <div className="right">
          Welcome back <h4>{sharedData.userData.name}</h4>
          <button type="button" className="logout-btn" onClick={deleteUserData}>
            Logout
          </button>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}

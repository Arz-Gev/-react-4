import React, { useContext } from "react";
import { useState } from "react";
import { globalContext } from "../Context/ContextProvider";
import "./Header.css";

export default function Header() {
  const { sharedData, deleteUserData } = useContext(globalContext);

  return (
    <div className="wraper">
      <header className="header">
        <div className="left">
          <div className="icon"></div>
          <h2>Personal Dashboard</h2>
        </div>
        {sharedData.logged ? (
          <div className="right">
            Welcome back <h4>{sharedData.userData.name}</h4>
            <button
              type="button"
              className="logout-btn"
              onClick={deleteUserData}
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Please log in to access your dashboard</p>
        )}
      </header>
    </div>
  );
}

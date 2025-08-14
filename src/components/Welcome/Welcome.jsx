import React, { useContext } from "react";
import { useState } from "react";
import { globalContext } from "../Context/ContextProvider";
import "./Welcome.css";

export default function Welcome() {
  const { sharedData } = useContext(globalContext);

  return (
    <div className="welcome-container">
      {sharedData.logged ? (
        <p>Sign in to access your personal dashboard</p>
      ) : (
        <p>Sign in to access your personal dashboard</p>
      )}
    </div>
  );
}

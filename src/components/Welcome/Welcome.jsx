import React, { useContext } from "react";
import { globalContext } from "../Context/ContextProvider";
import "./Welcome.css";

export default function Welcome() {
  const { sharedData } = useContext(globalContext);

  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="welcome-container">
      {sharedData.logged ? (
        <>
          <h2>Welcome Back, {sharedData.userData.name}</h2>
          <p>Today is Thursday, {" " + date}</p>
        </>
      ) : (
        <>
          <h2>Welcome Back</h2>
          <p>Sign in to access your personal dashboard</p>
        </>
      )}
    </div>
  );
}

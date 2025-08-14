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
          <h1>Welcome Back, {sharedData.userData.name}</h1>
          <p>Today is Thursday, {" " + date}</p>
        </>
      ) : (
        <>
          <h1>Welcome Back</h1>
          <p>Sign in to access your personal dashboard</p>
        </>
      )}
    </div>
  );
}

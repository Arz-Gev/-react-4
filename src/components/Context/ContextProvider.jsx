import { EditImageResponse } from "@google/genai";
import { createContext, useState } from "react";

export const globalContext = createContext();

export default function Context({ children }) {
  const [sharedData, setSharedData] = useState({
    logged: localStorage.getItem("userData"),
    userData: JSON.parse(localStorage.getItem("userData")),
    storageKey: "userData",
  });

  setUserData({ user: "gev", email: "email@email.com" });
  // deleteUserData();
  console.log(sharedData.logged);

  function deleteUserData() {
    // setSharedData((prev) => ({ ...prev, userData: null }));
    localStorage.removeItem("userData");
  }

  function setUserData(data) {
    // setSharedData((prev) => ({ ...prev, userData: data }));
    localStorage.setItem("userData", JSON.stringify(data));
  }

  return (
    <>
      <globalContext.Provider
        value={{ sharedData, deleteUserData, setUserData }}
      >
        {children}
      </globalContext.Provider>
    </>
  );
}

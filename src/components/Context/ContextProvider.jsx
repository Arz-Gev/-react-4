import { createContext, useState } from "react";

export const globalContext = createContext();

export default function Context({ children }) {
  const [sharedData, setSharedData] = useState({
    userData: JSON.parse(localStorage.getItem("userData")),
    storageKey: "userData",
  });

  setUserData({ name: "gev", email: "gev@mail.com" });

  function deleteUserData() {
    setSharedData((prev) => ({ ...prev, userData: null }));
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

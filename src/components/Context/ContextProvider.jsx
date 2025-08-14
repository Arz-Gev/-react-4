import { createContext, useEffect, useState } from "react";

export const globalContext = createContext();

export default function Context({ children }) {
  const [sharedData, setSharedData] = useState(() => {
    const data = localStorage.getItem("userData");
    const parsedData = data ? JSON.parse(data) : null;

    return {
      logged: !!data,
      userData: parsedData,
      storageKey: "userData",
    };
  });

  // setUserData({ name: "gev", email: "email@email.com" });

  // deleteUserData();

  console.log(sharedData.logged);

  function deleteUserData() {
    setSharedData((prev) => ({ ...prev, userData: null, logged: false }));
    localStorage.removeItem("userData");
  }

  function setUserData(data = { name: "gev", email: "email@email.com" }) {
    setSharedData((prev) => ({ ...prev, userData: data, logged: true }));
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

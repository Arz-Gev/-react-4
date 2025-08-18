import { createContext, useState } from "react";

export const globalContext = createContext();

export default function Context({ children }) {
  const [sharedData, setSharedData] = useState(() => {
    const data = localStorage.getItem("userData");
    const parsedData = data ? JSON.parse(data) : null;

    console.log(parsedData);
    return {
      logged: !!data,
      userData: parsedData,
    };
  });

  function deleteUserData() {
    localStorage.removeItem("article");
    localStorage.removeItem("userData");
    setSharedData((prev) => ({ ...prev, userData: null, logged: false }));
  }

  function setUserData(data) {
    console.log(data);
    setSharedData({ ...sharedData, userData: data, logged: true });
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

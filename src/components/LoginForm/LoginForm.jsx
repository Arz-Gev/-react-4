import React, { useContext } from "react";
import { globalContext } from "../Context/ContextProvider";
import "./LoginForm.css";

export default function LoginForm() {
  const { sharedData, deleteUserData } = useContext(globalContext);

  return <form className="form"></form>;
}

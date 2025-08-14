import React, { useContext } from "react";
import { globalContext } from "../Context/ContextProvider";
import "./LoginForm.css";
import { Mail, User, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const { sharedData, setUserData } = useContext(globalContext);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return !sharedData.logged ? (
    <form onSubmit={handleSubmit} className="form">
      <label className="input-label" htmlFor="userName">
        <span className="span">
          <User className="form-icon" />
          Username
        </span>
        <input
          className="input-field"
          type="text"
          name="userName"
          id="userName"
          placeholder="Enter your username"
        />
      </label>
      <label className="input-label" htmlFor="userEmail">
        <span className="span">
          <Mail className="form-icon" />
          Email
        </span>
        <input
          className="input-field"
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="Enter your email"
        />
      </label>
      <button type="submit" className="submit-button">
        Sign In
        <ArrowRight className="form-icon" />
      </button>
    </form>
  ) : null;
}

import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../../Context/ContextProvider";
import { Mail, User, ArrowRight, FolderMinus, Sandwich } from "lucide-react";
import "./LoginForm.css";

export default function LoginForm() {
  const { sharedData, setUserData } = useContext(globalContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: undefined,
    email: undefined,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    formData.name !== undefined && formData.email !== undefined
      ? setDisabled(false)
      : setDisabled(true);
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    setUserData(formData);
  }

  useEffect(() => {
    sharedData.logged && navigate("/dashboard");
  }, [sharedData.logged]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="input-label" htmlFor="userName">
        <span className="span">
          <User className="form-icon" />
          Username
        </span>
        <input
          className="input-field"
          type="text"
          name="name"
          id="userName"
          placeholder="Enter your username"
          onChange={handleChange}
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
          name="email"
          id="userEmail"
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="submit-button" disabled={disabled}>
        Sign In
        <ArrowRight className="form-icon" />
      </button>
    </form>
  );
}

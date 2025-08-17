import React from "react";
import Header from "../components/header/Header";
import Welcome from "../components/welcome/Welcome";
import LoginForm from "../components/loginForm/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Header />
      <Welcome />
      <LoginForm />
    </>
  );
}

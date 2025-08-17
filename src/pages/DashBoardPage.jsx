import React from "react";
import Header from "../components/header/Header";
import Welcome from "../components/welcome/Welcome";
import Dashboard from "../components/dashboard/Dashboard";

export default function DashBoardPage() {
  return (
    <>
      <Header />
      <Welcome />
      <Dashboard />
    </>
  );
}

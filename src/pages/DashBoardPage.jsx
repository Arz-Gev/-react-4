import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { globalContext } from "../Context/ContextProvider";

import Header from "../components/header/Header";
import Welcome from "../components/welcome/Welcome";
import Dashboard from "../components/dashboard/Dashboard";

export default function DashBoardPage() {
  const { sharedData } = useContext(globalContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (sharedData.userData.id !== Number(id)) navigate("asdf");
  }, [id]);

  return (
    <>
      <Header />
      <Welcome />
      <Dashboard />
    </>
  );
}

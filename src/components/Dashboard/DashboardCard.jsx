import React, { useContext } from "react";
import { globalContext } from "../Context/ContextProvider";
import "./Dashboard.css";

export default function DashboardCard(card) {
  const { sharedData } = useContext(globalContext);
  return <div className="card">{card}</div>;
}

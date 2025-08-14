import React, { useContext } from "react";
import { globalContext } from "../Context/ContextProvider";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

export default function Dashboard() {
  const { sharedData } = useContext(globalContext);

  const cards = [
    {
      id: 0,
      name: "Dolomites",
      title: "Italy",
      imageUrl: "https://shorturl.at/ECWxY",
    },
    {
      id: 1,
      name: "Salar de Uyuni",
      title: "Bolivia",
      imageUrl: "https://shorturl.at/sjtps",
    },
    {
      id: 2,
      name: "Mount Fuji",
      title: "Japan",
      imageUrl:
        "https://pixlr.com/blog/wp-content/uploads/2021/04/83058266_l.jpg",
    },
  ];

  return sharedData.logged ? (
    <div className="dashBoard-contaier">
      <div className="cards-container">
        {cards.map((card) => (
          <DashboardCard key={card.id} abc={card.title} />
        ))}
      </div>
      <div className="acitvity-container"></div>
    </div>
  ) : null;
}

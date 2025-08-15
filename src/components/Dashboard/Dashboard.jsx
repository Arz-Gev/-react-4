import React, { useContext } from "react";
import { globalContext } from "../Context/ContextProvider";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";
import {
  CircleCheckBig,
  Clock,
  User,
  Mail,
  Calendar,
  Activity,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  const { sharedData } = useContext(globalContext);

  if (!sharedData.logged) {
    return <></>;
  }

  const cards = [
    {
      id: 0,
      title: "Profile",
      iconBig: <User />,
      className: "blue",
      name: sharedData.userData.name,
      iconSmall: <CircleCheckBig className="icon-body" />,
      status: "Active user",
    },
    {
      id: 1,
      title: "Email",
      iconBig: <Mail />,
      className: "orange",
      name: sharedData.userData.email,
      iconSmall: <CircleCheckBig className="icon-body" />,
      status: "Verified account",
    },
    {
      id: 2,
      title: "Last Login",
      iconBig: <Calendar />,
      className: "green",
      name: "Today",
      iconSmall: <Clock className="icon-body" />,
      status: "Session active",
    },
  ];

  return (
    <div className="dashBoard-contaier">
      <div className="cards-container">
        {cards.map((card) => (
          <DashboardCard
            key={card.id}
            title={card.title}
            iconBig={card.iconBig}
            className={card.className}
            name={card.name}
            iconSmall={card.iconSmall}
            status={card.status}
          />
        ))}
      </div>
      <div className="acitvity-container">
        <div className="top">
          <span className="activity-icon">
            <Activity />
          </span>
        </div>
      </div>
    </div>
  );
}

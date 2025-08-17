import React, { useContext } from "react";
import { Sparkles } from "lucide-react";
import { globalContext } from "../../Context/ContextProvider";
import { LogOut, Menu, BookA, House } from "lucide-react";
import { useNavigate, Link, useParams } from "react-router-dom";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { sharedData, deleteUserData } = useContext(globalContext);
  const { id } = useParams();
  return (
    <div className="wraper">
      <header className="header">
        <div className="left">
          <div className="icon">
            <Sparkles className="sparcle-icon" />
            <Menu className="menu-icon" />
          </div>
          <h2 className="heading">Personal Dashboard</h2>
        </div>
        {sharedData.logged ? (
          <div className="right">
            <span className="display-none-on-mobile">Welcome back</span>
            <h4 className="display-none-on-mobile">
              {sharedData.userData.name}
            </h4>
            {Number(id) !== sharedData.userData.id ? (
              <Link
                className="link-btn"
                to={`/dashboard/user/${sharedData.userData.id}`}
              >
                <House className="link-icon" />
              </Link>
            ) : (
              <Link className="link-btn" to="/Article">
                <BookA className="link-icon" />
              </Link>
            )}
            <button
              type="button"
              className="logout-btn"
              onClick={() => {
                navigate("/");
                deleteUserData();
              }}
            >
              <LogOut className="logout-icon" />
              Logout
            </button>
          </div>
        ) : (
          <p>Please log in to access your dashboard</p>
        )}
      </header>
    </div>
  );
}

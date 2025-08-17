import React from "react";
import { Link } from "react-router-dom";
import "./notFoundPageStyle.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1 className="error-id">404</h1>
      <h2 className="error-message">PAGE DOESN'T EXIST</h2>
      <Link className="link" to="/">
        GO HOME
      </Link>
    </div>
  );
}

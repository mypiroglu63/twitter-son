import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-middle">
          <Link to="/foryou" className="header-link">
            Sana Özel
          </Link>
          <Link to="/following" className="header-link">
            Takip Etme
          </Link>
        </div>
      </div>
    </header>
  );
}

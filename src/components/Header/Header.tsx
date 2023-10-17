import React from "react";
import "./Header.scss";
import logo from "../../media/OK200.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="ok200-logo" />
        </Link>
      </div>
      <div className="header__nav">
        <Link to="/degree">Degree</Link>
      </div>
    </div>
  );
};

export default Header;

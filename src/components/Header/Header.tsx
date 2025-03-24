import React from "react";
import "./Header.scss";
import logo from "../../media/logo-white.svg";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {

  const highlight = (isActive: boolean) => isActive ? "text-lime underline" : "text-white hover:text-lime";

  return (
    <div className="border-b border-b-slate/20">
      <div className="container py-8">
        <div className="flex flex-row justify-center gap-8">
          <div>
            <Link to="/">
              <img className="max-h-12" src={logo} alt="ok200-logo" />
            </Link>
          </div>
          <div className="grow flex flex-row justify-start place-items-center gap-6">
            <NavLink to="/" exact className={(isActive) => highlight(isActive)}>Manuals</NavLink>
            <NavLink to="/manuals/counterpoint" className={(isActive) => highlight(isActive)}>Counterpoint</NavLink>
            <NavLink to="/manuals/degree" className={(isActive) => highlight(isActive)}>DEGREE</NavLink>
            <NavLink to="/firmware-updater" className={(isActive) => highlight(isActive)}>Firmware Updater</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

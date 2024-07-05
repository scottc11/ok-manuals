import React from "react";
import "./Header.scss";
import logo from "../../media/OK200.png";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {

  const highlight = (isActive: boolean) => isActive ? "text-orange underline" : "text-slate/70 hover:text-orange";

  return (
    <div className="border-b border-b-slate/20">
      <div className="container py-8">
        <div className="flex flex-row justify-items-center gap-4">
          <div>
            <Link to="/">
              <img className="max-h-24" src={logo} alt="ok200-logo" />
            </Link>
          </div>
          <div className="grow flex flex-row justify-start place-items-center gap-4">
            <NavLink to="/" exact className={(isActive) => highlight(isActive)}> Home </NavLink>
            <NavLink to="/modules" className={(isActive) => highlight(isActive)}>Modules</NavLink>
            <NavLink to="/manuals" className={(isActive) => highlight(isActive)}>Manuals</NavLink>
            <NavLink to="/firmware-updater" className={(isActive) => highlight(isActive)}>Firmware Updater</NavLink>
            <NavLink to="/blog" className={(isActive) => highlight(isActive)}>Blog</NavLink>
            <NavLink to="/about" className={(isActive) => highlight(isActive)}>About</NavLink>
            <NavLink to="/LFO" className={(isActive) => highlight(isActive)}>LFO</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

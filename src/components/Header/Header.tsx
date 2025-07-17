import React, { useState, useRef, useEffect } from "react";
import "./Header.scss";
import logo from "../../media/logo-white.svg";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { getItemCount } = useCart();

  const highlight = (isActive: boolean) => isActive ? "text-lime underline" : "text-white/80 hover:text-lime";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="border-b border-b-slate/20">
      <div className="container py-8">
        <div className="flex flex-row justify-between md:justify-center gap-8">
          <div>
            <Link to="/">
              <img className="max-h-12" src={logo} alt="ok200-logo" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            ref={buttonRef}
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            ref={menuRef}
            className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-20 md:top-0 left-0 md:left-auto w-full md:w-auto bg-black md:bg-transparent flex-col md:flex-row justify-start place-items-center gap-6 p-4 md:p-0 grow`}
          >
            <NavLink to="/" exact className={(isActive) => highlight(isActive)}>Manuals</NavLink>
            <NavLink to="/manuals/counterpoint" className={(isActive) => highlight(isActive)}>Counterpoint</NavLink>
            <NavLink to="/manuals/degree" className={(isActive) => highlight(isActive)}>DEGREE</NavLink>
            <NavLink to="/modules" className={(isActive) => highlight(isActive)}>Modules</NavLink>
            <NavLink to="/cart" className={(isActive) => highlight(isActive)} style={{ position: 'relative' }}>
              Cart
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

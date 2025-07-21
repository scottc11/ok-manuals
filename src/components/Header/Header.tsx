import React, { useState, useRef, useEffect } from "react";
import "./Header.scss";
import logo from "../../media/logo-white.svg";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { IoCartOutline } from "react-icons/io5";
import { Counterpoint, Degree } from "../../content/modules";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { getItemCount } = useCart();

  const highlight = (isActive: boolean) => isActive ? "text-lime " : "text-white hover:text-lime";

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
    <div id="header" className="border-b border-b-gray-600">
      <div className="container py-8">
        <div className="flex flex-row justify-between items-center">
          {/* Logo on the left */}
          <div>
            <Link to="/">
              <img className="max-h-12" src={logo} alt="ok200-logo" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            ref={buttonRef}
            className="md:hidden text-white z-10"
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

          {/* Navigation Links - Carved out appearance on the right */}
          <div
            ref={menuRef}
            className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-20 md:top-0 right-0 md:right-0 w-full md:w-auto 
              bg-gray-900/95 md:bg-gray-800/50 backdrop-blur-sm
              md:rounded-2xl md:px-6 md:py-3
              z-20
              md:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_2px_rgba(255,255,255,0.1)]
              md:border md:border-gray-300/50
              flex-col md:flex-row justify-start md:justify-center place-items-center gap-6 p-4 md:p-0
              before:md:content-[''] before:md:absolute before:md:inset-0 before:md:rounded-2xl 
              before:md:bg-gradient-to-b before:md:from-gray-700/20 before:md:to-gray-900/20 before:md:pointer-events-none`}
          >
            <NavLink to="/" exact className={(isActive) => highlight(isActive)}>Home</NavLink>
            <NavLink to={Counterpoint.paths.detail} className={(isActive) => highlight(isActive)}>Counterpoint</NavLink>
            <NavLink to={Degree.paths.detail} className={(isActive) => highlight(isActive)}>DEGREE</NavLink>
            {/* <NavLink to="/modules" className={(isActive) => highlight(isActive)}>Modules</NavLink> */}
            <NavLink to="/contact" className={(isActive) => highlight(isActive)}>Contact</NavLink>
            <NavLink to="/cart" className={(isActive) => highlight(isActive)} style={{ position: 'relative' }}>
              <IoCartOutline className="text-lime" size={30} />
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

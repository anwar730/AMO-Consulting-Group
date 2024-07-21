import React, { useState } from 'react';
import image1 from "../components/image/image1.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='navbar'>
      <div>
        <h1>PowerPro Academy</h1>
      </div>

      <div className={`navlinks ${isOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/courses" onClick={toggleMenu}>Courses</NavLink>
        <NavLink to="/about" onClick={toggleMenu}>About Us</NavLink>
      </div>
      <button id="menu-btn" className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </nav>
  );
}

export default NavBar;

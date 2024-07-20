import React from 'react';
import image1 from "../components/image/image1.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className='navbar'>
      <div>
        <h1>PowerPro Academy</h1>
      </div>

      <div className='navlinks'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

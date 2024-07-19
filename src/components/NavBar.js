import React from 'react';
import image1 from "../components/image/image1.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className='navbar'>
      <div>
        <img src={image1} alt="image" className='logo-image' />
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

// import React, { useState,useEffect } from 'react';
// import image1 from "../components/image/image1.png";
// import { NavLink } from "react-router-dom";

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add('menu-open');
//     } else {
//       document.body.classList.remove('menu-open');
//     }
//   }, [isOpen]);
//   return (
//     <nav className='navbar  container mx-auto p-4'>
//       <div className='flex justify-between px-4 py-8  items-center'>
//       <div>
//         <h1 className='logo text-blue font-extrabold'>PowerPro Academy</h1>
//       </div>

//       <div className={`navlinks ${isOpen ? 'active' : ''} space-x-10 font-bold hidden md:flex`}>
//         <NavLink to="/"  className="hover:text-blue">Home</NavLink>
//         <NavLink to="/courses"  className="hover:text-blue">Courses</NavLink>
//         <NavLink to="/about"   className="hover:text-blue">About Us</NavLink>
//       </div>
//       <button id="menu-btn" className={`hamburger ${isOpen ? 'open' : ''} block md:hidden focus:outline-none`} onClick={toggleMenu}>
//         <span className="hamburger-top"></span>
//         <span className="hamburger-middle"></span>
//         <span className="hamburger-bottom"></span>
//       </button>
//       </div>
//      <div>
//      <div className={`${isOpen ? 'block' : 'hidden'}  flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold sm:w-auto`}>

//       <NavLink to="/"  className="hover:text-blue">Home</NavLink>
//         <NavLink to="/courses"  className="hover:text-blue">Courses</NavLink>
//         <NavLink to="/about"   className="hover:text-blue">About Us</NavLink>
//       </div>
//      </div>

//     </nav>
//   );
// }

// export default NavBar;
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);
  return (
    <nav className='navbar container mx-auto p-4 sticky top-0'>
      <div className='flex justify-between px-4 py-8 items-center'>
        <div>
          <h1 className='logo text-blue font-extrabold'>PowerPro Academy</h1>
        </div>

        <div className={"space-x-10 font-bold hidden md:flex"}>
          <NavLink to="/" className="hover:text-blue">Home</NavLink>
          <NavLink to="/courses" className="hover:text-blue">Courses</NavLink>
          <NavLink to="/about" className="hover:text-blue">About Us</NavLink>
        </div>
        <button id="menu-btn" className={`hamburger ${isOpen ? 'open' : ''} block md:hidden focus:outline-none`} onClick={toggleMenu}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className='md:hidden'>
        <div className={`${isOpen ? 'block' : 'hidden'} flex flex-col items-center  py-8 mt-8 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
          <NavLink to="/" className="hover:text-blue" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/courses" className="hover:text-blue" onClick={toggleMenu}>Courses</NavLink>
          <NavLink to="/about" className="hover:text-blue" onClick={toggleMenu}>About Us</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

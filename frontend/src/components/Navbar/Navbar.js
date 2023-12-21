import React from "react";
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useState } from "react";
const suvidha = require("./logo/Slogo.png");
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={suvidha} alt="suvidha"/>
          </div>
          <div className="nav-elements">
            
            <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/">EVENTS</NavLink></li>
            <li><NavLink to="/">GALLERY</NavLink></li>
            <li><NavLink to="/">CONTACT</NavLink></li>
            </ul>
          </div>
        </div>
        <i class="fa fa-bars"></i>
      </nav>
    </>
  );
}
export default Navbar;

import React from "react";
import "./Navbar.css";
import App from "../../App";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#Home" className="navlink">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#Education" className="navlink">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a href="#proj" className="navlink">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#exc" className="navlink">
            Extra-Curriculars
          </a>
        </li>
        <li className="nav-item">
          <a href="#Ach" className="navlink">
            Achievements
          </a>
        </li>
        <li className="nav-item">
          <a href="#int" className="navlink">
            Internships
          </a>
        </li>
        <li className="nav-item">
          <a href="#cnt" className="navlink">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

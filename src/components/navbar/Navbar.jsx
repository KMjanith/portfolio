import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ selectedItem, setSelectedItem }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar">
      <div className="navbarLogo">Kavindu Janith</div>
      <div className="sizedbox"> </div>
      <div className={`navbarItems ${menuOpen ? "open" : ""}`}>
        <a
          className={
            selectedItem === "about" ? "navbarItem active" : "navbarItem"
          }
          onClick={() => setSelectedItem("about")}
        >
          About
        </a>
        <a
          className={
            selectedItem === "projects" ? "navbarItem active" : "navbarItem"
          }
          onClick={() => setSelectedItem("projects")}
        >
          Projects
        </a>
        <a
          className={
            selectedItem === "blog" ? "navbarItem active" : "navbarItem"
          }
          onClick={() => setSelectedItem("blog")}
        >
          Blog
        </a>
        <a
          className={
            selectedItem === "interest" ? "navbarItem active" : "navbarItem"
          }
          onClick={() => setSelectedItem("interest")}
        >
          Interest
        </a>
        <a
          className={
            selectedItem === "contact" ? "navbarItem active" : "navbarItem"
          }
          onClick={() => setSelectedItem("contact")}
        >
          Contact
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;

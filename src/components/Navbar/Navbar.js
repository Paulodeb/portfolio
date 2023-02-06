import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Cv from '../../assets/Paul Oyediran Resume.docx'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
window.addEventListener('scroll', changeBackground);
  return (
    <div className={color ? 'head head-bg' : 'head' }>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={open ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
           <a href={Cv} download>
    <button className="dwn">Download</button>
  </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleToggle}>
        {open ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

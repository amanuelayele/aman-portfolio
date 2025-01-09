import React, { useRef, useState } from "react";
import "./Navbar.css";

import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import A from "../../assets/A.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="Navbar">
      <img src={A} alt="A" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Logo"
        className="nav-mobe-open"
      />
      <ul ref={menuRef} onClick={closeMenu} className="nav-menu">
        <img
          src={menu_close}
          onClick={openMenu}
          alt=""
          className="nav-mobe-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>{" "}
            {/* Corrected "setMenu" */}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>{" "}
            {/* Corrected "setMenu" */}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>{" "}
            {/* Corrected "setMenu" */}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>{" "}
            {/* Corrected "setMenu" */}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>{" "}
            {/* Corrected "setMenu" */}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

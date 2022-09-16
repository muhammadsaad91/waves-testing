import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./nav"
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
     <NavLink to="/" className="logo">
            <img src="https://wavesmarketingagency.com/wp-content/uploads/2022/06/ns-logo.png" width={"55px"} alt="" />
          </NavLink>
      <ul className={active}>
        <li className="nav__item">
        <NavLink to="/home" activeclassname="active">Home </NavLink>
        </li>
        <li className="nav__item">
          <Nav name="What We Do" link="/services" />
        </li>
        <li className="nav__item logo1">
            <img src="https://wavesmarketingagency.com/wp-content/uploads/2022/06/ns-logo.png" width={"55px"} alt="" />          
        </li>
        <li className="nav__item">
        <NavLink to="who-we-are" activeclassname="active">Who We Are</NavLink>
        </li>
        <li className="nav__item">
          <Nav name="Contact Us" link="/contact-us" />
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;

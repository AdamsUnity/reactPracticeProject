import React from "react";
import { navItems } from "../../data";
import brandLogo from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/icon-menu.svg";
import "./Navbar.css";
const Navbar = () => {
  console.log(navItems);
  return (
    <nav className="nav--bar container">
      <img src={brandLogo} alt="brand--logo" />
      <ul className="nav--list">
        {navItems.map((item) => {
          return (
            <li key={item.navTitle}>
              <a href={item.navLink}>{item.navTitle}</a>
            </li>
          );
        })}
      </ul>

      <img className="menu--toggler" src={menuIcon} alt="menu icon" />
    </nav>
  );
};

export default Navbar;

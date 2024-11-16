import React from "react";
import nav from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={nav.nav}>
      {/* <div> */}
      <ul>
        <li>
          <NavLink className={({isActive})=>(isActive ?`${nav.navlink} ${nav.active}` : `${nav.navlink}`)} to="/" activeclassname={nav.active} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>(isActive ?`${nav.navlink} ${nav.active}` : `${nav.navlink}`)} to="/about" activeclassname={nav.active} end>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>(isActive ?`${nav.navlink} ${nav.active}` : `${nav.navlink}`)} to="/projects" activeclassname={nav.active} end>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>(isActive ?`${nav.navlink} ${nav.active}` : `${nav.navlink}`)} to="/contact" activeclassname={nav.active} end>
            Contact
          </NavLink>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Navbar;

import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="#">Music</NavLink>
      <NavLink to="#">Settings</NavLink>
    </nav>
  )
}

export default Navbar;
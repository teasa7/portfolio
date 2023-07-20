import React from "react";
import styles from "./Header.module.css";
import logo from "./logo.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div >
          <img className={styles.logo} src={logo} alt="Portfolio" />
        </div>
        <div className={styles.login_block}>
          {props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>
          }
        </div>
      </div>
    </header>
  )
}

export default Header;
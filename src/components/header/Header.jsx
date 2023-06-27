import React from "react";
import styles from "./Header.module.css";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.wrapper}>
          <img className={styles.logo} src={logo} alt="Portfolio" />
        </div>
        
    </header>
  )
}

export default Header;
import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <a className={styles.project} href={props.url}>
      <img src={props.photo} className={styles.img} alt="Project" />
      <div className={styles.block_text}>
        <h4 className={styles.title}>{props.title}</h4>
        <p className={styles.description}>{props.description}</p>
      </div>
    </a>
  )
}

export default Project;
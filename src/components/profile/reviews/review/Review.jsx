import React from "react";
import styles from "./Review.module.css";

const Review = (props) => {
  return (
    <div className={styles.review}>
      <p>{props.text}</p>
    </div>
  )
}

export default Review;
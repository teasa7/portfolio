import React from "react";
import styles from "./Message.module.css";
import userPhoto from "./../../../assets/images/Camper.png";

const Message = (props) => {
  // let newMessageElement = React.createRef();
  // console.log(newMessageElement);
  // newMessageElement.current.classList.add(styles.message_me);
  return (
    <div className={styles.message}>
      <img src={userPhoto} className={styles.photo} alt="User" />
      <div>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  )
}

export default Message;
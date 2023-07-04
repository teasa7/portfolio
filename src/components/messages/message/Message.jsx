import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
  // let newMessageElement = React.createRef();
  // console.log(newMessageElement);
  // newMessageElement.current.classList.add(styles.message_me);
  return (
    <div className={styles.message}>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default Message;
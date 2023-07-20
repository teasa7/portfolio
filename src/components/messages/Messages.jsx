import React from "react";
import styles from"./Messages.module.css";
import Message from "./message/Message";

const Messages = (props) => {
  let messagesElements = props.messages.map( message => <Message key={message.id} id={message.id} name={message.name} text={message.text} />)

  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  }

  let onChangeMessage = () => {
    let newText = newMessageElement.current.value;
    props.changeMessage(newText);
  }

  return (
    <div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <div className={styles.block_input}>
        <textarea ref={newMessageElement} value={props.newMessageText} onChange={onChangeMessage} className={styles.input} />
        <button onClick={onSendMessage} className={styles.button}>Send</button>
      </div>
    </div>
  )
}

export default Messages;
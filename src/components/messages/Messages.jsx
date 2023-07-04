import React from "react";
import styles from"./Messages.module.css";
import Message from "./message/Message";
import { sendMessageCreator, updateMessageTextCreator } from "./../../redux/messageReducer";

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
      <div className={styles.reviews}>
        {messagesElements}
      </div>
      <div>
        <textarea ref={newMessageElement} value={props.newMessageText} onChange={onChangeMessage}></textarea>
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Messages;
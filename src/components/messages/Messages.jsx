import React from "react";
import styles from"./Messages.module.css";
import Message from "./message/Message";

const Messages = (props) => {
  let messagesElements = props.messages.map( message => <Message key={message.id} name={message.name} text={message.text} />)
  return (
    <div>
      {messagesElements}
    </div>
  )
}

export default Messages;
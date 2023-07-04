import React from "react";
import Messages from "./Messages";
import { sendMessageCreator, changeMessageCreator } from "./../../redux/messageReducer";

const MessagesContainer = (props) => {
  let state = props.store.getState();
  
  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let changeMessage = (text) => {
    props.store.dispatch(changeMessageCreator(text));
  }

  return (
    <Messages messages={state.messagesPage.messages} sendMessage={sendMessage} changeMessage={changeMessage} />
  )
}

export default MessagesContainer;
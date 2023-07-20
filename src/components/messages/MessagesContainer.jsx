import React from "react";
import Messages from "./Messages";
import { sendMessage, changeMessage, setMessage } from "./../../redux/messageReducer";
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
  }
}

export default compose(
  connect(mapStateToProps, {sendMessage, changeMessage, setMessage}),
  withAuthRedirect
)(Messages);
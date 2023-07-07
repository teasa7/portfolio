import React from "react";
import Messages from "./Messages";
import { sendMessageCreator, changeMessageCreator, setMessageCreator } from "./../../redux/messageReducer";
import { connect } from 'react-redux';

// const MessagesContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       { store => {
//           let sendMessage = () => {
//             store.dispatch(sendMessageCreator());
//           }

//           let changeMessage = (text) => {
//             store.dispatch(changeMessageCreator(text));
//           }
//           <Messages messages={store.getState().messagesPage.messages} sendMessage={sendMessage} changeMessage={changeMessage} />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    changeMessage: (text) => {
      dispatch(changeMessageCreator(text));
    },
    seteMessageCreator: (messages) => {
      dispatch(setMessageCreator(messages));
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
  messages: [
    {id: 1, name: 'Me', text: 'Hi'},
    {id: 2, name: 'Me', text: 'How are you?'},
    {id: 3, name: 'Anastasia', text: 'Hi, good! And you?'}
  ],
  newMessageText: ''
}

const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        name: 'Me',
        text: state.newMessageText,
      }
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export let sendMessageCreator = () => ({ type: SEND_MESSAGE });
export let changeMessageCreator = (newText) => ({ type:    UPDATE_MESSAGE_TEXT, newText: newText});

export default messageReducer;
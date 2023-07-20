const SEND_MESSAGE = 'SEND-MESSAGE'
const SET_MESSAGE = 'SET-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

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
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {id: 4, name: 'Me', text: state.newMessageText}]
      }
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      } 
    case SET_MESSAGE: {
        return {
          ...state,
          messages: [...state.messages, ...action.messages]
        }
      }
    default:
      return state
  }
}

export let sendMessage = () => ({ type: SEND_MESSAGE })
export let setMessage = (messages) => ({ type: SET_MESSAGE, messages })
export let changeMessage = (newText) => ({ type:    UPDATE_MESSAGE_TEXT, newText: newText})

export default messageReducer
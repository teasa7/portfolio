const SEND_MESSAGE = 'SEND-MESSAGE'
const SET_MESSAGE = 'SET-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
  messages: [],
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

export let sendMessageCreator = () => ({ type: SEND_MESSAGE })
export let setMessageCreator = (messages) => ({ type: SET_MESSAGE, messages })
export let changeMessageCreator = (newText) => ({ type:    UPDATE_MESSAGE_TEXT, newText: newText})

export default messageReducer
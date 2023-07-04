import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      reviews: [
        {id: 1, text: 'Hello world!'},
        {id: 2, text: 'My first review!'}
      ],
      newReviewText: ''
    },
    messagesPage: {
      messages: [
        {id: 1, name: 'Me', text: 'Hi'},
        {id: 2, name: 'Me', text: 'How are you?'},
        {id: 3, name: 'Anastasia', text: 'Hi, good! And you?'}
      ],
      newMessageText: ''
    }
  },
  getState() {
    return this._state;
  },
  _callSubscribe () {
    return this.subscribe;
  },
  rerenderEntireTree() {},
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this.rerenderEntireTree(this._state)
  }
}


export default store;
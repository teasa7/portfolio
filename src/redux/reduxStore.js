import { combineReducers, legacy_createStore } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer
});

let store = legacy_createStore(reducers);

export default store;
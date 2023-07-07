import { combineReducers, legacy_createStore } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import projectReducer from "./projectReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  projectPage: projectReducer
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;
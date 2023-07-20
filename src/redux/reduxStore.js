import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk"

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  projectPage: projectReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
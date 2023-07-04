import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import MessagesContainer from "./components/messages/MessagesContainer";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Navbar />
        <div className="section">
          <Routes>
            <Route
              path="/profile/*"
              element={<Profile store={props.store} />}
            />
            <Route
              path="/messages"
              element={<MessagesContainer store={props.store} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

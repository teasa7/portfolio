import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import MessagesContainer from "./components/messages/MessagesContainer";
import ProjectsContainer from "./components/projects/ProjectsContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";

const App = (props) => {
  return (
    <div className="app">
      <HeaderContainer />
      <div className="app-wrapper">
        <Navbar />
        <div className="section">
          <Routes>
            <Route
              path="/profile/*?"
              element={<Profile />}
            />
            <Route
              path="/messages"
              element={<MessagesContainer />}
            />
            <Route
              path="/projects"
              element={<ProjectsContainer />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

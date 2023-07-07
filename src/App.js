import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import MessagesContainer from "./components/messages/MessagesContainer";
import ProjectsContainer from "./components/projects/ProjectsContainer";

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
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

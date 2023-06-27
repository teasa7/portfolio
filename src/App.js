import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Messages from "./components/messages/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <Navbar />       
          <div className="section">
            <Routes>
              <Route path='/profile/*' element={<Profile reviews={props.reviews} />}/>
              <Route path='/messages' element={<Messages messages={props.messages} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
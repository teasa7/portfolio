import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messages = [
  {id: 1, name: 'Me', text: 'Hi'},
  {id: 2, name: 'Me', text: 'How are you?'},
  {id: 3, name: 'Anastasia', text: 'Hi, good! And you?'}
]
let reviews = [
  {id: 1, text: 'Hello world!'},
  {id: 2, text: 'My first review!'}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messages={messages} reviews={reviews}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

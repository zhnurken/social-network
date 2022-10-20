import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: "Nurken" },
  { id: 2, name: "Banu" },
  { id: 3, name: "Asylym" },
  { id: 4, name: "Almas" },
  { id: 5, name: "Bauka" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "Privet" },
];

let posts = [
  { message: "Hi, how are you?", likeCount: 11 },
  { message: "It's my first post", likeCount: 23 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

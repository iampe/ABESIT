import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponent from './component/FirstComponent';
import Second from './component/Second';
import { Profile1, Gallery } from './component/Profile1';
import Props from './component/Props';
import Task1 from './Component_Day14/Task1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <FirstComponent />
    <Second />
    <Profile1/>
    <Gallery/>
    <Props url="image/image1.png" />
    <Props url="image/image2.png" />
    <Props url="image/image3.png" />
    <Props url="image/image4.png" />
    <Task1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If yuo want to run this file then change the name of file to index.js


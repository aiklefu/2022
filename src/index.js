import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Wtracker  from './Samples/WindowTracker';



ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <Wtracker />
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TrackJS } from 'trackjs';

TrackJS.install({
  token: "TOKEN",
  application: "NAME"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// The main React DOM from which we call App.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
   // In the 'root' div tag that was defined in index.html
  document.getElementById('root')
);


serviceWorker.register();

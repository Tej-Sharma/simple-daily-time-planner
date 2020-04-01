import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from './components/MainPage.js';

// The App.js will be kept simple and the components will be handled in MainPage
// If the app needs to be extended with more pages, for example, they will be
// added here
function App() {
  return (
    <div className="container">
        <MainPage />
    </div>
  );
}

export default App;

import React from 'react';
import Donations from './components/Donations.js';
import CreateDonation from './components/CreateDonation.js';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="main-header">
        <h1>Donations App</h1>
      </div>
      <div className="container">
        <div className="left-side">
          <CreateDonation />
        </div>
        <div className="right-side">
          <Donations />
        </div>
      </div>
      <div className="footer">
          <footer>
            <small>All rights reserved. Copyright &copy;2020.</small>
          </footer>
        </div>
    </div>
  );
}

export default App;

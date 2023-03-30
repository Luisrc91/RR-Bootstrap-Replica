import './App.css';
import React from 'react';
// import Navbar from './components/Navbar';

import Background from './components/Background';
import StoreListing from './components/StoreListing';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;

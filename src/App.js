import React from 'react';
import logo from './logo.svg';
import Nav from './module/Nav'
import './App.css';
import  InfoTable  from './module/InfoTable'
function App() {
  return (
    <div className="App">
        <Nav></Nav>
      <InfoTable></InfoTable>
    </div>
  );
}

export default App;

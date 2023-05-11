import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileUploader from "./FileUploader";

function App() {
  return (
    <div>
      <h1>System Analysis Service</h1>
      <FileUploader />
    </div>
  );
}

export default App;
/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>. Dockerized React App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */
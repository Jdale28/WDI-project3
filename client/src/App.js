import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LogInPage from './components/LogInPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <LogInPage/>
        </header>
      </div>
    );
  }
}

export default App;

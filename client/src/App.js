import React, { Component } from 'react';
import './App.css';
import LogInPage from './components/LogInPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Hello from APP</h1>
          <LogInPage/>
        </header>
      </div>
    );
  }
}

export default App;

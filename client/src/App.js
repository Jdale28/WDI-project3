import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import LogInPage from "./components/LogInPage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import EmployerPage from "./components/EmployerPage";
import Employer from "./components/Employer"
import Employee from "./components/Employee"
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #FFE6AA;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/employers" component={EmployerPage} />
            <Route exact path="/employers/:employerId" component={Employer} />
            <Route exact path="/employers/:employerId/employees/:employeeId" component={Employee} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

{
  /* <div className="App">
  <header>
    <h1>Hello from APP</h1>
    <LogInPage />
  </header>
</div>; */
}

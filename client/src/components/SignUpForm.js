import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {

  render() {
    return (
      <div>
        <h3>Hello from Sign-up component</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name: </label>
            <input onChange={this.handleChange} value={this.state.newEmployer.fullName} type="text" name="fullName"/>
          </div>
          <div>
            <label htmlFor="jobTitle">Job Title: </label>
            <input onChange={this.handleChange} value={this.state.newEmployer.jobTitle} type="text" name="jobTitle"/>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input onChange={this.handleChange} value={this.state.newEmployer.email} type="text" name="email" />
          </div>

          <button type="submit">Create New Employee</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);

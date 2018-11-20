// import { GoogleLogin } from "react-google-login";
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

// const responseGoogle = (response) => {
//     console.log(response);
//   }

class LogInPage extends Component {
  state = {
    newEmployer: {
      fullName: "",
      email: "",
      jobTitle: "",
      password: ''
    },
    employer: [{}]
  };

  componentDidMount() {
    this.getAllEmployers();
  }

  getAllEmployers = () => {
    const url = `/api/employers/`;
    axios.get(url).then(res => {
      this.setState({ employer: res.data });
    });
  };

  handleChange = event => {
    const updatedNewEmployer = { ...this.state.newEmployer };
    updatedNewEmployer[event.target.name] = event.target.value;
    this.setState({ newEmployer: updatedNewEmployer });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      fullName: this.state.newEmployer.fullName,
      jobTitle: this.state.newEmployer.jobTitle,
      email: this.state.newEmployer.email
    };
    axios.post(`/api/employers/`, payload).then(res => {
      const newEmployer = res.data;
      const newStateNewEmployer = [...this.state.employer, newEmployer];
      this.setState({ employer: newStateNewEmployer });
      this.props.history.push(`/employers`)
    });
  };

  render() {
    return (
      <div>
        {/* Version 2 Google Login and Passport */}
        {/* <h1>Already a User? Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input onChange={this.handleChange} value={this.state.newEmployer.email} type="text" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input onChange={this.handleChange} value={this.state.newEmployer.password} type="text" name="password" />
          </div>

          <button type="submit">Login to your profile</button>
        </form> */}
        <SignUpForm />
      </div>
    );
  }
}

export default LogInPage;

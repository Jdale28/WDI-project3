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
      jobTitle: ""
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
        <h1>Hello from Login Page</h1>
        {/* <h3>Google component says hello below</h3> */}
        {/* <GoogleLogin
          clientId="860589244224-6nnm9u1u030oeqvovpva5iot9lm9lp9i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        /> */}
        
        {/* <SignUpForm /> */}
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

          <button type="submit">Create New Employer</button>
        </form>
      </div>
    );
  }
}

export default LogInPage;

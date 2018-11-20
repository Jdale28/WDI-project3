import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {
  state = {
    newEmployer: {
      fullName: "",
      email: "",
      jobTitle: "",
      company: '',
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
            <label htmlFor="company">Company: </label>
            <input onChange={this.handleChange} value={this.state.newEmployer.company} type="text" name="company" />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input onChange={this.handleChange} value={this.state.newEmployer.email} type="text" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input onChange={this.handleChange} value={this.state.newEmployer.password} type="text" name="password" />
          </div>
          <button type="submit">Create New Employee</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);

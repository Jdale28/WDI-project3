import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const FullForm = styled.div`
width: 50%;
  background: #7B84AE;
  border: 3px solid black;
  margin: 5vh 25vw 0 25vw;
  color: white;
  .title {
    text-align: center;
    margin-left: 2vw;
    padding-bottom: 3vw;
  }
`


const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: auto;
  background: #7B84AE;
  label {
    color: black;
    font-size: 1.75rem;
    margin-right: 5vw;
  }
  input {
    border: 1px solid black;
    width: 110%;
    color: blue;
    margin-bottom: 2vh;
  }
  button {
    color: black;
    margin: 3vh 0 3vh 4vw;
  }
`;


class SignUpForm extends Component {
  state = {
    newEmployer: {
      fullName: "",
      email: "",
      jobTitle: "",
      company: '',
      password: '',
      aboutYou: {
        content: ''
      }
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
      company: this.state.newEmployer.company,
      email: this.state.newEmployer.email,
      password: this.state.newEmployer.password,
      aboutYou: this.state.newEmployer.aboutYou
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
        <FullForm>
        <h3 className="title">Sign Up as a new Employer</h3>
        <SignUpContainer>
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
            <input onChange={this.handleChange} value={this.state.newEmployer.password} type="password" name="password" />
          </div>
          <div>
            <label htmlFor="aboutYou">Short About You: </label>
            <input onChange={this.handleChange} value={this.state.newEmployer.aboutYou.content} type="text" name="aboutYou" />
          </div>
          <button type="submit">Create Your Employer Profile</button>
        </form>
        </SignUpContainer>
        </FullForm>
      </div>
    );
  }
}

export default withRouter(SignUpForm);

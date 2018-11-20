import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

const EmployeeContainer = styled.div`
  border: 1px solid black;
  width: 50%;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
  a {
    text-decoration: none;
  }
  h2 {
    color: red;
    text-decoration: none;
  }
`;

const IdeaStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 500px;
  height: 50px;
  background: #f1faee;
  margin: 10px 0;
  button {
    position: absolute;
    top: 5px;
    right: 10px;
  }
  input,
  textarea {
    background-color: transparent;
    border: none;
  }
  input {
    height: 100%;
    font-size: 1.3rem;
  }
`;

class Employer extends Component {
  state = {
    newEmployee: {
      fullName: "",
      email: "",
      jobTitle: ""
    },
    employer: {
      // password: 'password',
      aboutYou: {
        content: ''
      },
      newAbout: ''
    },
    employees: [{}],
    authorized: false
  };

  componentDidMount() {
    this.getAllEmployees();
  }

  getAllEmployees = () => {
    const employerId = this.props.match.params.employerId;
    const url = `/api/employers/${employerId}`;
    axios.get(url).then(res => {
      this.setState({ employer: res.data, employees: res.data.employees });
    });
    // this.checkPassword() Version 2
  };

  handleChange = event => {
    const updatedNewEmployee = { ...this.state.newEmployee };
    updatedNewEmployee[event.target.name] = event.target.value;
    this.setState({ newEmployee: updatedNewEmployee });
  };

  handleSubmit = event => {
    const employerId = this.props.match.params.employerId;
    event.preventDefault();
    const payload = {
      fullName: this.state.newEmployee.fullName,
      jobTitle: this.state.newEmployee.jobTitle,
      email: this.state.newEmployee.email
    };
    axios.post(`/api/employers/${employerId}/employees`, payload).then(res => {
      const newEmployee = res.data;
      const newStateNewEmployee = [...this.state.employees, newEmployee];
      this.setState({ employees: newStateNewEmployee });
    });
  };

  handleChangeAbout = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleUpdate = event => {
    const employerId = this.props.match.params.employerId;
    event.preventDefault();
    console.log("hit one")
    const payload = {
      aboutYou: this.state.aboutYou
    };
    axios.patch(`/api/employers/${employerId}`, payload).then(res => {
      console.log("hit two")
      const newAbout = res.data
      console.log("hit three")
      this.setState({ employer: newAbout})
      console.log("Done")
    })
  };

  // Version 2 check for PASSWORDS
  // checkPassword = () => {
  //   console.log(this.props.employerPassword)
  //   var password = prompt("Please enter your password")
  //   if (password === this.state.employerPassword) {
  //     alert('Correct')
  //     this.setState({authorized: true})
  //     this.props.history.goForward()
  //   } else if (password !== this.state.employerPassword){
  //     alert('Access Denied')
  //     this.setState({authorized: false})
  //   }
  // }

  render() {
    // Version 2
    // if (this.state.authorized === false) {
    //   return (<Redirect to="/" />)
    // }
    return (
      <div>
        <h2>Hello, {this.state.employer.fullName}, from your home page</h2>
          <h6>About You: Feel Free to Edit</h6>
        <IdeaStyles>
          <input
            onBlur={this.handleUpdate}
            onChange={this.handleChangeAbout}
            type="text"
            name="aboutYou"
            placeholder={this.state.employer.aboutYou}
            value={this.state.employer.aboutYou.content}
          />
        </IdeaStyles>
        <h4>Your employees include:</h4>
        {this.state.employees.map(employee => (
          <div key={employee._id}>
            <EmployeeContainer>
              <Link
                to={`/employers/${
                  this.props.match.params.employerId
                }/employees/${employee._id}`}
              >
                <h2>Name: {employee.fullName}</h2>
                <h4>Job Title: {employee.jobTitle}</h4>
                <h4>Email: {employee.email}</h4>
              </Link>
            </EmployeeContainer>
          </div>
        ))}
        <h3>Add a New Employee</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name: </label>
              <input
                onChange={this.handleChange}
                value={this.state.newEmployee.fullName}
                type="text"
                name="fullName"
              />
            </div>
            <div>
              <label htmlFor="jobTitle">Job Title: </label>
              <input
                onChange={this.handleChange}
                value={this.state.newEmployee.jobTitle}
                type="text"
                name="jobTitle"
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                onChange={this.handleChange}
                value={this.state.newEmployee.email}
                type="text"
                name="email"
              />
            </div>
            <button type="submit">Create New Employee</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Employer;

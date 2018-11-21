import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EmployeeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  padding-right: 3vw;
  padding-left: 3vw;
  margin: 3vw;
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 1.5rem;
    color: red;
    text-decoration: none;
  }
  h4 {
    font-size: 1.2rem;
  }
  button {
    color: black;
    height: 22px;
    background-color: white;
    border: 1px solid black;
  }
`;
const Header = styled.div`
  text-align: center;
`;
const H4 = styled.div`
  font-size: 2rem;
  margin-bottom: 3vh;
  text-align: center;
`;
const AddEmployeeContainer = styled.div`
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
`;

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

const AboutStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 90%;
  height: 50px;
  background: #f1faee;
  margin: 2vh 5vw;
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
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
  }
`;

const EmployeesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

class Employer extends Component {
  state = {
    newEmployee: {
      fullName: "",
      email: "",
      jobTitle: ""
    },
    employer: {
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
    const payload = {
      aboutYou: this.state.aboutYou
    };
    axios.patch(`/api/employers/${employerId}`, payload).then(res => {
      const newAbout = res.data
      this.setState({ employer: newAbout})
    })
  };

  render() {
    return (
      <div>
        <Header>
        <h1>Welcome, {this.state.employer.fullName}, to your profile</h1>
          <h5>Your About Bar : Feel Free to Edit</h5>
          </Header>
        <AboutStyles>
          <input
            onBlur={this.handleUpdate}
            onChange={this.handleChangeAbout}
            type="text"
            name="aboutYou"
            placeholder={this.state.employer.aboutYou}
            value={this.state.employer.aboutYou.content}
          />
        </AboutStyles>

        <H4>Your employees include:</H4>
        <EmployeesContainer>
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
        </EmployeesContainer>

        <AddEmployeeContainer>
        <h3 className="title">Add a New Employee</h3>
        <SignUpContainer>
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
        </SignUpContainer>
        </AddEmployeeContainer>
      </div>
    );
  }
}

export default Employer;

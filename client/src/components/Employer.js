import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewEmployeeButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`;

class Employer extends Component {
  state = {
    newEmployee: {
      fullName: '',
      email: '',
      jobTitle: '',
    },
    employer: {},
    employees: [{}]
  };

  componentDidMount() {
    this.getAllEmployees();
  }

  getAllEmployees = () => {
    const employerId = this.props.match.params.employerId;
    const url = `/api/employers/${employerId}`;
    axios.get(url).then(res => {
      console.log(res.data);
      this.setState({ employer: res.data, employees: res.data.employees });
    });
  };

  handleChange = (event) => {
    const updatedNewEmployee = {...this.state.newEmployee}
    updatedNewEmployee[event.target.name] = event.target.value
    this.setState({newEmployee: updatedNewEmployee})
  }
  
  handleSubmit = (event) => {
    const employerId = this.props.match.params.employerId
    event.preventDefault()
    const payload = {
      fullName: this.state.newEmployee.fullName,
    }
    axios.post(`/api/employers/${employerId}/employees`, payload).then(res => {
      const newEmployee = res.data
      const newStateNewEmployee = [...this.state.employees, newEmployee]
      this.setState({ employees: newStateNewEmployee })
    })
  }



  render() {
    return (
      <div>
        <h2>Hello {this.state.employer.fullName} from your home page</h2>
        <h4>Your employees include:</h4>
        {this.state.employees.map(employee => (
          <div key={employee._id}>
            <Link
              to={`/api/employers/${this.props.match.params.employerId}/employees/${employee._id}`}>
              {employee.fullName}
            </Link>
            <Link
              to={`/api/employers/${this.props.match.params.employerId}/employees/${employee._id}`}>
              Edit Employee
            </Link>
            {/* <button>>Edit Employee</button> */}
          </div>
        ))}

            <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="fullName">Full Name: </label>
                <input onChange={this.handleChange} value={this.state.newEmployee.fullName} type="text" name="fullName"/>
              </div>

              <button type="submit">Create New Employee</button>
            </form>
          </div>
      </div>
    );
  }
}

export default Employer;
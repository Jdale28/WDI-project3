import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EmployeeReview from "./EmployeeReview";

class Employee extends Component {
  state = {
    employee: {},
    reviews: []
  };

  componentDidMount() {
    this.getAllEmployeeData();
  }

  getAllEmployeeData = () => {
    const employeeId = this.props.match.params.employeeId;
    const employerId = this.props.match.params.employerId;
    const url = `/api/employers/${employerId}/employees/${employeeId}`;
    axios.get(url).then(res => {
      this.setState({ employee: res.data, reviews: res.data.reviews });
    });
  };

handleDelete = () => {
  const employeeId = this.props.match.params.employeeId;
  const employerId = this.props.match.params.employerId;
  axios.delete(`/api/employers/${employerId}/employees/${employeeId}`).then(() => {
    this.props.history.goBack()
  })
}

  render() {

    return (
      <div>
        <h4>{this.state.employee.fullName}, your reviews are below:</h4>
        <EmployeeReview reviews={this.state.reviews}/>
        <button onClick={this.handleDelete}>Delete Employee</button>
        {/* Add danger/confirmation popup */}
      </div>
    );
  }
}

export default Employee;
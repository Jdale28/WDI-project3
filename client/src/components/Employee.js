import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Employee extends Component {
  state = {
    employee: {
      reviews: []
    }
  };

  componentDidMount() {
    this.getAllEmployeeData();
  }

  getAllEmployeeData = () => {
    const employeeId = this.props.match.params.employeeId;
    const employerId = this.props.match.params.employerId;
    const url = `/api/employers/${employerId}/employees/${employeeId}`;
    axios.get(url).then(res => {
      console.log(res.data);
      this.setState({ employee: res.data });
    });
  };

  render() {
    return (
      <div>
        <h4>Your reviews are below:</h4>
        {this.state.employee.reviews.map(review => (
          <div key={review._id}>
            <h2>{review._id}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default Employee;

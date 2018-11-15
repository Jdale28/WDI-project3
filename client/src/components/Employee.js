import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Employee extends Component {
  state = {
    employee: {
    },
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
      console.log(res.data);
      this.setState({ employee: res.data, reviews: res.data.reviews });
    });
  };

  render() {
    return (
      <div>
        <h4>{this.state.employee.fullName}, your reviews are below:</h4>
        {this.state.reviews.map(review => (
          <div key={review._id}>
            <h2>{review.comment}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default Employee;

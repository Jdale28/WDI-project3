import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Employer extends Component {
  state = {
    employer: {
      employees: [{}]
    }
  };

  componentDidMount() {
    this.getAllEmployees();
  }

  getAllEmployees = () => {
    const employerId = this.props.match.params.employerId;
    const url = `/api/employers/${employerId}`;
    axios.get(url).then(res => {
      console.log(res.data);
      this.setState({ employer: res.data });
    });
  };

  render() {
    return (
      <div>
        <h2>Hello {this.state.employer.fullName} from your home page</h2>
        <h4>Your employees include:</h4>
        {this.state.employer.employees.map(employee => (
          <div key={employee._id}>
            <Link to={`/employers/${this.props.match.params.employerId}/employees/${employee._id}`}>{employee.fullName}</Link>
          </div>
        ))}
        {/* {this.state.employer.employees.map((employee) => (
                                // console.log(employee)
                    <div key={employee._id}>

                 <Link to={`/employees/${employee._id}`}>{employee.fullName}</Link></div>
                ))} */}
      </div>
    );
  }
}

export default Employer;

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

class EmployerPage extends Component {
  state = {
    employers: []
  };

  componentDidMount = async () => {
    await this.getAllEmployers();
  };

  getAllEmployers = () => {
    console.log("Hello");
    const url = "/api/employers";
    axios.get(url).then(res => {
      console.log(res);
      this.setState({ employers: res.data });
    });
  };

  render() {
    return (
      <div>
        <h3>All Employers: </h3>
        {this.state.employers.map(employer => (
          <div key={employer._id}>
            <Link to={`/api/employers/${employer._id}`}>{employer.fullName}</Link>
          </div>
        ))}

        <SignUpForm />
      </div>
    );
  }
}

export default EmployerPage;

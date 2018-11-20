import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  // checkPassword = () => {
  //   var password = prompt("Enter your Password");
  //   if (password !== "th7ind3M") {
  //     alert("Access Denied");
  //     this.props.location.pathname(`/`);
  //     console.log("Denied");
  //   } else {
  //     // this.props.history.goForward()
  //     // console.log("Done")
  //   }
  // };

  render() {
    return (
      <div>
        <h3>All Employers: </h3>
        {this.state.employers.map(employer => (
          <div key={employer._id}>
            <Link
              to={`/employers/${employer._id}`}
              // onClick={this.checkPassword}
            >
              {employer.fullName}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default EmployerPage;

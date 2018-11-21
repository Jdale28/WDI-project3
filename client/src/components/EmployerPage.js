import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  .title {
    color: black;
    text-align: center;
    margin-left: 2vw;
    padding-bottom: 3vw;
    margin-top: 5vh;
  }
`
const EmployerCard = styled.div`
  width: 40%;
  border: 2px solid black;
  height: 30vh;
  margin-left: 30vw;
  margin-bottom: 5vh;
  text-align: center;
  background-color: green;
  color: black;
  padding-top: 5vh;
  a {
    color: white;
  }
  .employerName {
    font-size: 2rem;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  .email {
    font-size: 1.25rem;
  }
  .company {
    margin-top: 5vh;
    margin-bottom: 0;
    font-size: 2rem;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  .jobTitle {
    font-size: 1rem;
  }
`


class EmployerPage extends Component {
  state = {
    employers: []
  };

  componentDidMount = async () => {
    await this.getAllEmployers();
  };

  getAllEmployers = () => {
    const url = "/api/employers";
    axios.get(url).then(res => {
      this.setState({ employers: res.data });
    });
  };

  render() {
    return (
      <PageContainer>
        <h3 className="title">All Employers: </h3>
        {this.state.employers.map(employer => (
          <div key={employer._id}>
          <EmployerCard>
            <Link className="employerName" to={`/employers/${employer._id}`}>{employer.fullName}</Link>
            <p className="email">{employer.email}</p>
            <p className="company">{employer.company}</p>
            <p className="jobTitle">{employer.jobTitle}</p>
        </EmployerCard>
          </div>
        ))}
      </PageContainer>
    );
  }
}

export default EmployerPage;

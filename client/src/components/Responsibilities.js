import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const OneResponsibility = styled.div`
  margin: 0 10vw;
  padding: 0px;
  color: blue;
  li {
    width: 100%;
    text-align: left;
  }
`;
const H4 = styled.div`
  color: blue;
  font-size: 1.5rem;
  margin-bottom: 1vh;
`;
const Button = styled.div`
  color: black;
`;
const Input = styled.div`
  font-size: 1.25rem;
  color: white;
  margin-right: 2vw;
  input {
    margin-top: 2vh;
    margin-left: 1vw;
    margin-bottom: 2vh;
    color: black;
  }
`;

class Responsibilities extends Component {
  state = {
    responsibilities: [],
    newResponsibility: {
      content: ""
    },
  };

  componentDidMount() {
    this.getAllResponsibilities();
  }

  getAllResponsibilities = () => {
    const employeeId = this.props.employeeId;
    const employerId = this.props.employerId;
    const reviewId = this.props.reviewId;
    const url = `/api/employers/${employerId}/employees/${employeeId}/reviews/${reviewId}/responsibilities`;
    axios.get(url).then(res => {
      this.setState({ responsibilities: res.data });
    });
  };

  handleChange = event => {
    const updatedNewResponsibility = { ...this.state.newResponsibility };
    updatedNewResponsibility[event.target.name] = event.target.value;
    this.setState({ newResponsibility: updatedNewResponsibility });
  };

  handleSubmit = event => {
    const employerId = this.props.employerId;
    const employeeId = this.props.employeeId;
    const reviewId = this.props.reviewId;
    event.preventDefault();
    axios
      .post(
        `/api/employers/${employerId}/employees/${employeeId}/reviews/${reviewId}/responsibilities`,
        this.state.newResponsibility
      )
      .then(res => {
        const newResponsibility = res.data;
        const newStateNewResponsibility = [
          ...this.state.responsibilities,
          newResponsibility
        ];
        this.setState({ responsibilities: newStateNewResponsibility });
      });
  };


  render() {
    return (
      <div>
        <H4>Your List of responsibilities below:</H4>
        {this.state.responsibilities.map(responsibility => {
          return (
            <div key={responsibility._id}>
              <OneResponsibility>
                <li>{responsibility.content}</li>
              </OneResponsibility>
            </div>
          );
        })}

        <form onSubmit={this.handleSubmit}>
          <div>
            <Input>
            <label htmlFor="content">Add a Responsibility: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newResponsibility.content}
              type="text"
              name="content"
            />
            </Input>
          </div>
          <Button>
          <button className="submitButton" type="submit">Submit Responsibility</button>
          </Button>
        </form>

      </div>
    );
  }
}

export default Responsibilities;

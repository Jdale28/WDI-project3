import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";

const OneResponsibility = styled.div`
  margin: 0 10vw;
  padding: 0px;
  li {
    width: 100%;
    text-align: left;
  }
`;

class Responsibilities extends Component {
    state = {
        responsibilities: [],
        newResponsibility: {
            content: ""
        }
    }

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
      axios.post(`/api/employers/${employerId}/employees/${employeeId}/reviews/${reviewId}/responsibilities`, this.state.newResponsibility).then(res => {
        const newResponsibility = res.data;
        const newStateNewResponsibility = [...this.state.responsibilities, newResponsibility];
        this.setState({ responsibilities: newStateNewResponsibility });
      });
    };

    render() {
        return (
            <div>
                <h4>Your List of responsibilities below:</h4>
              {this.props.responsibilities.map(responsibility => {
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
              <label htmlFor="content">Add a Responsibility:  </label>
              <input
                onChange={this.handleChange}
                value={this.state.newResponsibility.content}
                type="text"
                name="content"
              />
            </div>
              <button type="submit">Submit Review</button>
            </form>
            </div>
        );
    }
}

export default Responsibilities;
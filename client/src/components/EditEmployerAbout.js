import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const IdeaStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 500px;
  height: 50px;
  background: #f1faee;
  margin: 10px 0;
  button {
    position: absolute;
    top: 5px;
    right: 10px;
  }
  input,
  textarea {
    background-color: transparent;
    border: none;
  }
  input {
    height: 100%;
    font-size: 1.3rem;
  }
`;

class EditEmployerAbout extends Component {
  state = {
    aboutYou: ''
  };

  componentDidMount() {
      console.log(this.props)
    this.getAbout();
  }

  getAbout = () => {
      const employerId = this.props.employer._id;
      console.log("Hit")
    console.log(employerId)
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleUpdate = () => {
      const payload = {
          aboutYou: this.state.aboutYou
      }

      this.props.updateAboutYou(payload)
  };

  render() {
    return (
      <div>
        Hello, from Edit Page {this.props.employerId}
        <IdeaStyles>
          <input
            onBlur={this.handleUpdate}
            onChange={this.handleChange}
            type="text"
            name="aboutYou"
            value={this.state.aboutYou}
          />
        </IdeaStyles>
      </div>
    );
  }
}

export default EditEmployerAbout;

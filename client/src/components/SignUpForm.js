import React, { Component } from 'react';
// import axios from 'axios'
import { withRouter } from 'react-router-dom'

class SignUpForm extends Component {

  render() {
    return (
      <div>
        <h3>Hello from Sign-up component</h3>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
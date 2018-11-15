import { GoogleLogin } from "react-google-login";
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import React, { Component } from "react";

const responseGoogle = (response) => {
    console.log(response);
  }

class LogInPage extends Component {
  render() {
    return (
      <div>
        <h1>Hello from Login Page</h1>
        <h3>Google component says hello below</h3>
        <GoogleLogin
          clientId="860589244224-6nnm9u1u030oeqvovpva5iot9lm9lp9i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <SignUpForm />
      </div>
    );
  }
}

export default LogInPage;

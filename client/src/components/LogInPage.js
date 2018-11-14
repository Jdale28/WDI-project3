import { GoogleLogin } from "react-google-login";

import React, { Component } from "react";

const responseGoogle = (response) => {
    console.log(response);
  }

class LogInPage extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="860589244224-6nnm9u1u030oeqvovpva5iot9lm9lp9i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default LogInPage;

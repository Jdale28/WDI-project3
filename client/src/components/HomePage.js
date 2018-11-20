import React, { Component } from 'react';
import styled from "styled-components";

const PageContainer = styled.div`
width: 100%;
  .title {
    color: white;
    text-align: center;
    margin-left: 2vw;
    padding-bottom: 3vw;
    margin-top: 5vh;
  }
  .instructions {
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 4vh;
  }
`

class HomePage extends Component {
  render() {
    return (
      <PageContainer>
        <h1 className="title">Welcome to Outperform!</h1>
        <p className="instructions">If you have visited us before, find your name under the employer tab at the top and perform your review actions</p>
        <p className="instructions">If you are new to this platform, sign up in the upper right to get started!</p>
      </PageContainer>
    );
  }
}

export default HomePage;
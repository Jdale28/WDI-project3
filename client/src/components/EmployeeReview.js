import React, { Component } from "react";
import styled from "styled-components";

const ReviewContainer = styled.div`
  width: 98%;
  height: 100vh;
  background: white;
  margin: 2vw 1vw;
`;

const OneReview = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  text-align: center;
  flex-direction: row-reverse;
  width: 100%;
  height: 40vh;
  margin: 2vw 2vw;
`;

const ResponsibilitiesContainer = styled.div`
  font-size: 0.80rem;
  h4 {
    font-size: 1rem;
  }
`;

const ReviewCard = styled.div`
display: flex;
justify-content: center;
border: 1px solid black;
width: 38vw;
margin: auto;
padding: 0vh 2vw 2vh 2vw;
`;

const OneResponsibility = styled.div`
  margin: 0 10vw;
  padding: 0px;
  li {
    width: 100%;
    text-align: left;
  }
`;




class EmployeeReview extends Component {
  render() {
    const returnReview = this.props.reviews.map(review => {
      return (
        <ReviewCard>
        <div key={review._id}>
        <h5>Review Year : {review.reviewYear}   ---- Employer comments:</h5>
          <h3>"{review.comment}"</h3>
          <div>
            <ResponsibilitiesContainer>
              <h4>Your List of responsibilities below:</h4>
              {review.responsibilities.map(responsibility => {
                return (
                  <div key={responsibility._id}>
                    <OneResponsibility>
                      <li>{responsibility.content}</li>
                    </OneResponsibility>
                  </div>
                );
              })}
            </ResponsibilitiesContainer>
          </div>
        </div>
        </ReviewCard>
      );
    });
    return (
      <ReviewContainer>
        <OneReview>{returnReview}</OneReview>
      </ReviewContainer>
    );
  }
}

export default EmployeeReview;

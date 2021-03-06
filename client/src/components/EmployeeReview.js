import React, { Component } from "react";
import styled from "styled-components";
import Responsibilities from "./Responsibilities";
import axios from "axios";

const ReviewContainer = styled.div`
  width: 100%;
  height: auto;
  background: gray;
  margin: 2vw 0vw;
  border: 3px solid white;
`;

const OneReview = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  text-align: center;
  flex-direction: row-reverse;
  width: 100%;
  height: auto;
  color: white;
`;

const ResponsibilitiesContainer = styled.div`
  color: white;
  font-size: 1.25rem;
`;

const ReviewCard = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 45vw;
  margin: 2vw 2vh;
  padding: 2vh 2vw 2vh 2vw;
  .deleteButton {
    height: 23px;
    color: black;
  }
`;


class EmployeeReview extends Component {

  deleteReview = (e, reviewId) => {
    e.preventDefault()
    this.props.removeReview(reviewId)
  }

  render() {
    const returnReview = this.props.reviews.map((review, i) => {
      return (
        <ReviewCard>
          <div key={review._id}>
            <h5>Review Year : {review.reviewYear} ~~~~~ Employer comments:</h5>
            <h3>"{review.comment}"</h3>
            <div>
              <ResponsibilitiesContainer>
                <Responsibilities
                  responsibilities={this.props.reviews[i].responsibilities}
                  employeeId={this.props.employerId}
                  employerId={this.props.employeeId}
                  reviewId={this.props.reviews[i]._id}
                />
              </ResponsibilitiesContainer>
            </div>
          </div>
          <button className="deleteButton" onClick={(e) => this.deleteReview(e, review._id)}>X</button>
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

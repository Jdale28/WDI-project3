import React, { Component } from 'react';

class EmployeeReview extends Component {
    render() {
        const returnReview = this.props.reviews.map(review => {
            return (
              <div key={review._id}>
                <h2>{review.comment}</h2>
                <div>
                  <h6>Your List of responsibilities below:</h6>
                  {review.responsibilities.map(responsibility => {
                    return (
                      <div key={responsibility._id}>
                        <h6> {responsibility.content}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          });
        return (
            <div>
                {returnReview}
            </div>
        );
    }
}

export default EmployeeReview;
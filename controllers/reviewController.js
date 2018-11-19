const Employer = require("../models/Employer");
const Employee = require("../models/Employee");
const Review = require("../models/Review");

const reviewController = {
  index: (req, res) => {
    let employeeId = req.params.employeeId;
    Employee.findById(employeeId)
      .populate("reviews")
      .then(employee => {
        res.send(employee.reviews);
      });
  },
  show: (req, res) => {
    let reviewId = req.params.reviewId;
    Review.findById(reviewId).then(review => {
      res.send(review);
    });
  },
    delete: (req, res) => {
      let reviewId = req.params.reviewId
      Review.findByIdAndDelete(reviewId)
        .then(() => {
          res.send(200)
        })
    },
    update: (req, res) => {
      let reviewId = req.params.reviewId
      Review.findByIdAndUpdate(reviewId, req.body, { new: true })
        .then((updatedReview) => {
          updatedReview.save()
          res.send(updatedReview)
        })
    },
  create: (req, res) => {
    let employerId = req.params.employerId;
    Employer.findById(employerId).then(employer => {
      let employeeId = req.params.employeeId;
      Employee.findById(employeeId).then(employee => {
        Review.create(req.body).then(newReview => {
          employee.reviews.push(newReview);
          employee.save();
          res.send(newReview);
        });
      });
    });
  }
}

module.exports = reviewController;

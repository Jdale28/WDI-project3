const Employer = require("../models/Employer");
const Employee = require("../models/Employee");
const Review = require("../models/Review");
const Responsibility = require("../models/Responsibility");

const responsibilityController = {
  index: (req, res) => {
    let reviewId = req.params.reviewId;
    Review.findById(reviewId)
      .populate("responsibilities")
      .then(review => {
        res.send(review.responsibilities);
      });
  },
  show: (req, res) => {
    let responsibilityId = req.params.responsibilityId;
    Responsibility.findById(responsibilityId).then(responsibility => {
      res.send(responsibility);
    });
  },
  delete: (req, res) => {
    let responsibilityId = req.params.responsibilityId;
    Responsibility.findByIdAndDelete(responsibilityId).then(() => {
      res.send(200);
    });
  },
  update: (req, res) => {
    let responsibilityId = req.params.responsibilityId;
    Responsibility.findByIdAndUpdate(responsibilityId, req.body, {
      new: true
    }).then(updatedResponsibility => {
      updatedResponsibility.save();
      res.send(updatedResponsibility);
    });
  },
  create: (req, res) => {
    let employerId = req.params.employerId;
    Employer.findById(employerId).then(employer => {
      let employeeId = req.params.employeeId;
      Employee.findById(employeeId).then(employee => {
        let reviewId = req.params.reviewId;
        Review.findById(reviewId).then(review => {
          Responsibility.create(req.body).then(newResponsibility => {
            review.responsibilities.push(newResponsibility);
            review.save();
            res.send(newResponsibility);
          });
        });
      });
    });
  }
};

module.exports = responsibilityController;

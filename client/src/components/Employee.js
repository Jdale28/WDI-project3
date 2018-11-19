import React, { Component } from "react";
import axios from "axios";
import EmployeeReview from "./EmployeeReview";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Employee extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  state = {
    employee: {},
    reviews: [],
    show: false,
    newReview: {
      employeeFullName: "",
      employeeJobTitle: "",
      reviewYear: "",
      responsibilities: [],
      comment: "",
    }
  };

  componentDidMount() {
    this.getAllEmployeeData();
  }

  getAllEmployeeData = () => {
    const employeeId = this.props.match.params.employeeId;
    const employerId = this.props.match.params.employerId;
    const url = `/api/employers/${employerId}/employees/${employeeId}`;
    axios.get(url).then(res => {
      this.setState({ employee: res.data, reviews: res.data.reviews });
    });
  };

  handleDelete = () => {
    const employeeId = this.props.match.params.employeeId;
    const employerId = this.props.match.params.employerId;
    axios
      .delete(`/api/employers/${employerId}/employees/${employeeId}`)
      .then(() => {
        this.props.history.goBack();
      });
  };
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange = event => {
    const updatedNewReview = { ...this.state.newReview };
    updatedNewReview[event.target.name] = event.target.value;
    this.setState({ newReview: updatedNewReview });
  };

  handleSubmit = event => {
    const employerId = this.props.match.params.employerId;
    const employeeId = this.props.match.params.employeeId;
    event.preventDefault();
    const payload = {
      employeeFullName: this.state.newReview.employeeFullName,
      reviewYear: this.state.newReview.reviewYear,
      comment: this.state.newReview.comment,
      responsibilities: this.state.newReview.responsibilities,
    };
    axios.post(`/api/employers/${employerId}/employees/${employeeId}/reviews`, payload).then(res => {
      const newReview = res.data;
      const newStateNewReview = [...this.state.reviews, newReview];
      this.setState({ reviews: newStateNewReview });
    });
  };


  render() {
    return (
      <div>
        <h4>{this.state.employee.fullName}, your reviews are below:</h4>
        <div>
        <p>Click to get the full Modal experience!</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Perform your review for this year below:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="reviewYear">Review Year:</label>
                <input onChange={this.handleChange} value={this.state.newReview.reviewYear} type="text" name="reviewYear"/>
              </div>
              <div>
                <label htmlFor="employeeFullName">Employee Name:</label>
                <input onChange={this.handleChange} value={this.state.newReview.employeeFullName} type="text" name="employeeFullName"/>
              </div>
              <div>
                <label htmlFor="comment">Comments</label>
                <input onChange={this.handleChange} value={this.state.newReview.comment} type="text" name="comment"/>
              </div>
              <button type="submit">Submit Review</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
        <EmployeeReview reviews={this.state.reviews} employeeId={this.props.match.params.employerId} employerId={this.props.match.params.employeeId}></EmployeeReview>/>
        <button onClick={this.handleDelete}>Delete Employee</button>
        {/* Add danger/confirmation popup */}
      </div>
    );
  }
}

export default Employee;
const Employer = require('../models/Employer')
const Employee = require('../models/Employee')
const Review = require('../models/Review')

const employeeController = {
  index: (req, res) => {
    let employerId = req.params.employerId
    Employer.findById(employerId).populate('employees')
      .then((Employer) => {
        res.send(Employer.employees)
      })
  },
  show: (req, res) => {
    let employeeId = req.params.employeeId
    Employee.findById(employeeId).populate('reviews')
      .then((employee) => {
        res.send(employee)
      })
  },
  delete: (req, res) => {
    let employeeId = req.params.employeeId
    Employee.findByIdAndDelete(employeeId)
      .then(() => {
        res.send(200)
      })
  },
  update: (req, res) => {
    let employeeId = req.params.employeeId
    Employee.findByIdAndUpdate(employeeId, req.body, { new: true })
      .then((updatedEmployee) => {
        updatedEmployee.save()
        res.send(updatedEmployee)
      })
  },
  create: (req, res) => {
    let employerId = req.params.employerId
    Employer.findById(employerId)
      .then((employer) => {
        Employee.create(req.body)
          .then((newEmployee) => {
            employer.employees.push(newEmployee)
            employer.save()
            res.send(newEmployee)
          })
      })
  }

}

module.exports = employeeController
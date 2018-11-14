const Employee = require('../models/Employee')
const Employer = require('../models/Employer')
const Review = require('../models/Review')

const employerController = {
    index: (req, res) => {
        Employer.find({})
            .then((employers) => {
                res.send(employers)
            })
    },
    show: (req, res) => {
        Employer.findById(req.params.employerId).populate('employees')
            .then((employer) => {
                res.send(employer)
            })
    },
    update: (req, res) => {
        Employer.findByIdAndUpdate(req.params.employerId, req.body)
            .then((updatedEmployer) => {
                updatedEmployer.save()
                res.send(updatedEmployer)
            })
    },
    delete: (req, res) => {
        Employer.findByIdAndDelete(req.params.employerId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Employer.create(req.body)
            .then((employer) => {
                res.send(employer)
            })
    }
}

module.exports = employerController
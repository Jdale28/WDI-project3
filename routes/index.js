const express = require('express')
const router = express.Router()
const employerController = require('../controllers/employerController')
const employeeController = require('../controllers/employeeController')
const reviewController = require('../controllers/reviewController')

router.get('/api/employers', employerController.index)
router.post('/api/employers/', employerController.create)
router.get('/api/employers/:employerId', employerController.show)
router.patch('/api/employers/:employerId', employerController.update)
router.delete('/api/employers/:employerId', employerController.delete)

router.get('/api/employers/:employerId/employees', employeeController.index)
router.post('/api/employers/:employerId/employees/', employeeController.create)
router.get('/api/employers/:employerId/employees/:employeeId', employeeController.show)
router.patch('/api/employers/:employerId/employees/:employeeId', employeeController.update)
router.delete('/api//employers/:employerId/employees/:employeeId', employeeController.delete)

router.get('/api/employers/:employerId/employees/:employeeId/reviews', reviewController.index)
router.post('/api/employers/:employerId/employees/:employeeId/reviews', reviewController.create)
router.get('/api/employers/:employerId/employees/:employeeId/reviews/:reviewId', reviewController.show)
router.patch('/api/employers/:employerId/employees/:employeeId/reviews/:reviewId', reviewController.update)
router.delete('/api/employers/:employerId/employees/:employeeId/reviews/:reviewId', reviewController.delete)

module.exports = router
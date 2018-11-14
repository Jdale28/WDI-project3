const express = require('express')
const router = express.Router()
const employerController = require('../controllers/employerController')
const employeeController = require('../controllers/employeeController')
// const reviewController = require('../controllers/reviewController')

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

// router.get('/api/users/:userId/review', reviewController.index)
// router.get('/api/users/:userId/review/:reviewId', reviewController.show)
// router.delete('/api/users/:userId//review/:reviewId', reviewController.delete)
// router.patch('/api/users/:userId//review/:reviewId', reviewController.update)
// router.post('/api/users/:userId/review', reviewController.create)

module.exports = router
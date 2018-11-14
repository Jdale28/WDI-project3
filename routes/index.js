const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const reviewController = require('../controllers/reviewController')

router.get('/api/employers', employerController.index)
router.post('/api/employers/', employerController.create)
router.get('/api/employers/:employerId', employerController.show)
router.patch('/api/employers/:employerId', employerController.update)
router.delete('/api/employers/:employerId', employerController.delete)

api/user



router.get('/api/employees', employeeController.index)
router.post('/api/employees/', employeeController.create)
router.get('/api/employees/:employeeId', employeeController.show)
router.patch('/api/employees/:employeeId', employeeController.update)
router.delete('/api/employees/:employeeId', employeeController.delete)

router.get('/api/users/:userId/review', reviewController.index)
router.get('/api/users/:userId/review/:reviewId', reviewController.show)
router.delete('/api/users/:userId//review/:reviewId', reviewController.delete)
router.patch('/api/users/:userId//review/:reviewId', reviewController.update)
router.post('/api/users/:userId/review', reviewController.create)

module.exports = router
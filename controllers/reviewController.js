// const User = require('../models/User')
// const Review = require('../models/Review')

// const reviewController = {
//   index: (req, res) => {
//     let userId = req.params.userId
//     User.findById(userId).populate('reviews')
//       .then((user) => {
//         res.send(user.reviews)
//       })
//   },
//   show: (req, res) => {
//     let reviewId = req.params.reviewId
//     Review.findById(reviewId)
//       .then((review) => {
//         res.send(review)
//       })
//   },
//   delete: (req, res) => {
//     let reviewId = req.params.reviewId
//     Review.findByIdAndDelete(reviewId)
//       .then(() => {
//         res.send(200)
//       })
//   },
//   update: (req, res) => {
//     let reviewId = req.params.reviewId
//     Review.findByIdAndUpdate(reviewId, req.body, { new: true })
//       .then((updatedReview) => {
//         updatedReview.save()
//         res.send(updatedReview)
//       })
//   },
//   create: (req, res) => {
//     let userId = req.params.userId
//     User.findById(userId)
//       .then((user) => {
//         console.log(user)
//         Review.create(req.body)
//           .then((newReview) => {
//             console.log(newReview)
//             user.reviews.push(newReview)
//             user.save()
//             res.send(newReview)
//           })
//       })
//   }

// }

// module.exports = reviewController
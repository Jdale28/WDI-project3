const User = require('../models/User')
const Review = require('../models/Review')
const mongoose = require('./connections')

const elon = new User({
    email: 'elon_musk@gmail.com',
    fullName: 'spaceiscool',
    isAdmin: false,
    reviews: []
})
const jordan = new Review({
    employee: elon,
    jobTitle: "Web Developer"
})

const richard = new Review({
    employee: elon,
    jobTitle: "Software Engineer"
})

User.remove({})
    .then(() => Review.remove({}))
    .then(() => Review.insertMany([jordan, richard]))
    // .then((reviews) => elon.reviews.push(reviews))
    .then(() => elon.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
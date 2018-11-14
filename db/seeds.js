const Employer = require('../models/Employer')
const Employee = require('../models/Employee')
const Review = require('../models/Review')
const mongoose = require('./connections')

const jordanOne = new Review({
    employee: "Jordan Dale",
    jobTitle: 'Sr Web Developer',
    comment: "Jordan is amzing, Gold Star A+"
})

const richardOne = new Review({
    employee: "Richard Almonte",
    jobTitle: 'Jr. Web Developer',
    comment: "I recommend Richard be immediately terminated"
})

const jordan = new Employee({
    email: 'jordan.dale2@gmail.com',
    fullName: 'Jordan Dale',
    isAdmin: false,
    reviews: [jordanOne]
})

const richard = new Employee({
    email: 'richard.almonte@gmail.com',
    fullName: 'Richard Almonte',
    isAdmin: false,
    reviews: [richardOne]
})

const spencer = new Employer({
    email: 'spencer.merryman@gmail.com',
    fullName: 'Spencer Merryman',
    isAdmin: true,
    employees: [jordan, richard]
})

Employer.remove({})
    .then(() => Employee.remove({}))
    .then(() => Review.remove({}))
    .then(() => Review.insertMany([jordanOne, richardOne]))
    .then(() => Employee.insertMany([jordan, richard]))
    .then(() => spencer.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
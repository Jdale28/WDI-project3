const Employer = require('../models/Employer')
const Employee = require('../models/Employee')
const Review = require('../models/Review')
const Responsibility = require('../models/Responsibility')
const mongoose = require('./connections')

const jordanRespOne = new Responsibility({
    content: "Work well with others"
})
const jordanRespTwo = new Responsibility({
    content: "Completes projects in timely manner"
})
const jordanRespThree = new Responsibility({
    content: "Uses React and other languages competently"
})

const jordanOne = new Review({
    employee: "Jordan Dale",
    jobTitle: 'Sr Web Developer',
    responsibilities: [jordanRespOne, jordanRespTwo, jordanRespThree],
    comment: "Jordan is amzing, Gold Star A+"
})

const richardRespOne = new Responsibility({
    content: "Collaborates well"
})
const richardRespTwo = new Responsibility({
    content: "Does tasks on time"
})
const richardRespThree = new Responsibility({
    content: "Knows React, node, ruby, etc"
})

const richardOne = new Review({
    employee: "Richard Almonte",
    jobTitle: 'Jr. Web Developer',
    responsibilities: [richardRespOne, richardRespTwo, richardRespThree],
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
    .then(() => Responsibility.remove({}))
    .then(() => Review.insertMany([jordanOne, richardOne]))
    .then(() => Responsibility.insertMany([jordanRespOne, jordanRespTwo, jordanRespThree, richardRespOne, richardRespTwo, richardRespThree]))
    .then(() => Employee.insertMany([jordan, richard]))
    .then(() => spencer.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
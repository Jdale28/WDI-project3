const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Employer = new Schema({
    email: String,
    fullName: String,
    isAdmin: Boolean,
    jobTitle: String,
    password: String,
    employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee'
        }
    ]
})

module.exports = mongoose.model('Employer', Employer)
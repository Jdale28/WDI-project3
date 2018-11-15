const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Employee = new Schema({
    email: String,
    fullName: String,
    jobTitle: String,
    isAdmin: Boolean,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

module.exports = mongoose.model('Employee', Employee)
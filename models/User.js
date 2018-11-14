const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    email: String,
    fullName: String,
    isAdmin: Boolean,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

module.exports = mongoose.model('User', User)
const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Responsibility = new Schema({
    content: String
})

module.exports = mongoose.model('Responsibility', Responsibility)
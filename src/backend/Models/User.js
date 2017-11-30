const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
    NickName: String,
    FirstName: String,
    LastName: String,
    age: Number,
    email: String
})

module.exports = UserSchema
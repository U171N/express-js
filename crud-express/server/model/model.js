

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});

const Userdb = mongoose.model('users', schema);//users merupakan data collection atau table pada suatu database yang akan digunakan pada project ini


module.exports = Userdb;

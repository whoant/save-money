const mongoose = require('mongoose');
const hash256 = require('../utils/sha256');

const User = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    time: {
        type: Date
    },
    activity: {
        type: Array
    }
}, {
    timestamp: true
});

User.pre('save', function (next){
    this.pass = hash256(this.pass);
    next();
});

User.pre('findOne', function (next){
    if (this._conditions.pass) this._conditions.pass = hash256(this._conditions.pass);
    next();
});


module.exports = mongoose.model("User", User);
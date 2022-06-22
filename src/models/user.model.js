const mongoose = require('mongoose');
const hash256 = require('../utils/sha256');

const User = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },
        pass: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            default: '-1:-1',
        },
        activities: {
            type: Array,
            default: [],
        },
        isUpdate: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamp: true,
    }
);

User.pre('save', function (next) {
    next();
});

User.pre('findOne', function (next) {
    if (this._conditions.pass) this._conditions.pass = hash256(this._conditions.pass);
    next();
});

module.exports = mongoose.model('User', User);

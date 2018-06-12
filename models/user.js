var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        // required: true
    },
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    dataOfBirth: Date,
    fideId: String,
    rating: {
        type: Number,
        min: 0,
        max: 3000
    },
    region: String,
    tournaments: {
        organized: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tournament'
            }
        ],
        played: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tournament'
            }
        ],
        actual: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tournament'
            }
        ]
    }
});
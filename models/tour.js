let mongoose = require('mongoose');

module.exports = mongoose.model('Tour', {
    pair: [{
        white: {
            startNumber: {
                type: Number,
                required: true
            },
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            }
        },
        black: {
            startNumber: {
                type: Number,
                required: true
            },
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            }
        },
        table: {
            type: Number,
            required: true
        },
        result: Number
    }]
});
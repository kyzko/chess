let mongoose = require('mongoose');

module.exports = mongoose.model('Result', {
    numberTour: {
        type: Number,
        required: true
    },
    participants: [{
        firstName: String,
        lastName: String,
        startNumber: Number,
        finalNamber: Number,
        points: Number,
        bucholz: Number,
        berger: Number,
        countWhite: Number,
        countBlack: Number,
        rivals: [
            {
                startNumberRivals: Number
            }
        ]
    }]
});
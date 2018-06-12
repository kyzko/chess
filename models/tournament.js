let mongoose = require('mongoose');

module.exports = mongoose.model('Tournament', {
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['start', 'finished', 'registration'],
        required: true
    },
    system: {
        type: String,
        enum: ['swiss', 'circular', 'olympic'],
        required: true
    },
    numberOfTours: {
        type: Number,
        required: true
    },
    organized: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
});


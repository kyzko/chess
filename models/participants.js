let mongoose = require('mongoose');

module.exports = mongoose.model('Participants', {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    startNumber: {
        type: Number,
        required: true
    }
    // firstName:

});
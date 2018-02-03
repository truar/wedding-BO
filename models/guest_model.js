var mongoose = require('mongoose');

var guestSchema = mongoose.Schema({
    id: Number,
    password: String,
	displayName: String,
    category: Number,
    answer: {
        hasAnswered: Boolean,
        date: { type: Date, default: Date.Now },
        isAvailable: Boolean,
        email: String,
        guests: [String],
        allergies: String,
        message: String,
        hebergement: String
    }
});

module.exports = mongoose.model('Guest', guestSchema);
var mongoose = require('mongoose');

var guestSchema = mongoose.Schema({
    id: Number,
    password: String,
	displayName: String,
    category: Number,
    answer: {
        date: { type: Date, default: Date.Now },
        disponibility: Number,
        email: String,
        guests: [String],
        allergies: String,
        message: String,
        hebergement: String
    }
});

module.exports = mongoose.model('Guest', guestSchema);
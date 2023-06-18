const mongoose = require('mongoose');

const QuestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    completedUsers: {
        type: Array,
    },
});

module.exports = Quest = mongoose.model('quests', QuestSchema);

const mongoose = require('mongoose')

const QuestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    completionDate: {
        type: Date,
    },
    completedUsers: {
        type: Array,
    },
})

module.exports = Quest = mongoose.model('quests', QuestSchema);
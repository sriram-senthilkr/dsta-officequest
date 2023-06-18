const Quest = require('../models/Quests');
const User = require('../models/Users');
const asyncHandler = require('express-async-handler');

const getQuests = asyncHandler(async (req, res) => {
    const quests = await Quest.find();
    res.status(200).json(quests);
});

const createQuest = asyncHandler(async (req, res) => {
    const { title, description, type, points, startDate, endDate } = req.body;
    if (!title || !points || !description || !type) {
        res.status(400);
        throw new Error('Please provide a title/ desc/ tpye/ points ');
    }
    if (!(type === 'qr' || type === 'quiz' || type === 'daily')) {
        res.status(400);
        throw new Error('Type must be qr/quiz/daily');
    }
    const newQuest = new Quest({
        title: title,
        description: description,
        type: type,
        points: points,
        startDate: startDate,
        endDate: endDate,
    });
    await newQuest.save();
    res.status(200).json(newQuest);
});

module.exports = {
    createQuest,
    getQuests,
};

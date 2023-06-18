const User = require('../models/Users');
const asyncHandler = require('express-async-handler');

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
};

const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('user Not Found');
    }
    res.status(200).json(user);
};

const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('User Not Found');
    }
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id });
};

const getUserPoints = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('User Not Found');
    }
    const userPoints = await User.findById(req.params.id).select('points');
    res.status(200).json(userPoints);
});

const updateUsername = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('User Not Found');
    }
    const { username } = req.body;
    if (!username) {
        res.status(400);
        throw new Error('Please provide a new username');
    }
    user.username = username;
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
});

const getQuests = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('User Not Found');
    }
    const quests = await Quest.find();
    const questsWithCompleted = quests.map((quest) => {
        const completed = quest.completedUsers.includes(req.params.id);
        return { ...quest.toObject(), completed };
    });
    res.status(200).json(questsWithCompleted);
});

const completeQuest = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        res.status(400);
        throw new Error('User Not Found');
    }
    const quest = await Quest.findById(req.params.questId);
    if (!quest) {
        res.status(400);
        throw new Error('Quest Not Found');
    }
    if (!quest.completedUsers.includes(req.params.userId)) {
        quest.completedUsers.push(req.params.userId);
    }
    //add the quest points to user points
    user.points += quest.points;
    await quest.save();
    await user.save();
    res.status(200).json(quest);
});

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    getUserPoints,
    updateUsername,
    getQuests,
    completeQuest,
};

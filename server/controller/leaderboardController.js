const User = require('../models/Users');
const asyncHandler = require('express-async-handler');

const getLeaderboard = asyncHandler(async (req, res) => {
    const leaderboard = await User.find({}, { username: 1, points: 1 }).sort({
        points: -1,
    });
    res.status(200).json(leaderboard);
});

module.exports = { getLeaderboard };

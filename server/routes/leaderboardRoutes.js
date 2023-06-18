const express = require('express');
const { getLeaderboard } = require('../controller/leaderboardController');

const router = express.Router();

router.get('/', getLeaderboard);

module.exports = router;

const express = require('express');
const { getQuests, createQuest } = require('../controller/questController');

const router = express.Router();

router.get('/', getQuests);

router.post('/', createQuest);
module.exports = router;

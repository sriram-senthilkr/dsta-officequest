const express = require('express');
const { getQuests, createQuest, generatePassword, getUsername, validatePassword, resetQuiz } = require('../controller/questController');

const router = express.Router();

router.get('/', getQuests);

router.post('/', createQuest);

router.get('/pw/:questId', getUsername);

router.post('/pw/generate', generatePassword);

router.post('/pw/validate', validatePassword);

router.post('/resetquiz', resetQuiz);

module.exports = router;

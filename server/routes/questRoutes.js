const express = require('express');
const { getQuests, createQuest, generatePassword, getUsername, validatePassword } = require('../controller/questController');

const router = express.Router();

router.get('/', getQuests);

router.post('/', createQuest);

router.get('/pw/:questId', getUsername);

router.post('/pw/generate', generatePassword);

router.post('/pw/validate', validatePassword);

module.exports = router;

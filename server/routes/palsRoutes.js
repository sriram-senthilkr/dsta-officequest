const express = require('express');
const { generatePal, sendPal } = require('../controller/palsController');

const router = express.Router();

router.patch('/:id/generate-pal', generatePal);

router.patch('/:userId/send-pal', sendPal);

module.exports = router;

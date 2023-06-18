const express = require('express');
const { generatePal } = require('../controller/palsController');

const router = express.Router();

router.patch('/:id/generate-pal', generatePal);

module.exports = router;

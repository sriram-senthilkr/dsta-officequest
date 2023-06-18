const User = require('../models/Users');
const asyncHandler = require('express-async-handler');

const generatePal = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error('User Not Found');
    }
    const randomNumber = Math.random();
    let chosenPal;
    if (randomNumber < 0.226) {
        chosenPal = 0;
    } else if (randomNumber < 0.453) {
        chosenPal = 1;
    } else if (randomNumber < 0.68) {
        chosenPal = 2;
    } else if (randomNumber < 0.78) {
        chosenPal = 3;
    } else if (randomNumber < 0.88) {
        chosenPal = 4;
    } else if (randomNumber < 0.98) {
        chosenPal = 5;
    } else if (randomNumber < 0.99) {
        chosenPal = 6;
    } else {
        chosenPal = 7;
    }
    user.palsCount[chosenPal] += 1;
    await user.save();
    res.status(200).json(chosenPal);
};

module.exports = { generatePal };

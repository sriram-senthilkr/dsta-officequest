const Quest = require('../models/Quests')
const User = require('../models/Users')
const asyncHandler = require('express-async-handler')

const getQuests = asyncHandler( async (req, res) => {
    const quests = await Quest.find()
    res.status(200).json(quests);
})

const createQuest = asyncHandler( async (req, res) => {
    const { title, points, completionDate } = req.body;
    if (!title || !points) {
      res.status(400);
      throw new Error('Please provide a title and points');
    } 
    const newQuest = new Quest({
        title: title,
        points: points,
        completionDate: completionDate,
    });
    await newQuest.save();
    res.status(200).json(newQuest);
  })

module.exports = {
    createQuest, getQuests
     }
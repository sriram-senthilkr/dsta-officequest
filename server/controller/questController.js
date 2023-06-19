const crypto = require('crypto')
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const Quest = require('../models/Quests');
const User = require('../models/Users');
const OTP = require('../models/OTP')


const getQuests = asyncHandler(async (req, res) => {
    const quests = await Quest.find();
    res.status(200).json(quests);
});

const createQuest = asyncHandler(async (req, res) => {
    const { title, description, type, points, startDate, endDate } = req.body;
    if (!title || !points || !description || !type) {
        res.status(400);
        throw new Error('Please provide a title/ desc/ tpye/ points ');
    }
    if (!(type === 'qr' || type === 'quiz' || type === 'daily')) {
        res.status(400);
        throw new Error('Type must be qr/quiz/daily');
    }
    const newQuest = new Quest({
        title: title,
        description: description,
        type: type,
        points: points,
        startDate: startDate,
        endDate: endDate,
    });
    await newQuest.save();
    res.status(200).json(newQuest);
});

//display form asking for username
//gets userId from username and goes to the generate password view
const getUsername = async (req, res) => {
    const { questId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(questId)) {
        return res.status(404).end('Quest Id invalid')
    }
    try {
        const quest = await Quest.findById(questId)
        if (!quest) {
            res.status(404).end("Quest does not exist")
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
    
    // console.log("quest", questType)
    return res.status(200).render('username.ejs', { questId: questId })
}

// generates a 8 digit password, expiry set in 5min
// store in OTP collection {password, userId, taskId, expiry}
const generatePassword = async (req, res) => {
    const { questId, username } = req.body;

    try {
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).end('User does not exist')
        }
        const quest = await Quest.findById(questId)
        if (!quest) {
            return res.status(402).end('Quest does not exist')
        }
        // console.log(user)
        const userId = user._id
        const password = crypto.randomBytes(4).toString('hex').toUpperCase()
        const expiry = new Date(Date.now() + 5*60*100)
        const otp = new OTP({
            questId: questId,
            otp: password,
            expiresAt: expiry,
            userId: userId,
        })
        await otp.save()

        return res.status(200).render('password.ejs', {password})
    } catch (error) {
        console.log(error)
        return res.status(500).send("Server Error")
    }
}



// checks password with OTP collection against userId and questId
// if valid, reward points based on questId
const validatePassword = async (req, res) => {
    const { questId, password, userId } = req.body;

    try {
        const otpInstance = OTP.find({
            questId: questId,
            otp: password,
            userId: userId,
        });
        if (!otpInstance) {
            return res.status(401).end("Invalid Password")
        }
        const points = await Quest.findById(questId).select('points')
        if (!points) {
            return res.status(404).end("Quest does not exist")
        }
        console.log(points.points)
        const expiry = new Date(otpInstance.expiresAt);
        const currentTime = new Date()
        if (currentTime >= expiry) {
            return res.status(402).end("Password Expired")
        }

        // reward points to user
        const updatedUser = await User.findById(userId);
        // console.log(updatedUser)
        updatedUser.points += points.points
        await updatedUser.save()

        return res.status(200).json({ message: 'Success'})

    } catch (error) {
        console.log(error)
        return res.status(500).send("Server Error")
    }
}

const resetQuiz = async (req, res) => {
    const { userId } = req.body;
    const type = "quiz"
    try {
        const quiz = await Quest.findOne({ type })
        if (!quiz) {
            return res.status(400).end("No quiz")
        }
        let arr = quiz.completedUsers
        const newArr = arr.filter(item => item !== userId)
        quiz.completedUsers = newArr
        const data = await quiz.save()

        return res.status(200).json({ message: 'Success', data})
    } catch (error) {
        console.log(error)
        return res.status(500).send("Server Error")
    }
}

module.exports = {
    createQuest,
    getQuests,
    generatePassword,
    getUsername,
    validatePassword,
    resetQuiz,
};

const express = require('express')
const { getUser, getUsers, deleteUser, getUserPoints, updateUsername, getQuests, completeQuest } = require('../controller/userController')

const router = express.Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.get('/:id/points', getUserPoints )

router.patch('/:id/update-username', updateUsername )

router.get('/:id/quests', getQuests)

router.patch('/:userId/quests/:questId', completeQuest )

module.exports = router;
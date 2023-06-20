const express = require('express');
const {
    getUser,
    getUsers,
    deleteUser,
    getUserPoints,
    updateUsername,
    getQuests,
    completeQuest,
    getUserPals,
    completeQuiz,
} = require('../controller/userController');

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.get('/:id/points', getUserPoints);

router.get('/:id/pals', getUserPals);

router.patch('/:id/update-username', updateUsername);

router.get('/:id/quests', getQuests);

router.patch('/:userId/quests/:questId', completeQuest);

router.patch('/completequiz', completeQuiz)

module.exports = router;

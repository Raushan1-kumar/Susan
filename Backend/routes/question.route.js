const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const questionController = require('../controllers/question.controller.js');
const {authUser} = require('../middlewares/auth.middlewares.js')


router.post('/check-code',authUser, questionController.checkQuestions);
router.post('/give-hint',authUser, questionController.giveHint);
router.post('/puzzle',authUser, questionController.puzzle);


module.exports = router;
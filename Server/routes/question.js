const express = require('express')
const router = express.Router();

const QuestionController = require('../controllers/question')
router.get("/getQuestionData", QuestionController.getQuestionData)


module.exports = router;
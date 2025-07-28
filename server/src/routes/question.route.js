import express from 'express';
import { addQuestionsToSession, togglePinnedQuestion, updateQuestionNotes }  from '../controllers/question.controller.js';

const router = express.Router();
router.route('/add-questions').post(addQuestionsToSession);
router.route('/toggle-pin/:id').post(togglePinnedQuestion);
router.route('/update-notes/:id').post(updateQuestionNotes);

export default router;
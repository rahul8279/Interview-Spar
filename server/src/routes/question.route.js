import express from 'express';
import { addQuestionsToSession, togglePinnedQuestion, updateQuestionNotes }  from '../controllers/question.controller.js';
import protectRoute from '../middlewares/protected.js';

const router = express.Router();
router.route('/add-questions').post(protectRoute,addQuestionsToSession);
router.route('/toggle-pin/:id').post(protectRoute,togglePinnedQuestion);
router.route('/update-notes/:id').post(protectRoute,updateQuestionNotes);

export default router;
import express from 'express';
import protectRoute from '../middlewares/protected.js';
import { createSession, deleteSession, getMySessions, getSessionById, } from '../controllers/session.controller.js';

const router = express.Router();

router.route('/create').post(protectRoute, createSession);
router.route('/getAllSessions').get(protectRoute, getMySessions);
router.route('/getsessionbyid/:id').get(protectRoute, getSessionById);
router.route('/delete/:id').delete(protectRoute, deleteSession);

export default router;

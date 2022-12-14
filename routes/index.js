import express from 'express';
const router = express.Router();
import { loginController, registerController } from '../controllers';
import userController from '../controllers/auth/userController';
import auth from '../middleware/auth';

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);

export default router;
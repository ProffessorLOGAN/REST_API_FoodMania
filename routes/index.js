import express from 'express';
const router = express.Router();
import { loginController, registerController,userController,refreshController, productController } from '../controllers';
import admin from '../middleware/admin';
import auth from '../middleware/auth';

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.post('/refresh', refreshController.refresh);
router.post('/logout',auth,loginController.logout);

//Products routes
router.post('/product/store/create', [auth, admin], productController.store);
router.delete('/product/delete/:id', [auth, admin], productController.destroy);
// router.post('/products/cart-items', productController.getProducts);

export default router;
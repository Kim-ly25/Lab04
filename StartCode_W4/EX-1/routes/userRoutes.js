import express from 'express';
import UserController from '../controllers/userController.js';
import { validateUser } from '../middleware/validation.js';

const router = express.Router();
const userController = new UserController();

const setUserRoutes = (app) => {
    router.get('/users', userController.getAllUsers);
    router.get('/users/:id', userController.getUserById);
    router.post('/users', validateUser, userController.createUser);
    router.put('/users/:id', validateUser, userController.updateUser);
    router.delete('/users/:id', userController.deleteUser);

    app.use('/api', router);
};

export default setUserRoutes;
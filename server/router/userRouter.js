import express from "express";
import { seeds } from "../controllers/seedsController.js";
import { createUser,  getUsers , getUserById, updateUser, deleteUser} from "../controllers/userController.js";
const userRouter = express.Router();

// userRouter.get('/api/users/seed', seeds)
userRouter.get('/api/users', getUsers);
userRouter.get('/api/users/:id', getUserById);

userRouter.post('/api/users', createUser);
userRouter.put('/api/users/:id', updateUser);

userRouter.delete('/api/users/:id', deleteUser);

export default userRouter;
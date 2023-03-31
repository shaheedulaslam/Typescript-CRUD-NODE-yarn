import express from 'express';
import { addUser, allUsers, deleteUser, updateUser } from '../Controller/indexController';
export const router = express.Router();



router.post('/', addUser)
router.get('/users',allUsers)
router.delete('/user/:id',deleteUser)
router.put('/user/:id',updateUser)



import { Router } from "express";
import { createUser, getUsers, getUsersById } from "../handlers/users";

const router = Router();

//users
router.get('/', getUsers)

//users
router.get('/:id', getUsersById)

//create
router.post('/', createUser)

export default router;
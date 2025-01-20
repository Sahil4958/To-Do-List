import express from 'express'
import { deleteToDo, getToDo, saveToDo, updateToDo } from '../controllers/ToDoModel.js';

const router = express.Router();

router.get('/', getToDo)
router.post('/create', saveToDo)
router.post('/update/:_id', updateToDo)
router.delete('/delete/:_id', deleteToDo)

export default router
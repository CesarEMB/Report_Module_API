import { Router } from "express";
import { postStudent, getStudents, getStudent } from "../controllers/student.controller";
import { authRequired } from "../middlewares/validateToken";

const router = Router();

router.get('/:id', authRequired, getStudent);

router.get('/', getStudents);

router.post('/', postStudent);

router.put('/:id');

router.delete('/:id');


export  { router };
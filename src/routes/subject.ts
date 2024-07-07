import { Router } from "express";
import { getSubject, getSubjects, postSubject, getSubjectFilter} from "../controllers/subject.controller"

const router = Router();

router.get('/', getSubjects);

router.get('/filter', getSubjectFilter)

router.get('/:id', getSubject);

router.post('/', postSubject);

router.put('/:id');

router.delete('/:id');


export  { router }; 
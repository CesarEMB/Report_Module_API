import { Router } from "express";
import { getEnrolledSubject, getEnrolledSubjects, postEnrolledSubject } from "../controllers/enrolled_sub.controller";

const router = Router();

router.get('/', getEnrolledSubjects);

router.get('/:id', getEnrolledSubject);

router.post('/', postEnrolledSubject);


export  { router }; 
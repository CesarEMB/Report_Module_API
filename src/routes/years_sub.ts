import { Router } from "express";
import { postYearSubjects, getYears,  } from "../controllers/yearSubject.controller ";

const router = Router();

router.get('/', getYears);

router.post('/', postYearSubjects);


export  { router }; 
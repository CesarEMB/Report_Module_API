import { Router } from "express";
import { getPeriod, getPeriods, postPeriod, getPeriodSubjects } from "../controllers/period.controller";

const router = Router();

router.get('/', getPeriods);

router.get('/:id', getPeriod);

router.get('/subjects/:id', getPeriodSubjects)


router.post('/', postPeriod);


export  { router }; 
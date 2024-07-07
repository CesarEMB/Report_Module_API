import { Router } from "express";
import { postPeriodList, getPeriodList, getPeriodsList } from "../controllers/periodList.controller";

const router = Router();

router.get('/', getPeriodsList);

router.post('/', postPeriodList);

router.get('/:id', getPeriodList);


export  { router }; 
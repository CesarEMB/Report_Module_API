import { Router } from "express";
import { getCareers, postCareer, getCareer } from "../controllers/career.controller";
import { authRequired } from "../middlewares/validateToken";

const router = Router();



router.get('/', getCareers);

router.get('/:id', getCareer);

router.post('/', postCareer);

router.put('/:id');

router.delete('/:id');


export  { router };
import { Router } from "express";

import { postDirector, getDirector } from "../controllers/director.controller";

const router = Router();



router.get('/', getDirector);

router.post('/', postDirector);

router.put('/:id');

router.delete('/:id');


export  { router };
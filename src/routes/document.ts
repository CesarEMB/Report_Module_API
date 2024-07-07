import { Router } from "express";

import { getDocument, getDocuments,postDocument } from "../controllers/document.controller";

const router = Router();

router.post('/', postDocument);

router.get('/', getDocuments);

router.get('/:id', getDocument)

export  { router };
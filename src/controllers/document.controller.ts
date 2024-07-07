import { Request, Response } from "express";
import {
  GetDocument,
  GetDocuments,
  insertDocument,
} from "../services/document.services";

const postDocument = async ({ body }: Request, res: Response) => {
  try {
    const documentSaved = await insertDocument(body);

    res.status(200).json(documentSaved);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};

const getDocuments = async(req: Request, res: Response) => {
    try {
        const document = await GetDocuments();
        res.status(200).json(document)
    } catch (e:any) {
        res.status(500).json({message: e.message})   
    }
}

const getDocument = async(req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const document = await GetDocument(id)
        res.status(200).json(document)
    } catch (e:any) {
        res.status(500).json({message: e.message})   
    }
}

export {postDocument, getDocument, getDocuments}
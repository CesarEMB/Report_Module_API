import { documentData } from "../interfaces/document_recovery.interface";
import documentModel from "../models/document.schema";

const insertDocument = async (data: documentData) => {
    const responseInsert = await documentModel.create(data);
    return responseInsert
};

const GetDocuments = async () => {
    const responseDocuments = await documentModel.find({});
    return responseDocuments
}

const GetDocument = async (id: string) => {
    const responseDocument = await documentModel.findOne({_id: id })
    return responseDocument
}

export {insertDocument, GetDocuments, GetDocument}
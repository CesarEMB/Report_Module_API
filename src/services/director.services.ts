import { director } from "../interfaces/director.interface";
import directorModel from "../models/director.schema";

const insertDirector= async(data: director) => {
    const responseInsert = await directorModel.create(data);
    return responseInsert
}

const GetDirector = async() =>{
    const responseDirector = await directorModel.find();
    return responseDirector;
}

export { insertDirector, GetDirector }
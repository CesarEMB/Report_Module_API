import { career } from "../interfaces/career.interface"; 
import  carreerModel  from "../models/career.schema"

const insertCareer= async(data: career) => {
    const responseInsert = await carreerModel.create(data);
    return responseInsert
}

const GetCareers = async() =>{
    const responseStudents = await carreerModel.find();
    return responseStudents;
}

const GetCareer = async(id: string) =>{
    const responseStudents = await carreerModel.findOne({_id: id});
    return responseStudents;
}

export { insertCareer, GetCareer, GetCareers }
import { subject } from "../interfaces/subject.interface";
import subjectModel from "../models/subject.schema";

const insertSubject = async( data: subject) => {
    const ExistSubject = await subjectModel.findOne({ $or: [{ name: data.name }, { cod: data.cod }] })
    

    if (ExistSubject) return "Exist"

    const responseInsert = await subjectModel.create(data);
    return responseInsert
}

const GetSubjects = async() =>{
    const responseSubject = await subjectModel.find({});
    return responseSubject;
}

const GetSubject = async(id: string) =>{
    const responseSubject = await subjectModel.findOne({_id: id});
    return responseSubject;
}

const GetSubjectFilter = async(data: subject) =>{

     const {name, academic_year} = data   

     let responseSubject: any = []

    if(!name && !academic_year) return console.log("no existe el valor")
    if(name && academic_year) return responseSubject = await subjectModel.find({ $and: [{ name: name }, {academic_year: academic_year}] })
    if(name || academic_year) return responseSubject = await subjectModel.find({ $or: [{ name: name }, {academic_year: academic_year}] })
}

export { insertSubject, GetSubjects, GetSubject, GetSubjectFilter }
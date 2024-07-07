import { student } from "../interfaces/student.interface";
import studentModel from "../models/student.schema";

const insertStudent = async( data: student) => {
    const responseInsert = await studentModel.create(data);
    return responseInsert
}

const GetStudents = async() =>{
    const responseStudents = await studentModel.find({}, {password: 0});
    return responseStudents;
}

const GetStudent = async(id: string) =>{
    const responseStudents = await studentModel.findOne({_id: id},{password: 0});
    return responseStudents;
}

export { insertStudent, GetStudents, GetStudent }
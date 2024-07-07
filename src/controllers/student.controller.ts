import { Request, Response } from "express";
import {
  insertStudent,
  GetStudents,
  GetStudent,
} from "../services/student.services";

const getStudent = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const student = await GetStudent(id);

    res.status(200).json(student);

  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await GetStudents();
    res.status(200).json(students);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const postStudent = async ({body}: Request, res: Response) => {
  
  try {
    const studentSaved = await insertStudent(body);

    res.json({
      message: "Se ha registrado al estudiante, correctamente",
      
      data: {
        ...JSON.parse(JSON.stringify(studentSaved)),
        password: undefined,
      },

    });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const updateStudent = (req: Request, res: Response) => {
  try {
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const deleteStudent = (req: Request, res: Response) => {
  try {
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

export { getStudent, getStudents, postStudent, updateStudent, deleteStudent };

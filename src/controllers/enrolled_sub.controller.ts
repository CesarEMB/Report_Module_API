import { Request, Response } from "express";
import { GetEnrolledSubjects, GetEnrolledSubject, insertEnrolledSubject } from "../services/enrolledSubject.services";

const getEnrolledSubject = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const subject = await GetEnrolledSubject(id);

    res.status(200).json(subject);

  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const getEnrolledSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await GetEnrolledSubjects();
    res.status(200).json(subjects);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const postEnrolledSubject = async ({body}: Request, res: Response) => {
  
  try {
    const subjectSaved = await insertEnrolledSubject(body);

    res.json({
      message: "Se ha registrado la materia para inscribir, correctamente",
      data: {
        ...JSON.parse(JSON.stringify(subjectSaved)),
      },

    });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

export { getEnrolledSubject, getEnrolledSubjects, postEnrolledSubject };

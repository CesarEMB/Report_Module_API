import { Request, Response } from "express";
import { GetSubject, GetSubjects, insertSubject, GetSubjectFilter} from "../services/subject.services"

const getSubject = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const subject = await GetSubject(id);

    res.status(200).json(subject);

  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const getSubjectFilter = async ({body}: Request, res: Response) => {
  try {

    const subjects = await GetSubjectFilter(body);

    res.status(200).json(subjects);

  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const getSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await GetSubjects();
    res.status(200).json(subjects);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const postSubject = async ({body}: Request, res: Response) => {
  
  try {
    const subjectSaved = await insertSubject(body);

    if(subjectSaved === "Exist"){
      res.status(400).json({message: "La Materia ya se encuentra registrada"})
      return
    }

    res.json({
      message: "Se ha registrado la materia, correctamente",
      data: {
        ...JSON.parse(JSON.stringify(subjectSaved)),
      },

    });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const updateSubject = (req: Request, res: Response) => {
  try {
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const deleteSubject = (req: Request, res: Response) => {
  try {
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

export { getSubject, getSubjects,postSubject, updateSubject, deleteSubject, getSubjectFilter };

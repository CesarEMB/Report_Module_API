import { Request, Response } from "express";
import { GetYears, insertYearSubject } from "../services/yearSubject.services";


const postYearSubjects = async ({ body }: Request, res: Response) => {
  try {
    const yearsSaved = await insertYearSubject(body);
    res.json({
      message: "Se ha registrado la lista de materias, correctamente",

      data: {
        ...JSON.parse(JSON.stringify(yearsSaved)),
      },
    });
  } catch (e: any) {
    res.status(500).json({ message: e.messsage });
    console.log(e);
  }
};


const getYears = async (req: Request, res: Response) => {
  try {
    const years = await GetYears();
    res.status(200).json(years);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};


export {postYearSubjects, getYears };
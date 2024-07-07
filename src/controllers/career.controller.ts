import { Request, Response } from "express";
import {
  insertCareer,
  GetCareer,
  GetCareers,
} from "../services/career.services";

const postCareer = async ({ body }: Request, res: Response) => {
  try {
    const careerSaved = await insertCareer(body);

    res.json({
      message: "Se ha guardado la carrera, correctamente",

      data: {
        ...JSON.parse(JSON.stringify(careerSaved)),
      },
    });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const getCareers = async (req: Request, res: Response) => {
  try {
    const career = await GetCareers();
    res.status(200).json(career);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const getCareer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const career = await GetCareer(id);
    res.status(200).json(career);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

export { getCareers, postCareer, getCareer };

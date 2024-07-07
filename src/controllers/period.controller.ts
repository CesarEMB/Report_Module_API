import { Request, Response } from "express";
import {
  GetPeriod,
  GetPeriods,
  insertPeriod,
  GetPeriodSubjects
} from "../services/period.services";

const getPeriod = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const period = await GetPeriod(id);

    res.status(200).json(period);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const getPeriods = async (req: Request, res: Response) => {
  try {
    const periods = await GetPeriods();
    res.status(200).json(periods);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const getPeriodSubjects = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const subjects = await GetPeriodSubjects(id)
    
    res.status(200).json(subjects);

  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const postPeriod = async ({body}: Request, res: Response) => {
    try {
        const periodSaved = await insertPeriod(body);
    
        if(periodSaved === "Exist"){
          res.status(400).json({message: "El perido registrado ya fue inscrito"})
          return
        }
    
        res.json({
          message: "Se ha registrado el periodo academico, correctamente",
          data: {
            ...JSON.parse(JSON.stringify(periodSaved)),
          },
    
        });
      } catch (e: any) {
        res.status(500).json({ message: e.message });
        console.log(e);
      }
}

export {getPeriod, getPeriods, postPeriod, getPeriodSubjects }
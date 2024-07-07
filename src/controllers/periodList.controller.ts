import { Request, Response } from "express";
import {
  GetPeriodList,
  insertPeriodList,
  GetPeriodsList
} from "../services/periodList.services";

const postPeriodList = async ({ body }: Request, res: Response) => {
  try {
    const periodListSaved = await insertPeriodList(body);
    res.json({
      message: "Se ha registrado la lista de periodos, correctamente",

      data: {
        ...JSON.parse(JSON.stringify(periodListSaved)),
      },
    });
  } catch (e: any) {
    res.status(500).json({ message: e.messsage });
    console.log(e);
  }
};

const getPeriodsList = async (req: Request, res: Response) => {
  try {
    const period = await GetPeriodsList();
    res.status(200).json(period);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const getPeriodList = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const list = await GetPeriodList(id);

    res.status(200).json(list);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

export { getPeriodList, postPeriodList, getPeriodsList };

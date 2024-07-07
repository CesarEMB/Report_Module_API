import { Request, Response } from "express";
import { insertDirector, GetDirector } from "../services/director.services";


const postDirector = async ({ body }: Request, res: Response) => {
  try {
    const DirectorSaved = await insertDirector(body);
    res.json({
      message: "Se ha registrado al director, correctamente",

      data: {
        ...JSON.parse(JSON.stringify(DirectorSaved)),
      },
    });
  } catch (e: any) {
    res.status(500).json({ message: e.messsage });
    console.log(e);
  }
};


const getDirector = async (req: Request, res: Response) => {
  try {
    const director = await GetDirector();
    res.status(200).json(director);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

export {postDirector, getDirector};
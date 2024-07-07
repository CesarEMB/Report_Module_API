import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.services";

const register = async ({ body }: Request, res: Response) => {
  try {
    const resRegister = await registerUser(body);

    if (resRegister == "El correo ya esta registrado") {
      res.status(400).json({message: "El correo registrado, ya existe"})
      return
    }

    if (resRegister == "El usuario ya esta asignado") {
      res.status(400).json({message: "El usuario registrado, ya esta asignado"})
      return
    }

    if (resRegister == "El usuario no existe") {
      res.status(400).json({message: "El usuario no existe"})
      return
    }

    res.json({
      data: {
        ...JSON.parse(JSON.stringify(resRegister)),
        password: undefined,
      },
    });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

const login = async ({ body }: Request, res: Response) => {
  try {
    const reslogin = await loginUser(body);
      

    if(reslogin === "Invalid_data"){
      res.status(400).json({message: "Datos invalidos"})
      return
    }

    res.json(reslogin)

  } catch (e: any) {
    res.status(500).json({ message: e.message });
    console.log(e);
  }
};

export { register, login}
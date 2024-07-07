import { Request, Response, NextFunction } from "express"; // Importa los tipos de Request, Response y NextFunction de Express
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

export const authRequired = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const getToken = req.headers.authorization || "";

    const token = getToken.split(" ").pop();

    if (!token) {
      res.status(401).json({ message: "No existe token" });
      return;
    }
    
    const isUser = await verifyToken(`${token}`);

    if (!isUser) {
      res.status(401).json({ message: "Token no valido" });
      return 
    }  
      req.user = isUser;
      next();
  
  } catch (e) {
    res.status(401).json({ message: "sesión no valida" });
  }
};

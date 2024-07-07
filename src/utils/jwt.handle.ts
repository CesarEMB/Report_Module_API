import { sign, verify } from "jsonwebtoken";
import { TOKEN_SECRET } from "../config";

const generateToken = (id: string) => {
  try {
    const jwt = sign({ id }, TOKEN_SECRET || "", { expiresIn: "2h" });
    return jwt;
  } catch (e) {
    console.log({ message: `Error: ${e}` });
  }
};


const verifyToken = async (token: string) => {
  try {
    const isOk = verify(token, TOKEN_SECRET || "");
   
    return isOk;

  } catch (e) {
    console.log({ message: `Error: ${e}` });
  }
};

export { generateToken, verifyToken };

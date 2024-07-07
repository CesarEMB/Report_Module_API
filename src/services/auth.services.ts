import { auth } from "../interfaces/auth.interface";
import userModel from "../models/user.schema";
import studentModel from "../models/student.schema";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerUser = async ({ email, password, user }: auth) =>{
    const existEmail = await userModel.findOne({email});
    const asignUser = await userModel.findOne({user})
    const existUser = await studentModel.findOne({_id: user})

    if (existEmail) return  "El correo ya esta registrado"
    

    if (asignUser) return "El usuario ya esta asignado"

    if (!existUser) return "El usuario no existe"

    const passHash = await encrypt(password);

    const registerNewUser = await userModel.create({email, password: passHash, user});

    return registerNewUser
}

const loginUser = async ({email, password}: auth) =>{
    const existUser = await userModel.findOne({email});

    if(!existUser) return "Invalid_data"

    const checkIs = existUser.password;

    const isCorrect = await verified(password, checkIs)

    if(!isCorrect) return "Invalid_data"

    const token = generateToken(existUser.id)

    const data = {
        token,
        user: {
            ...JSON.parse(JSON.stringify(existUser)),
            password: undefined,
        }
    }

    return data
}

export { registerUser, loginUser}
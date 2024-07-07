import mongoose, { Schema,  model} from "mongoose";
import { auth } from "../interfaces/auth.interface";
import studentModel from "./student.schema";

const userSchema = new Schema<auth> (
   {
    email: { type: String, required:true, unique: true},
    password: { type: String, required:true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: studentModel,
        required: true,
        unique: true
    }
   },
    {
        timestamps: true,
        versionKey: false 
    }
)

const userModel = model("user", userSchema);

export default userModel 
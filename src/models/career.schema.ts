import {Schema, model} from 'mongoose';
import { career } from '../interfaces/career.interface';

const careerSchema = new Schema<career> (
    {
        name: {type: String, required: true},
        cod : {type: Number, required: true}
    },
    {
        timestamps: true,
        versionKey: false 
    }
)

const careerModel = model("career", careerSchema);

export default careerModel 
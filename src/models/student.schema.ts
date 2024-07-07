import mongoose, {Schema, model} from 'mongoose';
import { student } from '../interfaces/student.interface';
import careerModel from './career.schema';

const studentSchema = new Schema<student> (
    {
        first_name: {type: String, required: true},
        second_name: {type: String},
        last_name: {type: String, required: true},
        second_surname: {type: String},
        CI: {type: String, required: true, unique:true},
        direction: {type: String},
        phone: {type: String, required: true},
        gender: {type: String, required: true},
        career: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: careerModel,
            required: true
        },
        study_location: {type: String, required: true},
        cohort: {type: String, required: true},
        status: {type: Boolean, required: true},
    },
    {
        timestamps: true,
        versionKey: false 
    }
)

const studentModel = model("student", studentSchema);

export default studentModel 
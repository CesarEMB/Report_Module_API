import { Schema, model} from 'mongoose';
import { director } from '../interfaces/director.interface';

const directorSchema = new Schema<director>(
    {
        name: {type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false 
    }
)

const directorModel = model("director", directorSchema)

export default directorModel
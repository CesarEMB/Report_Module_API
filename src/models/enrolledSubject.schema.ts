import mongoose, { Schema, model} from 'mongoose';
import { enrolledSubject } from '../interfaces/enrolledSubject.interface';
import subjectModel from './subject.schema';

const enrolledSubjectSchema = new Schema<enrolledSubject> (
    {
        subject_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: subjectModel,
            required:true,
        },
        section: {type: String, required: true},
        classroom: [{
            day: {type: String, required: true},
            site: {type: String, required: true},
            _id: false
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const enrolledSubjectModel = model("enrolledSubject", enrolledSubjectSchema)

export default enrolledSubjectModel
import { Schema, model } from "mongoose";
import { subject } from "../interfaces/subject.interface";

const subjectSchema = new Schema<subject>(
  {
    name: { type: String, required: true },
    cod: { type: String, required: true },
    theoretical_h: { type: Number, required: true },
    practical_h: { type: Number, required: true },
    weekly_h: { type: Number, required: true },
    u_c: { type: Number, required: true },
    priorities: { type: String },
    academic_year: { type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const subjectModel = model("subject", subjectSchema);

export default subjectModel;

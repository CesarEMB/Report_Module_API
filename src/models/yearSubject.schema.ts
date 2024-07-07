import { Schema, model } from "mongoose";
import { yearSubject } from "../interfaces/yearSubject.interface";

const yearSubjectSchema = new Schema<yearSubject>(
  {
    year: { type: String, required: true, unique: true },
    list: [
      {
        subject: {
          type: String,
          required: true,
          unique: true,
        },
        _id: false,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const yearSubjectModel = model("yearSubject", yearSubjectSchema);

export default yearSubjectModel;

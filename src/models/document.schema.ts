import { Schema, model } from "mongoose";
import { documentData } from "../interfaces/document_recovery.interface";

const documentSchema = new Schema<documentData>(
  {
    savedData: { type: Object, required: true },
    type: { type: String, required: true },
    name: {type: String, required:true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const documentModel = model("document", documentSchema);

export default documentModel;
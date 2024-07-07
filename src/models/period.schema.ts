import mongoose, { model, Schema } from "mongoose";
import { period } from "../interfaces/period.interface";

const periodSchema = new Schema<period>(
  {
    period: { type: String, required: true },
    enrolled_sub: [
      {
        subject: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        qualification:{ type: Number },
        _id: false,
      },
    ],
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const periodModel = model("period", periodSchema);

export default periodModel
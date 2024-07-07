import mongoose, { Schema, model } from "mongoose";
import { periodList } from "../interfaces/periodList.interface";
import periodModel from "./period.schema";
import studentModel from "./student.schema";

const periodListSchema = new Schema<periodList>(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: studentModel,
      required: true,
      unique: true,
    },
    periods: [
      {
        period: {
          type: mongoose.Schema.Types.ObjectId,
          ref: periodModel,
          required: true,
          unique: true,
        },
        _id: false,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const periodListModel = model("periodList", periodListSchema);

export default periodListModel;

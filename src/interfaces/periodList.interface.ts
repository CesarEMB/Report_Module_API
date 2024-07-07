import mongoose from "mongoose";

export interface periodList {
  student_id: mongoose.Schema.Types.ObjectId;
  periods: [
    {
      period: mongoose.Schema.Types.ObjectId;
    }
  ];
}

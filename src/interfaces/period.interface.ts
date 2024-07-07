import mongoose from "mongoose";

export interface period {
  period: string;
  enrolled_sub: [
    {
      subject: mongoose.Schema.Types.ObjectId;
      qualification: number;
    }
  ];
  status: boolean;
}

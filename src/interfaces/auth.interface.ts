import mongoose from "mongoose";

export interface auth {
  email: string;
  password: string;
  user: mongoose.Schema.Types.ObjectId;
}

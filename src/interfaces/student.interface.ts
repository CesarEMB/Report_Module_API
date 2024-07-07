import mongoose from "mongoose";

export interface student {
  first_name: string;
  second_name: string;
  last_name: string;
  second_surname: string;
  CI: string;
  direction: string;
  phone: string;
  gender: string;
  career: mongoose.Schema.Types.ObjectId;
  study_location: string;
  cohort: string;
  status: boolean;
}

import mongoose from "mongoose";

export interface enrolledSubject {
  subject_id: mongoose.Schema.Types.ObjectId;
  section: string;
  classroom: [
    {
      day: string;
      site: string;
    }
  ];
}

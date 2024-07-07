import { subject } from "../interfaces/subject.interface";
import enrolledSubjectModel from "../models/enrolledSubject.schema";
import subjectModel from "../models/subject.schema";

const insertEnrolledSubject = async (data: subject) => {
  const responseInsert = await enrolledSubjectModel.create(data);
  return responseInsert;
};

const GetEnrolledSubjects = async () => {
  const responseSubject = await enrolledSubjectModel
    .find({})
    .select("-createdAt -updatedAt");
  return responseSubject;
};

const GetEnrolledSubject = async (id: string) => {
  const enrolledSubject = await enrolledSubjectModel.findOne({ _id: id });

  const subject = await subjectModel.findById(enrolledSubject?.subject_id);

  const responseSubject = {
    name: subject?.name,
    academic_year: subject?.academic_year,
    cod: subject?.cod,
    section: enrolledSubject?.section,
    classroom: enrolledSubject?.classroom,
    u_c: subject?.u_c,
  };

  return responseSubject;
};

export { insertEnrolledSubject, GetEnrolledSubject, GetEnrolledSubjects };

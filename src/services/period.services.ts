import { period } from "../interfaces/period.interface";
import periodModel from "../models/period.schema";
import enrolledSubjectModel from "../models/enrolledSubject.schema";

const insertPeriod = async (data: period) => {
  const period = await periodModel.findOne({ period: data.period });

  if (period) return "Exist";

  const responseInsert = await periodModel.create(data);
  return responseInsert;
};

const GetPeriods = async () => {
  const responsePeriod = await periodModel.find({});
  return responsePeriod;
};

const GetPeriod = async (id: string) => {
  const responsePeriod = await periodModel.findOne({ _id: id });
  return responsePeriod;
};

const GetPeriodSubjects = async (id: string) => {
  try {
    const period = await periodModel.findOne({ _id: id });

    if (!period) return "No element";

    const enrolledSubject = period.enrolled_sub;

    const subjectPromises = enrolledSubject.map(async (enrolledSubject) => {
      const subjectId = enrolledSubject.subject;
      const Responsesubject = await enrolledSubjectModel.findById(subjectId);
      return Responsesubject;
    });
    const subjects = await Promise.all(subjectPromises);
    return subjects;
  } catch (error) {
    console.log(error);
  }
};

export { insertPeriod, GetPeriods, GetPeriod, GetPeriodSubjects };

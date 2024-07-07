import yearSubjectModel from "../models/yearSubject.schema";
import { yearSubject } from "../interfaces/yearSubject.interface";

const insertYearSubject = async (data: yearSubject) => {
  const responseInsert = await yearSubjectModel.create(data);
  return responseInsert;
};

const GetYears = async () => {
  const responseYears = await yearSubjectModel.find();
  return responseYears;
};


export { insertYearSubject, GetYears };

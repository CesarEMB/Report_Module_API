import periodListModel from "../models/periodList.schema";
import { periodList } from "../interfaces/periodList.interface";

const insertPeriodList = async (data: periodList) => {
  const responseInsert = await periodListModel.create(data);
  return responseInsert;
};

const GetPeriodsList = async () => {
  const responseYears = await periodListModel.find();
  return responseYears;
};

const GetPeriodList = async(id: string) =>{
    const responseList = await periodListModel.findOne({student_id: id});
    return responseList;
}


export { insertPeriodList, GetPeriodList, GetPeriodsList};
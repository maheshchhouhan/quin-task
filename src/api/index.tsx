import axios from "../axios";
import { ILaunchParam, ILaunch } from "../interfaces/launches";

export const fetchLaunches = async ({
  startDate,
  endDate,
}: ILaunchParam): Promise<ILaunch | any> => {
  const url = `launch/?window_start__gte=${startDate}&window_end__gte=${endDate}`;
  const { data } = await axios.get(url);
  return data?.results;
};

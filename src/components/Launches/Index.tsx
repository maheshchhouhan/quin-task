import { FC, ReactElement, useState } from "react";
import { useQuery } from "react-query";
import { fetchLaunches } from "../../api";
import { ILaunch } from "../../interfaces/launches";
import Loading from "../Common/Loading/Index";
import Error from "../Common/Error/Index";
import Filter from "../Filter/Index";

import Map from "../Map/index";

const fromDate = new Date();
const toDate = new Date(new Date().setDate(fromDate.getDate() + 90));

const Launches: FC = (): ReactElement => {
  const [startDate, setStartDate] = useState(fromDate.toISOString());
  const [endDate, setEndDate] = useState(toDate.toISOString());

  const { data, isLoading, isError } = useQuery<ILaunch[], Error>(
    "launches",
    () => fetchLaunches({ startDate, endDate })
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message="Unable to fetch launches" />;
  }

  return (
    <>
      <div
        data-testid="launches-container"
        className="flex flex-col w-full h-full"
      >
        <Filter fromDate={fromDate} toDate={toDate} />
        <Map launches={data} />
      </div>
    </>
  );
};

export default Launches;

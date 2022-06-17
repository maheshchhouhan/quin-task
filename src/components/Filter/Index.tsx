import { FC, useState } from "react";
import { DateRangePicker } from "react-date-range";

type Props = {
  fromDate: Date;
  toDate: Date;
};

const Filter: FC<Props> = ({ fromDate, toDate }) => {
  const [ranges, setRanges] = useState({
    startDate: fromDate,
    endDate: toDate,
    key: "selection",
  });

  const handleSelect = (ranges: any) => {
    const startDate = ranges?.range1?.selection?.startDate;
    const endDate = ranges?.range1?.selection?.endDate;

    setRanges({
      ...ranges,
      startDate,
      endDate,
    });
  };

  return (
    <>
      <DateRangePicker
        moveRangeOnFirstSelection={false}
        ranges={[ranges]}
        onChange={handleSelect}
      />
    </>
  );
};

export default Filter;

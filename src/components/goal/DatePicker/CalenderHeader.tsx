import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import { monthFormatDate } from '../../../utils/formatDate';

interface Props {
  date: Date;
  decreaseMonth(): void;
  increaseMonth(): void;
}

const CalenderHeader = ({ date, decreaseMonth, increaseMonth }: Props) => {
  const dateToString = monthFormatDate(date);

  return (
    <div className="p-2 flex justify-evenly items-center">
      <button type="button" onClick={decreaseMonth} className="text-3xl text-white">
        <FiChevronsLeft />
      </button>
      <div className=" text-3xl text-white">{dateToString}</div>
      <button type="button" onClick={increaseMonth} className="text-3xl text-white">
        <FiChevronsRight />
      </button>
    </div>
  );
};

export default CalenderHeader;

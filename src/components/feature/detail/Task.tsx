import { useState } from 'react';

import CheckedIcon from '@/assets/icon/CheckedIcon';
import EllipsisVerticalIcon from '@/assets/icon/EllipsisVerticalIcon';
import UnCheckedIcon from '@/assets/icon/UnCheckedIcon';
import { useInput } from '@/hooks/useInput';
import { Typography } from '../../common/typography/Typography';

interface TaskProps {
  initialIsDone?: boolean;
  routineTitle: string;
  routineId: number;
  completedRoutineToday: boolean;
  onDoneClick: VoidFunction;
}

const Task = ({
  routineTitle,
  routineId,
  completedRoutineToday,
  initialIsDone = false,
  onDoneClick,
}: TaskProps) => {
  const [isDone, setIsDone] = useState(initialIsDone);
  const [isEditing, setIsEditing] = useState(false);
  const { value: editText, handleChange: handleEditText } = useInput(routineTitle);
  const isMyGoal = false;
  const CheckIcon = completedRoutineToday ? CheckedIcon : UnCheckedIcon;

  const handleRoutineClick = () => {
    if (completedRoutineToday) return;
    onDoneClick();
  };
  return (
    <div className="w-full flex gap-1 items-start px-4 py-3 rounded-[8px] border-gray-20 bg-white shadow-thumb">
      <button onClick={handleRoutineClick} className="w-[24px] h-[24px]">
        <CheckIcon width={24} height={24} />
      </button>
      <div className="flex w-full justify-between items-center">
        <Typography
          type="body2"
          className={`${completedRoutineToday && 'line-through text-gray-400'}`}
        >
          {routineTitle}
        </Typography>
        <button>
          <EllipsisVerticalIcon width={20} />
        </button>
      </div>
    </div>
  );
};

export default Task;

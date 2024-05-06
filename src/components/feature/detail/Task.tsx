import { useRef, useState } from 'react';

import CheckedIcon from '@/assets/icon/CheckedIcon';
import EllipsisVerticalIcon from '@/assets/icon/EllipsisVerticalIcon';
import Submit from '@/assets/icon/Submit';
import UnCheckedIcon from '@/assets/icon/UnCheckedIcon';
import { Typography } from '@/components/common/typography/Typography';
import { useInput } from '@/hooks/useInput';
import { TaskEditInput } from './TaskEditInput';

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
  const EditInputRef = useRef<HTMLInputElement>(null);
  console.log(isEditing);
  const { value: editText, handleChange: handleEditText } = useInput(routineTitle);
  const CheckIcon = completedRoutineToday ? CheckedIcon : UnCheckedIcon;

  console.log('EditInputRef', EditInputRef);
  const handleRoutineClick = () => {
    if (completedRoutineToday) return;
    onDoneClick();
  };

  const handlePatchRoutineTitle = () => {
    // mutate({ ...targetIds, newDescription: editText });
    setIsEditing(false);
  };
  return (
    <div className="w-full flex gap-1 items-start px-4 py-3 rounded-[8px] border-gray-20 bg-white shadow-thumb">
      <button onClick={handleRoutineClick} className="w-[24px] h-[24px]">
        <CheckIcon width={24} height={24} />
      </button>

      {isEditing ? (
        <>
          <TaskEditInput value={editText} onChange={handleEditText} ref={EditInputRef} />
          <button onClick={handlePatchRoutineTitle}>
            <Submit width={24} color="#BACB91" />
          </button>
        </>
      ) : (
        <div className="flex w-full justify-between items-center">
          <Typography
            type="body2"
            className={`${completedRoutineToday && 'line-through text-gray-400'}`}
          >
            {routineTitle}
          </Typography>
          <button
            onClick={() => {
              //TODO :  라이프 사이클과 관련된 에러, 빠르게 학습해서 해결
              EditInputRef.current?.focus();
              setIsEditing(true);
            }}
          >
            <EllipsisVerticalIcon width={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;

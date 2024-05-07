import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import CheckedIcon from '@/assets/icon/CheckedIcon';
import EllipsisVerticalIcon from '@/assets/icon/EllipsisVerticalIcon';
import Submit from '@/assets/icon/Submit';
import UnCheckedIcon from '@/assets/icon/UnCheckedIcon';
import { Typography } from '@/components/common/typography/Typography';
import { useInput } from '@/hooks/useInput';
import useRoutineTitleMutation from '@/hooks/useRoutineTitleMutation';
import { TaskEditInput } from './TaskEditInput';

interface TaskProps {
  initialIsDone?: boolean;
  routineTitle: string;
  routineId: number;
  completedRoutineToday: boolean;
  onDoneClick: VoidFunction;
}

const Task = ({ routineTitle, routineId, completedRoutineToday, onDoneClick }: TaskProps) => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const EditInputRef = useRef<HTMLInputElement>(null);
  const { updateRoutineTitle } = useRoutineTitleMutation(Number(id));
  const { value: editText, handleChange: handleEditText } = useInput(routineTitle);
  const CheckIcon = completedRoutineToday ? CheckedIcon : UnCheckedIcon;

  const handleRoutineClick = () => {
    if (completedRoutineToday) return;
    onDoneClick();
  };

  const handlePatchRoutineTitle = () => {
    //TODO : 캐시 무효화가 안되는 문제, 동일한 로직 다른 곳에서는 무효화 진행됨
    updateRoutineTitle({ routineId, routineTitle: editText });
    setIsEditing(false);
  };

  // 원래 버튼 onClick에 있었음. -> state 변경으로 인해 ref 인지가 안돼, useEffect 활용
  useEffect(() => {
    if (EditInputRef.current !== null) {
      EditInputRef.current.focus();
    }
  }, [isEditing]);

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
          {!completedRoutineToday && (
            <button onClick={() => setIsEditing(true)}>
              <EllipsisVerticalIcon width={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;

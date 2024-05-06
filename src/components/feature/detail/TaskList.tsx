import { useMutation } from '@tanstack/react-query';

import targetAPI from '@/api/target/apis';
import { RoutineDetailType } from '@/types/target/type';
import Task from './Task';

type TaskListProps = {
  tasks: RoutineDetailType[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  const { mutate } = useMutation({
    mutationFn: targetAPI.patchRoutineDone,
  });

  return (
    <div className="flex-1 w-full flex flex-col gap-4">
      {tasks.map((routine, index) => {
        return <Task key={index} {...routine} onDoneClick={() => mutate(routine.routineId)} />;
      })}
    </div>
  );
};

export default TaskList;

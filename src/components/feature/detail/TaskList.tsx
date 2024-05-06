import { RoutineDetailType } from '@/types/target/type';
import Task from './Task';

type TaskListProps = {
  tasks: RoutineDetailType[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  console.log('tasks', tasks);
  return (
    <div className="flex-1 w-full flex flex-col gap-4">
      {tasks.map((routine, index) => {
        return <Task key={index} {...routine} onDoneClick={() => {}} />;
      })}
    </div>
  );
};

export default TaskList;

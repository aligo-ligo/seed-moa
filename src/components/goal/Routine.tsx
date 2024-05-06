import { useFieldArray, useFormContext } from 'react-hook-form';
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi';

import { ROUTINE_DESCRIPTION, ROUTINE_TITLE } from '../../constants/target';
import Validation from '../auth/Validation';
import Button from '../common/button/Button';
import { Typography } from '../common/typography/Typography';
import TargetCreateLayout from '../layout/TargetCreateLayout';

type RoutineProps = {
  toNext: () => void;
};

const Routine = ({ toNext }: RoutineProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const {
    fields: routines,
    append: routineAppend,
    remove: routineRemove,
  } = useFieldArray({
    name: 'routines',
  });

  const routineWatch = watch('routines');
  const minRoutineCount = routineWatch.length === 1;
  const maxRoutineCount = routineWatch.length < 3;

  return (
    <TargetCreateLayout title={ROUTINE_TITLE} description={ROUTINE_DESCRIPTION}>
      <div className="flex items-center justify-between">
        <Typography type="heading3">매일 지킬 루틴 (최대 3개)</Typography>
        {maxRoutineCount && (
          <button
            className="text-2xl text-mainDeep pl-4"
            type="button"
            onClick={() => {
              routineAppend({});
            }}
          >
            <FiPlusSquare />
          </button>
        )}
      </div>

      {routines.map((routine, index) => (
        <div className="flex items-center justify-center mt-5" key={routine.id}>
          <input
            type="text"
            className="placeholder:text-s placeholder:text-gray-100 w-full h-10 outline-none text-white border-b-2 border-primary-300 bg-transparent"
            placeholder="루틴을 작성해보세요"
            {...register(`routines.${index}.value` as const)}
          />

          {!minRoutineCount && (
            <button
              className="text-2xl text-mainDeep"
              type="button"
              onClick={() => routineRemove(index)}
            >
              <FiMinusSquare />
            </button>
          )}
        </div>
      ))}
      <div className="text-center">
        <Validation>{!!errors?.routines && '루틴을 작성해주세요'}</Validation>
      </div>

      <div className="absolute bottom-5 text-xl w-full bg-slate-50 text-white rounded-xl">
        <Button
          className=" w-full h-16 hover:bg-gray-800 duration-300"
          color="gray-1000"
          onClick={toNext}
        >
          다음
        </Button>
      </div>
    </TargetCreateLayout>
  );
};

export default Routine;

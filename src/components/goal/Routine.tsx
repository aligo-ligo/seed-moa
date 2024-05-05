import { useFieldArray, useFormContext } from "react-hook-form";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { ROUTINE_DESCRIPTION, ROUTINE_TITLE } from "../../constants/target";
import Validation from "../auth/Validation";
import Button from "../common/button/Button";
import TargetCreateLayout from "../layout/TargetCreateLayout";

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
    name: "routines",
  });

  const routineWatch = watch("routines");
  const minRoutine = routineWatch.length === 1;

  return (
    <TargetCreateLayout title={ROUTINE_TITLE} description={ROUTINE_DESCRIPTION}>
      <section className="mb-10">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold mb-2">루틴</h2>
          <button
            className="text-2xl text-mainDeep pl-4"
            type="button"
            onClick={() => {
              routineAppend({});
            }}
          >
            <FiPlusSquare />
          </button>
        </div>
        <h2 className="font-normal mb-1 text-gray">
          목표를 달성하기 위해 매일 해야하는 것들을 정리해보세요
        </h2>

        {routines.map((field, index) => (
          <div className="flex items-center justify-center mt-5" key={field.id}>
            <span className="font-semibold text-xl pr-4">{index + 1}</span>
            <input
              type="text"
              defaultValue={""}
              className="placeholder:text-s w-full h-10 outline-none text-emerald-800  border-b-2 border-main"
              placeholder="루틴을 작성해보세요"
              {...register(`routines.${index}.value` as const)}
            />

            {!minRoutine && (
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
          <Validation>{!!errors?.routines && "루틴을 작성해주세요"}</Validation>
        </div>
      </section>

      <div className="absolute bottom-5 w-full">
        <Button onClick={toNext}>다음</Button>
      </div>
    </TargetCreateLayout>
  );
};

export default Routine;

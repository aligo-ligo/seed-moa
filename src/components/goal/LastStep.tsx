import { LAST_DESCRIPTION, LAST_TITLE } from "../../constant/target";
import { useGetFormData } from "../../hooks/useGetFormData";
import { TargetCreateProps } from "../../types/TargetTypes";
import { formatDate, getDayFromDiff, getNowDate } from "../../utils/formatDate";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import TargetStepButton from "../logic/TargetStepButton";

const LastStep = ({ setStep }: TargetCreateProps) => {
  const { getGoal, getSubGoal, getRoutine, getEndDate } = useGetFormData();

  return (
    <TargetCreateLayout title={LAST_TITLE} description={LAST_DESCRIPTION}>
      <section className="border-2 border-main py-8 px-6 rounded-xl">
        <div className="flex justify-center mb-10">
          <h1 className="text-2xl font-bold inline-block">Goal Token</h1>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">목표</h2>
          <p>{getGoal}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">세분화된 목표</h2>
          {getSubGoal.map((subgoal, index) => {
            return <div key={index}>{subgoal.value}</div>;
          })}
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">루틴</h2>
          {getRoutine.map((subgoal, index) => {
            return <div key={index}>{subgoal.value}</div>;
          })}
        </div>
        <div className="mb-4 ">
          <h2 className="text-xl font-semibold mb-2">기간</h2>
          <div className="flex-col desktop:flex-row flex gap-2">
            <p>{`${getNowDate()} ~ ${formatDate(getEndDate)} `}</p>
            <p className="font-semibold">{`(${getDayFromDiff(
              getNowDate(),
              formatDate(getEndDate)
            )}일)`}</p>
          </div>
        </div>
      </section>
      <div className="flex gap-4">
        <TargetStepButton
          prev="duration"
          present={["lastStep"]}
          next="lastStep"
          setStep={setStep}
        >
          이전
        </TargetStepButton>
        <TargetStepButton
          type="submit"
          present={["lastStep"]}
          next="done"
          setStep={setStep}
        >
          완료
        </TargetStepButton>
      </div>
    </TargetCreateLayout>
  );
};

export default LastStep;

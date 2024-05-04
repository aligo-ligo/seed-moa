import { useNavigate } from "react-router-dom";
import { GOAL_DESCRIPTION, GOAL_TITLE } from "../../constants/target";
import Validation from "../auth/Validation";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import TargetStepButton from "../logic/TargetStepButton";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type GoalProps = {
  toNext: () => void;
};

const Goal = ({ toNext }: GoalProps) => {
  const navigate = useNavigate();
  const {
    register,
    setFocus,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setFocus("goal");
  }, [setFocus]);

  return (
    <TargetCreateLayout title={GOAL_TITLE} description={GOAL_DESCRIPTION}>
      <input
        type="text"
        className="placeholder:text-s placeholder:text-gray-100 w-full h-10 outline-none text-white border-b-2 border-primary-300 bg-transparent"
        placeholder="씨앗(목표)를 작성해주세요"
        {...register("goal")}
      />
      <Validation>{errors?.goal?.message?.toString()}</Validation>

      <div className="absolute bottom-5 w-full">
        <TargetStepButton present={["goal"]} next="subGoal" setStep={toNext}>
          다음
        </TargetStepButton>
      </div>
    </TargetCreateLayout>
  );
};

export default Goal;

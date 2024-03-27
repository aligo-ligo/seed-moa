import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from "react-hook-form";
import { TargetCreateProps } from "../../types/TargetTypes";
import Validation from "../auth/Validation";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import TargetStepButton from "../logic/TargetStepButton";
import "./DatePicker/css/react-datepicker.css";
import DatePickerComponent from "./DatePicker/DatePickerComponent";

import {
  DURATION_DESCRIPTION,
  DURATION_TITLE,
} from "../../utils/constant/target";

const Duration = ({ setStep }: TargetCreateProps) => {
  const {
    getValues,
    formState: { errors },
  } = useFormContext();

  const endDate = getValues("endDate");

  return (
    <TargetCreateLayout
      title={DURATION_TITLE}
      description={DURATION_DESCRIPTION}
    >
      <DatePickerComponent name={endDate} />
      <Validation>{errors?.endDate?.message?.toString()}</Validation>
      <div className="flex gap-4">
        <TargetStepButton
          prev="subGoal"
          present={["endDate"]}
          next="lastStep"
          setStep={setStep}
        >
          이전
        </TargetStepButton>

        <TargetStepButton
          present={["endDate"]}
          next="lastStep"
          setStep={setStep}
        >
          다음
        </TargetStepButton>
      </div>
    </TargetCreateLayout>
  );
};

export default Duration;

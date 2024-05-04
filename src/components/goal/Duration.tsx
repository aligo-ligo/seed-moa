import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from "react-hook-form";
import Validation from "../auth/Validation";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import TargetStepButton from "../logic/TargetStepButton";
import "./DatePicker/css/react-datepicker.css";
import DatePickerComponent from "./DatePicker/DatePickerComponent";

import { DURATION_DESCRIPTION, DURATION_TITLE } from "../../constants/target";

type DurationProps = {
  toNext: () => void;
};

const Duration = ({ toNext }: DurationProps) => {
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
      <div className="absolute bottom-5 w-full">
        <TargetStepButton
          present={["endDate"]}
          next="duration"
          setStep={toNext}
        >
          제출하기
        </TargetStepButton>
      </div>
    </TargetCreateLayout>
  );
};

export default Duration;

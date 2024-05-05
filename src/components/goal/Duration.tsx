import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from "react-hook-form";
import Validation from "../auth/Validation";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import "./DatePicker/css/react-datepicker.css";
import DatePickerComponent from "./DatePicker/DatePickerComponent";

import { DURATION_DESCRIPTION, DURATION_TITLE } from "../../constants/target";
import Button from "../common/button/Button";

const Duration = () => {
  const {
    getValues,
    formState: { errors },
  } = useFormContext();
  console.log("errors", errors);

  const endDate = getValues("endDate");

  return (
    <TargetCreateLayout
      title={DURATION_TITLE}
      description={DURATION_DESCRIPTION}
    >
      <DatePickerComponent name={endDate} />
      <Validation>{errors?.endDate?.message?.toString()}</Validation>

      <div className="absolute bottom-5 text-xl w-full bg-slate-50 text-white rounded-xl">
        <Button
          className=" w-full h-16 hover:bg-gray-800 duration-300"
          color="gray-1000"
          type="submit"
        >
          제출하기
        </Button>
      </div>
    </TargetCreateLayout>
  );
};

export default Duration;

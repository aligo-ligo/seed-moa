import { useFormContext } from "react-hook-form";
import { TargetStepType } from "../../types/TargetTypes";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import DatePickerComponent from "./DatePicker/DatePickerComponent";
import Validation from "../auth/Validation";
import TargetStepButton from "../logic/TargetStepButton";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker/css/react-datepicker.css";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const Duration = ({ setStep }: Props) => {
	const {
		getValues,
		formState: { errors },
	} = useFormContext();

	const endDate = getValues("endDate");

	return (
		<TargetCreateLayout title="언제까지 목표를 달성하실껀가요?">
			<DatePickerComponent name={endDate} />
			<Validation>{errors?.endDate?.message?.toString()}</Validation>
			<div className="flex gap-4">
				<TargetStepButton
					prev="subGoal"
					present={["endDate"]}
					next="penalty"
					setStep={setStep}
				>
					이전
				</TargetStepButton>

				<TargetStepButton
					present={["endDate"]}
					next="penalty"
					setStep={setStep}
				>
					다음
				</TargetStepButton>
			</div>
		</TargetCreateLayout>
	);
};

export default Duration;

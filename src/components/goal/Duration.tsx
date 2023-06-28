import { useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TargetStepType } from "../../types/TargetType";
import Validation from "../auth/Validation";

import DatePickerContainer from "./DatePicker/DatePickerContainer";
import { useEffect } from "react";
import TargetStepButton from "../logic/TargetStepButton";
import { createDate, getDayName } from "../../utils/formatDate";
import "./DatePicker/css/react-datepicker.css";
import DatePickerComponent from "./DatePicker/DatePickerComponent";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const Duration = ({ setStep }: Props) => {
	const {
		setValue,
		getValues,
		formState: { errors },
	} = useFormContext();

	const endDate = getValues("endDate");
	console.log(endDate);

	useEffect(() => {
		setValue("endDate", localStorage.getItem("endDate"));
	}, [setValue]);

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
					이전으로 가기
				</TargetStepButton>

				<TargetStepButton
					present={["endDate"]}
					next="penalty"
					setStep={setStep}
				>
					다음으로 가기
				</TargetStepButton>
			</div>
		</TargetCreateLayout>
	);
};

export default Duration;

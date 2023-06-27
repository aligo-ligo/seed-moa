import { useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TargetStepType } from "../../types/TargetType";
import Validation from "../auth/Validation";

import DatePickerContainer from "./DatePickerContainer";
import { useEffect } from "react";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const Duration = ({ setStep }: Props) => {
	const {
		register,
		setValue,
		trigger,
		getValues,
		formState: { errors },
	} = useFormContext();

	const endDate = getValues("endDate");

	useEffect(() => {
		setValue("endDate", localStorage.getItem("endDate"));
	}, [setValue]);

	return (
		<TargetCreateLayout title="언제까지 목표를 달성하실껀가요?">
			<DatePicker
				dateFormat="yyyy-MM-dd"
				className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
				{...register("endDate")}
				selected={endDate}
				onChange={(date) => setValue("endDate", date, { shouldValidate: true })}
				placeholderText="날짜를 선택해주세요"
				isClearable
				withPortal
				minDate={new Date()}
				calendarContainer={DatePickerContainer}
				// calendarClassName="bg-mainHover"
			/>
			<Validation>{errors?.endDate?.message?.toString()}</Validation>
			<div className="flex gap-4">
				<button
					className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
					type="button"
					onClick={() => {
						setStep("subGoal");
					}}
				>
					이전
				</button>
				<button
					className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
					onClick={async () => {
						const validate = await trigger(["endDate"]);

						if (!validate) {
							console.log("endDate", errors);
						} else {
							setStep("penalty");
						}
					}}
					type="button"
				>
					다음으로 가기
				</button>
			</div>
		</TargetCreateLayout>
	);
};

export default Duration;

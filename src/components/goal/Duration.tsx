import { useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const Duration = ({ setStep }: Props) => {
	const [startDate, setStartDate] = useState<Date | null>(null);
	console.log("start", startDate);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useFormContext();
	return (
		<TargetCreateLayout title="언제까지 목표를 달성하실껀가요?">
			<input
				type="text"
				className=" sr-only placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
				placeholder="목표를 작성해주세요"
			/>
			<DatePicker
				className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
				{...register("duration")}
				selected={startDate}
				onChange={(date) => setStartDate(date)}
			/>

			<button
				className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
				onClick={() => {
					setStep("lastStep");
				}}
				type="button"
			>
				다음으로 가기
			</button>
		</TargetCreateLayout>
	);
};

export default Duration;

import { useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";

type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const SubGoalRoutine = ({ setStep }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useFormContext();

	return (
		<TargetCreateLayout title="목표를 달성하기 위한 세분화 목표와 루틴을 작성해주세요">
			<input
				type="text"
				className="placeholder:text-s w-full h-10 outline-none text-emerald-800 mt-40 border-b-2 border-main"
				placeholder="목표를 작성해주세요"
			/>

			<button
				className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
				onClick={() => {
					setStep("duration");
				}}
				type="button"
			>
				다음으로 가기
			</button>
		</TargetCreateLayout>
	);
};

export default SubGoalRoutine;

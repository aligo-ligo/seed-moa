import { useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import { TargetStepType } from "../../types/TargetType";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const Goal = ({ setStep }: Props) => {
	console.log("ss", setStep);
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<TargetCreateLayout title="이루고자 하는 목표를 적어주세요">
			<input
				type="text"
				className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
				placeholder="목표를 작성해주세요"
				{...register("goal")}
			/>

			<button
				className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
				onClick={() => {
					setStep("subGoal");
				}}
				type="button"
			>
				다음으로 가기
			</button>
		</TargetCreateLayout>
	);
};

export default Goal;

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Validation from "../auth/Validation";
import TargetStepButton from "../logic/TargetStepButton";
import { TargetStepType } from "../../types/TargetTypes";
import TargetCreateLayout from "../layout/TargetCreateLayout";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const Goal = ({ setStep }: Props) => {
	const {
		register,
		getValues,
		setValue,
		formState: { errors },
	} = useFormContext();

	const getGoal: string = getValues("goal");
	console.log("getData", getGoal);

	useEffect(() => {
		setValue("goal", localStorage.getItem("goal"));
	}, [setValue]);

	return (
		<TargetCreateLayout title="이루고자 하는 목표를 적어주세요">
			<input
				type="text"
				className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
				placeholder="목표를 작성해주세요"
				{...register("goal")}
			/>
			<Validation>{errors?.goal?.message?.toString()}</Validation>
			<TargetStepButton present={["goal"]} next="subGoal" setStep={setStep}>
				다음
			</TargetStepButton>
		</TargetCreateLayout>
	);
};

export default Goal;

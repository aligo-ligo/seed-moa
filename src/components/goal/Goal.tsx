import { useFormContext } from "react-hook-form";
import Validation from "../auth/Validation";
import TargetStepButton from "../logic/TargetStepButton";
import { TargetStepType } from "../../types/TargetTypes";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { GOAL_DESCRIPTION, GOAL_TITLE } from "../../utils/constant/contants";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const Goal = ({ setStep }: Props) => {
	const {
		register,
		getValues,
		formState: { errors },
	} = useFormContext();
	const navigate = useNavigate();

	const getGoal: string = getValues("goal");
	console.log("getData", getGoal);

	return (
		<TargetCreateLayout title={GOAL_TITLE} description={GOAL_DESCRIPTION}>
			<div
				className="absolute left-0 top-0 text-main text-base my-10 mx-6 flex items-center gap-1 cursor-pointer"
				onClick={() => {
					navigate("/target");
				}}
			>
				메인페이지로
				<FiArrowLeft />
			</div>
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

import { useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import Validation from "../auth/Validation";
import { useBeforeUnload } from "react-router-dom";
import { useCallback } from "react";
import TargetStepButton from "../logic/TargetStepButton";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const Penalty = ({ setStep }: Props) => {
	console.log("ss", setStep);
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<TargetCreateLayout title="실패를 예상하신 분들에게 어떤 보상을 하실껀가요?">
			<input
				type="text"
				className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
				placeholder="벌칙을 작성해주세요"
				{...register("penalty")}
			/>
			<Validation>{errors?.penalty?.message?.toString()}</Validation>
			{/* 
			<button
				className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
				onClick={() => {
					setStep("lastStep");
				}}
				type="button"
			>
				다음으로 가기
			</button> */}
			<div className="flex gap-4">
				<TargetStepButton
					prev="duration"
					present={["penalty"]}
					next="lastStep"
					setStep={setStep}
				>
					이전으로 가기
				</TargetStepButton>

				<TargetStepButton
					present={["penalty"]}
					next="lastStep"
					setStep={setStep}
				>
					다음으로 가기
				</TargetStepButton>
			</div>
		</TargetCreateLayout>
	);
};

export default Penalty;

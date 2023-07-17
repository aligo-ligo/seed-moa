// import { useFormContext } from "react-hook-form";
// import TargetCreateLayout from "../layout/TargetCreateLayout";
// import Validation from "../auth/Validation";
// import TargetStepButton from "../logic/TargetStepButton";
// import { TargetStepType } from "../../types/TargetTypes";
// import { PENALTY_TITLE } from "../../utils/constant/contants";

// type Props = {
// 	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
// };

// const Penalty = ({ setStep }: Props) => {
// 	const {
// 		register,
// 		formState: { errors },
// 	} = useFormContext();

// 	return (
// 		<TargetCreateLayout title={PENALTY_TITLE}>
// 			<input
// 				type="text"
// 				className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
// 				placeholder="마음 가짐을 작성해주세요"
// 				{...register("penalty")}
// 			/>
// 			<Validation>{errors?.penalty?.message?.toString()}</Validation>

// 			<div className="flex gap-4">
// 				<TargetStepButton
// 					prev="duration"
// 					present={["penalty"]}
// 					next="lastStep"
// 					setStep={setStep}
// 				>
// 					이전
// 				</TargetStepButton>

// 				<TargetStepButton
// 					present={["penalty"]}
// 					next="lastStep"
// 					setStep={setStep}
// 				>
// 					다음
// 				</TargetStepButton>
// 			</div>
// 		</TargetCreateLayout>
// 	);
// };

// export default Penalty;

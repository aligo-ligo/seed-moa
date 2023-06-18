import { useFieldArray, useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";

type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const SubGoalRoutine = ({ setStep }: Props) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const {
		fields: subGoal,
		append: subGoalAppend,
		remove: subGoalRemove,
	} = useFieldArray({
		name: "subGoal", // unique name for your Field Array
	});

	const {
		fields: routine,
		append: routineAppend,
		remove: removeRemove,
	} = useFieldArray({
		// shouldUnregister: true, 컴포넌트가 사라지면 unRegister이 되도록 !
		name: "routine", // unique name for your Field Array
	});

	return (
		<TargetCreateLayout title="목표를 달성하기 위한 세분화 목표와 루틴을 작성해주세요">
			{subGoal.map((field, index) => (
				<>
					<input
						key={field.id} // important to include key with field's id
						type="text"
						className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
						placeholder="목표를 작성해주세요"
						{...register(`subGoal.${index}.value` as const)}
					/>
					<button type="button" onClick={() => subGoalRemove(index)}>
						Delete
					</button>
				</>
			))}
			<button
				className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
				onClick={() => {
					subGoalAppend({ subGoal: "subGoal" });
				}}
				type="button"
			>
				인풋 추가
			</button>
			<button
				className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
				onClick={() => {
					subGoalRemove(0);
				}}
				type="button"
			>
				인풋 삭제
			</button>

			{routine.map((field, index) => (
				<input
					key={field.id} // important to include key with field's id
					type="text"
					className="placeholder:text-s w-full h-10 outline-none text-emerald-800  border-b-2 border-main"
					placeholder="루틴을 작성해주세요"
					{...register(`routine.${index}.value` as const)}
				/>
			))}
			<button
				className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
				onClick={() => {
					routineAppend({ subGoal: "subGoal" });
				}}
				type="button"
			>
				인풋 추가
			</button>
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

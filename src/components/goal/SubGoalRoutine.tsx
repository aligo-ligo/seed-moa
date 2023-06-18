import { useFieldArray, useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const SubGoalRoutine = ({ setStep }: Props) => {
	const {
		register,
		watch,
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
		remove: routineRemove,
	} = useFieldArray({
		// shouldUnregister: true, 컴포넌트가 사라지면 unRegister이 되도록 !
		name: "routine", // unique name for your Field Array
	});

	const subgoalWatch = watch("subGoal");
	const routineWatch = watch("routine");
	const minGoal = subgoalWatch.length < 4;
	const minRoutine = routineWatch.length === 1;
	console.log(minGoal);

	console.log(subgoalWatch);
	return (
		<TargetCreateLayout title="목표를 달성하기 위한 세분화 목표와 루틴을 작성해주세요">
			<section className="mb-10">
				<h2 className="text-lg font-bold mb-2">세분화 목표</h2>
				<h2 className="font-normal mb-1 text-gray">
					최소 3개 ~ 최대 10개까지 생성 가능
				</h2>
				{subGoal.map((field, index) => (
					<>
						<div className="flex items-center justify-center">
							<input
								key={field.id} // important to include key with field's id
								type="text"
								className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
								placeholder="목표를 작성해주세요"
								{...register(`subGoal.${index}.value` as const)}
							/>
							<button
								className="text-2xl text-mainDeep"
								type="button"
								onClick={() => {
									subGoalAppend({ subGoal: "subGoal" });
								}}
							>
								<FiPlusSquare />
							</button>
							{!minGoal && (
								<button
									className="text-2xl text-mainDeep"
									type="button"
									onClick={() => subGoalRemove(index)}
								>
									<FiMinusSquare />
								</button>
							)}
						</div>
					</>
				))}
			</section>
			<section className="mb-10">
				<h2 className="text-lg font-bold mb-2">루틴</h2>
				<h2 className="font-normal mb-1 text-gray">
					최소 1개 ~ 최대 10개생성 가능
				</h2>
				{routine.map((field, index) => (
					<>
						<div className="flex items-center justify-center">
							<input
								key={field.id} // important to include key with field's id
								type="text"
								className="placeholder:text-s w-full h-10 outline-none text-emerald-800  border-b-2 border-main"
								placeholder="루틴을 작성해주세요"
								{...register(`routine.${index}.value` as const)}
							/>
							<button
								className="text-2xl text-mainDeep"
								type="button"
								onClick={() => {
									routineAppend({ subGoal: "subGoal" });
								}}
							>
								<FiPlusSquare />
							</button>
							{!minRoutine && (
								<button
									className="text-2xl text-mainDeep"
									type="button"
									onClick={() => routineRemove(index)}
								>
									<FiMinusSquare />
								</button>
							)}
						</div>
					</>
				))}
			</section>

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

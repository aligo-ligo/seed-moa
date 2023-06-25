import { useFieldArray, useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { TargetStepType } from "../../types/TargetType";
type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const SubGoalRoutine = ({ setStep }: Props) => {
	const {
		register,
		watch,
		trigger,
		formState: { errors },
	} = useFormContext();
	console.log("SRErrors", errors);

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

	return (
		<TargetCreateLayout title="목표를 달성하기 위한 세분화 목표와 루틴을 작성해주세요">
			<section className="mb-10">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold mb-2">세분화 목표</h2>
					<button
						className="text-2xl text-mainDeep pl-4"
						type="button"
						onClick={() => {
							subGoalAppend({ name: "subGoal" });
						}}
					>
						<FiPlusSquare />
					</button>
				</div>
				<h2 className="font-normal mb-1 text-gray">
					최소 3개 ~ 최대 10개까지 생성 가능
				</h2>

				{subGoal.map((field, index) => (
					<>
						<div className="flex items-center justify-center mt-5">
							<span className="font-semibold text-xl pr-4">{index + 1}</span>
							<input
								key={field.id} // important to include key with field's id
								type="text"
								className="placeholder:text-s w-full h-8 outline-none text-emerald-800 border-b-2 border-main "
								placeholder="목표를 작성해주세요"
								{...register(`subGoal.${index}.value` as const)}
							/>

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
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold mb-2">루틴</h2>
					<button
						className="text-2xl text-mainDeep pl-4"
						type="button"
						onClick={() => {
							routineAppend({ name: "routine" });
						}}
					>
						<FiPlusSquare />
					</button>
				</div>
				<h2 className="font-normal mb-1 text-gray">
					최소 1개 ~ 최대 10개생성 가능
				</h2>

				{routine.map((field, index) => (
					<>
						<div className="flex items-center justify-center mt-5">
							<span className="font-semibold text-xl pr-4">{index + 1}</span>
							<input
								key={field.id} // important to include key with field's id
								type="text"
								className="placeholder:text-s w-full h-10 outline-none text-emerald-800  border-b-2 border-main"
								placeholder="루틴을 작성해주세요"
								{...register(`routine.${index}.value` as const)}
							/>

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

			{/* <button
				className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
				onClick={async () => {
					const validate = await trigger(["subGoal", "routine"]);

					if (!validate) {
						console.log("resSub", errors);
					} else {
						setStep("duration");
					}
				}}
				type="button"
			>
				다음으로 가기
			</button> */}
			<div className="flex gap-4">
				<button
					className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
					type="button"
					onClick={() => {
						setStep("goal");
					}}
				>
					이전
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
			</div>
		</TargetCreateLayout>
	);
};

export default SubGoalRoutine;

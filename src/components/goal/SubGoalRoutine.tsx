import { useFieldArray, useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { TargetCreateProps } from "../../types/TargetTypes";
import {
	SUBGOAL_DESCRIPTION,
	SUBGOAL_TITLE,
} from "../../utils/constant/target";
import TargetStepButton from "../logic/TargetStepButton";
import Validation from "../auth/Validation";
import BlackBoard from "../common/BlackBoard";

const SubGoalRoutine = ({ setStep }: TargetCreateProps) => {
	const {
		register,
		getValues,
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

	const getGoal: string = getValues("goal");

	const subgoalWatch = watch("subGoal");
	const routineWatch = watch("routine");
	const minGoal = subgoalWatch.length === 1;
	const minRoutine = routineWatch.length === 1;

	return (
		<TargetCreateLayout title={SUBGOAL_TITLE} description={SUBGOAL_DESCRIPTION}>
			<section className="mb-10">
				<BlackBoard>
					<h2 className="text-lg font-bold mb-2">이전 페이지에 작성한 목표</h2>
					<p>{getGoal}</p>
				</BlackBoard>

				<div className="flex items-center justify-between mt-10">
					<h2 className="text-lg font-bold mb-2">세분화 목표</h2>
					<button
						className="text-2xl text-mainDeep pl-4"
						type="button"
						onClick={() => {
							subGoalAppend({});
						}}
					>
						<FiPlusSquare />
					</button>
				</div>
				<h2 className="font-normal mb-1 text-gray ">
					목표를 달성하기 전 체크 포인트를 설정해주시면 돼요
					<p>(2개 이상 만드는 것을 추천드려요)</p>
				</h2>
				{subGoal.map((field, index) => (
					<div className="flex items-center justify-center mt-5" key={field.id}>
						<span className="font-semibold text-xl pr-4">{index + 1}</span>
						<input
							id={field.id}
							defaultValue={""}
							type="text"
							className="placeholder:text-s w-full h-8 outline-none text-emerald-800 border-b-2 border-main "
							placeholder="세분화 목표를 작성해보세요"
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
				))}
				<div className="text-center">
					<Validation>
						{!!errors?.subGoal && "세부 목표를 작성해주세요"}
					</Validation>
				</div>
			</section>
			<section className="mb-10">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold mb-2">루틴</h2>
					<button
						className="text-2xl text-mainDeep pl-4"
						type="button"
						onClick={() => {
							routineAppend({});
						}}
					>
						<FiPlusSquare />
					</button>
				</div>
				<h2 className="font-normal mb-1 text-gray">
					목표를 달성하기 위해 매일 해야하는 것들을 정리해보세요
				</h2>

				{routine.map((field, index) => (
					<div className="flex items-center justify-center mt-5" key={field.id}>
						<span className="font-semibold text-xl pr-4">{index + 1}</span>
						<input
							type="text"
							defaultValue={""}
							className="placeholder:text-s w-full h-10 outline-none text-emerald-800  border-b-2 border-main"
							placeholder="루틴을 작성해보세요"
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
				))}
				<div className="text-center">
					<Validation>{!!errors?.routine && "루틴을 작성해주세요"}</Validation>
				</div>
			</section>
			<div className="flex gap-4">
				<TargetStepButton
					prev="goal"
					present={["subGoal"]}
					next="duration"
					setStep={setStep}
				>
					이전
				</TargetStepButton>

				<TargetStepButton
					present={["subGoal", "routine"]}
					next="duration"
					setStep={setStep}
				>
					다음
				</TargetStepButton>
			</div>

			{/* <Validation>{errors?.root?.message}</Validation> */}
		</TargetCreateLayout>
	);
};

export default SubGoalRoutine;

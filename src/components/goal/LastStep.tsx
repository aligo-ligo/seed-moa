import TargetCreateLayout from "../layout/TargetCreateLayout";
import { useGetFormData } from "../../hooks/useGetFormData";
import { TargetStepType } from "../../types/TargetType";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const LastStep = ({ setStep }: Props) => {
	const { getGoal, getSubGoal, getRoutine, endDate } = useGetFormData();

	console.log("goal", getGoal);
	console.log("sub", getSubGoal);
	console.log("routine", getRoutine);
	console.log("endDate", endDate);

	return (
		<TargetCreateLayout title="수정하실껀가요? ">
			<section>
				<div>
					<h2 className="text-xl font-bold mb-2">목표</h2>
					<p>{getGoal}</p>
				</div>
				<div>
					<h2 className="text-xl font-bold mb-2">세분화된 목표</h2>
					{/* {getSubGoal.map((subGoal, index) => (
						<div key={index}>{subGoal}</div>
					))} */}
				</div>
				<div>
					<h2 className="text-xl font-bold mb-2">루틴</h2>
				</div>
				<div>
					<h2 className="text-xl font-bold mb-2">기간</h2>
				</div>
			</section>
			<div className="flex gap-4">
				<button
					className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
					type="button"
					onClick={() => {
						setStep("penalty");
					}}
				>
					이전
				</button>
				<button
					className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
					type="submit"
				>
					다음으로 가기
				</button>
			</div>
		</TargetCreateLayout>
	);
};

export default LastStep;

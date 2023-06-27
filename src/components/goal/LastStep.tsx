import TargetCreateLayout from "../layout/TargetCreateLayout";
import { useGetFormData } from "../../hooks/useGetFormData";
import { TargetStepType } from "../../types/TargetType";
import TargetStepButton from "../logic/TargetStepButton";

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
				<TargetStepButton
					prev="penalty"
					present={["lastStep"]}
					next="lastStep"
					setStep={setStep}
				>
					이전
				</TargetStepButton>
				<TargetStepButton
					type="submit"
					present={["lastStep"]}
					next="done"
					setStep={setStep}
				>
					완료
				</TargetStepButton>
			</div>
		</TargetCreateLayout>
	);
};

export default LastStep;

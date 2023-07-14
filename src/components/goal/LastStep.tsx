import { useGetFormData } from "../../hooks/useGetFormData";
import TargetStepButton from "../logic/TargetStepButton";
import { TargetStepType } from "../../types/TargetTypes";
import { formatDate, getNowDate } from "../../utils/formatDate";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import { LAST_DESCRIPTION, LAST_TITLE } from "../../utils/constant/contants";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const LastStep = ({ setStep }: Props) => {
	const { getGoal, getSubGoal, getRoutine, getEndDate, getPenalty } =
		useGetFormData();

	console.log("goal", getGoal);
	console.log("sub", getSubGoal);
	console.log("routine", getRoutine);
	console.log("endDate", formatDate(getEndDate));

	return (
		<TargetCreateLayout title={LAST_TITLE} description={LAST_DESCRIPTION}>
			<section className="border-2 border-main p-10 rounded-xl">
				<div className="flex justify-center mb-10">
					<h1 className="text-2xl font-bold inline-block">달성한 목표 정보</h1>
				</div>
				<div className="mb-4">
					<h2 className="text-xl font-semibold mb-2">목표</h2>
					<p>{getGoal}</p>
				</div>
				<div className="mb-4">
					<h2 className="text-xl font-semibold mb-2">세분화된 목표</h2>
					{getSubGoal.map((subgoal, index) => {
						return <div key={index}>{subgoal.value}</div>;
					})}
				</div>
				<div className="mb-4">
					<h2 className="text-xl font-semibold mb-2">루틴</h2>
					{getRoutine.map((subgoal, index) => {
						return <div key={index}>{subgoal.value}</div>;
					})}
				</div>
				<div className="mb-4">
					<h2 className="text-xl font-semibold mb-2">기간</h2>
					{`${getNowDate()} ~ ${formatDate(getEndDate)} 총 (number)일`}
				</div>
			</section>
			<div className="flex gap-4">
				<TargetStepButton
					prev="duration"
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

import { useGetFormData } from "../../hooks/useGetFormData";
import TargetStepButton from "../logic/TargetStepButton";
import { TargetStepType } from "../../types/TargetTypes";
import { formatDate, getNowDate } from "../../utils/formatDate";

type Props = {
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const LastStep = ({ setStep }: Props) => {
	const { getGoal, getSubGoal, getRoutine, endDate } = useGetFormData();

	console.log("goal", getGoal);
	console.log("sub", getSubGoal);
	console.log("routine", getRoutine);
	console.log("endDate", formatDate(endDate));

	return (
		<>
			<section className="border-2 border-main p-10 rounded-xl mt-28">
				<div className="flex justify-center mb-10">
					<h1 className="text-2xl font-bold inline-block">타켓 정보</h1>
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
					{`${getNowDate()} ~ ${formatDate(endDate)} 총 (number)일`}
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
		</>
	);
};

export default LastStep;

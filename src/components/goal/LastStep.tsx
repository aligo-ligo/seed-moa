import { useGetFormData } from "../../hooks/useGetFormData";
import TargetStepButton from "../logic/TargetStepButton";
import { TargetCreateProps } from "../../types/TargetTypes";
import { formatDate, getDayFromDiff, getNowDate } from "../../utils/formatDate";
import TargetCreateLayout from "../layout/TargetCreateLayout";
import { LAST_DESCRIPTION, LAST_TITLE } from "../../utils/constant/target";
import BlackBoard from "../common/BlackBoard";

const LastStep = ({ setStep }: TargetCreateProps) => {
	const { getGoal, getSubGoal, getRoutine, getEndDate } = useGetFormData();

	console.log("goal", getGoal);
	console.log("sub", getSubGoal);
	console.log("routine", getRoutine);
	console.log("endDate", formatDate(getEndDate));

	return (
		<TargetCreateLayout title={LAST_TITLE} description={LAST_DESCRIPTION}>
			<BlackBoard>
				<div className="py-8 px-20 w-full">
					<div className="py-2 border-2 bg-gradient-to-r from-main bg-[#0a310a]">
						<p className="text-2xl font-bold text-center">{getGoal}</p>
					</div>
					<h2 className="text-xl font-medium mt-10 text-center">하위 목표 </h2>
					<div className="flex flex-col items-start justify-start w-full">
						{getSubGoal.map((subgoal, index) => {
							return (
								<div key={index} className="py-1 font-semibold">
									{`${index + 1}. ${subgoal.value}`}
								</div>
							);
						})}
					</div>

					<h2 className="text-xl font-medium mt-10 text-center">나만의 루틴</h2>
					<div className="flex flex-col items-start justify-start w-full">
						{getRoutine.map((subgoal, index) => {
							return (
								<div key={index} className="py-1 font-semibold">{`${
									index + 1
								}. ${subgoal.value}`}</div>
							);
						})}
					</div>
					<div className="mt-10">
						<h2 className="text-xl font-medium mb-2 text-center">기간</h2>
						<div className="flex gap-2 justify-center">
							<p>{`${getNowDate()} ~ ${formatDate(getEndDate)} `}</p>
							<p className="font-semibold">{`(${getDayFromDiff(
								getNowDate(),
								formatDate(getEndDate)
							)}일)`}</p>
						</div>
					</div>
				</div>
			</BlackBoard>

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

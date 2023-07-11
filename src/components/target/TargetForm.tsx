import { useNavigate } from "react-router-dom";
import { calculatePercentage } from "../../utils/calculatePercentage";
import ProgressBar from "./ProgressBar";
import { TargetType } from "../../types/TargetTypes";
import { OliBodyImage } from "../../utils/contants";

type PropsTargetType = Pick<
	TargetType,
	| "id"
	| "userId"
	| "goal"
	| "subGoalTotal"
	| "successCount"
	| "voteTotal"
	| "successVote"
>;

const TargetForm = ({
	id,
	userId,
	goal,
	subGoalTotal,
	successCount,
	voteTotal,
	successVote,
}: PropsTargetType) => {
	const navigate = useNavigate();

	const successPercentage = calculatePercentage(successCount, subGoalTotal);
	const votePercentage = calculatePercentage(successVote, voteTotal);

	console.log(
		id,
		userId,
		goal,
		subGoalTotal,
		successCount,
		voteTotal,
		successVote
	);
	return (
		<>
			<div
				className="mt-10 mr-10 p-6 min-w-full min-h-[200px] border-2 border-mainHover rounded-md cursor-pointer"
				onClick={() => {
					navigate(`${id}`);
				}}
			>
				<h2 className="font-bold text-2xl truncate">{goal}</h2>
				<img
					src={OliBodyImage}
					alt="자그마한 로고 사진"
					className="w-48 mx-auto"
				/>
				<div className="flex">
					<div className="flex flex-col w-1/2 p-2">
						<label className="font-medium">성취률</label>
						<ProgressBar completed={successPercentage} />
					</div>
					<div className="flex flex-col w-1/2 p-2">
						<label className="font-medium">성공 예측률</label>
						<ProgressBar completed={votePercentage} />
					</div>
				</div>
			</div>
		</>
	);
};
export default TargetForm;

import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/거북.jpeg";

import { calculatePercentage } from "../../utils/calculatePercentage";
import ProgressBar from "./ProgressBar";
import { TargetType } from "../../types/TargetTypes";

type PropsTargetType = Pick<
	TargetType,
	| "user_id"
	| "goal"
	| "subgoal_total"
	| "success_count"
	| "vote_total"
	| "success_vote"
>;

const TargetForm = ({
	user_id,
	goal,
	subgoal_total,
	success_count,
	vote_total,
	success_vote,
}: PropsTargetType) => {
	const navigate = useNavigate();

	console.log(user_id, subgoal_total, success_count, vote_total, success_vote);

	const successPercentage = calculatePercentage(success_count, subgoal_total);
	const votePercentage = calculatePercentage(success_vote, vote_total);

	return (
		<div
			className="mt-10 mr-10 p-6 min-w-full min-h-[200px] border-2 border-mainHover rounded-md"
			onClick={() => {
				navigate(`${user_id}`);
			}}
		>
			<h2 className="font-medium">{goal}</h2>
			<img src={logo} alt="자그마한 로고 사진" className="w-48 mx-auto" />
			<div className="flex">
				<div className="flex flex-col w-1/2 p-5">
					<label>성취률</label>
					<ProgressBar completed={successPercentage} />
				</div>
				<div className="flex flex-col w-1/2 p-5">
					<label>성공 예측률</label>
					<ProgressBar completed={votePercentage} />
				</div>
			</div>
		</div>
	);
};
export default TargetForm;

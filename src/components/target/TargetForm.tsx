import logo from "../../assets/logo/거북.jpeg";
import { TargetType } from "../../types/TargetType";
import ProgressBar from "./ProgressBar";

type PropsTargetType = Pick<
	TargetType,
	"goal" | "subgoal_total" | "success_count" | "vote_total" | "success_vote"
>;

const TargetForm = ({
	goal,
	subgoal_total,
	success_count,
	vote_total,
	success_vote,
}: PropsTargetType) => {
	// 일의자리수가 0이도록 유틸 함수를 추후에 만들어야할 것 같다.

	console.log(subgoal_total, success_count, vote_total, success_vote);
	const successPercentage = Math.round((success_count / subgoal_total) * 100);
	const votePercentage = Math.round((success_vote / vote_total) * 100);

	return (
		<div className="mt-10 mr-10 p-6 min-w-full min-h-[200px] border-2 border-mainHover rounded-md">
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

import logo from "../../assets/logo/거북.jpeg";
import ProgressBar from "./ProgressBar";

const TargetForm = () => {
	const goal = "나는 이번 달에 5kg할꺼야~";

	// 일의자리수가 0이도록 유틸 함수를 추후에 만들어야할 것 같다.
	const successPercentage = 40;
	const votePercentage = 30;
	return (
		<div className="mt-10 mr-10 p-6 min-w-full min-h-[200px] border-2 border-mainHover rounded-md">
			<h2 className="font-medium">{goal}</h2>
			<img src={logo} alt="자그마한 로고 사진" className="w-48 mx-auto" />
			<div className="flex">
				<div className="flex flex-col w-1/2 p-5">
					<label>진행률</label>
					<ProgressBar completed={successPercentage} />
				</div>
				<div className="flex flex-col w-1/2 p-5">
					<label>투표율</label>
					<ProgressBar completed={votePercentage} />
				</div>
			</div>
		</div>
	);
};
export default TargetForm;
